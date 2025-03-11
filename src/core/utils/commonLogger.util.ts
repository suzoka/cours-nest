import { LoggerService, Logger, type LogLevel } from '@nestjs/common';

export class CommonLogger implements LoggerService {

    private readonly wrappedLogger: Logger ;

    constructor(prefix?: string) {
        this.wrappedLogger = new Logger();
    }

    private output(mode: LogLevel, message: any, ...optionalParams: any){
        this.wrappedLogger[mode](message, ...optionalParams);
    }

    log(message: any, ...optionalParams: any) {
        this.output(`log`, message, ...optionalParams);
    }

    error(message: any, ...optionalParams: any) {
        this.output(`error`, message, ...optionalParams);
    }

    warn(message: any, ...optionalParams: any) { 
        this.output(`warn`, message, ...optionalParams);
    }

    debug(message: any, ...optionalParams: any) {
        this.output(`debug`, message, ...optionalParams);
    }

    verbose(message: any, ...optionalParams: any) {
        this.output(`verbose`, message, ...optionalParams);
    }

    getLogger(): Logger{
        return this.wrappedLogger;
    }
}