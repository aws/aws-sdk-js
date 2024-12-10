import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class InspectorScan extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: InspectorScan.Types.ClientConfiguration)
  config: Config & InspectorScan.Types.ClientConfiguration;
  /**
   * Scans a provided CycloneDX 1.5 SBOM and reports on any vulnerabilities discovered in that SBOM. You can generate compatible SBOMs for your resources using the Amazon Inspector SBOM generator.
   */
  scanSbom(params: InspectorScan.Types.ScanSbomRequest, callback?: (err: AWSError, data: InspectorScan.Types.ScanSbomResponse) => void): Request<InspectorScan.Types.ScanSbomResponse, AWSError>;
  /**
   * Scans a provided CycloneDX 1.5 SBOM and reports on any vulnerabilities discovered in that SBOM. You can generate compatible SBOMs for your resources using the Amazon Inspector SBOM generator.
   */
  scanSbom(callback?: (err: AWSError, data: InspectorScan.Types.ScanSbomResponse) => void): Request<InspectorScan.Types.ScanSbomResponse, AWSError>;
}
declare namespace InspectorScan {
  export type OutputFormat = "CYCLONE_DX_1_5"|"INSPECTOR"|string;
  export interface Sbom {
  }
  export interface ScanSbomRequest {
    /**
     * The JSON file for the SBOM you want to scan. The SBOM must be in CycloneDX 1.5 format.
     */
    sbom: Sbom;
    /**
     * The output format for the vulnerability report.
     */
    outputFormat?: OutputFormat;
  }
  export interface ScanSbomResponse {
    /**
     * The vulnerability report for the scanned SBOM.
     */
    sbom?: Sbom;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2023-08-08"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the InspectorScan client.
   */
  export import Types = InspectorScan;
}
export = InspectorScan;
