import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { apiClient, createQuery } from 'libs';

@Injectable()
export class VacanciesService {
    async getByQuery(query: Record<string, string>) {
        const response = await apiClient.get(
            `/vacancies?${createQuery(query)}`,
        );
        return response.data;
    }

    async getByVacancyId(vacancyId: string) {
        const response = await apiClient.get(`/vacancies/${vacancyId}`);
        return response.data;
    }

    async getVacancyPageById(
        vacancyId: string,
    ): Promise<Record<string, string> | null> {
        const response = await axios.get<string>(
            `https://hh.ru/vacancy/${vacancyId}`,
            {
                headers: {
                    Accept: 'text/html',
                },
            },
        );

        const $ = cheerio.load(response.data);
        const linkElement = $('a[data-qa="vacancy-response-link-top"]');

        if (linkElement.length) {
            const href = linkElement.attr('href');
            if (href) {
                const url = new URL(href, 'https://hh.ru').toString();
                return {
                    vacancyId,
                    url,
                };
            }
        }

        return null;
    }

    async searchAndRespond(query: Record<string, string>) {
        const vacancies = await this.getByQuery(query);
        const vacancy = vacancies.items[0];
        const vacancyUrl = await this.getVacancyPageById(vacancy.id);
        return vacancyUrl;
    }

    async getVacanciesByIds(vacancyIds: string[]) {
        let vacancies: Record<string, any>[] = [];

        for (const id of vacancyIds) {
            const vacancy = await this.getByVacancyId(id);
            if (!vacancy) throw new BadRequestException();

            vacancies.push(vacancy);
        }

        return vacancies;
    }
}
