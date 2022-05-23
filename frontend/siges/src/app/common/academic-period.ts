export class AcademicPeriod {

    private _namePeriod!: string;
    public get namePeriod(): string {
        return this._namePeriod;
    }
    public set namePeriod(value: string) {
        this._namePeriod = value;
    }
    weight!: number;
    dateStart!: Date;
    dateEnd!: Date;
    isYear!: number; 
    previousAcademicYear!: number;
    year!: number;
    dateCreated!: Date;
    dateUpdated!: Date;
    createBy!: string;
    updatedBy!: string;

}
