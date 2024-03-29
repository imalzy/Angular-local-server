export interface IEmployee {
    id?:          string;
    username?:    string;
    lastName?:    string;
    firstName?:   string;
    email?:       string;
    birthDate?:   Date;
    status?:      boolean;
    group?:       string;
    description?: string;
    basicSalary?: string;
}

export interface IEmployeeResponse<T> {
    data?: T;
}
