import { ErrorHandler, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { LoggerServiceService } from './logger-service.service';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandlerServiceService extends ErrorHandler {

  constructor(private logger: LoggerServiceService) {
    super();
  }

  // handleError(error: any) {
  //   // Here you can provide whatever logging you want
  //   this.logger.logError(error);
  //   // console.log(error)
  //   super.handleError(error);
  // }

  handleError(error: any) {
    let errorMessage = '';
    let date = new Date();
    // let fs = require("fs")

    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;
    }
    errorMessage = date + errorMessage;
    console.log("--------------------");
    console.log(errorMessage);
    console.log("--------------------");


    // fs.write(`../../assets/logs/{{date}}`, errorMessage)
    return throwError(errorMessage);
  }
}
