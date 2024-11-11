import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NameScreeningRequest } from './entities/Screening/nameScreeningRequest.entity';
import { NameScreeningResponse } from './entities/Screening/nameScreeningResponse.entity';
import { AlertDetails, BeneficiaryCustomer, Customer, CustomerDetails, MatchDetails, MetaData, SasHeader, Notification, PepReview, Detail, Data, ReturnStatus } from './entities/Screening/common.entity';
import { CommonScreeningRequest } from './entities/Screening/commonScreeningRequest.entity';
import { CommonScreeningResponse } from './entities/Screening/commonScreeningResponse.entity';
import { WorkflowService } from './workflow/workflow.service';
import { TBMLStatusRequest } from './entities/Screening/tbmlStatusRequest.entity';
import { TBMLStatusResponse } from './entities/Screening/tbmlStatusResponse.entity';



const CALLBACK : string = "returnURL";

@Injectable()
export class ScreeningService {

  constructor(
    // @InjectRepository(NameScreeningRequest)
    // private nameScreeningRequestRepository: Repository<NameScreeningRequest>,
    private workflowService: WorkflowService
    
  ) {}

  // findAll(): Promise<NameScreeningRequest[]> {
  //   return this.nameScreeningRequestRepository.find();
  // }

  // async remove(id: number): Promise<void> {
  //   await this.nameScreeningRequestRepository.delete(id);
  // }

  createNameScreeningResponse(nameScreeningRequest: NameScreeningRequest): NameScreeningResponse {
    
    var hit: boolean = false;

    const data = new Data();
    const returnStatus = new ReturnStatus();
    returnStatus.returnCode = "M000";
    returnStatus.returnCodeDesc = "OK";

    const response = new NameScreeningResponse();
    try {

        response.data = data;
        response.returnStatus = returnStatus;


          response.data.sasHeader = new SasHeader();
          response.data.sasHeader.zoneId = nameScreeningRequest.sasHeader.zoneId;
          response.data.sasHeader.regionCode = nameScreeningRequest.sasHeader.regionCode;
          response.data.sasHeader.branchId = nameScreeningRequest.sasHeader.branchId;
          response.data.sasHeader.departmentId = nameScreeningRequest.sasHeader.departmentId;
          response.data.sasHeader.userGroup = nameScreeningRequest.sasHeader.userGroup;
          response.data.sasHeader.channelId = nameScreeningRequest.sasHeader.channelId;
          response.data.sasHeader.applicationId = nameScreeningRequest.sasHeader.applicationId;
          response.data.sasHeader.applicationModule = nameScreeningRequest.sasHeader.applicationModule;
          response.data.sasHeader.uniqueTxnRefNo = nameScreeningRequest.sasHeader.uniqueTxnRefNo;
          response.data.sasHeader.messageType = nameScreeningRequest.sasHeader.messageType;
          response.data.sasHeader.sysId = nameScreeningRequest.sasHeader.sysId;
          response.data.sasHeader.timestamp = nameScreeningRequest.sasHeader.timestamp;
          // response.sasHeader.userId = nameScreeningRequest.sasHeader.userId;
          response.data.sasHeader.metaData = nameScreeningRequest.sasHeader.metaData.map((item: any) => ({
            name: item.name,
            value: item.value,
          }));
      
          const notification = new Notification();
          notification.sasHeader = nameScreeningRequest.sasHeader;

          // response.matchDetails

          const matchDetails = new MatchDetails();
          response.data.matchDetails  = matchDetails;
          response.data.matchDetails = matchDetails;
          matchDetails.details =  {
            alertId : this.alertId(),
            alertDetails:  []
          }; 
          

          matchDetails.status = this.checkStatus();
          if (matchDetails.status === 'ERROR' ){

              matchDetails.errorCode = this.errorCode();
              delete response.data.matchDetails["details"];

          } else {
          
              if (nameScreeningRequest.orderingSenderCustomer !== undefined){
                const customer = nameScreeningRequest.orderingSenderCustomer;
                if (this.hitNoHit() === 'HIT') { 
                  hit = true;
                  matchDetails.matchFound = 'HIT'
                  matchDetails.maxScore = this.score();
                  const alertDetail = new AlertDetails();
                  alertDetail.scannedName = customer.fullName;
                  alertDetail.matchedName = customer.fullName;
                  console.log(`Customer RIM ${ customer.customer_rim}`);
                        
                  alertDetail.customer_rim = customer.customer_rim;
                  
                  alertDetail.uidSerialNo = this.serialNumber();
                  alertDetail.matchScore = this.score();
                  if (alertDetail.matchScore > matchDetails.maxScore){
                    matchDetails.maxScore = alertDetail.matchScore;
                  }
                  alertDetail.pepFlag = this.pepFlag();
                  alertDetail.watchlistName = this.watchlist();
                  alertDetail.keyword = "PEP~EU~UN~";

                  matchDetails.details.alertDetails.push(alertDetail);
                  matchDetails.description = "";
                  // for notification
                  if (alertDetail.pepFlag === 'Y'){
                      // notification.pepReview = 
                      var pepReview : PepReview =
                      {
                        uid: customer.customer_rim,
                        idNumber: customer.idNumber,
                        idType: customer.idType,
                        reviewFlag: alertDetail.pepFlag,
                        pepFlag: alertDetail.pepFlag
                    }
                    // notification.pepReview.push(pepReview);
                  }
                
                    const metadata = this.findMetaDataByName(nameScreeningRequest.sasHeader.metaData, CALLBACK);
                    if (metadata) {
                      console.log(`Found object: ${metadata.name} - ${metadata.value}`);
                      notification.alertdecision = this.alertDecision();
                      this.workflowService.callESBAfterinterval(nameScreeningRequest.sasHeader.uniqueTxnRefNo,
                          metadata.value, notification);
                    } else {
                      console.log("Object not found");
                    }
                }
              }

              if ( nameScreeningRequest.beneficiaryReceiverCustomer !== undefined) {

                      nameScreeningRequest.beneficiaryReceiverCustomer.map((customer: Customer) => {
                      
                        // matchDetail.matchFound = this.hitNoHit();
                        // if (matchDetail.matchFound === 'HIT') {
                        console.log(`Customer Name ${ customer.fullName}`);
                        console.log(`Customer RIM ${ customer.customer_rim}`);
                        matchDetails.uid = customer.customer_rim;
                      
                        if (this.hitNoHit() === 'HIT') { 
                          
                          matchDetails.matchFound = 'HIT'
                          hit = true;
                          matchDetails.maxScore = this.score();
                        
                          const alertDetail = new AlertDetails();
                          alertDetail.scannedName = customer.fullName;
                          alertDetail.matchedName = customer.fullName;
                          alertDetail.customer_rim = customer.customer_rim;
                          alertDetail.uidSerialNo = this.serialNumber();
                          alertDetail.matchScore = this.score();
                          if (alertDetail.matchScore > matchDetails.maxScore){
                            matchDetails.maxScore = alertDetail.matchScore;
                          }
                          alertDetail.pepFlag = this.pepFlag();
                          alertDetail.watchlistName = this.watchlist();
                          alertDetail.keyword = "PEP~EU~UN~";
              
                          matchDetails.details.alertDetails.push(alertDetail);
                          matchDetails.description = "";
                          // for notification
                          if (alertDetail.pepFlag === 'Y'){
                              // notification.pepReview = 
                              var pepReview : PepReview =
                              {
                                uid: customer.customer_rim,
                                idNumber: customer.idNumber,
                                idType: customer.idType,
                                reviewFlag: alertDetail.pepFlag,
                                pepFlag: alertDetail.pepFlag
                            }
                            // notification.pepReview.push(pepReview);
                          }
                        }
                        // return matchDetails;
                      });
              }

              


              if (matchDetails.details.alertDetails.length > 0){
                const metadata = this.findMetaDataByName(nameScreeningRequest.sasHeader.metaData, CALLBACK);
                if (metadata) {
                  console.log(`Found object: ${metadata.name} - ${metadata.value}`);
                  notification.alertdecision = this.alertDecision();
                  this.workflowService.callESBAfterinterval(nameScreeningRequest.sasHeader.uniqueTxnRefNo,
                      metadata.value, notification);
                } else {
                  console.log("Object not found");
                }
              }else{
                response.data.matchDetails.matchFound = 'NOHIT';
                // delete response["matchDetails"];
                delete response.data.matchDetails["details"];
              }

        }
      } catch (e) {
        console.log(e.message);  
      }







    return response;
  }



  createCommonScreeningResponse(commonScreeningRequest: CommonScreeningRequest): CommonScreeningResponse {

    var hit: boolean = false;
    const response = new CommonScreeningResponse();
    

    try {

        response.sasHeader = new SasHeader();
        response.sasHeader.zoneId = commonScreeningRequest.sasHeader.zoneId;
        response.sasHeader.regionCode = commonScreeningRequest.sasHeader.regionCode;
        response.sasHeader.branchId = commonScreeningRequest.sasHeader.branchId;
        response.sasHeader.departmentId = commonScreeningRequest.sasHeader.departmentId;
        response.sasHeader.userGroup = commonScreeningRequest.sasHeader.userGroup;
        response.sasHeader.channelId = commonScreeningRequest.sasHeader.channelId;
        response.sasHeader.applicationId = commonScreeningRequest.sasHeader.applicationId;
        response.sasHeader.applicationModule = commonScreeningRequest.sasHeader.applicationModule;
        response.sasHeader.uniqueTxnRefNo = commonScreeningRequest.sasHeader.uniqueTxnRefNo;
        response.sasHeader.messageType = commonScreeningRequest.sasHeader.messageType;
        response.sasHeader.sysId = commonScreeningRequest.sasHeader.sysId;
        response.sasHeader.timestamp = commonScreeningRequest.sasHeader.timestamp;
        // response.sasHeader.userId = commonScreeningRequest.sasHeader.userId;
        
        response.sasHeader.metaData = commonScreeningRequest.sasHeader.metaData.map((item: any) => ({
          name: item.name,
          value: item.value,
        }));
        // response.matchDetails = new MatchDetails();

        const notification = new Notification();
        notification.sasHeader = commonScreeningRequest.sasHeader;
      // if(commonScreeningRequest.beneficiaryCustomer !== undefined){

          const customer : BeneficiaryCustomer = commonScreeningRequest.beneficiaryCustomer;

          const matchDetails = new MatchDetails();
          matchDetails.details =  {
            alertId : this.alertId(),
            alertDetails:  []
          };
          response.matchDetails = matchDetails;

          matchDetails.status = this.checkStatus();
          if (matchDetails.status === 'ERROR' ){

            matchDetails.errorCode = this.errorCode();
            delete response.matchDetails["details"];

          } else {
          
              // matchDetail.uid = customer.uid;
              matchDetails.matchFound = this.hitNoHit();

              if (matchDetails.matchFound === 'HIT') {
                  hit = true;
                  var details= new Detail();
                  matchDetails.maxScore = this.score();
                  
                
                  const alertDetail = new AlertDetails();
                  alertDetail.scannedName = customer.name
                  alertDetail.matchedName = customer.name;
                  alertDetail.uidSerialNo = this.serialNumber();
                  alertDetail.matchScore = this.score();
                  if (alertDetail.matchScore > matchDetails.maxScore){
                    matchDetails.maxScore = alertDetail.matchScore;
                  }
                  alertDetail.pepFlag = this.pepFlag();
                  alertDetail.watchlistName = this.watchlist();
                  alertDetail.keyword = "PEP~EU~UN~";
      
                  matchDetails.details.alertDetails.push(alertDetail);
                  matchDetails.description = "";

                  
              } 

              if (hit){
                const metadata = this.findMetaDataByName(commonScreeningRequest.sasHeader.metaData, CALLBACK);
                if (metadata) {
                  console.log(`Found object: ${metadata.name} - ${metadata.value}`);
                  notification.alertdecision = this.alertDecision();
                  this.workflowService.callESBAfterinterval(commonScreeningRequest.sasHeader.uniqueTxnRefNo,
                      metadata.value, notification);
                } else {
                  console.log("Not callback URL found");
                }
              } else {
                response.matchDetails.matchFound = 'NOHIT';
                // delete response["matchDetails"];
                delete response.matchDetails["details"];


              }

        }// end of if/else error/success

    } catch (e) {
      console.log(e.message);  
    }

    return response;
  }

  processTBMLStatus(tbmlStatusRequest: TBMLStatusRequest): TBMLStatusResponse {
    
    console.log(`Calling TBMLStatus `);

    var hit: boolean = false;
    const response = new TBMLStatusResponse();
    try {
          response.sasHeader = new SasHeader();
          response.sasHeader.zoneId = tbmlStatusRequest.sasHeader.zoneId;
          response.sasHeader.regionCode = tbmlStatusRequest.sasHeader.regionCode;
          response.sasHeader.branchId = tbmlStatusRequest.sasHeader.branchId;
          response.sasHeader.departmentId = tbmlStatusRequest.sasHeader.departmentId;
          response.sasHeader.userGroup = tbmlStatusRequest.sasHeader.userGroup;
          response.sasHeader.channelId = tbmlStatusRequest.sasHeader.channelId;
          response.sasHeader.applicationId = tbmlStatusRequest.sasHeader.applicationId;
          response.sasHeader.applicationModule = tbmlStatusRequest.sasHeader.applicationModule;
          response.sasHeader.uniqueTxnRefNo = tbmlStatusRequest.sasHeader.uniqueTxnRefNo;
          response.sasHeader.messageType = tbmlStatusRequest.sasHeader.messageType;
          response.sasHeader.sysId = tbmlStatusRequest.sasHeader.sysId;
          response.sasHeader.timestamp = tbmlStatusRequest.sasHeader.timestamp;
          // response.sasHeader.userId = nameScreeningRequest.sasHeader.userId;
          response.sasHeader.metaData = tbmlStatusRequest.sasHeader.metaData.map((item: any) => ({
            name: item.name,
            value: item.value,
          }));
      
          response.status = this.checkStatus();
          if (response.status === 'ERROR' ){
              response.errorCode = this.errorCode();
          }
      } catch (e) {
        console.log(e.message);  
      }
    return response;
  }



// Function to find an object by name
findMetaDataByName(array: MetaData[], name: string): MetaData | undefined {
  return array.find(obj => obj.name === name);
}

  score() : number{  
    var score = Math.floor((Math.random() * 60) + 1);
       return score;
  }

  alertId() : string{  
    var id = Math.floor((Math.random() * 50000) + 1);
       return "ALRT"+id;
  }

  hitNoHit(): string{
    var score = Math.floor((Math.random() * 10));
    if (score > 6){
      return "HIT";
    }
    return "NOHIT";
  }

  serialNumber() : string{  
    var serial = Math.floor((Math.random() * 60000) + 1);
       return "SR"+serial;
  }

  pepFlag(): string{
    var score = Math.floor((Math.random() * 10));
    if (score > 5){
      return "Y";
    }
    return "N";
  }

  watchlist():string {
      var list = ["QCB", "UN", "ICC"];
      var index = Math.floor((Math.random() * list.length));
      return list[index];
  }

  checkStatus(){

    var score = Math.floor((Math.random() * 10));
    if (score > 1){
      return "SUCCESS";
    }
    return "ERROR";
  }

  errorCode():string {
    var list = ["ERRNS01", "ERRNS02", "ERRNS03", "ERRCS01","ERRCS02", "ERRCS03", "SCRUTLERR", "NSPRSERR",
                "BCTHUPDTERR", "PMTRSERR", "FSPRSERR", "EQPRSERR", "CMNSCRERR"
     ];
    var index = Math.floor((Math.random() * list.length));
    return list[index];
  }


  // alertDecision(): string {
  //   var decision = ["Release", "Reject", "Reject+Block"];
  //   var index = Math.floor((Math.random() * decision.length));
  //   return decision[index];
  // }


  alertDecision(): string {
    var decision = ["0", "1"];
    var index = Math.floor((Math.random() * decision.length));
    return decision[index];
  }




}


