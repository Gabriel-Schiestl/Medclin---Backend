import { ClinicModel } from "src/modules/clinic/infra/models/clinic.model";
import { DocumentModel } from "src/modules/clinic/infra/models/document.model";
import { MedCardModel } from "src/modules/clinic/infra/models/medcard.model";
import { SpecialityModel } from "src/modules/clinic/infra/models/speciality.model";
import { UserModel } from "src/modules/user/infra/models/user.model";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '12345678',
    database: 'postgres',
    entities: [UserModel, ClinicModel, SpecialityModel, DocumentModel, MedCardModel],
    synchronize: true,
    logging: true,
    migrations: ['src/migrations/*.ts'],
});

export default AppDataSource;