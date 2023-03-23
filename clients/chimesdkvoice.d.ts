import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class ChimeSDKVoice extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ChimeSDKVoice.Types.ClientConfiguration)
  config: Config & ChimeSDKVoice.Types.ClientConfiguration;
  /**
   * 
   */
  associatePhoneNumbersWithVoiceConnector(params: ChimeSDKVoice.Types.AssociatePhoneNumbersWithVoiceConnectorRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.AssociatePhoneNumbersWithVoiceConnectorResponse) => void): Request<ChimeSDKVoice.Types.AssociatePhoneNumbersWithVoiceConnectorResponse, AWSError>;
  /**
   * 
   */
  associatePhoneNumbersWithVoiceConnector(callback?: (err: AWSError, data: ChimeSDKVoice.Types.AssociatePhoneNumbersWithVoiceConnectorResponse) => void): Request<ChimeSDKVoice.Types.AssociatePhoneNumbersWithVoiceConnectorResponse, AWSError>;
  /**
   * 
   */
  associatePhoneNumbersWithVoiceConnectorGroup(params: ChimeSDKVoice.Types.AssociatePhoneNumbersWithVoiceConnectorGroupRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.AssociatePhoneNumbersWithVoiceConnectorGroupResponse) => void): Request<ChimeSDKVoice.Types.AssociatePhoneNumbersWithVoiceConnectorGroupResponse, AWSError>;
  /**
   * 
   */
  associatePhoneNumbersWithVoiceConnectorGroup(callback?: (err: AWSError, data: ChimeSDKVoice.Types.AssociatePhoneNumbersWithVoiceConnectorGroupResponse) => void): Request<ChimeSDKVoice.Types.AssociatePhoneNumbersWithVoiceConnectorGroupResponse, AWSError>;
  /**
   * 
   */
  batchDeletePhoneNumber(params: ChimeSDKVoice.Types.BatchDeletePhoneNumberRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.BatchDeletePhoneNumberResponse) => void): Request<ChimeSDKVoice.Types.BatchDeletePhoneNumberResponse, AWSError>;
  /**
   * 
   */
  batchDeletePhoneNumber(callback?: (err: AWSError, data: ChimeSDKVoice.Types.BatchDeletePhoneNumberResponse) => void): Request<ChimeSDKVoice.Types.BatchDeletePhoneNumberResponse, AWSError>;
  /**
   * 
   */
  batchUpdatePhoneNumber(params: ChimeSDKVoice.Types.BatchUpdatePhoneNumberRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.BatchUpdatePhoneNumberResponse) => void): Request<ChimeSDKVoice.Types.BatchUpdatePhoneNumberResponse, AWSError>;
  /**
   * 
   */
  batchUpdatePhoneNumber(callback?: (err: AWSError, data: ChimeSDKVoice.Types.BatchUpdatePhoneNumberResponse) => void): Request<ChimeSDKVoice.Types.BatchUpdatePhoneNumberResponse, AWSError>;
  /**
   * 
   */
  createPhoneNumberOrder(params: ChimeSDKVoice.Types.CreatePhoneNumberOrderRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.CreatePhoneNumberOrderResponse) => void): Request<ChimeSDKVoice.Types.CreatePhoneNumberOrderResponse, AWSError>;
  /**
   * 
   */
  createPhoneNumberOrder(callback?: (err: AWSError, data: ChimeSDKVoice.Types.CreatePhoneNumberOrderResponse) => void): Request<ChimeSDKVoice.Types.CreatePhoneNumberOrderResponse, AWSError>;
  /**
   * 
   */
  createProxySession(params: ChimeSDKVoice.Types.CreateProxySessionRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.CreateProxySessionResponse) => void): Request<ChimeSDKVoice.Types.CreateProxySessionResponse, AWSError>;
  /**
   * 
   */
  createProxySession(callback?: (err: AWSError, data: ChimeSDKVoice.Types.CreateProxySessionResponse) => void): Request<ChimeSDKVoice.Types.CreateProxySessionResponse, AWSError>;
  /**
   * 
   */
  createSipMediaApplication(params: ChimeSDKVoice.Types.CreateSipMediaApplicationRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.CreateSipMediaApplicationResponse) => void): Request<ChimeSDKVoice.Types.CreateSipMediaApplicationResponse, AWSError>;
  /**
   * 
   */
  createSipMediaApplication(callback?: (err: AWSError, data: ChimeSDKVoice.Types.CreateSipMediaApplicationResponse) => void): Request<ChimeSDKVoice.Types.CreateSipMediaApplicationResponse, AWSError>;
  /**
   * 
   */
  createSipMediaApplicationCall(params: ChimeSDKVoice.Types.CreateSipMediaApplicationCallRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.CreateSipMediaApplicationCallResponse) => void): Request<ChimeSDKVoice.Types.CreateSipMediaApplicationCallResponse, AWSError>;
  /**
   * 
   */
  createSipMediaApplicationCall(callback?: (err: AWSError, data: ChimeSDKVoice.Types.CreateSipMediaApplicationCallResponse) => void): Request<ChimeSDKVoice.Types.CreateSipMediaApplicationCallResponse, AWSError>;
  /**
   * 
   */
  createSipRule(params: ChimeSDKVoice.Types.CreateSipRuleRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.CreateSipRuleResponse) => void): Request<ChimeSDKVoice.Types.CreateSipRuleResponse, AWSError>;
  /**
   * 
   */
  createSipRule(callback?: (err: AWSError, data: ChimeSDKVoice.Types.CreateSipRuleResponse) => void): Request<ChimeSDKVoice.Types.CreateSipRuleResponse, AWSError>;
  /**
   * 
   */
  createVoiceConnector(params: ChimeSDKVoice.Types.CreateVoiceConnectorRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.CreateVoiceConnectorResponse) => void): Request<ChimeSDKVoice.Types.CreateVoiceConnectorResponse, AWSError>;
  /**
   * 
   */
  createVoiceConnector(callback?: (err: AWSError, data: ChimeSDKVoice.Types.CreateVoiceConnectorResponse) => void): Request<ChimeSDKVoice.Types.CreateVoiceConnectorResponse, AWSError>;
  /**
   * 
   */
  createVoiceConnectorGroup(params: ChimeSDKVoice.Types.CreateVoiceConnectorGroupRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.CreateVoiceConnectorGroupResponse) => void): Request<ChimeSDKVoice.Types.CreateVoiceConnectorGroupResponse, AWSError>;
  /**
   * 
   */
  createVoiceConnectorGroup(callback?: (err: AWSError, data: ChimeSDKVoice.Types.CreateVoiceConnectorGroupResponse) => void): Request<ChimeSDKVoice.Types.CreateVoiceConnectorGroupResponse, AWSError>;
  /**
   * 
   */
  createVoiceProfile(params: ChimeSDKVoice.Types.CreateVoiceProfileRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.CreateVoiceProfileResponse) => void): Request<ChimeSDKVoice.Types.CreateVoiceProfileResponse, AWSError>;
  /**
   * 
   */
  createVoiceProfile(callback?: (err: AWSError, data: ChimeSDKVoice.Types.CreateVoiceProfileResponse) => void): Request<ChimeSDKVoice.Types.CreateVoiceProfileResponse, AWSError>;
  /**
   * 
   */
  createVoiceProfileDomain(params: ChimeSDKVoice.Types.CreateVoiceProfileDomainRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.CreateVoiceProfileDomainResponse) => void): Request<ChimeSDKVoice.Types.CreateVoiceProfileDomainResponse, AWSError>;
  /**
   * 
   */
  createVoiceProfileDomain(callback?: (err: AWSError, data: ChimeSDKVoice.Types.CreateVoiceProfileDomainResponse) => void): Request<ChimeSDKVoice.Types.CreateVoiceProfileDomainResponse, AWSError>;
  /**
   * 
   */
  deletePhoneNumber(params: ChimeSDKVoice.Types.DeletePhoneNumberRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deletePhoneNumber(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteProxySession(params: ChimeSDKVoice.Types.DeleteProxySessionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteProxySession(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteSipMediaApplication(params: ChimeSDKVoice.Types.DeleteSipMediaApplicationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteSipMediaApplication(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteSipRule(params: ChimeSDKVoice.Types.DeleteSipRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteSipRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteVoiceConnector(params: ChimeSDKVoice.Types.DeleteVoiceConnectorRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteVoiceConnector(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteVoiceConnectorEmergencyCallingConfiguration(params: ChimeSDKVoice.Types.DeleteVoiceConnectorEmergencyCallingConfigurationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteVoiceConnectorEmergencyCallingConfiguration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteVoiceConnectorGroup(params: ChimeSDKVoice.Types.DeleteVoiceConnectorGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteVoiceConnectorGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteVoiceConnectorOrigination(params: ChimeSDKVoice.Types.DeleteVoiceConnectorOriginationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteVoiceConnectorOrigination(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteVoiceConnectorProxy(params: ChimeSDKVoice.Types.DeleteVoiceConnectorProxyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteVoiceConnectorProxy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteVoiceConnectorStreamingConfiguration(params: ChimeSDKVoice.Types.DeleteVoiceConnectorStreamingConfigurationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteVoiceConnectorStreamingConfiguration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteVoiceConnectorTermination(params: ChimeSDKVoice.Types.DeleteVoiceConnectorTerminationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteVoiceConnectorTermination(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteVoiceConnectorTerminationCredentials(params: ChimeSDKVoice.Types.DeleteVoiceConnectorTerminationCredentialsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteVoiceConnectorTerminationCredentials(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteVoiceProfile(params: ChimeSDKVoice.Types.DeleteVoiceProfileRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteVoiceProfile(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteVoiceProfileDomain(params: ChimeSDKVoice.Types.DeleteVoiceProfileDomainRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  deleteVoiceProfileDomain(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  disassociatePhoneNumbersFromVoiceConnector(params: ChimeSDKVoice.Types.DisassociatePhoneNumbersFromVoiceConnectorRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.DisassociatePhoneNumbersFromVoiceConnectorResponse) => void): Request<ChimeSDKVoice.Types.DisassociatePhoneNumbersFromVoiceConnectorResponse, AWSError>;
  /**
   * 
   */
  disassociatePhoneNumbersFromVoiceConnector(callback?: (err: AWSError, data: ChimeSDKVoice.Types.DisassociatePhoneNumbersFromVoiceConnectorResponse) => void): Request<ChimeSDKVoice.Types.DisassociatePhoneNumbersFromVoiceConnectorResponse, AWSError>;
  /**
   * 
   */
  disassociatePhoneNumbersFromVoiceConnectorGroup(params: ChimeSDKVoice.Types.DisassociatePhoneNumbersFromVoiceConnectorGroupRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.DisassociatePhoneNumbersFromVoiceConnectorGroupResponse) => void): Request<ChimeSDKVoice.Types.DisassociatePhoneNumbersFromVoiceConnectorGroupResponse, AWSError>;
  /**
   * 
   */
  disassociatePhoneNumbersFromVoiceConnectorGroup(callback?: (err: AWSError, data: ChimeSDKVoice.Types.DisassociatePhoneNumbersFromVoiceConnectorGroupResponse) => void): Request<ChimeSDKVoice.Types.DisassociatePhoneNumbersFromVoiceConnectorGroupResponse, AWSError>;
  /**
   * 
   */
  getGlobalSettings(callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetGlobalSettingsResponse) => void): Request<ChimeSDKVoice.Types.GetGlobalSettingsResponse, AWSError>;
  /**
   * 
   */
  getPhoneNumber(params: ChimeSDKVoice.Types.GetPhoneNumberRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetPhoneNumberResponse) => void): Request<ChimeSDKVoice.Types.GetPhoneNumberResponse, AWSError>;
  /**
   * 
   */
  getPhoneNumber(callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetPhoneNumberResponse) => void): Request<ChimeSDKVoice.Types.GetPhoneNumberResponse, AWSError>;
  /**
   * 
   */
  getPhoneNumberOrder(params: ChimeSDKVoice.Types.GetPhoneNumberOrderRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetPhoneNumberOrderResponse) => void): Request<ChimeSDKVoice.Types.GetPhoneNumberOrderResponse, AWSError>;
  /**
   * 
   */
  getPhoneNumberOrder(callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetPhoneNumberOrderResponse) => void): Request<ChimeSDKVoice.Types.GetPhoneNumberOrderResponse, AWSError>;
  /**
   * 
   */
  getPhoneNumberSettings(callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetPhoneNumberSettingsResponse) => void): Request<ChimeSDKVoice.Types.GetPhoneNumberSettingsResponse, AWSError>;
  /**
   * 
   */
  getProxySession(params: ChimeSDKVoice.Types.GetProxySessionRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetProxySessionResponse) => void): Request<ChimeSDKVoice.Types.GetProxySessionResponse, AWSError>;
  /**
   * 
   */
  getProxySession(callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetProxySessionResponse) => void): Request<ChimeSDKVoice.Types.GetProxySessionResponse, AWSError>;
  /**
   * 
   */
  getSipMediaApplication(params: ChimeSDKVoice.Types.GetSipMediaApplicationRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetSipMediaApplicationResponse) => void): Request<ChimeSDKVoice.Types.GetSipMediaApplicationResponse, AWSError>;
  /**
   * 
   */
  getSipMediaApplication(callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetSipMediaApplicationResponse) => void): Request<ChimeSDKVoice.Types.GetSipMediaApplicationResponse, AWSError>;
  /**
   * 
   */
  getSipMediaApplicationAlexaSkillConfiguration(params: ChimeSDKVoice.Types.GetSipMediaApplicationAlexaSkillConfigurationRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetSipMediaApplicationAlexaSkillConfigurationResponse) => void): Request<ChimeSDKVoice.Types.GetSipMediaApplicationAlexaSkillConfigurationResponse, AWSError>;
  /**
   * 
   */
  getSipMediaApplicationAlexaSkillConfiguration(callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetSipMediaApplicationAlexaSkillConfigurationResponse) => void): Request<ChimeSDKVoice.Types.GetSipMediaApplicationAlexaSkillConfigurationResponse, AWSError>;
  /**
   * 
   */
  getSipMediaApplicationLoggingConfiguration(params: ChimeSDKVoice.Types.GetSipMediaApplicationLoggingConfigurationRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetSipMediaApplicationLoggingConfigurationResponse) => void): Request<ChimeSDKVoice.Types.GetSipMediaApplicationLoggingConfigurationResponse, AWSError>;
  /**
   * 
   */
  getSipMediaApplicationLoggingConfiguration(callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetSipMediaApplicationLoggingConfigurationResponse) => void): Request<ChimeSDKVoice.Types.GetSipMediaApplicationLoggingConfigurationResponse, AWSError>;
  /**
   * 
   */
  getSipRule(params: ChimeSDKVoice.Types.GetSipRuleRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetSipRuleResponse) => void): Request<ChimeSDKVoice.Types.GetSipRuleResponse, AWSError>;
  /**
   * 
   */
  getSipRule(callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetSipRuleResponse) => void): Request<ChimeSDKVoice.Types.GetSipRuleResponse, AWSError>;
  /**
   * 
   */
  getSpeakerSearchTask(params: ChimeSDKVoice.Types.GetSpeakerSearchTaskRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetSpeakerSearchTaskResponse) => void): Request<ChimeSDKVoice.Types.GetSpeakerSearchTaskResponse, AWSError>;
  /**
   * 
   */
  getSpeakerSearchTask(callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetSpeakerSearchTaskResponse) => void): Request<ChimeSDKVoice.Types.GetSpeakerSearchTaskResponse, AWSError>;
  /**
   * 
   */
  getVoiceConnector(params: ChimeSDKVoice.Types.GetVoiceConnectorRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceConnectorResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceConnectorResponse, AWSError>;
  /**
   * 
   */
  getVoiceConnector(callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceConnectorResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceConnectorResponse, AWSError>;
  /**
   * 
   */
  getVoiceConnectorEmergencyCallingConfiguration(params: ChimeSDKVoice.Types.GetVoiceConnectorEmergencyCallingConfigurationRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceConnectorEmergencyCallingConfigurationResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceConnectorEmergencyCallingConfigurationResponse, AWSError>;
  /**
   * 
   */
  getVoiceConnectorEmergencyCallingConfiguration(callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceConnectorEmergencyCallingConfigurationResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceConnectorEmergencyCallingConfigurationResponse, AWSError>;
  /**
   * 
   */
  getVoiceConnectorGroup(params: ChimeSDKVoice.Types.GetVoiceConnectorGroupRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceConnectorGroupResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceConnectorGroupResponse, AWSError>;
  /**
   * 
   */
  getVoiceConnectorGroup(callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceConnectorGroupResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceConnectorGroupResponse, AWSError>;
  /**
   * 
   */
  getVoiceConnectorLoggingConfiguration(params: ChimeSDKVoice.Types.GetVoiceConnectorLoggingConfigurationRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceConnectorLoggingConfigurationResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceConnectorLoggingConfigurationResponse, AWSError>;
  /**
   * 
   */
  getVoiceConnectorLoggingConfiguration(callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceConnectorLoggingConfigurationResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceConnectorLoggingConfigurationResponse, AWSError>;
  /**
   * 
   */
  getVoiceConnectorOrigination(params: ChimeSDKVoice.Types.GetVoiceConnectorOriginationRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceConnectorOriginationResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceConnectorOriginationResponse, AWSError>;
  /**
   * 
   */
  getVoiceConnectorOrigination(callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceConnectorOriginationResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceConnectorOriginationResponse, AWSError>;
  /**
   * 
   */
  getVoiceConnectorProxy(params: ChimeSDKVoice.Types.GetVoiceConnectorProxyRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceConnectorProxyResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceConnectorProxyResponse, AWSError>;
  /**
   * 
   */
  getVoiceConnectorProxy(callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceConnectorProxyResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceConnectorProxyResponse, AWSError>;
  /**
   * 
   */
  getVoiceConnectorStreamingConfiguration(params: ChimeSDKVoice.Types.GetVoiceConnectorStreamingConfigurationRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceConnectorStreamingConfigurationResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceConnectorStreamingConfigurationResponse, AWSError>;
  /**
   * 
   */
  getVoiceConnectorStreamingConfiguration(callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceConnectorStreamingConfigurationResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceConnectorStreamingConfigurationResponse, AWSError>;
  /**
   * 
   */
  getVoiceConnectorTermination(params: ChimeSDKVoice.Types.GetVoiceConnectorTerminationRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceConnectorTerminationResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceConnectorTerminationResponse, AWSError>;
  /**
   * 
   */
  getVoiceConnectorTermination(callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceConnectorTerminationResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceConnectorTerminationResponse, AWSError>;
  /**
   * 
   */
  getVoiceConnectorTerminationHealth(params: ChimeSDKVoice.Types.GetVoiceConnectorTerminationHealthRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceConnectorTerminationHealthResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceConnectorTerminationHealthResponse, AWSError>;
  /**
   * 
   */
  getVoiceConnectorTerminationHealth(callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceConnectorTerminationHealthResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceConnectorTerminationHealthResponse, AWSError>;
  /**
   * 
   */
  getVoiceProfile(params: ChimeSDKVoice.Types.GetVoiceProfileRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceProfileResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceProfileResponse, AWSError>;
  /**
   * 
   */
  getVoiceProfile(callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceProfileResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceProfileResponse, AWSError>;
  /**
   * 
   */
  getVoiceProfileDomain(params: ChimeSDKVoice.Types.GetVoiceProfileDomainRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceProfileDomainResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceProfileDomainResponse, AWSError>;
  /**
   * 
   */
  getVoiceProfileDomain(callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceProfileDomainResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceProfileDomainResponse, AWSError>;
  /**
   * 
   */
  getVoiceToneAnalysisTask(params: ChimeSDKVoice.Types.GetVoiceToneAnalysisTaskRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceToneAnalysisTaskResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceToneAnalysisTaskResponse, AWSError>;
  /**
   * 
   */
  getVoiceToneAnalysisTask(callback?: (err: AWSError, data: ChimeSDKVoice.Types.GetVoiceToneAnalysisTaskResponse) => void): Request<ChimeSDKVoice.Types.GetVoiceToneAnalysisTaskResponse, AWSError>;
  /**
   * 
   */
  listAvailableVoiceConnectorRegions(callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListAvailableVoiceConnectorRegionsResponse) => void): Request<ChimeSDKVoice.Types.ListAvailableVoiceConnectorRegionsResponse, AWSError>;
  /**
   * 
   */
  listPhoneNumberOrders(params: ChimeSDKVoice.Types.ListPhoneNumberOrdersRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListPhoneNumberOrdersResponse) => void): Request<ChimeSDKVoice.Types.ListPhoneNumberOrdersResponse, AWSError>;
  /**
   * 
   */
  listPhoneNumberOrders(callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListPhoneNumberOrdersResponse) => void): Request<ChimeSDKVoice.Types.ListPhoneNumberOrdersResponse, AWSError>;
  /**
   * 
   */
  listPhoneNumbers(params: ChimeSDKVoice.Types.ListPhoneNumbersRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListPhoneNumbersResponse) => void): Request<ChimeSDKVoice.Types.ListPhoneNumbersResponse, AWSError>;
  /**
   * 
   */
  listPhoneNumbers(callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListPhoneNumbersResponse) => void): Request<ChimeSDKVoice.Types.ListPhoneNumbersResponse, AWSError>;
  /**
   * 
   */
  listProxySessions(params: ChimeSDKVoice.Types.ListProxySessionsRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListProxySessionsResponse) => void): Request<ChimeSDKVoice.Types.ListProxySessionsResponse, AWSError>;
  /**
   * 
   */
  listProxySessions(callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListProxySessionsResponse) => void): Request<ChimeSDKVoice.Types.ListProxySessionsResponse, AWSError>;
  /**
   * 
   */
  listSipMediaApplications(params: ChimeSDKVoice.Types.ListSipMediaApplicationsRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListSipMediaApplicationsResponse) => void): Request<ChimeSDKVoice.Types.ListSipMediaApplicationsResponse, AWSError>;
  /**
   * 
   */
  listSipMediaApplications(callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListSipMediaApplicationsResponse) => void): Request<ChimeSDKVoice.Types.ListSipMediaApplicationsResponse, AWSError>;
  /**
   * 
   */
  listSipRules(params: ChimeSDKVoice.Types.ListSipRulesRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListSipRulesResponse) => void): Request<ChimeSDKVoice.Types.ListSipRulesResponse, AWSError>;
  /**
   * 
   */
  listSipRules(callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListSipRulesResponse) => void): Request<ChimeSDKVoice.Types.ListSipRulesResponse, AWSError>;
  /**
   * 
   */
  listSupportedPhoneNumberCountries(params: ChimeSDKVoice.Types.ListSupportedPhoneNumberCountriesRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListSupportedPhoneNumberCountriesResponse) => void): Request<ChimeSDKVoice.Types.ListSupportedPhoneNumberCountriesResponse, AWSError>;
  /**
   * 
   */
  listSupportedPhoneNumberCountries(callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListSupportedPhoneNumberCountriesResponse) => void): Request<ChimeSDKVoice.Types.ListSupportedPhoneNumberCountriesResponse, AWSError>;
  /**
   * 
   */
  listTagsForResource(params: ChimeSDKVoice.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListTagsForResourceResponse) => void): Request<ChimeSDKVoice.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * 
   */
  listTagsForResource(callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListTagsForResourceResponse) => void): Request<ChimeSDKVoice.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * 
   */
  listVoiceConnectorGroups(params: ChimeSDKVoice.Types.ListVoiceConnectorGroupsRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListVoiceConnectorGroupsResponse) => void): Request<ChimeSDKVoice.Types.ListVoiceConnectorGroupsResponse, AWSError>;
  /**
   * 
   */
  listVoiceConnectorGroups(callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListVoiceConnectorGroupsResponse) => void): Request<ChimeSDKVoice.Types.ListVoiceConnectorGroupsResponse, AWSError>;
  /**
   * 
   */
  listVoiceConnectorTerminationCredentials(params: ChimeSDKVoice.Types.ListVoiceConnectorTerminationCredentialsRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListVoiceConnectorTerminationCredentialsResponse) => void): Request<ChimeSDKVoice.Types.ListVoiceConnectorTerminationCredentialsResponse, AWSError>;
  /**
   * 
   */
  listVoiceConnectorTerminationCredentials(callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListVoiceConnectorTerminationCredentialsResponse) => void): Request<ChimeSDKVoice.Types.ListVoiceConnectorTerminationCredentialsResponse, AWSError>;
  /**
   * 
   */
  listVoiceConnectors(params: ChimeSDKVoice.Types.ListVoiceConnectorsRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListVoiceConnectorsResponse) => void): Request<ChimeSDKVoice.Types.ListVoiceConnectorsResponse, AWSError>;
  /**
   * 
   */
  listVoiceConnectors(callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListVoiceConnectorsResponse) => void): Request<ChimeSDKVoice.Types.ListVoiceConnectorsResponse, AWSError>;
  /**
   * 
   */
  listVoiceProfileDomains(params: ChimeSDKVoice.Types.ListVoiceProfileDomainsRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListVoiceProfileDomainsResponse) => void): Request<ChimeSDKVoice.Types.ListVoiceProfileDomainsResponse, AWSError>;
  /**
   * 
   */
  listVoiceProfileDomains(callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListVoiceProfileDomainsResponse) => void): Request<ChimeSDKVoice.Types.ListVoiceProfileDomainsResponse, AWSError>;
  /**
   * 
   */
  listVoiceProfiles(params: ChimeSDKVoice.Types.ListVoiceProfilesRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListVoiceProfilesResponse) => void): Request<ChimeSDKVoice.Types.ListVoiceProfilesResponse, AWSError>;
  /**
   * 
   */
  listVoiceProfiles(callback?: (err: AWSError, data: ChimeSDKVoice.Types.ListVoiceProfilesResponse) => void): Request<ChimeSDKVoice.Types.ListVoiceProfilesResponse, AWSError>;
  /**
   * 
   */
  putSipMediaApplicationAlexaSkillConfiguration(params: ChimeSDKVoice.Types.PutSipMediaApplicationAlexaSkillConfigurationRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.PutSipMediaApplicationAlexaSkillConfigurationResponse) => void): Request<ChimeSDKVoice.Types.PutSipMediaApplicationAlexaSkillConfigurationResponse, AWSError>;
  /**
   * 
   */
  putSipMediaApplicationAlexaSkillConfiguration(callback?: (err: AWSError, data: ChimeSDKVoice.Types.PutSipMediaApplicationAlexaSkillConfigurationResponse) => void): Request<ChimeSDKVoice.Types.PutSipMediaApplicationAlexaSkillConfigurationResponse, AWSError>;
  /**
   * 
   */
  putSipMediaApplicationLoggingConfiguration(params: ChimeSDKVoice.Types.PutSipMediaApplicationLoggingConfigurationRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.PutSipMediaApplicationLoggingConfigurationResponse) => void): Request<ChimeSDKVoice.Types.PutSipMediaApplicationLoggingConfigurationResponse, AWSError>;
  /**
   * 
   */
  putSipMediaApplicationLoggingConfiguration(callback?: (err: AWSError, data: ChimeSDKVoice.Types.PutSipMediaApplicationLoggingConfigurationResponse) => void): Request<ChimeSDKVoice.Types.PutSipMediaApplicationLoggingConfigurationResponse, AWSError>;
  /**
   * 
   */
  putVoiceConnectorEmergencyCallingConfiguration(params: ChimeSDKVoice.Types.PutVoiceConnectorEmergencyCallingConfigurationRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.PutVoiceConnectorEmergencyCallingConfigurationResponse) => void): Request<ChimeSDKVoice.Types.PutVoiceConnectorEmergencyCallingConfigurationResponse, AWSError>;
  /**
   * 
   */
  putVoiceConnectorEmergencyCallingConfiguration(callback?: (err: AWSError, data: ChimeSDKVoice.Types.PutVoiceConnectorEmergencyCallingConfigurationResponse) => void): Request<ChimeSDKVoice.Types.PutVoiceConnectorEmergencyCallingConfigurationResponse, AWSError>;
  /**
   * 
   */
  putVoiceConnectorLoggingConfiguration(params: ChimeSDKVoice.Types.PutVoiceConnectorLoggingConfigurationRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.PutVoiceConnectorLoggingConfigurationResponse) => void): Request<ChimeSDKVoice.Types.PutVoiceConnectorLoggingConfigurationResponse, AWSError>;
  /**
   * 
   */
  putVoiceConnectorLoggingConfiguration(callback?: (err: AWSError, data: ChimeSDKVoice.Types.PutVoiceConnectorLoggingConfigurationResponse) => void): Request<ChimeSDKVoice.Types.PutVoiceConnectorLoggingConfigurationResponse, AWSError>;
  /**
   * 
   */
  putVoiceConnectorOrigination(params: ChimeSDKVoice.Types.PutVoiceConnectorOriginationRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.PutVoiceConnectorOriginationResponse) => void): Request<ChimeSDKVoice.Types.PutVoiceConnectorOriginationResponse, AWSError>;
  /**
   * 
   */
  putVoiceConnectorOrigination(callback?: (err: AWSError, data: ChimeSDKVoice.Types.PutVoiceConnectorOriginationResponse) => void): Request<ChimeSDKVoice.Types.PutVoiceConnectorOriginationResponse, AWSError>;
  /**
   * 
   */
  putVoiceConnectorProxy(params: ChimeSDKVoice.Types.PutVoiceConnectorProxyRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.PutVoiceConnectorProxyResponse) => void): Request<ChimeSDKVoice.Types.PutVoiceConnectorProxyResponse, AWSError>;
  /**
   * 
   */
  putVoiceConnectorProxy(callback?: (err: AWSError, data: ChimeSDKVoice.Types.PutVoiceConnectorProxyResponse) => void): Request<ChimeSDKVoice.Types.PutVoiceConnectorProxyResponse, AWSError>;
  /**
   * 
   */
  putVoiceConnectorStreamingConfiguration(params: ChimeSDKVoice.Types.PutVoiceConnectorStreamingConfigurationRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.PutVoiceConnectorStreamingConfigurationResponse) => void): Request<ChimeSDKVoice.Types.PutVoiceConnectorStreamingConfigurationResponse, AWSError>;
  /**
   * 
   */
  putVoiceConnectorStreamingConfiguration(callback?: (err: AWSError, data: ChimeSDKVoice.Types.PutVoiceConnectorStreamingConfigurationResponse) => void): Request<ChimeSDKVoice.Types.PutVoiceConnectorStreamingConfigurationResponse, AWSError>;
  /**
   * 
   */
  putVoiceConnectorTermination(params: ChimeSDKVoice.Types.PutVoiceConnectorTerminationRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.PutVoiceConnectorTerminationResponse) => void): Request<ChimeSDKVoice.Types.PutVoiceConnectorTerminationResponse, AWSError>;
  /**
   * 
   */
  putVoiceConnectorTermination(callback?: (err: AWSError, data: ChimeSDKVoice.Types.PutVoiceConnectorTerminationResponse) => void): Request<ChimeSDKVoice.Types.PutVoiceConnectorTerminationResponse, AWSError>;
  /**
   * 
   */
  putVoiceConnectorTerminationCredentials(params: ChimeSDKVoice.Types.PutVoiceConnectorTerminationCredentialsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  putVoiceConnectorTerminationCredentials(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  restorePhoneNumber(params: ChimeSDKVoice.Types.RestorePhoneNumberRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.RestorePhoneNumberResponse) => void): Request<ChimeSDKVoice.Types.RestorePhoneNumberResponse, AWSError>;
  /**
   * 
   */
  restorePhoneNumber(callback?: (err: AWSError, data: ChimeSDKVoice.Types.RestorePhoneNumberResponse) => void): Request<ChimeSDKVoice.Types.RestorePhoneNumberResponse, AWSError>;
  /**
   * 
   */
  searchAvailablePhoneNumbers(params: ChimeSDKVoice.Types.SearchAvailablePhoneNumbersRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.SearchAvailablePhoneNumbersResponse) => void): Request<ChimeSDKVoice.Types.SearchAvailablePhoneNumbersResponse, AWSError>;
  /**
   * 
   */
  searchAvailablePhoneNumbers(callback?: (err: AWSError, data: ChimeSDKVoice.Types.SearchAvailablePhoneNumbersResponse) => void): Request<ChimeSDKVoice.Types.SearchAvailablePhoneNumbersResponse, AWSError>;
  /**
   * 
   */
  startSpeakerSearchTask(params: ChimeSDKVoice.Types.StartSpeakerSearchTaskRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.StartSpeakerSearchTaskResponse) => void): Request<ChimeSDKVoice.Types.StartSpeakerSearchTaskResponse, AWSError>;
  /**
   * 
   */
  startSpeakerSearchTask(callback?: (err: AWSError, data: ChimeSDKVoice.Types.StartSpeakerSearchTaskResponse) => void): Request<ChimeSDKVoice.Types.StartSpeakerSearchTaskResponse, AWSError>;
  /**
   * 
   */
  startVoiceToneAnalysisTask(params: ChimeSDKVoice.Types.StartVoiceToneAnalysisTaskRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.StartVoiceToneAnalysisTaskResponse) => void): Request<ChimeSDKVoice.Types.StartVoiceToneAnalysisTaskResponse, AWSError>;
  /**
   * 
   */
  startVoiceToneAnalysisTask(callback?: (err: AWSError, data: ChimeSDKVoice.Types.StartVoiceToneAnalysisTaskResponse) => void): Request<ChimeSDKVoice.Types.StartVoiceToneAnalysisTaskResponse, AWSError>;
  /**
   * 
   */
  stopSpeakerSearchTask(params: ChimeSDKVoice.Types.StopSpeakerSearchTaskRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  stopSpeakerSearchTask(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  stopVoiceToneAnalysisTask(params: ChimeSDKVoice.Types.StopVoiceToneAnalysisTaskRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  stopVoiceToneAnalysisTask(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  tagResource(params: ChimeSDKVoice.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  untagResource(params: ChimeSDKVoice.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  updateGlobalSettings(params: ChimeSDKVoice.Types.UpdateGlobalSettingsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  updateGlobalSettings(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  updatePhoneNumber(params: ChimeSDKVoice.Types.UpdatePhoneNumberRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.UpdatePhoneNumberResponse) => void): Request<ChimeSDKVoice.Types.UpdatePhoneNumberResponse, AWSError>;
  /**
   * 
   */
  updatePhoneNumber(callback?: (err: AWSError, data: ChimeSDKVoice.Types.UpdatePhoneNumberResponse) => void): Request<ChimeSDKVoice.Types.UpdatePhoneNumberResponse, AWSError>;
  /**
   * 
   */
  updatePhoneNumberSettings(params: ChimeSDKVoice.Types.UpdatePhoneNumberSettingsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  updatePhoneNumberSettings(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
   */
  updateProxySession(params: ChimeSDKVoice.Types.UpdateProxySessionRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.UpdateProxySessionResponse) => void): Request<ChimeSDKVoice.Types.UpdateProxySessionResponse, AWSError>;
  /**
   * 
   */
  updateProxySession(callback?: (err: AWSError, data: ChimeSDKVoice.Types.UpdateProxySessionResponse) => void): Request<ChimeSDKVoice.Types.UpdateProxySessionResponse, AWSError>;
  /**
   * 
   */
  updateSipMediaApplication(params: ChimeSDKVoice.Types.UpdateSipMediaApplicationRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.UpdateSipMediaApplicationResponse) => void): Request<ChimeSDKVoice.Types.UpdateSipMediaApplicationResponse, AWSError>;
  /**
   * 
   */
  updateSipMediaApplication(callback?: (err: AWSError, data: ChimeSDKVoice.Types.UpdateSipMediaApplicationResponse) => void): Request<ChimeSDKVoice.Types.UpdateSipMediaApplicationResponse, AWSError>;
  /**
   * 
   */
  updateSipMediaApplicationCall(params: ChimeSDKVoice.Types.UpdateSipMediaApplicationCallRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.UpdateSipMediaApplicationCallResponse) => void): Request<ChimeSDKVoice.Types.UpdateSipMediaApplicationCallResponse, AWSError>;
  /**
   * 
   */
  updateSipMediaApplicationCall(callback?: (err: AWSError, data: ChimeSDKVoice.Types.UpdateSipMediaApplicationCallResponse) => void): Request<ChimeSDKVoice.Types.UpdateSipMediaApplicationCallResponse, AWSError>;
  /**
   * 
   */
  updateSipRule(params: ChimeSDKVoice.Types.UpdateSipRuleRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.UpdateSipRuleResponse) => void): Request<ChimeSDKVoice.Types.UpdateSipRuleResponse, AWSError>;
  /**
   * 
   */
  updateSipRule(callback?: (err: AWSError, data: ChimeSDKVoice.Types.UpdateSipRuleResponse) => void): Request<ChimeSDKVoice.Types.UpdateSipRuleResponse, AWSError>;
  /**
   * 
   */
  updateVoiceConnector(params: ChimeSDKVoice.Types.UpdateVoiceConnectorRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.UpdateVoiceConnectorResponse) => void): Request<ChimeSDKVoice.Types.UpdateVoiceConnectorResponse, AWSError>;
  /**
   * 
   */
  updateVoiceConnector(callback?: (err: AWSError, data: ChimeSDKVoice.Types.UpdateVoiceConnectorResponse) => void): Request<ChimeSDKVoice.Types.UpdateVoiceConnectorResponse, AWSError>;
  /**
   * 
   */
  updateVoiceConnectorGroup(params: ChimeSDKVoice.Types.UpdateVoiceConnectorGroupRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.UpdateVoiceConnectorGroupResponse) => void): Request<ChimeSDKVoice.Types.UpdateVoiceConnectorGroupResponse, AWSError>;
  /**
   * 
   */
  updateVoiceConnectorGroup(callback?: (err: AWSError, data: ChimeSDKVoice.Types.UpdateVoiceConnectorGroupResponse) => void): Request<ChimeSDKVoice.Types.UpdateVoiceConnectorGroupResponse, AWSError>;
  /**
   * 
   */
  updateVoiceProfile(params: ChimeSDKVoice.Types.UpdateVoiceProfileRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.UpdateVoiceProfileResponse) => void): Request<ChimeSDKVoice.Types.UpdateVoiceProfileResponse, AWSError>;
  /**
   * 
   */
  updateVoiceProfile(callback?: (err: AWSError, data: ChimeSDKVoice.Types.UpdateVoiceProfileResponse) => void): Request<ChimeSDKVoice.Types.UpdateVoiceProfileResponse, AWSError>;
  /**
   * 
   */
  updateVoiceProfileDomain(params: ChimeSDKVoice.Types.UpdateVoiceProfileDomainRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.UpdateVoiceProfileDomainResponse) => void): Request<ChimeSDKVoice.Types.UpdateVoiceProfileDomainResponse, AWSError>;
  /**
   * 
   */
  updateVoiceProfileDomain(callback?: (err: AWSError, data: ChimeSDKVoice.Types.UpdateVoiceProfileDomainResponse) => void): Request<ChimeSDKVoice.Types.UpdateVoiceProfileDomainResponse, AWSError>;
  /**
   * 
   */
  validateE911Address(params: ChimeSDKVoice.Types.ValidateE911AddressRequest, callback?: (err: AWSError, data: ChimeSDKVoice.Types.ValidateE911AddressResponse) => void): Request<ChimeSDKVoice.Types.ValidateE911AddressResponse, AWSError>;
  /**
   * 
   */
  validateE911Address(callback?: (err: AWSError, data: ChimeSDKVoice.Types.ValidateE911AddressResponse) => void): Request<ChimeSDKVoice.Types.ValidateE911AddressResponse, AWSError>;
}
declare namespace ChimeSDKVoice {
  export interface Address {
    streetName?: SensitiveNonEmptyString;
    streetSuffix?: SensitiveNonEmptyString;
    postDirectional?: SensitiveNonEmptyString;
    preDirectional?: SensitiveNonEmptyString;
    streetNumber?: SensitiveNonEmptyString;
    city?: SensitiveNonEmptyString;
    state?: SensitiveNonEmptyString;
    postalCode?: SensitiveNonEmptyString;
    postalCodePlus4?: SensitiveNonEmptyString;
    country?: SensitiveNonEmptyString;
  }
  export type AlexaSkillId = string;
  export type AlexaSkillIdList = AlexaSkillId[];
  export type AlexaSkillStatus = "ACTIVE"|"INACTIVE"|string;
  export type Alpha2CountryCode = string;
  export type AreaCode = string;
  export type Arn = string;
  export interface AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
    VoiceConnectorGroupId: NonEmptyString;
    E164PhoneNumbers: E164PhoneNumberList;
    ForceAssociate?: NullableBoolean;
  }
  export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
    PhoneNumberErrors?: PhoneNumberErrorList;
  }
  export interface AssociatePhoneNumbersWithVoiceConnectorRequest {
    VoiceConnectorId: NonEmptyString;
    E164PhoneNumbers: E164PhoneNumberList;
    ForceAssociate?: NullableBoolean;
  }
  export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
    PhoneNumberErrors?: PhoneNumberErrorList;
  }
  export interface BatchDeletePhoneNumberRequest {
    PhoneNumberIds: NonEmptyStringList;
  }
  export interface BatchDeletePhoneNumberResponse {
    PhoneNumberErrors?: PhoneNumberErrorList;
  }
  export interface BatchUpdatePhoneNumberRequest {
    UpdatePhoneNumberRequestItems: UpdatePhoneNumberRequestItemList;
  }
  export interface BatchUpdatePhoneNumberResponse {
    PhoneNumberErrors?: PhoneNumberErrorList;
  }
  export type Boolean = boolean;
  export interface CallDetails {
    VoiceConnectorId?: NonEmptyString128;
    TransactionId?: NonEmptyString256;
    IsCaller?: Boolean;
  }
  export type CallingName = string;
  export type CallingNameStatus = "Unassigned"|"UpdateInProgress"|"UpdateSucceeded"|"UpdateFailed"|string;
  export type CallingRegion = string;
  export type CallingRegionList = CallingRegion[];
  export interface CandidateAddress {
    streetInfo?: SensitiveNonEmptyString;
    streetNumber?: SensitiveNonEmptyString;
    city?: SensitiveNonEmptyString;
    state?: SensitiveNonEmptyString;
    postalCode?: SensitiveNonEmptyString;
    postalCodePlus4?: SensitiveNonEmptyString;
    country?: SensitiveNonEmptyString;
  }
  export type CandidateAddressList = CandidateAddress[];
  export type Capability = "Voice"|"SMS"|string;
  export type CapabilityList = Capability[];
  export type ClientRequestId = string;
  export type ConfidenceScore = number;
  export type Country = string;
  export type CountryList = Country[];
  export type CpsLimit = number;
  export interface CreatePhoneNumberOrderRequest {
    ProductType: PhoneNumberProductType;
    E164PhoneNumbers: E164PhoneNumberList;
  }
  export interface CreatePhoneNumberOrderResponse {
    PhoneNumberOrder?: PhoneNumberOrder;
  }
  export interface CreateProxySessionRequest {
    VoiceConnectorId: NonEmptyString128;
    ParticipantPhoneNumbers: ParticipantPhoneNumberList;
    Name?: ProxySessionNameString;
    ExpiryMinutes?: PositiveInteger;
    Capabilities: CapabilityList;
    NumberSelectionBehavior?: NumberSelectionBehavior;
    GeoMatchLevel?: GeoMatchLevel;
    GeoMatchParams?: GeoMatchParams;
  }
  export interface CreateProxySessionResponse {
    ProxySession?: ProxySession;
  }
  export interface CreateSipMediaApplicationCallRequest {
    FromPhoneNumber: E164PhoneNumber;
    ToPhoneNumber: E164PhoneNumber;
    SipMediaApplicationId: NonEmptyString;
    SipHeaders?: SipHeadersMap;
    ArgumentsMap?: SMACreateCallArgumentsMap;
  }
  export interface CreateSipMediaApplicationCallResponse {
    SipMediaApplicationCall?: SipMediaApplicationCall;
  }
  export interface CreateSipMediaApplicationRequest {
    AwsRegion: String;
    Name: SipMediaApplicationName;
    Endpoints: SipMediaApplicationEndpointList;
  }
  export interface CreateSipMediaApplicationResponse {
    SipMediaApplication?: SipMediaApplication;
  }
  export interface CreateSipRuleRequest {
    Name: SipRuleName;
    TriggerType: SipRuleTriggerType;
    TriggerValue: NonEmptyString;
    Disabled?: NullableBoolean;
    TargetApplications?: SipRuleTargetApplicationList;
  }
  export interface CreateSipRuleResponse {
    SipRule?: SipRule;
  }
  export interface CreateVoiceConnectorGroupRequest {
    Name: VoiceConnectorGroupName;
    VoiceConnectorItems?: VoiceConnectorItemList;
  }
  export interface CreateVoiceConnectorGroupResponse {
    VoiceConnectorGroup?: VoiceConnectorGroup;
  }
  export interface CreateVoiceConnectorRequest {
    Name: VoiceConnectorName;
    AwsRegion?: VoiceConnectorAwsRegion;
    RequireEncryption: Boolean;
  }
  export interface CreateVoiceConnectorResponse {
    VoiceConnector?: VoiceConnector;
  }
  export interface CreateVoiceProfileDomainRequest {
    Name: VoiceProfileDomainName;
    Description?: VoiceProfileDomainDescription;
    ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration;
    ClientRequestToken?: ClientRequestId;
    Tags?: TagList;
  }
  export interface CreateVoiceProfileDomainResponse {
    VoiceProfileDomain?: VoiceProfileDomain;
  }
  export interface CreateVoiceProfileRequest {
    SpeakerSearchTaskId: NonEmptyString256;
  }
  export interface CreateVoiceProfileResponse {
    VoiceProfile?: VoiceProfile;
  }
  export interface Credential {
    Username?: SensitiveString;
    Password?: SensitiveString;
  }
  export type CredentialList = Credential[];
  export interface DNISEmergencyCallingConfiguration {
    EmergencyPhoneNumber: E164PhoneNumber;
    TestPhoneNumber?: E164PhoneNumber;
    CallingCountry: Alpha2CountryCode;
  }
  export type DNISEmergencyCallingConfigurationList = DNISEmergencyCallingConfiguration[];
  export type DataRetentionInHours = number;
  export interface DeletePhoneNumberRequest {
    PhoneNumberId: SensitiveNonEmptyString;
  }
  export interface DeleteProxySessionRequest {
    VoiceConnectorId: NonEmptyString128;
    ProxySessionId: NonEmptyString128;
  }
  export interface DeleteSipMediaApplicationRequest {
    SipMediaApplicationId: NonEmptyString;
  }
  export interface DeleteSipRuleRequest {
    SipRuleId: NonEmptyString;
  }
  export interface DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
    VoiceConnectorId: NonEmptyString;
  }
  export interface DeleteVoiceConnectorGroupRequest {
    VoiceConnectorGroupId: NonEmptyString;
  }
  export interface DeleteVoiceConnectorOriginationRequest {
    VoiceConnectorId: NonEmptyString;
  }
  export interface DeleteVoiceConnectorProxyRequest {
    VoiceConnectorId: NonEmptyString128;
  }
  export interface DeleteVoiceConnectorRequest {
    VoiceConnectorId: NonEmptyString;
  }
  export interface DeleteVoiceConnectorStreamingConfigurationRequest {
    VoiceConnectorId: NonEmptyString;
  }
  export interface DeleteVoiceConnectorTerminationCredentialsRequest {
    VoiceConnectorId: NonEmptyString;
    Usernames: SensitiveStringList;
  }
  export interface DeleteVoiceConnectorTerminationRequest {
    VoiceConnectorId: NonEmptyString;
  }
  export interface DeleteVoiceProfileDomainRequest {
    VoiceProfileDomainId: NonEmptyString256;
  }
  export interface DeleteVoiceProfileRequest {
    VoiceProfileId: NonEmptyString256;
  }
  export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
    VoiceConnectorGroupId: NonEmptyString;
    E164PhoneNumbers: E164PhoneNumberList;
  }
  export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
    PhoneNumberErrors?: PhoneNumberErrorList;
  }
  export interface DisassociatePhoneNumbersFromVoiceConnectorRequest {
    VoiceConnectorId: NonEmptyString;
    E164PhoneNumbers: E164PhoneNumberList;
  }
  export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
    PhoneNumberErrors?: PhoneNumberErrorList;
  }
  export type E164PhoneNumber = string;
  export type E164PhoneNumberList = E164PhoneNumber[];
  export interface EmergencyCallingConfiguration {
    DNIS?: DNISEmergencyCallingConfigurationList;
  }
  export type ErrorCode = "BadRequest"|"Conflict"|"Forbidden"|"NotFound"|"PreconditionFailed"|"ResourceLimitExceeded"|"ServiceFailure"|"AccessDenied"|"ServiceUnavailable"|"Throttled"|"Throttling"|"Unauthorized"|"Unprocessable"|"VoiceConnectorGroupAssociationsExist"|"PhoneNumberAssociationsExist"|"Gone"|string;
  export type FunctionArn = string;
  export type GeoMatchLevel = "Country"|"AreaCode"|string;
  export interface GeoMatchParams {
    Country: Country;
    AreaCode: AreaCode;
  }
  export interface GetGlobalSettingsResponse {
    VoiceConnector?: VoiceConnectorSettings;
  }
  export interface GetPhoneNumberOrderRequest {
    PhoneNumberOrderId: GuidString;
  }
  export interface GetPhoneNumberOrderResponse {
    PhoneNumberOrder?: PhoneNumberOrder;
  }
  export interface GetPhoneNumberRequest {
    PhoneNumberId: SensitiveNonEmptyString;
  }
  export interface GetPhoneNumberResponse {
    PhoneNumber?: PhoneNumber;
  }
  export interface GetPhoneNumberSettingsResponse {
    CallingName?: CallingName;
    CallingNameUpdatedTimestamp?: Iso8601Timestamp;
  }
  export interface GetProxySessionRequest {
    VoiceConnectorId: NonEmptyString128;
    ProxySessionId: NonEmptyString128;
  }
  export interface GetProxySessionResponse {
    ProxySession?: ProxySession;
  }
  export interface GetSipMediaApplicationAlexaSkillConfigurationRequest {
    SipMediaApplicationId: NonEmptyString;
  }
  export interface GetSipMediaApplicationAlexaSkillConfigurationResponse {
    SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
  }
  export interface GetSipMediaApplicationLoggingConfigurationRequest {
    SipMediaApplicationId: NonEmptyString;
  }
  export interface GetSipMediaApplicationLoggingConfigurationResponse {
    SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
  }
  export interface GetSipMediaApplicationRequest {
    SipMediaApplicationId: NonEmptyString;
  }
  export interface GetSipMediaApplicationResponse {
    SipMediaApplication?: SipMediaApplication;
  }
  export interface GetSipRuleRequest {
    SipRuleId: NonEmptyString;
  }
  export interface GetSipRuleResponse {
    SipRule?: SipRule;
  }
  export interface GetSpeakerSearchTaskRequest {
    VoiceConnectorId: NonEmptyString128;
    SpeakerSearchTaskId: NonEmptyString256;
  }
  export interface GetSpeakerSearchTaskResponse {
    SpeakerSearchTask?: SpeakerSearchTask;
  }
  export interface GetVoiceConnectorEmergencyCallingConfigurationRequest {
    VoiceConnectorId: NonEmptyString;
  }
  export interface GetVoiceConnectorEmergencyCallingConfigurationResponse {
    EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
  }
  export interface GetVoiceConnectorGroupRequest {
    VoiceConnectorGroupId: NonEmptyString;
  }
  export interface GetVoiceConnectorGroupResponse {
    VoiceConnectorGroup?: VoiceConnectorGroup;
  }
  export interface GetVoiceConnectorLoggingConfigurationRequest {
    VoiceConnectorId: NonEmptyString;
  }
  export interface GetVoiceConnectorLoggingConfigurationResponse {
    LoggingConfiguration?: LoggingConfiguration;
  }
  export interface GetVoiceConnectorOriginationRequest {
    VoiceConnectorId: NonEmptyString;
  }
  export interface GetVoiceConnectorOriginationResponse {
    Origination?: Origination;
  }
  export interface GetVoiceConnectorProxyRequest {
    VoiceConnectorId: NonEmptyString128;
  }
  export interface GetVoiceConnectorProxyResponse {
    Proxy?: Proxy;
  }
  export interface GetVoiceConnectorRequest {
    VoiceConnectorId: NonEmptyString;
  }
  export interface GetVoiceConnectorResponse {
    VoiceConnector?: VoiceConnector;
  }
  export interface GetVoiceConnectorStreamingConfigurationRequest {
    VoiceConnectorId: NonEmptyString;
  }
  export interface GetVoiceConnectorStreamingConfigurationResponse {
    StreamingConfiguration?: StreamingConfiguration;
  }
  export interface GetVoiceConnectorTerminationHealthRequest {
    VoiceConnectorId: NonEmptyString;
  }
  export interface GetVoiceConnectorTerminationHealthResponse {
    TerminationHealth?: TerminationHealth;
  }
  export interface GetVoiceConnectorTerminationRequest {
    VoiceConnectorId: NonEmptyString;
  }
  export interface GetVoiceConnectorTerminationResponse {
    Termination?: Termination;
  }
  export interface GetVoiceProfileDomainRequest {
    VoiceProfileDomainId: NonEmptyString256;
  }
  export interface GetVoiceProfileDomainResponse {
    VoiceProfileDomain?: VoiceProfileDomain;
  }
  export interface GetVoiceProfileRequest {
    VoiceProfileId: NonEmptyString256;
  }
  export interface GetVoiceProfileResponse {
    VoiceProfile?: VoiceProfile;
  }
  export interface GetVoiceToneAnalysisTaskRequest {
    VoiceConnectorId: NonEmptyString128;
    VoiceToneAnalysisTaskId: NonEmptyString256;
    IsCaller: Boolean;
  }
  export interface GetVoiceToneAnalysisTaskResponse {
    VoiceToneAnalysisTask?: VoiceToneAnalysisTask;
  }
  export type GuidString = string;
  export type Integer = number;
  export type Iso8601Timestamp = Date;
  export type LanguageCode = "en-US"|string;
  export interface ListAvailableVoiceConnectorRegionsResponse {
    VoiceConnectorRegions?: VoiceConnectorAwsRegionList;
  }
  export interface ListPhoneNumberOrdersRequest {
    NextToken?: String;
    MaxResults?: ResultMax;
  }
  export interface ListPhoneNumberOrdersResponse {
    PhoneNumberOrders?: PhoneNumberOrderList;
    NextToken?: String;
  }
  export interface ListPhoneNumbersRequest {
    Status?: String;
    ProductType?: PhoneNumberProductType;
    FilterName?: PhoneNumberAssociationName;
    FilterValue?: String;
    MaxResults?: ResultMax;
    NextToken?: String;
  }
  export interface ListPhoneNumbersResponse {
    PhoneNumbers?: PhoneNumberList;
    NextToken?: String;
  }
  export interface ListProxySessionsRequest {
    VoiceConnectorId: NonEmptyString128;
    Status?: ProxySessionStatus;
    NextToken?: NextTokenString;
    MaxResults?: ResultMax;
  }
  export interface ListProxySessionsResponse {
    ProxySessions?: ProxySessions;
    NextToken?: NextTokenString;
  }
  export interface ListSipMediaApplicationsRequest {
    MaxResults?: ResultMax;
    NextToken?: NextTokenString;
  }
  export interface ListSipMediaApplicationsResponse {
    SipMediaApplications?: SipMediaApplicationList;
    NextToken?: NextTokenString;
  }
  export interface ListSipRulesRequest {
    SipMediaApplicationId?: NonEmptyString;
    MaxResults?: ResultMax;
    NextToken?: NextTokenString;
  }
  export interface ListSipRulesResponse {
    SipRules?: SipRuleList;
    NextToken?: NextTokenString;
  }
  export interface ListSupportedPhoneNumberCountriesRequest {
    ProductType: PhoneNumberProductType;
  }
  export interface ListSupportedPhoneNumberCountriesResponse {
    PhoneNumberCountries?: PhoneNumberCountriesList;
  }
  export interface ListTagsForResourceRequest {
    ResourceARN: Arn;
  }
  export interface ListTagsForResourceResponse {
    Tags?: TagList;
  }
  export interface ListVoiceConnectorGroupsRequest {
    NextToken?: String;
    MaxResults?: ResultMax;
  }
  export interface ListVoiceConnectorGroupsResponse {
    VoiceConnectorGroups?: VoiceConnectorGroupList;
    NextToken?: String;
  }
  export interface ListVoiceConnectorTerminationCredentialsRequest {
    VoiceConnectorId: NonEmptyString;
  }
  export interface ListVoiceConnectorTerminationCredentialsResponse {
    Usernames?: SensitiveStringList;
  }
  export interface ListVoiceConnectorsRequest {
    NextToken?: String;
    MaxResults?: ResultMax;
  }
  export interface ListVoiceConnectorsResponse {
    VoiceConnectors?: VoiceConnectorList;
    NextToken?: String;
  }
  export interface ListVoiceProfileDomainsRequest {
    NextToken?: String;
    MaxResults?: ResultMax;
  }
  export interface ListVoiceProfileDomainsResponse {
    VoiceProfileDomains?: VoiceProfileDomainSummaryList;
    NextToken?: String;
  }
  export interface ListVoiceProfilesRequest {
    VoiceProfileDomainId: NonEmptyString256;
    NextToken?: String;
    MaxResults?: ResultMax;
  }
  export interface ListVoiceProfilesResponse {
    VoiceProfiles?: VoiceProfileSummaryList;
    NextToken?: String;
  }
  export interface LoggingConfiguration {
    EnableSIPLogs?: Boolean;
    EnableMediaMetricLogs?: Boolean;
  }
  export interface MediaInsightsConfiguration {
    Disabled?: Boolean;
    ConfigurationArn?: Arn;
  }
  export type NextTokenString = string;
  export type NonEmptyString = string;
  export type NonEmptyString128 = string;
  export type NonEmptyString256 = string;
  export type NonEmptyStringList = String[];
  export type NotificationTarget = "EventBridge"|"SNS"|"SQS"|string;
  export type NullableBoolean = boolean;
  export type NumberSelectionBehavior = "PreferSticky"|"AvoidSticky"|string;
  export interface OrderedPhoneNumber {
    E164PhoneNumber?: E164PhoneNumber;
    Status?: OrderedPhoneNumberStatus;
  }
  export type OrderedPhoneNumberList = OrderedPhoneNumber[];
  export type OrderedPhoneNumberStatus = "Processing"|"Acquired"|"Failed"|string;
  export interface Origination {
    Routes?: OriginationRouteList;
    Disabled?: Boolean;
  }
  export interface OriginationRoute {
    Host?: String;
    Port?: Port;
    Protocol?: OriginationRouteProtocol;
    Priority?: OriginationRoutePriority;
    Weight?: OriginationRouteWeight;
  }
  export type OriginationRouteList = OriginationRoute[];
  export type OriginationRoutePriority = number;
  export type OriginationRouteProtocol = "TCP"|"UDP"|string;
  export type OriginationRouteWeight = number;
  export interface Participant {
    PhoneNumber?: E164PhoneNumber;
    ProxyPhoneNumber?: E164PhoneNumber;
  }
  export type ParticipantPhoneNumberList = E164PhoneNumber[];
  export type Participants = Participant[];
  export interface PhoneNumber {
    PhoneNumberId?: SensitiveNonEmptyString;
    E164PhoneNumber?: E164PhoneNumber;
    Country?: Alpha2CountryCode;
    Type?: PhoneNumberType;
    ProductType?: PhoneNumberProductType;
    Status?: PhoneNumberStatus;
    Capabilities?: PhoneNumberCapabilities;
    Associations?: PhoneNumberAssociationList;
    CallingName?: CallingName;
    CallingNameStatus?: CallingNameStatus;
    CreatedTimestamp?: Iso8601Timestamp;
    UpdatedTimestamp?: Iso8601Timestamp;
    DeletionTimestamp?: Iso8601Timestamp;
    OrderId?: GuidString;
  }
  export interface PhoneNumberAssociation {
    Value?: String;
    Name?: PhoneNumberAssociationName;
    AssociatedTimestamp?: Iso8601Timestamp;
  }
  export type PhoneNumberAssociationList = PhoneNumberAssociation[];
  export type PhoneNumberAssociationName = "VoiceConnectorId"|"VoiceConnectorGroupId"|"SipRuleId"|string;
  export interface PhoneNumberCapabilities {
    InboundCall?: NullableBoolean;
    OutboundCall?: NullableBoolean;
    InboundSMS?: NullableBoolean;
    OutboundSMS?: NullableBoolean;
    InboundMMS?: NullableBoolean;
    OutboundMMS?: NullableBoolean;
  }
  export type PhoneNumberCountriesList = PhoneNumberCountry[];
  export interface PhoneNumberCountry {
    CountryCode?: Alpha2CountryCode;
    SupportedPhoneNumberTypes?: PhoneNumberTypeList;
  }
  export interface PhoneNumberError {
    PhoneNumberId?: SensitiveNonEmptyString;
    ErrorCode?: ErrorCode;
    ErrorMessage?: String;
  }
  export type PhoneNumberErrorList = PhoneNumberError[];
  export type PhoneNumberList = PhoneNumber[];
  export type PhoneNumberMaxResults = number;
  export interface PhoneNumberOrder {
    PhoneNumberOrderId?: GuidString;
    ProductType?: PhoneNumberProductType;
    Status?: PhoneNumberOrderStatus;
    OrderType?: PhoneNumberOrderType;
    OrderedPhoneNumbers?: OrderedPhoneNumberList;
    CreatedTimestamp?: Iso8601Timestamp;
    UpdatedTimestamp?: Iso8601Timestamp;
  }
  export type PhoneNumberOrderList = PhoneNumberOrder[];
  export type PhoneNumberOrderStatus = "Processing"|"Successful"|"Failed"|"Partial"|"PendingDocuments"|"Submitted"|"FOC"|"ChangeRequested"|"Exception"|"CancelRequested"|"Cancelled"|string;
  export type PhoneNumberOrderType = "New"|"Porting"|string;
  export type PhoneNumberProductType = "VoiceConnector"|"SipMediaApplicationDialIn"|string;
  export type PhoneNumberStatus = "Cancelled"|"PortinCancelRequested"|"PortinInProgress"|"AcquireInProgress"|"AcquireFailed"|"Unassigned"|"Assigned"|"ReleaseInProgress"|"DeleteInProgress"|"ReleaseFailed"|"DeleteFailed"|string;
  export type PhoneNumberType = "Local"|"TollFree"|string;
  export type PhoneNumberTypeList = PhoneNumberType[];
  export type Port = number;
  export type PositiveInteger = number;
  export interface Proxy {
    DefaultSessionExpiryMinutes?: Integer;
    Disabled?: Boolean;
    FallBackPhoneNumber?: E164PhoneNumber;
    PhoneNumberCountries?: StringList;
  }
  export interface ProxySession {
    VoiceConnectorId?: NonEmptyString128;
    ProxySessionId?: NonEmptyString128;
    Name?: String128;
    Status?: ProxySessionStatus;
    ExpiryMinutes?: PositiveInteger;
    Capabilities?: CapabilityList;
    CreatedTimestamp?: Iso8601Timestamp;
    UpdatedTimestamp?: Iso8601Timestamp;
    EndedTimestamp?: Iso8601Timestamp;
    Participants?: Participants;
    NumberSelectionBehavior?: NumberSelectionBehavior;
    GeoMatchLevel?: GeoMatchLevel;
    GeoMatchParams?: GeoMatchParams;
  }
  export type ProxySessionNameString = string;
  export type ProxySessionStatus = "Open"|"InProgress"|"Closed"|string;
  export type ProxySessions = ProxySession[];
  export interface PutSipMediaApplicationAlexaSkillConfigurationRequest {
    SipMediaApplicationId: NonEmptyString;
    SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
  }
  export interface PutSipMediaApplicationAlexaSkillConfigurationResponse {
    SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
  }
  export interface PutSipMediaApplicationLoggingConfigurationRequest {
    SipMediaApplicationId: NonEmptyString;
    SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
  }
  export interface PutSipMediaApplicationLoggingConfigurationResponse {
    SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
  }
  export interface PutVoiceConnectorEmergencyCallingConfigurationRequest {
    VoiceConnectorId: NonEmptyString;
    EmergencyCallingConfiguration: EmergencyCallingConfiguration;
  }
  export interface PutVoiceConnectorEmergencyCallingConfigurationResponse {
    EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
  }
  export interface PutVoiceConnectorLoggingConfigurationRequest {
    VoiceConnectorId: NonEmptyString;
    LoggingConfiguration: LoggingConfiguration;
  }
  export interface PutVoiceConnectorLoggingConfigurationResponse {
    LoggingConfiguration?: LoggingConfiguration;
  }
  export interface PutVoiceConnectorOriginationRequest {
    VoiceConnectorId: NonEmptyString;
    Origination: Origination;
  }
  export interface PutVoiceConnectorOriginationResponse {
    Origination?: Origination;
  }
  export interface PutVoiceConnectorProxyRequest {
    VoiceConnectorId: NonEmptyString128;
    DefaultSessionExpiryMinutes: Integer;
    PhoneNumberPoolCountries: CountryList;
    FallBackPhoneNumber?: E164PhoneNumber;
    Disabled?: Boolean;
  }
  export interface PutVoiceConnectorProxyResponse {
    Proxy?: Proxy;
  }
  export interface PutVoiceConnectorStreamingConfigurationRequest {
    VoiceConnectorId: NonEmptyString;
    StreamingConfiguration: StreamingConfiguration;
  }
  export interface PutVoiceConnectorStreamingConfigurationResponse {
    StreamingConfiguration?: StreamingConfiguration;
  }
  export interface PutVoiceConnectorTerminationCredentialsRequest {
    VoiceConnectorId: NonEmptyString;
    Credentials?: CredentialList;
  }
  export interface PutVoiceConnectorTerminationRequest {
    VoiceConnectorId: NonEmptyString;
    Termination: Termination;
  }
  export interface PutVoiceConnectorTerminationResponse {
    Termination?: Termination;
  }
  export interface RestorePhoneNumberRequest {
    PhoneNumberId: SensitiveNonEmptyString;
  }
  export interface RestorePhoneNumberResponse {
    PhoneNumber?: PhoneNumber;
  }
  export type ResultMax = number;
  export type SMACreateCallArgumentsMap = {[key: string]: SensitiveString};
  export type SMAUpdateCallArgumentsMap = {[key: string]: SensitiveString};
  export interface SearchAvailablePhoneNumbersRequest {
    AreaCode?: String;
    City?: String;
    Country?: Alpha2CountryCode;
    State?: String;
    TollFreePrefix?: TollFreePrefix;
    PhoneNumberType?: PhoneNumberType;
    MaxResults?: PhoneNumberMaxResults;
    NextToken?: String;
  }
  export interface SearchAvailablePhoneNumbersResponse {
    E164PhoneNumbers?: E164PhoneNumberList;
    NextToken?: String;
  }
  export type SensitiveNonEmptyString = string;
  export type SensitiveString = string;
  export type SensitiveStringList = SensitiveString[];
  export interface ServerSideEncryptionConfiguration {
    KmsKeyArn: Arn;
  }
  export type SipApplicationPriority = number;
  export type SipHeadersMap = {[key: string]: SensitiveString};
  export interface SipMediaApplication {
    SipMediaApplicationId?: NonEmptyString;
    AwsRegion?: String;
    Name?: SipMediaApplicationName;
    Endpoints?: SipMediaApplicationEndpointList;
    CreatedTimestamp?: Iso8601Timestamp;
    UpdatedTimestamp?: Iso8601Timestamp;
  }
  export interface SipMediaApplicationAlexaSkillConfiguration {
    AlexaSkillStatus: AlexaSkillStatus;
    AlexaSkillIds: AlexaSkillIdList;
  }
  export interface SipMediaApplicationCall {
    TransactionId?: GuidString;
  }
  export interface SipMediaApplicationEndpoint {
    LambdaArn?: FunctionArn;
  }
  export type SipMediaApplicationEndpointList = SipMediaApplicationEndpoint[];
  export type SipMediaApplicationList = SipMediaApplication[];
  export interface SipMediaApplicationLoggingConfiguration {
    EnableSipMediaApplicationMessageLogs?: Boolean;
  }
  export type SipMediaApplicationName = string;
  export interface SipRule {
    SipRuleId?: NonEmptyString;
    Name?: SipRuleName;
    Disabled?: Boolean;
    TriggerType?: SipRuleTriggerType;
    TriggerValue?: NonEmptyString;
    TargetApplications?: SipRuleTargetApplicationList;
    CreatedTimestamp?: Iso8601Timestamp;
    UpdatedTimestamp?: Iso8601Timestamp;
  }
  export type SipRuleList = SipRule[];
  export type SipRuleName = string;
  export interface SipRuleTargetApplication {
    SipMediaApplicationId?: NonEmptyString;
    Priority?: SipApplicationPriority;
    AwsRegion?: String;
  }
  export type SipRuleTargetApplicationList = SipRuleTargetApplication[];
  export type SipRuleTriggerType = "ToPhoneNumber"|"RequestUriHostname"|string;
  export interface SpeakerSearchDetails {
    Results?: SpeakerSearchResultList;
    VoiceprintGenerationStatus?: NonEmptyString256;
  }
  export interface SpeakerSearchResult {
    ConfidenceScore?: ConfidenceScore;
    VoiceProfileId?: NonEmptyString256;
  }
  export type SpeakerSearchResultList = SpeakerSearchResult[];
  export interface SpeakerSearchTask {
    SpeakerSearchTaskId?: NonEmptyString256;
    SpeakerSearchTaskStatus?: NonEmptyString;
    CallDetails?: CallDetails;
    SpeakerSearchDetails?: SpeakerSearchDetails;
    CreatedTimestamp?: Iso8601Timestamp;
    UpdatedTimestamp?: Iso8601Timestamp;
    StartedTimestamp?: Iso8601Timestamp;
    StatusMessage?: String;
  }
  export interface StartSpeakerSearchTaskRequest {
    VoiceConnectorId: NonEmptyString128;
    TransactionId: NonEmptyString256;
    VoiceProfileDomainId: NonEmptyString256;
    ClientRequestToken?: ClientRequestId;
  }
  export interface StartSpeakerSearchTaskResponse {
    SpeakerSearchTask?: SpeakerSearchTask;
  }
  export interface StartVoiceToneAnalysisTaskRequest {
    VoiceConnectorId: NonEmptyString128;
    TransactionId: NonEmptyString256;
    LanguageCode: LanguageCode;
    ClientRequestToken?: ClientRequestId;
  }
  export interface StartVoiceToneAnalysisTaskResponse {
    VoiceToneAnalysisTask?: VoiceToneAnalysisTask;
  }
  export interface StopSpeakerSearchTaskRequest {
    VoiceConnectorId: NonEmptyString128;
    SpeakerSearchTaskId: NonEmptyString256;
  }
  export interface StopVoiceToneAnalysisTaskRequest {
    VoiceConnectorId: NonEmptyString128;
    VoiceToneAnalysisTaskId: NonEmptyString256;
  }
  export interface StreamingConfiguration {
    DataRetentionInHours: DataRetentionInHours;
    Disabled: Boolean;
    StreamingNotificationTargets?: StreamingNotificationTargetList;
    MediaInsightsConfiguration?: MediaInsightsConfiguration;
  }
  export interface StreamingNotificationTarget {
    NotificationTarget?: NotificationTarget;
  }
  export type StreamingNotificationTargetList = StreamingNotificationTarget[];
  export type String = string;
  export type String128 = string;
  export type StringList = String[];
  export interface Tag {
    Key: TagKey;
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    ResourceARN: Arn;
    Tags: TagList;
  }
  export type TagValue = string;
  export interface Termination {
    CpsLimit?: CpsLimit;
    DefaultPhoneNumber?: E164PhoneNumber;
    CallingRegions?: CallingRegionList;
    CidrAllowedList?: StringList;
    Disabled?: Boolean;
  }
  export interface TerminationHealth {
    Timestamp?: Iso8601Timestamp;
    Source?: String;
  }
  export type TollFreePrefix = string;
  export interface UntagResourceRequest {
    ResourceARN: Arn;
    TagKeys: TagKeyList;
  }
  export interface UpdateGlobalSettingsRequest {
    VoiceConnector?: VoiceConnectorSettings;
  }
  export interface UpdatePhoneNumberRequest {
    PhoneNumberId: SensitiveNonEmptyString;
    ProductType?: PhoneNumberProductType;
    CallingName?: CallingName;
  }
  export interface UpdatePhoneNumberRequestItem {
    PhoneNumberId: SensitiveNonEmptyString;
    ProductType?: PhoneNumberProductType;
    CallingName?: CallingName;
  }
  export type UpdatePhoneNumberRequestItemList = UpdatePhoneNumberRequestItem[];
  export interface UpdatePhoneNumberResponse {
    PhoneNumber?: PhoneNumber;
  }
  export interface UpdatePhoneNumberSettingsRequest {
    CallingName: CallingName;
  }
  export interface UpdateProxySessionRequest {
    VoiceConnectorId: NonEmptyString128;
    ProxySessionId: NonEmptyString128;
    Capabilities: CapabilityList;
    ExpiryMinutes?: PositiveInteger;
  }
  export interface UpdateProxySessionResponse {
    ProxySession?: ProxySession;
  }
  export interface UpdateSipMediaApplicationCallRequest {
    SipMediaApplicationId: NonEmptyString;
    TransactionId: NonEmptyString;
    Arguments: SMAUpdateCallArgumentsMap;
  }
  export interface UpdateSipMediaApplicationCallResponse {
    SipMediaApplicationCall?: SipMediaApplicationCall;
  }
  export interface UpdateSipMediaApplicationRequest {
    SipMediaApplicationId: NonEmptyString;
    Name?: SipMediaApplicationName;
    Endpoints?: SipMediaApplicationEndpointList;
  }
  export interface UpdateSipMediaApplicationResponse {
    SipMediaApplication?: SipMediaApplication;
  }
  export interface UpdateSipRuleRequest {
    SipRuleId: NonEmptyString;
    Name: SipRuleName;
    Disabled?: NullableBoolean;
    TargetApplications?: SipRuleTargetApplicationList;
  }
  export interface UpdateSipRuleResponse {
    SipRule?: SipRule;
  }
  export interface UpdateVoiceConnectorGroupRequest {
    VoiceConnectorGroupId: NonEmptyString;
    Name: VoiceConnectorGroupName;
    VoiceConnectorItems: VoiceConnectorItemList;
  }
  export interface UpdateVoiceConnectorGroupResponse {
    VoiceConnectorGroup?: VoiceConnectorGroup;
  }
  export interface UpdateVoiceConnectorRequest {
    VoiceConnectorId: NonEmptyString;
    Name: VoiceConnectorName;
    RequireEncryption: Boolean;
  }
  export interface UpdateVoiceConnectorResponse {
    VoiceConnector?: VoiceConnector;
  }
  export interface UpdateVoiceProfileDomainRequest {
    VoiceProfileDomainId: NonEmptyString256;
    Name?: VoiceProfileDomainName;
    Description?: VoiceProfileDomainDescription;
  }
  export interface UpdateVoiceProfileDomainResponse {
    VoiceProfileDomain?: VoiceProfileDomain;
  }
  export interface UpdateVoiceProfileRequest {
    VoiceProfileId: NonEmptyString256;
    SpeakerSearchTaskId: NonEmptyString256;
  }
  export interface UpdateVoiceProfileResponse {
    VoiceProfile?: VoiceProfile;
  }
  export interface ValidateE911AddressRequest {
    AwsAccountId: NonEmptyString;
    StreetNumber: SensitiveNonEmptyString;
    StreetInfo: SensitiveNonEmptyString;
    City: SensitiveNonEmptyString;
    State: SensitiveNonEmptyString;
    Country: SensitiveNonEmptyString;
    PostalCode: SensitiveNonEmptyString;
  }
  export interface ValidateE911AddressResponse {
    ValidationResult?: ValidationResult;
    AddressExternalId?: String;
    Address?: Address;
    CandidateAddressList?: CandidateAddressList;
  }
  export type ValidationResult = number;
  export interface VoiceConnector {
    VoiceConnectorId?: NonEmptyString;
    AwsRegion?: VoiceConnectorAwsRegion;
    Name?: VoiceConnectorName;
    OutboundHostName?: String;
    RequireEncryption?: Boolean;
    CreatedTimestamp?: Iso8601Timestamp;
    UpdatedTimestamp?: Iso8601Timestamp;
    VoiceConnectorArn?: NonEmptyString;
  }
  export type VoiceConnectorAwsRegion = "us-east-1"|"us-west-2"|"ca-central-1"|"eu-central-1"|"eu-west-1"|"eu-west-2"|"ap-northeast-2"|"ap-northeast-1"|"ap-southeast-1"|"ap-southeast-2"|string;
  export type VoiceConnectorAwsRegionList = VoiceConnectorAwsRegion[];
  export interface VoiceConnectorGroup {
    VoiceConnectorGroupId?: NonEmptyString;
    Name?: VoiceConnectorGroupName;
    VoiceConnectorItems?: VoiceConnectorItemList;
    CreatedTimestamp?: Iso8601Timestamp;
    UpdatedTimestamp?: Iso8601Timestamp;
    VoiceConnectorGroupArn?: NonEmptyString;
  }
  export type VoiceConnectorGroupList = VoiceConnectorGroup[];
  export type VoiceConnectorGroupName = string;
  export interface VoiceConnectorItem {
    VoiceConnectorId: NonEmptyString;
    Priority: VoiceConnectorItemPriority;
  }
  export type VoiceConnectorItemList = VoiceConnectorItem[];
  export type VoiceConnectorItemPriority = number;
  export type VoiceConnectorList = VoiceConnector[];
  export type VoiceConnectorName = string;
  export interface VoiceConnectorSettings {
    CdrBucket?: String;
  }
  export interface VoiceProfile {
    VoiceProfileId?: NonEmptyString256;
    VoiceProfileArn?: Arn;
    VoiceProfileDomainId?: NonEmptyString256;
    CreatedTimestamp?: Iso8601Timestamp;
    UpdatedTimestamp?: Iso8601Timestamp;
    ExpirationTimestamp?: Iso8601Timestamp;
  }
  export interface VoiceProfileDomain {
    VoiceProfileDomainId?: NonEmptyString256;
    VoiceProfileDomainArn?: Arn;
    Name?: VoiceProfileDomainName;
    Description?: VoiceProfileDomainDescription;
    ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    CreatedTimestamp?: Iso8601Timestamp;
    UpdatedTimestamp?: Iso8601Timestamp;
  }
  export type VoiceProfileDomainDescription = string;
  export type VoiceProfileDomainName = string;
  export interface VoiceProfileDomainSummary {
    VoiceProfileDomainId?: NonEmptyString256;
    VoiceProfileDomainArn?: Arn;
    Name?: VoiceProfileDomainName;
    Description?: VoiceProfileDomainDescription;
    CreatedTimestamp?: Iso8601Timestamp;
    UpdatedTimestamp?: Iso8601Timestamp;
  }
  export type VoiceProfileDomainSummaryList = VoiceProfileDomainSummary[];
  export interface VoiceProfileSummary {
    VoiceProfileId?: NonEmptyString256;
    VoiceProfileArn?: Arn;
    VoiceProfileDomainId?: NonEmptyString256;
    CreatedTimestamp?: Iso8601Timestamp;
    UpdatedTimestamp?: Iso8601Timestamp;
    ExpirationTimestamp?: Iso8601Timestamp;
  }
  export type VoiceProfileSummaryList = VoiceProfileSummary[];
  export interface VoiceToneAnalysisTask {
    VoiceToneAnalysisTaskId?: NonEmptyString256;
    VoiceToneAnalysisTaskStatus?: NonEmptyString;
    CallDetails?: CallDetails;
    CreatedTimestamp?: Iso8601Timestamp;
    UpdatedTimestamp?: Iso8601Timestamp;
    StartedTimestamp?: Iso8601Timestamp;
    StatusMessage?: String;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2022-08-03"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ChimeSDKVoice client.
   */
  export import Types = ChimeSDKVoice;
}
export = ChimeSDKVoice;
