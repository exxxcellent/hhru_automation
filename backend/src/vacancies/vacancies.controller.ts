import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { VacanciesService } from './vacancies.service';

@Controller('vacancies')
export class VacanciesController {
    constructor(private readonly vacanciesService: VacanciesService) {}

    // @UseGuards(AuthGuard)
    @Get('')
    async getByText(@Query() query: Record<string, string>) {
        return this.vacanciesService.getByQuery(query);
    }

    @Get(':id/page')
    async getVacancyPageById(@Param('id') id: string) {
        return this.vacanciesService.getVacancyPageById(id);
    }

    @Get('search')
    async searchAndRespond(@Query() query: Record<string, string>) {
        return this.vacanciesService.searchAndRespond(query);
    }

    @Post('vacancies_by_ids')
    async getVacanciesByIds(@Body('vacancyIds') vacancyIds: string[]) {
        return await this.vacanciesService.getVacanciesByIds(vacancyIds);
    }
}
