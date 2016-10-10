import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
declare class GameLift extends Service {
  /**
   * Creates an alias for a fleet. You can use an alias to anonymize your fleet by referencing an alias instead of a specific fleet when you create game sessions. Amazon GameLift supports two types of routing strategies for aliases: simple and terminal. Use a simple alias to point to an active fleet. Use a terminal alias to display a message to incoming traffic instead of routing players to an active fleet. This option is useful when a game server is no longer supported but you want to provide better messaging than a standard 404 error. To create a fleet alias, specify an alias name, routing strategy, and optional description. If successful, a new alias record is returned, including an alias ID, which you can reference when creating a game session. To reassign the alias to another fleet ID, call UpdateAlias.
   */
  createAlias(params: GameLift.CreateAliasInput, callback?: (err: AWSError, data: GameLift.CreateAliasOutput) => void): Request<GameLift.CreateAliasOutput, AWSError>;
  /**
   * Creates an alias for a fleet. You can use an alias to anonymize your fleet by referencing an alias instead of a specific fleet when you create game sessions. Amazon GameLift supports two types of routing strategies for aliases: simple and terminal. Use a simple alias to point to an active fleet. Use a terminal alias to display a message to incoming traffic instead of routing players to an active fleet. This option is useful when a game server is no longer supported but you want to provide better messaging than a standard 404 error. To create a fleet alias, specify an alias name, routing strategy, and optional description. If successful, a new alias record is returned, including an alias ID, which you can reference when creating a game session. To reassign the alias to another fleet ID, call UpdateAlias.
   */
  createAlias(callback?: (err: AWSError, data: GameLift.CreateAliasOutput) => void): Request<GameLift.CreateAliasOutput, AWSError>;
  /**
   * Initializes a new build record and generates information required to upload a game build to Amazon GameLift. Once the build record has been created and its status is INITIALIZED, you can upload your game build.  Do not use this API action unless you are using your own Amazon Simple Storage Service (Amazon S3) client and need to manually upload your build files. Instead, to create a build, use the CLI command upload-build, which creates a new build record and uploads the build files in one step. (See the Amazon GameLift Developer Guide help on packaging and uploading your build.)   To create a new build, identify the operating system of the game server binaries. All game servers in a build must use the same operating system. Optionally, specify a build name and version; this metadata is stored with other properties in the build record and is displayed in the GameLift console (it is not visible to players). If successful, this action returns the newly created build record along with the Amazon S3 storage location and AWS account credentials. Use the location and credentials to upload your game build.
   */
  createBuild(params: GameLift.CreateBuildInput, callback?: (err: AWSError, data: GameLift.CreateBuildOutput) => void): Request<GameLift.CreateBuildOutput, AWSError>;
  /**
   * Initializes a new build record and generates information required to upload a game build to Amazon GameLift. Once the build record has been created and its status is INITIALIZED, you can upload your game build.  Do not use this API action unless you are using your own Amazon Simple Storage Service (Amazon S3) client and need to manually upload your build files. Instead, to create a build, use the CLI command upload-build, which creates a new build record and uploads the build files in one step. (See the Amazon GameLift Developer Guide help on packaging and uploading your build.)   To create a new build, identify the operating system of the game server binaries. All game servers in a build must use the same operating system. Optionally, specify a build name and version; this metadata is stored with other properties in the build record and is displayed in the GameLift console (it is not visible to players). If successful, this action returns the newly created build record along with the Amazon S3 storage location and AWS account credentials. Use the location and credentials to upload your game build.
   */
  createBuild(callback?: (err: AWSError, data: GameLift.CreateBuildOutput) => void): Request<GameLift.CreateBuildOutput, AWSError>;
  /**
   * Creates a new fleet to run your game servers. A fleet is a set of Amazon Elastic Compute Cloud (Amazon EC2) instances, each of which can run multiple server processes to host game sessions. You configure a fleet to create instances with certain hardware specifications (see Amazon EC2 Instance Types for more information), and deploy a specified game build to each instance. A newly created fleet passes through several statuses; once it reaches the ACTIVE status, it can begin hosting game sessions. To create a new fleet, provide a fleet name, an EC2 instance type, and a build ID of the game build to deploy. You can also configure the new fleet with the following settings: (1) a runtime configuration describing what server processes to run on each instance in the fleet (required to create fleet), (2) access permissions for inbound traffic, (3) fleet-wide game session protection, and (4) the location of default log files for GameLift to upload and store. If the CreateFleet call is successful, Amazon GameLift performs the following tasks:  Creates a fleet record and sets the status to NEW (followed by other statuses as the fleet is activated). Sets the fleet's capacity to 1 "desired", which causes GameLift to start one new EC2 instance. Starts launching server processes on the instance. If the fleet is configured to run multiple server processes per instance, GameLift staggers each launch by a few seconds. Begins writing events to the fleet event log, which can be accessed in the GameLift console. Sets the fleet's status to ACTIVE once one server process in the fleet is ready to host a game session.  After a fleet is created, use the following actions to change fleet properties and configuration:   UpdateFleetAttributes -- Update fleet metadata, including name and description.  UpdateFleetCapacity -- Increase or decrease the number of instances you want the fleet to maintain.  UpdateFleetPortSettings -- Change the IP address and port ranges that allow access to incoming traffic.  UpdateRuntimeConfiguration -- Change how server processes are launched in the fleet, including launch path, launch parameters, and the number of concurrent processes. 
   */
  createFleet(params: GameLift.CreateFleetInput, callback?: (err: AWSError, data: GameLift.CreateFleetOutput) => void): Request<GameLift.CreateFleetOutput, AWSError>;
  /**
   * Creates a new fleet to run your game servers. A fleet is a set of Amazon Elastic Compute Cloud (Amazon EC2) instances, each of which can run multiple server processes to host game sessions. You configure a fleet to create instances with certain hardware specifications (see Amazon EC2 Instance Types for more information), and deploy a specified game build to each instance. A newly created fleet passes through several statuses; once it reaches the ACTIVE status, it can begin hosting game sessions. To create a new fleet, provide a fleet name, an EC2 instance type, and a build ID of the game build to deploy. You can also configure the new fleet with the following settings: (1) a runtime configuration describing what server processes to run on each instance in the fleet (required to create fleet), (2) access permissions for inbound traffic, (3) fleet-wide game session protection, and (4) the location of default log files for GameLift to upload and store. If the CreateFleet call is successful, Amazon GameLift performs the following tasks:  Creates a fleet record and sets the status to NEW (followed by other statuses as the fleet is activated). Sets the fleet's capacity to 1 "desired", which causes GameLift to start one new EC2 instance. Starts launching server processes on the instance. If the fleet is configured to run multiple server processes per instance, GameLift staggers each launch by a few seconds. Begins writing events to the fleet event log, which can be accessed in the GameLift console. Sets the fleet's status to ACTIVE once one server process in the fleet is ready to host a game session.  After a fleet is created, use the following actions to change fleet properties and configuration:   UpdateFleetAttributes -- Update fleet metadata, including name and description.  UpdateFleetCapacity -- Increase or decrease the number of instances you want the fleet to maintain.  UpdateFleetPortSettings -- Change the IP address and port ranges that allow access to incoming traffic.  UpdateRuntimeConfiguration -- Change how server processes are launched in the fleet, including launch path, launch parameters, and the number of concurrent processes. 
   */
  createFleet(callback?: (err: AWSError, data: GameLift.CreateFleetOutput) => void): Request<GameLift.CreateFleetOutput, AWSError>;
  /**
   * Creates a multiplayer game session for players. This action creates a game session record and assigns the new session to an instance in the specified fleet, which initializes a new server process to host the game session. A fleet must be in an ACTIVE status before a game session can be created in it. To create a game session, specify either a fleet ID or an alias ID and indicate the maximum number of players the game session allows. You can also provide a name and a set of properties for your game (optional). If successful, a GameSession object is returned containing session properties, including an IP address. By default, newly created game sessions are set to accept adding any new players to the game session. Use UpdateGameSession to change the creation policy.
   */
  createGameSession(params: GameLift.CreateGameSessionInput, callback?: (err: AWSError, data: GameLift.CreateGameSessionOutput) => void): Request<GameLift.CreateGameSessionOutput, AWSError>;
  /**
   * Creates a multiplayer game session for players. This action creates a game session record and assigns the new session to an instance in the specified fleet, which initializes a new server process to host the game session. A fleet must be in an ACTIVE status before a game session can be created in it. To create a game session, specify either a fleet ID or an alias ID and indicate the maximum number of players the game session allows. You can also provide a name and a set of properties for your game (optional). If successful, a GameSession object is returned containing session properties, including an IP address. By default, newly created game sessions are set to accept adding any new players to the game session. Use UpdateGameSession to change the creation policy.
   */
  createGameSession(callback?: (err: AWSError, data: GameLift.CreateGameSessionOutput) => void): Request<GameLift.CreateGameSessionOutput, AWSError>;
  /**
   * Adds a player to a game session and creates a player session record. A game session must be in an ACTIVE status, have a creation policy of ALLOW_ALL, and have an open player slot before players can be added to the session. To create a player session, specify a game session ID and player ID. If successful, the player is added to the game session and a new PlayerSession object is returned. 
   */
  createPlayerSession(params: GameLift.CreatePlayerSessionInput, callback?: (err: AWSError, data: GameLift.CreatePlayerSessionOutput) => void): Request<GameLift.CreatePlayerSessionOutput, AWSError>;
  /**
   * Adds a player to a game session and creates a player session record. A game session must be in an ACTIVE status, have a creation policy of ALLOW_ALL, and have an open player slot before players can be added to the session. To create a player session, specify a game session ID and player ID. If successful, the player is added to the game session and a new PlayerSession object is returned. 
   */
  createPlayerSession(callback?: (err: AWSError, data: GameLift.CreatePlayerSessionOutput) => void): Request<GameLift.CreatePlayerSessionOutput, AWSError>;
  /**
   * Adds a group of players to a game session. Similar to CreatePlayerSession, this action allows you to add multiple players in a single call, which is useful for games that provide party and/or matchmaking features. A game session must be in an ACTIVE status, have a creation policy of ALLOW_ALL, and have an open player slot before players can be added to the session. To create player sessions, specify a game session ID and a list of player IDs. If successful, the players are added to the game session and a set of new PlayerSession objects is returned. 
   */
  createPlayerSessions(params: GameLift.CreatePlayerSessionsInput, callback?: (err: AWSError, data: GameLift.CreatePlayerSessionsOutput) => void): Request<GameLift.CreatePlayerSessionsOutput, AWSError>;
  /**
   * Adds a group of players to a game session. Similar to CreatePlayerSession, this action allows you to add multiple players in a single call, which is useful for games that provide party and/or matchmaking features. A game session must be in an ACTIVE status, have a creation policy of ALLOW_ALL, and have an open player slot before players can be added to the session. To create player sessions, specify a game session ID and a list of player IDs. If successful, the players are added to the game session and a set of new PlayerSession objects is returned. 
   */
  createPlayerSessions(callback?: (err: AWSError, data: GameLift.CreatePlayerSessionsOutput) => void): Request<GameLift.CreatePlayerSessionsOutput, AWSError>;
  /**
   * Deletes an alias. This action removes all record of the alias; game clients attempting to access a server process using the deleted alias receive an error. To delete an alias, specify the alias ID to be deleted.
   */
  deleteAlias(params: GameLift.DeleteAliasInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an alias. This action removes all record of the alias; game clients attempting to access a server process using the deleted alias receive an error. To delete an alias, specify the alias ID to be deleted.
   */
  deleteAlias(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a build. This action permanently deletes the build record and any uploaded build files. To delete a build, specify its ID. Deleting a build does not affect the status of any active fleets using the build, but you can no longer create new fleets with the deleted build.
   */
  deleteBuild(params: GameLift.DeleteBuildInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a build. This action permanently deletes the build record and any uploaded build files. To delete a build, specify its ID. Deleting a build does not affect the status of any active fleets using the build, but you can no longer create new fleets with the deleted build.
   */
  deleteBuild(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes everything related to a fleet. Before deleting a fleet, you must set the fleet's desired capacity to zero. See UpdateFleetCapacity. This action removes the fleet's resources and the fleet record. Once a fleet is deleted, you can no longer use that fleet.
   */
  deleteFleet(params: GameLift.DeleteFleetInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes everything related to a fleet. Before deleting a fleet, you must set the fleet's desired capacity to zero. See UpdateFleetCapacity. This action removes the fleet's resources and the fleet record. Once a fleet is deleted, you can no longer use that fleet.
   */
  deleteFleet(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a fleet scaling policy. This action means that the policy is no longer in force and removes all record of it. To delete a scaling policy, specify both the scaling policy name and the fleet ID it is associated with. 
   */
  deleteScalingPolicy(params: GameLift.DeleteScalingPolicyInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a fleet scaling policy. This action means that the policy is no longer in force and removes all record of it. To delete a scaling policy, specify both the scaling policy name and the fleet ID it is associated with. 
   */
  deleteScalingPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves properties for a specified alias. To get the alias, specify an alias ID. If successful, an Alias object is returned.
   */
  describeAlias(params: GameLift.DescribeAliasInput, callback?: (err: AWSError, data: GameLift.DescribeAliasOutput) => void): Request<GameLift.DescribeAliasOutput, AWSError>;
  /**
   * Retrieves properties for a specified alias. To get the alias, specify an alias ID. If successful, an Alias object is returned.
   */
  describeAlias(callback?: (err: AWSError, data: GameLift.DescribeAliasOutput) => void): Request<GameLift.DescribeAliasOutput, AWSError>;
  /**
   * Retrieves properties for a build. To get a build record, specify a build ID. If successful, an object containing the build properties is returned.
   */
  describeBuild(params: GameLift.DescribeBuildInput, callback?: (err: AWSError, data: GameLift.DescribeBuildOutput) => void): Request<GameLift.DescribeBuildOutput, AWSError>;
  /**
   * Retrieves properties for a build. To get a build record, specify a build ID. If successful, an object containing the build properties is returned.
   */
  describeBuild(callback?: (err: AWSError, data: GameLift.DescribeBuildOutput) => void): Request<GameLift.DescribeBuildOutput, AWSError>;
  /**
   * Retrieves the following information for the specified EC2 instance type:  maximum number of instances allowed per AWS account (service limit) current usage level for the AWS account   Service limits vary depending on region. Available regions for GameLift can be found in the AWS Management Console for GameLift (see the drop-down list in the upper right corner).
   */
  describeEC2InstanceLimits(params: GameLift.DescribeEC2InstanceLimitsInput, callback?: (err: AWSError, data: GameLift.DescribeEC2InstanceLimitsOutput) => void): Request<GameLift.DescribeEC2InstanceLimitsOutput, AWSError>;
  /**
   * Retrieves the following information for the specified EC2 instance type:  maximum number of instances allowed per AWS account (service limit) current usage level for the AWS account   Service limits vary depending on region. Available regions for GameLift can be found in the AWS Management Console for GameLift (see the drop-down list in the upper right corner).
   */
  describeEC2InstanceLimits(callback?: (err: AWSError, data: GameLift.DescribeEC2InstanceLimitsOutput) => void): Request<GameLift.DescribeEC2InstanceLimitsOutput, AWSError>;
  /**
   * Retrieves fleet properties, including metadata, status, and configuration, for one or more fleets. You can request attributes for all fleets, or specify a list of one or more fleet IDs. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a FleetAttributes object is returned for each requested fleet ID. When specifying a list of fleet IDs, attribute objects are returned only for fleets that currently exist.   Some API actions may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed. 
   */
  describeFleetAttributes(params: GameLift.DescribeFleetAttributesInput, callback?: (err: AWSError, data: GameLift.DescribeFleetAttributesOutput) => void): Request<GameLift.DescribeFleetAttributesOutput, AWSError>;
  /**
   * Retrieves fleet properties, including metadata, status, and configuration, for one or more fleets. You can request attributes for all fleets, or specify a list of one or more fleet IDs. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a FleetAttributes object is returned for each requested fleet ID. When specifying a list of fleet IDs, attribute objects are returned only for fleets that currently exist.   Some API actions may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed. 
   */
  describeFleetAttributes(callback?: (err: AWSError, data: GameLift.DescribeFleetAttributesOutput) => void): Request<GameLift.DescribeFleetAttributesOutput, AWSError>;
  /**
   * Retrieves the current status of fleet capacity for one or more fleets. This information includes the number of instances that have been requested for the fleet and the number currently active. You can request capacity for all fleets, or specify a list of one or more fleet IDs. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a FleetCapacity object is returned for each requested fleet ID. When specifying a list of fleet IDs, attribute objects are returned only for fleets that currently exist.   Some API actions may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed. 
   */
  describeFleetCapacity(params: GameLift.DescribeFleetCapacityInput, callback?: (err: AWSError, data: GameLift.DescribeFleetCapacityOutput) => void): Request<GameLift.DescribeFleetCapacityOutput, AWSError>;
  /**
   * Retrieves the current status of fleet capacity for one or more fleets. This information includes the number of instances that have been requested for the fleet and the number currently active. You can request capacity for all fleets, or specify a list of one or more fleet IDs. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a FleetCapacity object is returned for each requested fleet ID. When specifying a list of fleet IDs, attribute objects are returned only for fleets that currently exist.   Some API actions may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed. 
   */
  describeFleetCapacity(callback?: (err: AWSError, data: GameLift.DescribeFleetCapacityOutput) => void): Request<GameLift.DescribeFleetCapacityOutput, AWSError>;
  /**
   * Retrieves entries from the specified fleet's event log. You can specify a time range to limit the result set. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a collection of event log entries matching the request are returned.
   */
  describeFleetEvents(params: GameLift.DescribeFleetEventsInput, callback?: (err: AWSError, data: GameLift.DescribeFleetEventsOutput) => void): Request<GameLift.DescribeFleetEventsOutput, AWSError>;
  /**
   * Retrieves entries from the specified fleet's event log. You can specify a time range to limit the result set. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a collection of event log entries matching the request are returned.
   */
  describeFleetEvents(callback?: (err: AWSError, data: GameLift.DescribeFleetEventsOutput) => void): Request<GameLift.DescribeFleetEventsOutput, AWSError>;
  /**
   * Retrieves the inbound connection permissions for a fleet. Connection permissions include a range of IP addresses and port settings that incoming traffic can use to access server processes in the fleet. To get a fleet's inbound connection permissions, specify a fleet ID. If successful, a collection of IpPermission objects is returned for the requested fleet ID. If the requested fleet has been deleted, the result set is empty.
   */
  describeFleetPortSettings(params: GameLift.DescribeFleetPortSettingsInput, callback?: (err: AWSError, data: GameLift.DescribeFleetPortSettingsOutput) => void): Request<GameLift.DescribeFleetPortSettingsOutput, AWSError>;
  /**
   * Retrieves the inbound connection permissions for a fleet. Connection permissions include a range of IP addresses and port settings that incoming traffic can use to access server processes in the fleet. To get a fleet's inbound connection permissions, specify a fleet ID. If successful, a collection of IpPermission objects is returned for the requested fleet ID. If the requested fleet has been deleted, the result set is empty.
   */
  describeFleetPortSettings(callback?: (err: AWSError, data: GameLift.DescribeFleetPortSettingsOutput) => void): Request<GameLift.DescribeFleetPortSettingsOutput, AWSError>;
  /**
   * Retrieves utilization statistics for one or more fleets. You can request utilization data for all fleets, or specify a list of one or more fleet IDs. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a FleetUtilization object is returned for each requested fleet ID. When specifying a list of fleet IDs, utilization objects are returned only for fleets that currently exist.   Some API actions may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed. 
   */
  describeFleetUtilization(params: GameLift.DescribeFleetUtilizationInput, callback?: (err: AWSError, data: GameLift.DescribeFleetUtilizationOutput) => void): Request<GameLift.DescribeFleetUtilizationOutput, AWSError>;
  /**
   * Retrieves utilization statistics for one or more fleets. You can request utilization data for all fleets, or specify a list of one or more fleet IDs. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a FleetUtilization object is returned for each requested fleet ID. When specifying a list of fleet IDs, utilization objects are returned only for fleets that currently exist.   Some API actions may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed. 
   */
  describeFleetUtilization(callback?: (err: AWSError, data: GameLift.DescribeFleetUtilizationOutput) => void): Request<GameLift.DescribeFleetUtilizationOutput, AWSError>;
  /**
   * Retrieves properties, including the protection policy in force, for one or more game sessions. This action can be used in several ways: (1) provide a GameSessionId to request details for a specific game session; (2) provide either a FleetId or an AliasId to request properties for all game sessions running on a fleet.  To get game session record(s), specify just one of the following: game session ID, fleet ID, or alias ID. You can filter this request by game session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a GameSessionDetail object is returned for each session matching the request.
   */
  describeGameSessionDetails(params: GameLift.DescribeGameSessionDetailsInput, callback?: (err: AWSError, data: GameLift.DescribeGameSessionDetailsOutput) => void): Request<GameLift.DescribeGameSessionDetailsOutput, AWSError>;
  /**
   * Retrieves properties, including the protection policy in force, for one or more game sessions. This action can be used in several ways: (1) provide a GameSessionId to request details for a specific game session; (2) provide either a FleetId or an AliasId to request properties for all game sessions running on a fleet.  To get game session record(s), specify just one of the following: game session ID, fleet ID, or alias ID. You can filter this request by game session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a GameSessionDetail object is returned for each session matching the request.
   */
  describeGameSessionDetails(callback?: (err: AWSError, data: GameLift.DescribeGameSessionDetailsOutput) => void): Request<GameLift.DescribeGameSessionDetailsOutput, AWSError>;
  /**
   * Retrieves properties for one or more game sessions. This action can be used in several ways: (1) provide a GameSessionId to request properties for a specific game session; (2) provide a FleetId or an AliasId to request properties for all game sessions running on a fleet.  To get game session record(s), specify just one of the following: game session ID, fleet ID, or alias ID. You can filter this request by game session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a GameSession object is returned for each session matching the request.
   */
  describeGameSessions(params: GameLift.DescribeGameSessionsInput, callback?: (err: AWSError, data: GameLift.DescribeGameSessionsOutput) => void): Request<GameLift.DescribeGameSessionsOutput, AWSError>;
  /**
   * Retrieves properties for one or more game sessions. This action can be used in several ways: (1) provide a GameSessionId to request properties for a specific game session; (2) provide a FleetId or an AliasId to request properties for all game sessions running on a fleet.  To get game session record(s), specify just one of the following: game session ID, fleet ID, or alias ID. You can filter this request by game session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a GameSession object is returned for each session matching the request.
   */
  describeGameSessions(callback?: (err: AWSError, data: GameLift.DescribeGameSessionsOutput) => void): Request<GameLift.DescribeGameSessionsOutput, AWSError>;
  /**
   * Retrieves properties for one or more player sessions. This action can be used in several ways: (1) provide a PlayerSessionId parameter to request properties for a specific player session; (2) provide a GameSessionId parameter to request properties for all player sessions in the specified game session; (3) provide a PlayerId parameter to request properties for all player sessions of a specified player.  To get game session record(s), specify only one of the following: a player session ID, a game session ID, or a player ID. You can filter this request by player session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a PlayerSession object is returned for each session matching the request.
   */
  describePlayerSessions(params: GameLift.DescribePlayerSessionsInput, callback?: (err: AWSError, data: GameLift.DescribePlayerSessionsOutput) => void): Request<GameLift.DescribePlayerSessionsOutput, AWSError>;
  /**
   * Retrieves properties for one or more player sessions. This action can be used in several ways: (1) provide a PlayerSessionId parameter to request properties for a specific player session; (2) provide a GameSessionId parameter to request properties for all player sessions in the specified game session; (3) provide a PlayerId parameter to request properties for all player sessions of a specified player.  To get game session record(s), specify only one of the following: a player session ID, a game session ID, or a player ID. You can filter this request by player session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a PlayerSession object is returned for each session matching the request.
   */
  describePlayerSessions(callback?: (err: AWSError, data: GameLift.DescribePlayerSessionsOutput) => void): Request<GameLift.DescribePlayerSessionsOutput, AWSError>;
  /**
   * Retrieves the current runtime configuration for the specified fleet. The runtime configuration tells GameLift how to launch server processes on instances in the fleet.
   */
  describeRuntimeConfiguration(params: GameLift.DescribeRuntimeConfigurationInput, callback?: (err: AWSError, data: GameLift.DescribeRuntimeConfigurationOutput) => void): Request<GameLift.DescribeRuntimeConfigurationOutput, AWSError>;
  /**
   * Retrieves the current runtime configuration for the specified fleet. The runtime configuration tells GameLift how to launch server processes on instances in the fleet.
   */
  describeRuntimeConfiguration(callback?: (err: AWSError, data: GameLift.DescribeRuntimeConfigurationOutput) => void): Request<GameLift.DescribeRuntimeConfigurationOutput, AWSError>;
  /**
   * Retrieves all scaling policies applied to a fleet.  To get a fleet's scaling policies, specify the fleet ID. You can filter this request by policy status, such as to retrieve only active scaling policies. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, set of ScalingPolicy objects is returned for the fleet.
   */
  describeScalingPolicies(params: GameLift.DescribeScalingPoliciesInput, callback?: (err: AWSError, data: GameLift.DescribeScalingPoliciesOutput) => void): Request<GameLift.DescribeScalingPoliciesOutput, AWSError>;
  /**
   * Retrieves all scaling policies applied to a fleet.  To get a fleet's scaling policies, specify the fleet ID. You can filter this request by policy status, such as to retrieve only active scaling policies. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, set of ScalingPolicy objects is returned for the fleet.
   */
  describeScalingPolicies(callback?: (err: AWSError, data: GameLift.DescribeScalingPoliciesOutput) => void): Request<GameLift.DescribeScalingPoliciesOutput, AWSError>;
  /**
   * Retrieves the location of stored game session logs for a specified game session. When a game session is terminated, Amazon GameLift automatically stores the logs in Amazon S3. Use this URL to download the logs.  See the AWS Service Limits page for maximum log file sizes. Log files that exceed this limit are not saved. 
   */
  getGameSessionLogUrl(params: GameLift.GetGameSessionLogUrlInput, callback?: (err: AWSError, data: GameLift.GetGameSessionLogUrlOutput) => void): Request<GameLift.GetGameSessionLogUrlOutput, AWSError>;
  /**
   * Retrieves the location of stored game session logs for a specified game session. When a game session is terminated, Amazon GameLift automatically stores the logs in Amazon S3. Use this URL to download the logs.  See the AWS Service Limits page for maximum log file sizes. Log files that exceed this limit are not saved. 
   */
  getGameSessionLogUrl(callback?: (err: AWSError, data: GameLift.GetGameSessionLogUrlOutput) => void): Request<GameLift.GetGameSessionLogUrlOutput, AWSError>;
  /**
   * Retrieves a collection of alias records for this AWS account. You can filter the result set by alias name and/or routing strategy type. Use the pagination parameters to retrieve results in sequential pages.   Aliases are not listed in any particular order. 
   */
  listAliases(params: GameLift.ListAliasesInput, callback?: (err: AWSError, data: GameLift.ListAliasesOutput) => void): Request<GameLift.ListAliasesOutput, AWSError>;
  /**
   * Retrieves a collection of alias records for this AWS account. You can filter the result set by alias name and/or routing strategy type. Use the pagination parameters to retrieve results in sequential pages.   Aliases are not listed in any particular order. 
   */
  listAliases(callback?: (err: AWSError, data: GameLift.ListAliasesOutput) => void): Request<GameLift.ListAliasesOutput, AWSError>;
  /**
   * Retrieves build records for all builds associated with the AWS account in use. You can limit results to builds that are in a specific status by using the Status parameter. Use the pagination parameters to retrieve results in a set of sequential pages.   Build records are not listed in any particular order. 
   */
  listBuilds(params: GameLift.ListBuildsInput, callback?: (err: AWSError, data: GameLift.ListBuildsOutput) => void): Request<GameLift.ListBuildsOutput, AWSError>;
  /**
   * Retrieves build records for all builds associated with the AWS account in use. You can limit results to builds that are in a specific status by using the Status parameter. Use the pagination parameters to retrieve results in a set of sequential pages.   Build records are not listed in any particular order. 
   */
  listBuilds(callback?: (err: AWSError, data: GameLift.ListBuildsOutput) => void): Request<GameLift.ListBuildsOutput, AWSError>;
  /**
   * Retrieves a collection of fleet records for this AWS account. You can filter the result set by build ID. Use the pagination parameters to retrieve results in sequential pages.   Fleet records are not listed in any particular order. 
   */
  listFleets(params: GameLift.ListFleetsInput, callback?: (err: AWSError, data: GameLift.ListFleetsOutput) => void): Request<GameLift.ListFleetsOutput, AWSError>;
  /**
   * Retrieves a collection of fleet records for this AWS account. You can filter the result set by build ID. Use the pagination parameters to retrieve results in sequential pages.   Fleet records are not listed in any particular order. 
   */
  listFleets(callback?: (err: AWSError, data: GameLift.ListFleetsOutput) => void): Request<GameLift.ListFleetsOutput, AWSError>;
  /**
   * Creates or updates a scaling policy for a fleet. An active scaling policy prompts Amazon GameLift to track a certain metric for a fleet and automatically change the fleet's capacity in specific circumstances. Each scaling policy contains one rule statement. Fleets can have multiple scaling policies in force simultaneously. A scaling policy rule statement has the following structure: If [MetricName] is [ComparisonOperator] [Threshold] for [EvaluationPeriods] minutes, then [ScalingAdjustmentType] to/by [ScalingAdjustment]. For example, this policy: "If the number of idle instances exceeds 20 for more than 15 minutes, then reduce the fleet capacity by 10 instances" could be implemented as the following rule statement:  If [IdleInstances] is [GreaterThanOrEqualToThreshold] [20] for [15] minutes, then [ChangeInCapacity] by [-10].  To create or update a scaling policy, specify a unique combination of name and fleet ID, and set the rule values. All parameters for this action are required. If successful, the policy name is returned. Scaling policies cannot be suspended or made inactive. To stop enforcing a scaling policy, call DeleteScalingPolicy.
   */
  putScalingPolicy(params: GameLift.PutScalingPolicyInput, callback?: (err: AWSError, data: GameLift.PutScalingPolicyOutput) => void): Request<GameLift.PutScalingPolicyOutput, AWSError>;
  /**
   * Creates or updates a scaling policy for a fleet. An active scaling policy prompts Amazon GameLift to track a certain metric for a fleet and automatically change the fleet's capacity in specific circumstances. Each scaling policy contains one rule statement. Fleets can have multiple scaling policies in force simultaneously. A scaling policy rule statement has the following structure: If [MetricName] is [ComparisonOperator] [Threshold] for [EvaluationPeriods] minutes, then [ScalingAdjustmentType] to/by [ScalingAdjustment]. For example, this policy: "If the number of idle instances exceeds 20 for more than 15 minutes, then reduce the fleet capacity by 10 instances" could be implemented as the following rule statement:  If [IdleInstances] is [GreaterThanOrEqualToThreshold] [20] for [15] minutes, then [ChangeInCapacity] by [-10].  To create or update a scaling policy, specify a unique combination of name and fleet ID, and set the rule values. All parameters for this action are required. If successful, the policy name is returned. Scaling policies cannot be suspended or made inactive. To stop enforcing a scaling policy, call DeleteScalingPolicy.
   */
  putScalingPolicy(callback?: (err: AWSError, data: GameLift.PutScalingPolicyOutput) => void): Request<GameLift.PutScalingPolicyOutput, AWSError>;
  /**
   * Retrieves a fresh set of upload credentials and the assigned Amazon S3 storage location for a specific build. Valid credentials are required to upload your game build files to Amazon S3.  Call this action only if you need credentials for a build created with CreateBuild. This is a rare situation; in most cases, builds are created using the CLI command upload-build, which creates a build record and also uploads build files.   Upload credentials are returned when you create the build, but they have a limited lifespan. You can get fresh credentials and use them to re-upload game files until the status of that build changes to READY. Once this happens, you must create a brand new build.
   */
  requestUploadCredentials(params: GameLift.RequestUploadCredentialsInput, callback?: (err: AWSError, data: GameLift.RequestUploadCredentialsOutput) => void): Request<GameLift.RequestUploadCredentialsOutput, AWSError>;
  /**
   * Retrieves a fresh set of upload credentials and the assigned Amazon S3 storage location for a specific build. Valid credentials are required to upload your game build files to Amazon S3.  Call this action only if you need credentials for a build created with CreateBuild. This is a rare situation; in most cases, builds are created using the CLI command upload-build, which creates a build record and also uploads build files.   Upload credentials are returned when you create the build, but they have a limited lifespan. You can get fresh credentials and use them to re-upload game files until the status of that build changes to READY. Once this happens, you must create a brand new build.
   */
  requestUploadCredentials(callback?: (err: AWSError, data: GameLift.RequestUploadCredentialsOutput) => void): Request<GameLift.RequestUploadCredentialsOutput, AWSError>;
  /**
   * Retrieves the fleet ID that a specified alias is currently pointing to. 
   */
  resolveAlias(params: GameLift.ResolveAliasInput, callback?: (err: AWSError, data: GameLift.ResolveAliasOutput) => void): Request<GameLift.ResolveAliasOutput, AWSError>;
  /**
   * Retrieves the fleet ID that a specified alias is currently pointing to. 
   */
  resolveAlias(callback?: (err: AWSError, data: GameLift.ResolveAliasOutput) => void): Request<GameLift.ResolveAliasOutput, AWSError>;
  /**
   * Retrieves a list of game sessions in a fleet that match a set of search criteria and sorts them in a specified order. Currently game session searches are limited to a single fleet. Search results include only game sessions that are in ACTIVE status. You can search or sort by the following game session attributes:   gameSessionId -- ID value assigned to a game session. This unique value is returned in a GameSession object when a new game session is created.   gameSessionName -- Name assigned to a game session. This value is set when requesting a new game session with CreateGameSession or updating with UpdateGameSession. Game session names do not need to be unique to a game session.  creationTimeMillis -- Value indicating when a game session was created. It is expressed in Unix time as milliseconds.  playerSessionCount -- Number of players currently connected to a game session. This value changes rapidly as players join the session or drop out.  maximumSessions -- Maximum number of player sessions allowed for a game session. This value is set when requesting a new game session with CreateGameSession or updating with UpdateGameSession.  hasAvailablePlayerSessions -- Boolean value indicating whether or not a game session has reached its maximum number of players. When searching with this attribute, the search value must be true or false. It is highly recommended that all search requests include this filter attribute to optimize search performance and return only sessions that players can join.   To search or sort, specify either a fleet ID or an alias ID, and provide a search filter expression, a sort expression, or both. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a collection of GameSession objects matching the request is returned.  Returned values for playerSessionCount and hasAvailablePlayerSessions change quickly as players join sessions and others drop out. Results should be considered a snapshot in time. Be sure to refresh search results often, and handle sessions that fill up before a player can join.  
   */
  searchGameSessions(params: GameLift.SearchGameSessionsInput, callback?: (err: AWSError, data: GameLift.SearchGameSessionsOutput) => void): Request<GameLift.SearchGameSessionsOutput, AWSError>;
  /**
   * Retrieves a list of game sessions in a fleet that match a set of search criteria and sorts them in a specified order. Currently game session searches are limited to a single fleet. Search results include only game sessions that are in ACTIVE status. You can search or sort by the following game session attributes:   gameSessionId -- ID value assigned to a game session. This unique value is returned in a GameSession object when a new game session is created.   gameSessionName -- Name assigned to a game session. This value is set when requesting a new game session with CreateGameSession or updating with UpdateGameSession. Game session names do not need to be unique to a game session.  creationTimeMillis -- Value indicating when a game session was created. It is expressed in Unix time as milliseconds.  playerSessionCount -- Number of players currently connected to a game session. This value changes rapidly as players join the session or drop out.  maximumSessions -- Maximum number of player sessions allowed for a game session. This value is set when requesting a new game session with CreateGameSession or updating with UpdateGameSession.  hasAvailablePlayerSessions -- Boolean value indicating whether or not a game session has reached its maximum number of players. When searching with this attribute, the search value must be true or false. It is highly recommended that all search requests include this filter attribute to optimize search performance and return only sessions that players can join.   To search or sort, specify either a fleet ID or an alias ID, and provide a search filter expression, a sort expression, or both. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a collection of GameSession objects matching the request is returned.  Returned values for playerSessionCount and hasAvailablePlayerSessions change quickly as players join sessions and others drop out. Results should be considered a snapshot in time. Be sure to refresh search results often, and handle sessions that fill up before a player can join.  
   */
  searchGameSessions(callback?: (err: AWSError, data: GameLift.SearchGameSessionsOutput) => void): Request<GameLift.SearchGameSessionsOutput, AWSError>;
  /**
   * Updates properties for an alias. To update properties, specify the alias ID to be updated and provide the information to be changed. To reassign an alias to another fleet, provide an updated routing strategy. If successful, the updated alias record is returned.
   */
  updateAlias(params: GameLift.UpdateAliasInput, callback?: (err: AWSError, data: GameLift.UpdateAliasOutput) => void): Request<GameLift.UpdateAliasOutput, AWSError>;
  /**
   * Updates properties for an alias. To update properties, specify the alias ID to be updated and provide the information to be changed. To reassign an alias to another fleet, provide an updated routing strategy. If successful, the updated alias record is returned.
   */
  updateAlias(callback?: (err: AWSError, data: GameLift.UpdateAliasOutput) => void): Request<GameLift.UpdateAliasOutput, AWSError>;
  /**
   * Updates metadata in a build record, including the build name and version. To update the metadata, specify the build ID to update and provide the new values. If successful, a build object containing the updated metadata is returned. 
   */
  updateBuild(params: GameLift.UpdateBuildInput, callback?: (err: AWSError, data: GameLift.UpdateBuildOutput) => void): Request<GameLift.UpdateBuildOutput, AWSError>;
  /**
   * Updates metadata in a build record, including the build name and version. To update the metadata, specify the build ID to update and provide the new values. If successful, a build object containing the updated metadata is returned. 
   */
  updateBuild(callback?: (err: AWSError, data: GameLift.UpdateBuildOutput) => void): Request<GameLift.UpdateBuildOutput, AWSError>;
  /**
   * Updates fleet properties, including name and description, for a fleet. To update metadata, specify the fleet ID and the property values you want to change. If successful, the fleet ID for the updated fleet is returned.
   */
  updateFleetAttributes(params: GameLift.UpdateFleetAttributesInput, callback?: (err: AWSError, data: GameLift.UpdateFleetAttributesOutput) => void): Request<GameLift.UpdateFleetAttributesOutput, AWSError>;
  /**
   * Updates fleet properties, including name and description, for a fleet. To update metadata, specify the fleet ID and the property values you want to change. If successful, the fleet ID for the updated fleet is returned.
   */
  updateFleetAttributes(callback?: (err: AWSError, data: GameLift.UpdateFleetAttributesOutput) => void): Request<GameLift.UpdateFleetAttributesOutput, AWSError>;
  /**
   * Updates capacity settings for a fleet. Use this action to specify the number of EC2 instances (hosts) that you want this fleet to contain. Before calling this action, you may want to call DescribeEC2InstanceLimits to get the maximum capacity based on the fleet's EC2 instance type. If you're using autoscaling (see PutScalingPolicy), you may want to specify a minimum and/or maximum capacity. If you don't provide these, autoscaling can set capacity anywhere between zero and the service limits. To update fleet capacity, specify the fleet ID and the number of instances you want the fleet to host. If successful, Amazon GameLift starts or terminates instances so that the fleet's active instance count matches the desired instance count. You can view a fleet's current capacity information by calling DescribeFleetCapacity. If the desired instance count is higher than the instance type's limit, the "Limit Exceeded" exception occurs.
   */
  updateFleetCapacity(params: GameLift.UpdateFleetCapacityInput, callback?: (err: AWSError, data: GameLift.UpdateFleetCapacityOutput) => void): Request<GameLift.UpdateFleetCapacityOutput, AWSError>;
  /**
   * Updates capacity settings for a fleet. Use this action to specify the number of EC2 instances (hosts) that you want this fleet to contain. Before calling this action, you may want to call DescribeEC2InstanceLimits to get the maximum capacity based on the fleet's EC2 instance type. If you're using autoscaling (see PutScalingPolicy), you may want to specify a minimum and/or maximum capacity. If you don't provide these, autoscaling can set capacity anywhere between zero and the service limits. To update fleet capacity, specify the fleet ID and the number of instances you want the fleet to host. If successful, Amazon GameLift starts or terminates instances so that the fleet's active instance count matches the desired instance count. You can view a fleet's current capacity information by calling DescribeFleetCapacity. If the desired instance count is higher than the instance type's limit, the "Limit Exceeded" exception occurs.
   */
  updateFleetCapacity(callback?: (err: AWSError, data: GameLift.UpdateFleetCapacityOutput) => void): Request<GameLift.UpdateFleetCapacityOutput, AWSError>;
  /**
   * Updates port settings for a fleet. To update settings, specify the fleet ID to be updated and list the permissions you want to update. List the permissions you want to add in InboundPermissionAuthorizations, and permissions you want to remove in InboundPermissionRevocations. Permissions to be removed must match existing fleet permissions. If successful, the fleet ID for the updated fleet is returned.
   */
  updateFleetPortSettings(params: GameLift.UpdateFleetPortSettingsInput, callback?: (err: AWSError, data: GameLift.UpdateFleetPortSettingsOutput) => void): Request<GameLift.UpdateFleetPortSettingsOutput, AWSError>;
  /**
   * Updates port settings for a fleet. To update settings, specify the fleet ID to be updated and list the permissions you want to update. List the permissions you want to add in InboundPermissionAuthorizations, and permissions you want to remove in InboundPermissionRevocations. Permissions to be removed must match existing fleet permissions. If successful, the fleet ID for the updated fleet is returned.
   */
  updateFleetPortSettings(callback?: (err: AWSError, data: GameLift.UpdateFleetPortSettingsOutput) => void): Request<GameLift.UpdateFleetPortSettingsOutput, AWSError>;
  /**
   * Updates game session properties. This includes the session name, maximum player count, protection policy, which controls whether or not an active game session can be terminated during a scale-down event, and the player session creation policy, which controls whether or not new players can join the session. To update a game session, specify the game session ID and the values you want to change. If successful, an updated GameSession object is returned. 
   */
  updateGameSession(params: GameLift.UpdateGameSessionInput, callback?: (err: AWSError, data: GameLift.UpdateGameSessionOutput) => void): Request<GameLift.UpdateGameSessionOutput, AWSError>;
  /**
   * Updates game session properties. This includes the session name, maximum player count, protection policy, which controls whether or not an active game session can be terminated during a scale-down event, and the player session creation policy, which controls whether or not new players can join the session. To update a game session, specify the game session ID and the values you want to change. If successful, an updated GameSession object is returned. 
   */
  updateGameSession(callback?: (err: AWSError, data: GameLift.UpdateGameSessionOutput) => void): Request<GameLift.UpdateGameSessionOutput, AWSError>;
  /**
   * Updates the current runtime configuration for the specified fleet, which tells GameLift how to launch server processes on instances in the fleet. You can update a fleet's runtime configuration at any time after the fleet is created; it does not need to be in an ACTIVE status. To update runtime configuration, specify the fleet ID and provide a RuntimeConfiguration object with the updated collection of server process configurations. Each instance in a GameLift fleet checks regularly for an updated runtime configuration and changes how it launches server processes to comply with the latest version. Existing server processes are not affected by the update; they continue to run until they end, while GameLift simply adds new server processes to fit the current runtime configuration. As a result, the runtime configuration changes are applied gradually as existing processes shut down and new processes are launched in GameLift's normal process recycling activity.
   */
  updateRuntimeConfiguration(params: GameLift.UpdateRuntimeConfigurationInput, callback?: (err: AWSError, data: GameLift.UpdateRuntimeConfigurationOutput) => void): Request<GameLift.UpdateRuntimeConfigurationOutput, AWSError>;
  /**
   * Updates the current runtime configuration for the specified fleet, which tells GameLift how to launch server processes on instances in the fleet. You can update a fleet's runtime configuration at any time after the fleet is created; it does not need to be in an ACTIVE status. To update runtime configuration, specify the fleet ID and provide a RuntimeConfiguration object with the updated collection of server process configurations. Each instance in a GameLift fleet checks regularly for an updated runtime configuration and changes how it launches server processes to comply with the latest version. Existing server processes are not affected by the update; they continue to run until they end, while GameLift simply adds new server processes to fit the current runtime configuration. As a result, the runtime configuration changes are applied gradually as existing processes shut down and new processes are launched in GameLift's normal process recycling activity.
   */
  updateRuntimeConfiguration(callback?: (err: AWSError, data: GameLift.UpdateRuntimeConfigurationOutput) => void): Request<GameLift.UpdateRuntimeConfigurationOutput, AWSError>;
}
declare namespace GameLift {
  export interface Alias {
    /**
     * Unique identifier for a fleet alias.
     */
    AliasId?: AliasId;
    /**
     * Descriptive label associated with an alias. Alias names do not need to be unique.
     */
    Name?: FreeText;
    /**
     * Human-readable description of an alias.
     */
    Description?: FreeText;
    RoutingStrategy?: RoutingStrategy;
    /**
     * Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057".
     */
    CreationTime?: Timestamp;
    /**
     * Time stamp indicating when this data object was last modified. Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057".
     */
    LastUpdatedTime?: Timestamp;
  }
  export type AliasId = string;
  export type AliasList = Alias[];
  export interface AwsCredentials {
    /**
     * Access key for an AWS account.
     */
    AccessKeyId?: NonEmptyString;
    /**
     * Secret key for an AWS account.
     */
    SecretAccessKey?: NonEmptyString;
    /**
     * Token specific to a build ID.
     */
    SessionToken?: NonEmptyString;
  }
  export interface Build {
    /**
     * Unique identifier for a build.
     */
    BuildId?: BuildId;
    /**
     * Descriptive label associated with a build. Build names do not need to be unique. It can be set using CreateBuild or UpdateBuild.
     */
    Name?: FreeText;
    /**
     * Version associated with this build. Version strings do not need to be unique to a build. This value can be set using CreateBuild or UpdateBuild.
     */
    Version?: FreeText;
    /**
     * Current status of the build. Possible build statuses include the following: INITIALIZED – A new build has been defined, but no files have been uploaded. You cannot create fleets for builds that are in this status. When a build is successfully created, the build status is set to this value. READY – The game build has been successfully uploaded. You can now create new fleets for this build.FAILED – The game build upload failed. You cannot create new fleets for this build. 
     */
    Status?: BuildStatus;
    /**
     * File size of the uploaded game build, expressed in bytes. When the build status is INITIALIZED, this value is 0.
     */
    SizeOnDisk?: PositiveLong;
    /**
     * Operating system that the game server binaries are built to run on. This value determines the type of fleet resources that you can use for this build.
     */
    OperatingSystem?: OperatingSystem;
    /**
     * Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057".
     */
    CreationTime?: Timestamp;
  }
  export type BuildId = string;
  export type BuildList = Build[];
  export type BuildStatus = string;
  export type ComparisonOperatorType = string;
  export interface CreateAliasInput {
    /**
     * Descriptive label associated with an alias. Alias names do not need to be unique.
     */
    Name: NonZeroAndMaxString;
    /**
     * Human-readable description of an alias.
     */
    Description?: NonZeroAndMaxString;
    /**
     * Object specifying the fleet and routing type to use for the alias.
     */
    RoutingStrategy?: RoutingStrategy;
  }
  export interface CreateAliasOutput {
    /**
     * Object containing the newly created alias record.
     */
    Alias?: Alias;
  }
  export interface CreateBuildInput {
    /**
     * Descriptive label associated with a build. Build names do not need to be unique. A build name can be changed later using UpdateBuild.
     */
    Name?: NonZeroAndMaxString;
    /**
     * Version associated with this build. Version strings do not need to be unique to a build. A build version can be changed later using UpdateBuild.
     */
    Version?: NonZeroAndMaxString;
    StorageLocation?: S3Location;
    /**
     * Operating system that the game server binaries are built to run on. This value determines the type of fleet resources that you can use for this build.
     */
    OperatingSystem?: OperatingSystem;
  }
  export interface CreateBuildOutput {
    /**
     * Set of properties for the newly created build.
     */
    Build?: Build;
    /**
     * AWS credentials required when uploading a game build to the storage location. These credentials have a limited lifespan and are valid only for the build they were issued for. If you need to get fresh credentials, call RequestUploadCredentials.
     */
    UploadCredentials?: AwsCredentials;
    /**
     * Amazon S3 path and key, identifying where the game build files are stored.
     */
    StorageLocation?: S3Location;
  }
  export interface CreateFleetInput {
    /**
     * Descriptive label associated with a fleet. Fleet names do not need to be unique.
     */
    Name: NonZeroAndMaxString;
    /**
     * Human-readable description of a fleet.
     */
    Description?: NonZeroAndMaxString;
    /**
     * Unique identifier of the build to be deployed on the new fleet. The build must have been successfully uploaded to GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created.
     */
    BuildId?: BuildId;
    /**
     * This parameter is no longer used. Instead, specify a server launch path using the RuntimeConfiguration parameter. (Requests that specify a server launch path and launch parameters instead of a runtime configuration will continue to work.)
     */
    ServerLaunchPath?: NonZeroAndMaxString;
    /**
     * This parameter is no longer used. Instead, specify server launch parameters in the RuntimeConfiguration parameter. (Requests that specify a server launch path and launch parameters instead of a runtime configuration will continue to work.)
     */
    ServerLaunchParameters?: NonZeroAndMaxString;
    /**
     * Location of default log files. When a server process is shut down, Amazon GameLift captures and stores any log files in this location. These logs are in addition to game session logs; see more on game session logs in the Amazon GameLift Developer Guide. If no default log path for a fleet is specified, GameLift will automatically upload logs stored on each instance at C:\game\logs. Use the GameLift console to access stored logs. 
     */
    LogPaths?: StringList;
    /**
     * Name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.
     */
    EC2InstanceType?: EC2InstanceType;
    /**
     * Range of IP addresses and port settings that permit inbound traffic to access server processes running on the fleet. If no inbound permissions are set, including both IP address range and port range, the server processes in the fleet cannot accept connections. You can specify one or more sets of permissions for a fleet.
     */
    EC2InboundPermissions?: IpPermissionsList;
    /**
     * Game session protection policy to apply to all instances in this fleet. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy using UpdateFleetAttributes, but this change will only affect sessions created after the policy change. You can also set protection for individual instances using UpdateGameSession. NoProtection – The game session can be terminated during a scale-down event. FullProtection – If the game session is in an ACTIVE status, it cannot be terminated during a scale-down event.
     */
    NewGameSessionProtectionPolicy?: ProtectionPolicy;
    /**
     * Instructions for launching server processes on each instance in the fleet. The runtime configuration for a fleet has a collection of server process configurations, one for each type of server process to run on an instance. A server process configuration specifies the location of the server executable, launch parameters, and the number of concurrent processes with that configuration to maintain on each instance. A CreateFleet request must include a runtime configuration with at least one server process configuration; otherwise the request will fail with an invalid request exception. (This parameter replaces the parameters ServerLaunchPath and ServerLaunchParameters; requests that contain values for these parameters instead of a runtime configuration will continue to work.) 
     */
    RuntimeConfiguration?: RuntimeConfiguration;
  }
  export interface CreateFleetOutput {
    /**
     * Properties for the newly created fleet.
     */
    FleetAttributes?: FleetAttributes;
  }
  export interface CreateGameSessionInput {
    /**
     * Unique identifier for a fleet. Each request must reference either a fleet ID or alias ID, but not both.
     */
    FleetId?: FleetId;
    /**
     * Unique identifier for a fleet alias. Each request must reference either a fleet ID or alias ID, but not both.
     */
    AliasId?: AliasId;
    /**
     * Maximum number of players that can be connected simultaneously to the game session. 
     */
    MaximumPlayerSessionCount: WholeNumber;
    /**
     * Descriptive label associated with a game session. Session names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
    /**
     * Set of properties used to administer a game session. These properties are passed to the server process hosting it. 
     */
    GameProperties?: GamePropertyList;
  }
  export interface CreateGameSessionOutput {
    /**
     * Object containing the newly created game session record.
     */
    GameSession?: GameSession;
  }
  export interface CreatePlayerSessionInput {
    /**
     * Unique identifier for a game session. Specify the game session you want to add a player to.
     */
    GameSessionId: GameSessionId;
    /**
     * Unique identifier for the player to be added.
     */
    PlayerId?: NonZeroAndMaxString;
  }
  export interface CreatePlayerSessionOutput {
    /**
     * Object containing the newly created player session record.
     */
    PlayerSession?: PlayerSession;
  }
  export interface CreatePlayerSessionsInput {
    /**
     * Unique identifier for a game session. 
     */
    GameSessionId: GameSessionId;
    /**
     * List of unique identifiers for the players to be added.
     */
    PlayerIds?: PlayerIdList;
  }
  export interface CreatePlayerSessionsOutput {
    /**
     * Collection of player session objects created for the added players.
     */
    PlayerSessions?: PlayerSessionList;
  }
  export interface DeleteAliasInput {
    /**
     * Unique identifier for a fleet alias. Specify the alias you want to delete. 
     */
    AliasId: AliasId;
  }
  export interface DeleteBuildInput {
    /**
     * Unique identifier for the build you want to delete. 
     */
    BuildId: BuildId;
  }
  export interface DeleteFleetInput {
    /**
     * Unique identifier for the fleet you want to delete.
     */
    FleetId: FleetId;
  }
  export interface DeleteScalingPolicyInput {
    /**
     * Descriptive label associated with a scaling policy. Policy names do not need to be unique.
     */
    Name: NonZeroAndMaxString;
    /**
     * Unique identifier for a fleet.
     */
    FleetId?: FleetId;
  }
  export interface DescribeAliasInput {
    /**
     * Unique identifier for a fleet alias. Specify the alias you want to retrieve. 
     */
    AliasId: AliasId;
  }
  export interface DescribeAliasOutput {
    /**
     * Object containing the requested alias.
     */
    Alias?: Alias;
  }
  export interface DescribeBuildInput {
    /**
     * Unique identifier of the build that you want to retrieve properties for. 
     */
    BuildId: BuildId;
  }
  export interface DescribeBuildOutput {
    /**
     * Set of properties describing the requested build.
     */
    Build?: Build;
  }
  export interface DescribeEC2InstanceLimitsInput {
    /**
     * Name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions. Leave this parameter blank to retrieve limits for all types.
     */
    EC2InstanceType?: EC2InstanceType;
  }
  export interface DescribeEC2InstanceLimitsOutput {
    /**
     * Object containing the maximum number of instances for the specified instance type.
     */
    EC2InstanceLimits?: EC2InstanceLimitList;
  }
  export interface DescribeFleetAttributesInput {
    /**
     * Unique identifiers for the fleet(s) that you want to retrieve attributes for. To request attributes for all fleets, leave this parameter empty.
     */
    FleetIds?: FleetIdList;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet IDs.
     */
    Limit?: PositiveInteger;
    /**
     * Token indicating the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet IDs.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeFleetAttributesOutput {
    /**
     * Collection of objects containing attribute metadata for each requested fleet ID. 
     */
    FleetAttributes?: FleetAttributesList;
    /**
     * Token indicating where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.  If a request has a limit that exactly matches the number of remaining results, a token is returned even though there are no more results to retrieve. 
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeFleetCapacityInput {
    /**
     * Unique identifier for the fleet(s) you want to retrieve capacity information for. To request capacity information for all fleets, leave this parameter empty.
     */
    FleetIds?: FleetIdList;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet IDs.
     */
    Limit?: PositiveInteger;
    /**
     * Token indicating the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet IDs.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeFleetCapacityOutput {
    /**
     * Collection of objects containing capacity information for each requested fleet ID. Leave this parameter empty to retrieve capacity information for all fleets.
     */
    FleetCapacity?: FleetCapacityList;
    /**
     * Token indicating where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.  If a request has a limit that exactly matches the number of remaining results, a token is returned even though there are no more results to retrieve. 
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeFleetEventsInput {
    /**
     * Unique identifier for the fleet to get event logs for. 
     */
    FleetId: FleetId;
    /**
     * Earliest date to retrieve event logs for. If no start time is specified, this call returns entries starting from when the fleet was created to the specified end time. Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057".
     */
    StartTime?: Timestamp;
    /**
     * Most recent date to retrieve event logs for. If no end time is specified, this call returns entries from the specified start time up to the present. Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057".
     */
    EndTime?: Timestamp;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * Token indicating the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeFleetEventsOutput {
    /**
     * Collection of objects containing event log entries for the specified fleet.
     */
    Events?: EventList;
    /**
     * Token indicating where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.  If a request has a limit that exactly matches the number of remaining results, a token is returned even though there are no more results to retrieve. 
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeFleetPortSettingsInput {
    /**
     * Unique identifier for the fleet you want to retrieve port settings for. 
     */
    FleetId: FleetId;
  }
  export interface DescribeFleetPortSettingsOutput {
    /**
     * Object containing port settings for the requested fleet ID.
     */
    InboundPermissions?: IpPermissionsList;
  }
  export interface DescribeFleetUtilizationInput {
    /**
     * Unique identifier for the fleet(s) you want to retrieve utilization data for. To request utilization data for all fleets, leave this parameter empty.
     */
    FleetIds?: FleetIdList;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet IDs.
     */
    Limit?: PositiveInteger;
    /**
     * Token indicating the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet IDs.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeFleetUtilizationOutput {
    /**
     * Collection of objects containing utilization information for each requested fleet ID.
     */
    FleetUtilization?: FleetUtilizationList;
    /**
     * Token indicating where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.  If a request has a limit that exactly matches the number of remaining results, a token is returned even though there are no more results to retrieve. 
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeGameSessionDetailsInput {
    /**
     * Unique identifier for a fleet. Specify a fleet to retrieve information on all game sessions active on the fleet.
     */
    FleetId?: FleetId;
    /**
     * Unique identifier for a game session. Specify the game session to retrieve information on.
     */
    GameSessionId?: GameSessionId;
    /**
     * Unique identifier for a fleet alias. Specify an alias to retrieve information on all game sessions active on the fleet.
     */
    AliasId?: AliasId;
    /**
     * Game session status to filter results on. Possible game session statuses include ACTIVE, TERMINATED, ACTIVATING and TERMINATING (the last two are transitory). 
     */
    StatusFilter?: NonZeroAndMaxString;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * Token indicating the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeGameSessionDetailsOutput {
    /**
     * Collection of objects containing game session properties and the protection policy currently in force for each session matching the request.
     */
    GameSessionDetails?: GameSessionDetailList;
    /**
     * Token indicating where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.  If a request has a limit that exactly matches the number of remaining results, a token is returned even though there are no more results to retrieve. 
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeGameSessionsInput {
    /**
     * Unique identifier for a fleet. Specify a fleet to retrieve information on all game sessions active on the fleet.
     */
    FleetId?: FleetId;
    /**
     * Unique identifier for a game session. Specify the game session to retrieve information on.
     */
    GameSessionId?: GameSessionId;
    /**
     * Unique identifier for a fleet alias. Specify an alias to retrieve information on all game sessions active on the fleet.
     */
    AliasId?: AliasId;
    /**
     * Game session status to filter results on. Possible game session statuses include ACTIVE, TERMINATED, ACTIVATING, and TERMINATING (the last two are transitory). 
     */
    StatusFilter?: NonZeroAndMaxString;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * Token indicating the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeGameSessionsOutput {
    /**
     * Collection of objects containing game session properties for each session matching the request.
     */
    GameSessions?: GameSessionList;
    /**
     * Token indicating where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.  If a request has a limit that exactly matches the number of remaining results, a token is returned even though there are no more results to retrieve. 
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribePlayerSessionsInput {
    /**
     * Unique identifier for a game session.
     */
    GameSessionId?: GameSessionId;
    /**
     * Unique identifier for a player.
     */
    PlayerId?: NonZeroAndMaxString;
    /**
     * Unique identifier for a player session.
     */
    PlayerSessionId?: PlayerSessionId;
    /**
     * Player session status to filter results on. Possible player session statuses include the following: RESERVED – The player session request has been received, but the player has not yet connected to the server process and/or been validated. ACTIVE – The player has been validated by the server process and is currently connected.COMPLETED – The player connection has been dropped.TIMEDOUT – A player session request was received, but the player did not connect and/or was not validated within the time-out limit (60 seconds).
     */
    PlayerSessionStatusFilter?: NonZeroAndMaxString;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. If a player session ID is specified, this parameter is ignored.
     */
    Limit?: PositiveInteger;
    /**
     * Token indicating the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value. If a player session ID is specified, this parameter is ignored.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribePlayerSessionsOutput {
    /**
     * Collection of objects containing properties for each player session that matches the request.
     */
    PlayerSessions?: PlayerSessionList;
    /**
     * Token indicating where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.  If a request has a limit that exactly matches the number of remaining results, a token is returned even though there are no more results to retrieve. 
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeRuntimeConfigurationInput {
    /**
     * Unique identifier of the fleet to get the runtime configuration for.
     */
    FleetId: FleetId;
  }
  export interface DescribeRuntimeConfigurationOutput {
    /**
     * Instructions describing how server processes should be launched and maintained on each instance in the fleet.
     */
    RuntimeConfiguration?: RuntimeConfiguration;
  }
  export interface DescribeScalingPoliciesInput {
    /**
     * Unique identifier for a fleet. Specify the fleet to retrieve scaling policies for.
     */
    FleetId: FleetId;
    /**
     * Scaling policy status to filter results on. A scaling policy is only in force when in an ACTIVE status.   ACTIVE – The scaling policy is currently in force.  UPDATEREQUESTED – A request to update the scaling policy has been received.  UPDATING – A change is being made to the scaling policy.  DELETEREQUESTED – A request to delete the scaling policy has been received.  DELETING – The scaling policy is being deleted.  DELETED – The scaling policy has been deleted.  ERROR – An error occurred in creating the policy. It should be removed and recreated. 
     */
    StatusFilter?: ScalingStatusType;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * Token indicating the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeScalingPoliciesOutput {
    /**
     * Collection of objects containing the scaling policies matching the request.
     */
    ScalingPolicies?: ScalingPolicyList;
    /**
     * Token indicating where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.  If a request has a limit that exactly matches the number of remaining results, a token is returned even though there are no more results to retrieve. 
     */
    NextToken?: NonZeroAndMaxString;
  }
  export type Double = number;
  export interface EC2InstanceCounts {
    /**
     * Ideal number of active instances in the fleet.
     */
    DESIRED?: WholeNumber;
    /**
     * Minimum value allowed for the fleet's instance count.
     */
    MINIMUM?: WholeNumber;
    /**
     * Maximum value allowed for the fleet's instance count.
     */
    MAXIMUM?: WholeNumber;
    /**
     * Number of instances in the fleet that are starting but not yet active.
     */
    PENDING?: WholeNumber;
    /**
     * Actual number of active instances in the fleet.
     */
    ACTIVE?: WholeNumber;
    /**
     * Number of active instances in the fleet that are not currently hosting a game session.
     */
    IDLE?: WholeNumber;
    /**
     * Number of instances in the fleet that are no longer active but haven't yet been terminated. 
     */
    TERMINATING?: WholeNumber;
  }
  export interface EC2InstanceLimit {
    /**
     * Name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.
     */
    EC2InstanceType?: EC2InstanceType;
    /**
     * Number of instances of the specified type that are currently in use by this AWS account. 
     */
    CurrentInstances?: WholeNumber;
    /**
     * Number of instances allowed.
     */
    InstanceLimit?: WholeNumber;
  }
  export type EC2InstanceLimitList = EC2InstanceLimit[];
  export type EC2InstanceType = string;
  export interface Event {
    /**
     * Unique identifier for a fleet event.
     */
    EventId?: NonZeroAndMaxString;
    /**
     * Unique identifier for the resource, such as a fleet ID.
     */
    ResourceId?: NonZeroAndMaxString;
    /**
     * Type of event being logged.
     */
    EventCode?: EventCode;
    /**
     * Additional information related to the event.
     */
    Message?: NonEmptyString;
    /**
     * Time stamp indicating when this event occurred. Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057".
     */
    EventTime?: Timestamp;
  }
  export type EventCode = string;
  export type EventList = Event[];
  export interface FleetAttributes {
    /**
     * Unique identifier for a fleet.
     */
    FleetId?: FleetId;
    /**
     * Human-readable description of the fleet.
     */
    Description?: NonZeroAndMaxString;
    /**
     * Descriptive label associated with a fleet. Fleet names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
    /**
     * Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057".
     */
    CreationTime?: Timestamp;
    /**
     * Time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057".
     */
    TerminationTime?: Timestamp;
    /**
     * Current status of the fleet. Possible fleet statuses include the following: NEW – A new fleet has been defined and desired instances is set to 1. DOWNLOADING/VALIDATING/BUILDING/ACTIVATING – GameLift is setting up the new fleet, creating new instances with the game build and starting server processes.ACTIVE – Hosts can now accept game sessions.ERROR – An error occurred when downloading, validating, building, or activating the fleet.DELETING – Hosts are responding to a delete fleet request.TERMINATED – The fleet no longer exists.
     */
    Status?: FleetStatus;
    /**
     * Unique identifier for a build.
     */
    BuildId?: BuildId;
    /**
     * Path to a game server executable in the fleet's build, specified for fleets created prior to 2016-08-04 (or AWS SDK v. 0.12.16). Server launch paths for fleets created after this date are specified in the fleet's RuntimeConfiguration.
     */
    ServerLaunchPath?: NonZeroAndMaxString;
    /**
     * Game server launch parameters specified for fleets created prior to 2016-08-04 (or AWS SDK v. 0.12.16). Server launch parameters for fleets created after this date are specified in the fleet's RuntimeConfiguration.
     */
    ServerLaunchParameters?: NonZeroAndMaxString;
    /**
     * Location of default log files. When a server process is shut down, Amazon GameLift captures and stores any log files in this location. These logs are in addition to game session logs; see more on game session logs in the Amazon GameLift Developer Guide. If no default log path for a fleet is specified, GameLift will automatically upload logs stored on each instance at C:\game\logs. Use the GameLift console to access stored logs. 
     */
    LogPaths?: StringList;
    /**
     * Type of game session protection to set for all new instances started in the fleet. NoProtection – The game session can be terminated during a scale-down event. FullProtection – If the game session is in an ACTIVE status, it cannot be terminated during a scale-down event.
     */
    NewGameSessionProtectionPolicy?: ProtectionPolicy;
    /**
     * Operating system of the fleet's computing resources. A fleet's operating system depends on the OS specified for the build that is deployed on this fleet.
     */
    OperatingSystem?: OperatingSystem;
  }
  export type FleetAttributesList = FleetAttributes[];
  export interface FleetCapacity {
    /**
     * Unique identifier for a fleet.
     */
    FleetId?: FleetId;
    /**
     * Name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.
     */
    InstanceType?: EC2InstanceType;
    /**
     * Current status of fleet capacity.
     */
    InstanceCounts?: EC2InstanceCounts;
  }
  export type FleetCapacityList = FleetCapacity[];
  export type FleetId = string;
  export type FleetIdList = FleetId[];
  export type FleetStatus = string;
  export interface FleetUtilization {
    /**
     * Unique identifier for a fleet.
     */
    FleetId?: FleetId;
    /**
     * Number of server processes in an ACTIVE status currently running across all instances in the fleet
     */
    ActiveServerProcessCount?: WholeNumber;
    /**
     * Number of active game sessions currently being hosted on all instances in the fleet.
     */
    ActiveGameSessionCount?: WholeNumber;
    /**
     * Number of active player sessions currently being hosted on all instances in the fleet.
     */
    CurrentPlayerSessionCount?: WholeNumber;
    /**
     * Maximum players allowed across all game sessions currently being hosted on all instances in the fleet.
     */
    MaximumPlayerSessionCount?: WholeNumber;
  }
  export type FleetUtilizationList = FleetUtilization[];
  export type FreeText = string;
  export interface GameProperty {
    Key: GamePropertyKey;
    Value?: GamePropertyValue;
  }
  export type GamePropertyKey = string;
  export type GamePropertyList = GameProperty[];
  export type GamePropertyValue = string;
  export interface GameSession {
    /**
     * Unique identifier for a game session.
     */
    GameSessionId?: GameSessionId;
    /**
     * Descriptive label associated with a game session. Session names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
    /**
     * Unique identifier for a fleet.
     */
    FleetId?: FleetId;
    /**
     * Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057".
     */
    CreationTime?: Timestamp;
    /**
     * Time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057".
     */
    TerminationTime?: Timestamp;
    /**
     * Number of players currently in the game session.
     */
    CurrentPlayerSessionCount?: WholeNumber;
    /**
     * Maximum number of players allowed in the game session.
     */
    MaximumPlayerSessionCount?: WholeNumber;
    /**
     * Current status of the game session. A game session must be in an ACTIVE status to have player sessions.
     */
    Status?: GameSessionStatus;
    /**
     * Set of custom properties for the game session.
     */
    GameProperties?: GamePropertyList;
    /**
     * IP address of the game session. To connect to a GameLift server process, an app needs both the IP address and port number.
     */
    IpAddress?: IpAddress;
    /**
     * Port number for the game session. To connect to a GameLift server process, an app needs both the IP address and port number.
     */
    Port?: PortNumber;
    /**
     * Indicates whether or not the game session is accepting new players.
     */
    PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy;
  }
  export interface GameSessionDetail {
    GameSession?: GameSession;
    /**
     * Current status of protection for the game session. NoProtection – The game session can be terminated during a scale-down event. FullProtection – If the game session is in an ACTIVE status, it cannot be terminated during a scale-down event.
     */
    ProtectionPolicy?: ProtectionPolicy;
  }
  export type GameSessionDetailList = GameSessionDetail[];
  export type GameSessionId = string;
  export type GameSessionList = GameSession[];
  export type GameSessionStatus = string;
  export interface GetGameSessionLogUrlInput {
    /**
     * Unique identifier for a game session. Specify the game session you want to get logs for.
     */
    GameSessionId: GameSessionId;
  }
  export interface GetGameSessionLogUrlOutput {
    /**
     * Location of the requested game session logs, available for download.
     */
    PreSignedUrl?: NonZeroAndMaxString;
  }
  export type Integer = number;
  export type IpAddress = string;
  export interface IpPermission {
    /**
     * Starting value for a range of allowed port numbers. 
     */
    FromPort: PortNumber;
    /**
     * Ending value for a range of allowed port numbers. Port numbers are end-inclusive. This value must be higher than FromPort.
     */
    ToPort?: PortNumber;
    /**
     * Range of allowed IP addresses. This value must be expressed in CIDR notation. Example: "000.000.000.000/[subnet mask]" or optionally the shortened version "0.0.0.0/[subnet mask]".
     */
    IpRange?: NonBlankString;
    /**
     * Network communication protocol used by the fleet.
     */
    Protocol?: IpProtocol;
  }
  export type IpPermissionsList = IpPermission[];
  export type IpProtocol = string;
  export interface ListAliasesInput {
    /**
     * Type of routing to filter results on. Use this parameter to retrieve only aliases of a certain type. To retrieve all aliases, leave this parameter empty. Possible routing types include the following: SIMPLE – The alias resolves to one specific fleet. Use this type when routing to active fleets.TERMINAL – The alias does not resolve to a fleet but instead can be used to display a message to the user. A terminal alias throws a TerminalRoutingStrategyException with the RoutingStrategy message embedded.
     */
    RoutingStrategyType?: RoutingStrategyType;
    /**
     * Descriptive label associated with an alias. Alias names do not need to be unique.
     */
    Name?: NonEmptyString;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * Token indicating the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value.
     */
    NextToken?: NonEmptyString;
  }
  export interface ListAliasesOutput {
    /**
     * Collection of alias records that match the list request. 
     */
    Aliases?: AliasList;
    /**
     * Token indicating where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.  If a request has a limit that exactly matches the number of remaining results, a token is returned even though there are no more results to retrieve. 
     */
    NextToken?: NonEmptyString;
  }
  export interface ListBuildsInput {
    /**
     * Build status to filter results by. To retrieve all builds, leave this parameter empty. Possible build statuses include the following: INITIALIZED – A new build has been defined, but no files have been uploaded. You cannot create fleets for builds that are in this status. When a build is successfully created, the build status is set to this value. READY – The game build has been successfully uploaded. You can now create new fleets for this build.FAILED – The game build upload failed. You cannot create new fleets for this build. 
     */
    Status?: BuildStatus;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * Token indicating the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value.
     */
    NextToken?: NonEmptyString;
  }
  export interface ListBuildsOutput {
    /**
     * Collection of build records that match the request. 
     */
    Builds?: BuildList;
    /**
     * Token indicating where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.  If a request has a limit that exactly matches the number of remaining results, a token is returned even though there are no more results to retrieve. 
     */
    NextToken?: NonEmptyString;
  }
  export interface ListFleetsInput {
    /**
     * Unique identifier of the build to return fleets for. Use this parameter to return only fleets using the specified build. To retrieve all fleets, leave this parameter empty.
     */
    BuildId?: BuildId;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * Token indicating the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface ListFleetsOutput {
    /**
     * Set of fleet IDs matching the list request. You can retrieve additional information about all returned fleets by passing this result set to a call to DescribeFleetAttributes, DescribeFleetCapacity, and DescribeFleetUtilization.
     */
    FleetIds?: FleetIdList;
    /**
     * Token indicating where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.  If a request has a limit that exactly matches the number of remaining results, a token is returned even though there are no more results to retrieve. 
     */
    NextToken?: NonZeroAndMaxString;
  }
  export type MetricName = string;
  export type NonBlankString = string;
  export type NonEmptyString = string;
  export type NonZeroAndMaxString = string;
  export type OperatingSystem = string;
  export type PlayerIdList = NonZeroAndMaxString[];
  export interface PlayerSession {
    /**
     * Unique identifier for a player session.
     */
    PlayerSessionId?: PlayerSessionId;
    /**
     * Unique identifier for a player.
     */
    PlayerId?: NonZeroAndMaxString;
    /**
     * Unique identifier for a game session.
     */
    GameSessionId?: GameSessionId;
    /**
     * Unique identifier for a fleet.
     */
    FleetId?: FleetId;
    /**
     * Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057".
     */
    CreationTime?: Timestamp;
    /**
     * Time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057".
     */
    TerminationTime?: Timestamp;
    /**
     * Current status of the player session. Possible player session statuses include the following: RESERVED – The player session request has been received, but the player has not yet connected to the server process and/or been validated. ACTIVE – The player has been validated by the server process and is currently connected.COMPLETED – The player connection has been dropped.TIMEDOUT – A player session request was received, but the player did not connect and/or was not validated within the time-out limit (60 seconds).
     */
    Status?: PlayerSessionStatus;
    /**
     * Game session IP address. All player sessions reference the game session location. 
     */
    IpAddress?: IpAddress;
    /**
     * Port number for the game session. To connect to a GameLift server process, an app needs both the IP address and port number.
     */
    Port?: PortNumber;
  }
  export type PlayerSessionCreationPolicy = string;
  export type PlayerSessionId = string;
  export type PlayerSessionList = PlayerSession[];
  export type PlayerSessionStatus = string;
  export type PortNumber = number;
  export type PositiveInteger = number;
  export type PositiveLong = number;
  export type ProtectionPolicy = string;
  export interface PutScalingPolicyInput {
    /**
     * Descriptive label associated with a scaling policy. Policy names do not need to be unique. A fleet can have only one scaling policy with the same name.
     */
    Name: NonZeroAndMaxString;
    /**
     * Unique identity for the fleet to scale with this policy.
     */
    FleetId?: FleetId;
    /**
     * Amount of adjustment to make, based on the scaling adjustment type.
     */
    ScalingAdjustment?: Integer;
    /**
     * Type of adjustment to make to a fleet's instance count (see FleetCapacity):   ChangeInCapacity – add (or subtract) the scaling adjustment value from the current instance count. Positive values scale up while negative values scale down.  ExactCapacity – set the instance count to the scaling adjustment value.  PercentChangeInCapacity – increase or reduce the current instance count by the scaling adjustment, read as a percentage. Positive values scale up while negative values scale down; for example, a value of "-10" scales the fleet down by 10%. 
     */
    ScalingAdjustmentType?: ScalingAdjustmentType;
    /**
     * Metric value used to trigger a scaling event.
     */
    Threshold?: Double;
    /**
     * Comparison operator to use when measuring the metric against the threshold value. 
     */
    ComparisonOperator?: ComparisonOperatorType;
    /**
     * Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.
     */
    EvaluationPeriods?: PositiveInteger;
    /**
     * Name of the Amazon GameLift-defined metric that is used to trigger an adjustment.   ActivatingGameSessions – number of game sessions in the process of being created (game session status = ACTIVATING).  ActiveGameSessions – number of game sessions currently running (game session status = ACTIVE).  CurrentPlayerSessions – number of active or reserved player sessions (player session status = ACTIVE or RESERVED).   AvailablePlayerSessions – number of player session slots currently available in active game sessions across the fleet, calculated by subtracting a game session's current player session count from its maximum player session count. This number includes game sessions that are not currently accepting players (game session PlayerSessionCreationPolicy = DENY_ALL).  ActiveInstances – number of instances currently running a game session.  IdleInstances – number of instances not currently running a game session. 
     */
    MetricName?: MetricName;
  }
  export interface PutScalingPolicyOutput {
    /**
     * Descriptive label associated with a scaling policy. Policy names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
  }
  export interface RequestUploadCredentialsInput {
    /**
     * Unique identifier for the build you want to get credentials for. 
     */
    BuildId: BuildId;
  }
  export interface RequestUploadCredentialsOutput {
    /**
     * AWS credentials required when uploading a game build to the storage location. These credentials have a limited lifespan and are valid only for the build they were issued for.
     */
    UploadCredentials?: AwsCredentials;
    /**
     * Amazon S3 path and key, identifying where the game build files are stored.
     */
    StorageLocation?: S3Location;
  }
  export interface ResolveAliasInput {
    /**
     * Unique identifier for the alias you want to resolve. 
     */
    AliasId: AliasId;
  }
  export interface ResolveAliasOutput {
    /**
     * Fleet ID associated with the requested alias.
     */
    FleetId?: FleetId;
  }
  export interface RoutingStrategy {
    /**
     * Type of routing strategy. Possible routing types include the following: SIMPLE – The alias resolves to one specific fleet. Use this type when routing to active fleets.TERMINAL – The alias does not resolve to a fleet but instead can be used to display a message to the user. A terminal alias throws a TerminalRoutingStrategyException with the RoutingStrategy message embedded.
     */
    Type?: RoutingStrategyType;
    /**
     * Unique identifier for a fleet.
     */
    FleetId?: FleetId;
    /**
     * Message text to be used with a terminal routing strategy.
     */
    Message?: FreeText;
  }
  export type RoutingStrategyType = string;
  export interface RuntimeConfiguration {
    /**
     * Collection of server process configurations describing what server processes to run on each instance in a fleet 
     */
    ServerProcesses?: ServerProcessList;
  }
  export interface S3Location {
    /**
     * Amazon S3 bucket identifier.
     */
    Bucket?: NonEmptyString;
    /**
     * Amazon S3 bucket key.
     */
    Key?: NonEmptyString;
    /**
     * Amazon resource number for the cross-account access role that allows GameLift access to the S3 bucket.
     */
    RoleArn?: NonEmptyString;
  }
  export type ScalingAdjustmentType = string;
  export interface ScalingPolicy {
    /**
     * Unique identity for the fleet associated with this scaling policy.
     */
    FleetId?: FleetId;
    /**
     * Descriptive label associated with a scaling policy. Policy names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
    /**
     * Current status of the scaling policy. The scaling policy is only in force when in an ACTIVE status.   ACTIVE – The scaling policy is currently in force.  UPDATE_REQUESTED – A request to update the scaling policy has been received.  UPDATING – A change is being made to the scaling policy.  DELETE_REQUESTED – A request to delete the scaling policy has been received.  DELETING – The scaling policy is being deleted.  DELETED – The scaling policy has been deleted.  ERROR – An error occurred in creating the policy. It should be removed and recreated. 
     */
    Status?: ScalingStatusType;
    /**
     * Amount of adjustment to make, based on the scaling adjustment type.
     */
    ScalingAdjustment?: Integer;
    /**
     * Type of adjustment to make to a fleet's instance count (see FleetCapacity):   ChangeInCapacity – add (or subtract) the scaling adjustment value from the current instance count. Positive values scale up while negative values scale down.  ExactCapacity – set the instance count to the scaling adjustment value.  PercentChangeInCapacity – increase or reduce the current instance count by the scaling adjustment, read as a percentage. Positive values scale up while negative values scale down. 
     */
    ScalingAdjustmentType?: ScalingAdjustmentType;
    /**
     * Comparison operator to use when measuring a metric against the threshold value. 
     */
    ComparisonOperator?: ComparisonOperatorType;
    /**
     * Metric value used to trigger a scaling event.
     */
    Threshold?: Double;
    /**
     * Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.
     */
    EvaluationPeriods?: PositiveInteger;
    /**
     * Name of the GameLift-defined metric that is used to trigger an adjustment.   ActivatingGameSessions – number of game sessions in the process of being created (game session status = ACTIVATING).  ActiveGameSessions – number of game sessions currently running (game session status = ACTIVE).  CurrentPlayerSessions – number of active or reserved player sessions (player session status = ACTIVE or RESERVED).   AvailablePlayerSessions – number of player session slots currently available in active game sessions across the fleet, calculated by subtracting a game session's current player session count from its maximum player session count. This number does include game sessions that are not currently accepting players (game session PlayerSessionCreationPolicy = DENY_ALL).  ActiveInstances – number of instances currently running a game session.  IdleInstances – number of instances not currently running a game session. 
     */
    MetricName?: MetricName;
  }
  export type ScalingPolicyList = ScalingPolicy[];
  export type ScalingStatusType = string;
  export interface SearchGameSessionsInput {
    /**
     * Unique identifier for a fleet. Each request must reference either a fleet ID or alias ID, but not both.
     */
    FleetId?: FleetId;
    /**
     * Unique identifier for a fleet alias. Each request must reference either a fleet ID or alias ID, but not both.
     */
    AliasId?: AliasId;
    /**
     * String containing the search criteria for the session search. If no filter expression is included, the request returns results for all game sessions in the fleet that are in ACTIVE status.  A filter expression can contain one or multiple conditions. Each condition consists of the following:   Operand -- Name of a game session attribute. Valid values are gameSessionName, gameSessionId, creationTimeMillis, playerSessionCount, maximumSessions, hasAvailablePlayerSessions.  Comparator -- Valid comparators are: =, &amp;lt;&amp;gt;, &amp;lt;, &amp;gt;, &amp;lt;=, &amp;gt;=.   Value -- Value to be searched for. Values can be numbers, boolean values (true/false) or strings. String values are case sensitive, enclosed in single quotes. Special characters must be escaped. Boolean and string values can only be used with the comparators = and &amp;lt;&amp;gt;. For example, the following filter expression searches on gameSessionName: "FilterExpression": "gameSessionName = 'Matt\\'s Awesome Game 1'".   To chain multiple conditions in a single expression, use the logical keywords AND, OR, and NOT and parentheses as needed. For example: x AND y AND NOT z, NOT (x OR y).  Session search evaluates conditions from left to right using the following precedence rules:    =, &amp;lt;&amp;gt;, &amp;lt;, &amp;gt;, &amp;lt;=, &amp;gt;=  Parentheses  NOT AND OR  For example, this filter expression retrieves game sessions hosting at least ten players that have an open player slot: "maximumSessions&amp;gt;=10 AND hasAvailablePlayerSessions=true". 
     */
    FilterExpression?: NonZeroAndMaxString;
    /**
     * Instructions on how to sort the search results. If no sort expression is included, the request returns results in random order. A sort expression consists of the following elements:    Operand -- Name of a game session attribute. Valid values are gameSessionName, gameSessionId, creationTimeMillis, playerSessionCount, maximumSessions, hasAvailablePlayerSessions.  Order -- Valid sort orders are ASC (ascending) and DESC (descending).  For example, this sort expression returns the oldest active sessions first: "SortExpression": "creationTimeMillis ASC". Results with a null value for the sort operand are returned at the end of the list.
     */
    SortExpression?: NonZeroAndMaxString;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. The maximum number of results returned is 20, even if this value is not set or is set higher than 20. 
     */
    Limit?: PositiveInteger;
    /**
     * Token indicating the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface SearchGameSessionsOutput {
    /**
     * Collection of objects containing game session properties for each session matching the request.
     */
    GameSessions?: GameSessionList;
    /**
     * Token indicating where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.  If a request has a limit that exactly matches the number of remaining results, a token is returned even though there are no more results to retrieve. 
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface ServerProcess {
    /**
     * Location in the game build of the server executable. All game builds are installed on instances at the root C:\game\..., so an executable file located at MyGame\latest\server.exe has a launch path of "C:\game\MyGame\latest\server.exe". 
     */
    LaunchPath: NonZeroAndMaxString;
    /**
     * Optional list of parameters to pass to the server executable on launch.
     */
    Parameters?: NonZeroAndMaxString;
    /**
     * Number of server processes using this configuration to run concurrently on an instance. 
     */
    ConcurrentExecutions?: PositiveInteger;
  }
  export type ServerProcessList = ServerProcess[];
  export type StringList = NonZeroAndMaxString[];
  export type Timestamp = Date;
  export interface UpdateAliasInput {
    /**
     * Unique identifier for a fleet alias. Specify the alias you want to update. 
     */
    AliasId: AliasId;
    /**
     * Descriptive label associated with an alias. Alias names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
    /**
     * Human-readable description of an alias.
     */
    Description?: NonZeroAndMaxString;
    /**
     * Object specifying the fleet and routing type to use for the alias.
     */
    RoutingStrategy?: RoutingStrategy;
  }
  export interface UpdateAliasOutput {
    /**
     * Object containing the updated alias configuration.
     */
    Alias?: Alias;
  }
  export interface UpdateBuildInput {
    /**
     * Unique identifier of the build you want to update. 
     */
    BuildId: BuildId;
    /**
     * Descriptive label associated with a build. Build names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
    /**
     * Version associated with this build. Version strings do not need to be unique to a build.
     */
    Version?: NonZeroAndMaxString;
  }
  export interface UpdateBuildOutput {
    /**
     * Object containing the updated build record.
     */
    Build?: Build;
  }
  export interface UpdateFleetAttributesInput {
    /**
     * Unique identifier for the fleet you want to update attribute metadata for. 
     */
    FleetId: FleetId;
    /**
     * Descriptive label associated with a fleet. Fleet names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
    /**
     * Human-readable description of a fleet.
     */
    Description?: NonZeroAndMaxString;
    /**
     * Game session protection policy to apply to all new instances created in this fleet. Instances that already exist are not affected. You can set protection for individual instances using UpdateGameSession. NoProtection – The game session can be terminated during a scale-down event. FullProtection – If the game session is in an ACTIVE status, it cannot be terminated during a scale-down event.
     */
    NewGameSessionProtectionPolicy?: ProtectionPolicy;
  }
  export interface UpdateFleetAttributesOutput {
    /**
     * Unique identifier for the updated fleet.
     */
    FleetId?: FleetId;
  }
  export interface UpdateFleetCapacityInput {
    /**
     * Unique identifier for the fleet you want to update capacity for. 
     */
    FleetId: FleetId;
    /**
     * Number of EC2 instances you want this fleet to host.
     */
    DesiredInstances?: WholeNumber;
    /**
     * Minimum value allowed for the fleet's instance count. Default if not set is 0.
     */
    MinSize?: WholeNumber;
    /**
     * Maximum value allowed for the fleet's instance count. Default if not set is 1.
     */
    MaxSize?: WholeNumber;
  }
  export interface UpdateFleetCapacityOutput {
    /**
     * Unique identifier for the updated fleet.
     */
    FleetId?: FleetId;
  }
  export interface UpdateFleetPortSettingsInput {
    /**
     * Unique identifier for the fleet you want to update port settings for. 
     */
    FleetId: FleetId;
    /**
     * Collection of port settings to be added to the fleet record.
     */
    InboundPermissionAuthorizations?: IpPermissionsList;
    /**
     * Collection of port settings to be removed from the fleet record.
     */
    InboundPermissionRevocations?: IpPermissionsList;
  }
  export interface UpdateFleetPortSettingsOutput {
    /**
     * Unique identifier for the updated fleet.
     */
    FleetId?: FleetId;
  }
  export interface UpdateGameSessionInput {
    /**
     * Unique identifier for a game session. Specify the game session you want to update. 
     */
    GameSessionId: GameSessionId;
    /**
     * Maximum number of players that can be simultaneously connected to the game session.
     */
    MaximumPlayerSessionCount?: WholeNumber;
    /**
     * Descriptive label associated with a game session. Session names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
    /**
     * Policy determining whether or not the game session accepts new players.
     */
    PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy;
    /**
     * Game session protection policy to apply to this game session only. NoProtection – The game session can be terminated during a scale-down event. FullProtection – If the game session is in an ACTIVE status, it cannot be terminated during a scale-down event.
     */
    ProtectionPolicy?: ProtectionPolicy;
  }
  export interface UpdateGameSessionOutput {
    /**
     * Object containing the updated game session metadata.
     */
    GameSession?: GameSession;
  }
  export interface UpdateRuntimeConfigurationInput {
    /**
     * Unique identifier of the fleet to update runtime configuration for.
     */
    FleetId: FleetId;
    /**
     * Instructions for launching server processes on each instance in the fleet. The runtime configuration for a fleet has a collection of server process configurations, one for each type of server process to run on an instance. A server process configuration specifies the location of the server executable, launch parameters, and the number of concurrent processes with that configuration to maintain on each instance.
     */
    RuntimeConfiguration?: RuntimeConfiguration;
  }
  export interface UpdateRuntimeConfigurationOutput {
    /**
     * The runtime configuration currently in force. If the update was successful, this object matches the one in the request.
     */
    RuntimeConfiguration?: RuntimeConfiguration;
  }
  export type WholeNumber = number;
}
export = GameLift;
