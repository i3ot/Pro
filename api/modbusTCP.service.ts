/**
 * I3oT-Pro-API
 * I3oT-Pro API for I3oT developer
 *
 * OpenAPI spec version: 1.0.0
 * Contact: i3ot@kuangyibang.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { InlineResponse2001 } from '../model/inlineResponse2001';
import { InlineResponse2002 } from '../model/inlineResponse2002';
import { InlineResponse2007 } from '../model/inlineResponse2007';
import { InlineResponse400 } from '../model/inlineResponse400';
import { InlineResponse4001 } from '../model/inlineResponse4001';
import { InlineResponse4002 } from '../model/inlineResponse4002';
import { ModbusTCPRegistryInfo } from '../model/modbusTCPRegistryInfo';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ModbusTCPService {

    protected basePath = 'https://virtserver.swaggerhub.com/i3ot/I3oT-Pro/1.0.0';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 删除设备
     * 根据设备编号删除设备
     * @param deviceID 需要删除的设备编号
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteModbusTCP(deviceID: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2002>;
    public deleteModbusTCP(deviceID: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2002>>;
    public deleteModbusTCP(deviceID: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2002>>;
    public deleteModbusTCP(deviceID: Array<string>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (deviceID === null || deviceID === undefined) {
            throw new Error('Required parameter deviceID was null or undefined when calling deleteModbusTCP.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (deviceID) {
            queryParameters = queryParameters.set('deviceID', deviceID.join(COLLECTION_FORMATS['csv']));
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<InlineResponse2002>(`${this.basePath}/devices/ModbusTCP`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 返回所有设备
     * 返回所有ModbusTCP设备信息或指定编号的设备信息
     * @param deviceID 只返回指定设备编号的信息
     * @param skip number of records to skip for pagination
     * @param limit maximum number of records to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getModbusTCP(deviceID?: Array<string>, skip?: number, limit?: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2007>;
    public getModbusTCP(deviceID?: Array<string>, skip?: number, limit?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2007>>;
    public getModbusTCP(deviceID?: Array<string>, skip?: number, limit?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2007>>;
    public getModbusTCP(deviceID?: Array<string>, skip?: number, limit?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (deviceID) {
            queryParameters = queryParameters.set('deviceID', deviceID.join(COLLECTION_FORMATS['csv']));
        }
        if (skip !== undefined && skip !== null) {
            queryParameters = queryParameters.set('skip', <any>skip);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse2007>(`${this.basePath}/devices/ModbusTCP`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 添加设备
     * 添加ModbusTCP设备
     * @param body 
     * @param deviceID 需要修改的设备编号
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public registerModbusTCP(body?: Array<ModbusTCPRegistryInfo>, deviceID?: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2001>;
    public registerModbusTCP(body?: Array<ModbusTCPRegistryInfo>, deviceID?: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2001>>;
    public registerModbusTCP(body?: Array<ModbusTCPRegistryInfo>, deviceID?: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2001>>;
    public registerModbusTCP(body?: Array<ModbusTCPRegistryInfo>, deviceID?: Array<string>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (deviceID) {
            queryParameters = queryParameters.set('deviceID', deviceID.join(COLLECTION_FORMATS['csv']));
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<InlineResponse2001>(`${this.basePath}/devices/ModbusTCP`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
