import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class GameLift extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: GameLift.Types.ClientConfiguration)
  config: Config & GameLift.Types.ClientConfiguration;
  /**
   * Creates an alias and sets a target fleet. A fleet alias can be used in place of a fleet ID, such as when calling CreateGameSession from a game client or game service or adding destinations to a game session queue. By changing an alias's target fleet, you can switch your players to the new fleet without changing any other component. In production, this feature is particularly useful to redirect your player base seamlessly to the latest game server update.  Amazon GameLift supports two types of routing strategies for aliases: simple and terminal. Use a simple alias to point to an active fleet. Use a terminal alias to display a message to incoming traffic instead of routing players to an active fleet. This option is useful when a game server is no longer supported but you want to provide better messaging than a standard 404 error. To create a fleet alias, specify an alias name, routing strategy, and optional description. If successful, a new alias record is returned, including an alias ID, which you can reference when creating a game session. To reassign the alias to another fleet ID, call UpdateAlias.
   */
  createAlias(params: GameLift.Types.CreateAliasInput, callback?: (err: AWSError, data: GameLift.Types.CreateAliasOutput) => void): Request<GameLift.Types.CreateAliasOutput, AWSError>;
  /**
   * Creates an alias and sets a target fleet. A fleet alias can be used in place of a fleet ID, such as when calling CreateGameSession from a game client or game service or adding destinations to a game session queue. By changing an alias's target fleet, you can switch your players to the new fleet without changing any other component. In production, this feature is particularly useful to redirect your player base seamlessly to the latest game server update.  Amazon GameLift supports two types of routing strategies for aliases: simple and terminal. Use a simple alias to point to an active fleet. Use a terminal alias to display a message to incoming traffic instead of routing players to an active fleet. This option is useful when a game server is no longer supported but you want to provide better messaging than a standard 404 error. To create a fleet alias, specify an alias name, routing strategy, and optional description. If successful, a new alias record is returned, including an alias ID, which you can reference when creating a game session. To reassign the alias to another fleet ID, call UpdateAlias.
   */
  createAlias(callback?: (err: AWSError, data: GameLift.Types.CreateAliasOutput) => void): Request<GameLift.Types.CreateAliasOutput, AWSError>;
  /**
   * Creates a new Amazon GameLift build from a set of game server binary files stored in an Amazon Simple Storage Service (Amazon S3) location. When using this API call, you must create a .zip file containing all of the build files and store it in an Amazon S3 bucket under your AWS account. For help on packaging your build files and creating a build, see Uploading Your Game to Amazon GameLift.  Use this API action ONLY if you are storing your game build files in an Amazon S3 bucket in your AWS account. To create a build using files stored in a directory, use the CLI command  upload-build , which uploads the build files from a file location you specify and creates a build.  To create a new build using CreateBuild, identify the storage location and operating system of your game build. You also have the option of specifying a build name and version. If successful, this action creates a new build record with an unique build ID and in INITIALIZED status. Use the API call DescribeBuild to check the status of your build. A build must be in READY status before it can be used to create fleets to host your game.
   */
  createBuild(params: GameLift.Types.CreateBuildInput, callback?: (err: AWSError, data: GameLift.Types.CreateBuildOutput) => void): Request<GameLift.Types.CreateBuildOutput, AWSError>;
  /**
   * Creates a new Amazon GameLift build from a set of game server binary files stored in an Amazon Simple Storage Service (Amazon S3) location. When using this API call, you must create a .zip file containing all of the build files and store it in an Amazon S3 bucket under your AWS account. For help on packaging your build files and creating a build, see Uploading Your Game to Amazon GameLift.  Use this API action ONLY if you are storing your game build files in an Amazon S3 bucket in your AWS account. To create a build using files stored in a directory, use the CLI command  upload-build , which uploads the build files from a file location you specify and creates a build.  To create a new build using CreateBuild, identify the storage location and operating system of your game build. You also have the option of specifying a build name and version. If successful, this action creates a new build record with an unique build ID and in INITIALIZED status. Use the API call DescribeBuild to check the status of your build. A build must be in READY status before it can be used to create fleets to host your game.
   */
  createBuild(callback?: (err: AWSError, data: GameLift.Types.CreateBuildOutput) => void): Request<GameLift.Types.CreateBuildOutput, AWSError>;
  /**
   * Creates a new fleet to run your game servers. A fleet is a set of Amazon Elastic Compute Cloud (Amazon EC2) instances, each of which can run multiple server processes to host game sessions. You configure a fleet to create instances with certain hardware specifications (see Amazon EC2 Instance Types for more information), and deploy a specified game build to each instance. A newly created fleet passes through several statuses; once it reaches the ACTIVE status, it can begin hosting game sessions. To create a new fleet, provide a fleet name, an EC2 instance type, and a build ID of the game build to deploy. You can also configure the new fleet with the following settings: (1) a runtime configuration describing what server processes to run on each instance in the fleet (required to create fleet), (2) access permissions for inbound traffic, (3) fleet-wide game session protection, and (4) the location of default log files for Amazon GameLift to upload and store. If the CreateFleet call is successful, Amazon GameLift performs the following tasks:   Creates a fleet record and sets the status to NEW (followed by other statuses as the fleet is activated).   Sets the fleet's capacity to 1 "desired", which causes Amazon GameLift to start one new EC2 instance.   Starts launching server processes on the instance. If the fleet is configured to run multiple server processes per instance, Amazon GameLift staggers each launch by a few seconds.   Begins writing events to the fleet event log, which can be accessed in the Amazon GameLift console.   Sets the fleet's status to ACTIVE once one server process in the fleet is ready to host a game session.   After a fleet is created, use the following actions to change fleet properties and configuration:    UpdateFleetAttributes -- Update fleet metadata, including name and description.    UpdateFleetCapacity -- Increase or decrease the number of instances you want the fleet to maintain.    UpdateFleetPortSettings -- Change the IP address and port ranges that allow access to incoming traffic.    UpdateRuntimeConfiguration -- Change how server processes are launched in the fleet, including launch path, launch parameters, and the number of concurrent processes.    PutScalingPolicy -- Create or update rules that are used to set the fleet's capacity (autoscaling).  
   */
  createFleet(params: GameLift.Types.CreateFleetInput, callback?: (err: AWSError, data: GameLift.Types.CreateFleetOutput) => void): Request<GameLift.Types.CreateFleetOutput, AWSError>;
  /**
   * Creates a new fleet to run your game servers. A fleet is a set of Amazon Elastic Compute Cloud (Amazon EC2) instances, each of which can run multiple server processes to host game sessions. You configure a fleet to create instances with certain hardware specifications (see Amazon EC2 Instance Types for more information), and deploy a specified game build to each instance. A newly created fleet passes through several statuses; once it reaches the ACTIVE status, it can begin hosting game sessions. To create a new fleet, provide a fleet name, an EC2 instance type, and a build ID of the game build to deploy. You can also configure the new fleet with the following settings: (1) a runtime configuration describing what server processes to run on each instance in the fleet (required to create fleet), (2) access permissions for inbound traffic, (3) fleet-wide game session protection, and (4) the location of default log files for Amazon GameLift to upload and store. If the CreateFleet call is successful, Amazon GameLift performs the following tasks:   Creates a fleet record and sets the status to NEW (followed by other statuses as the fleet is activated).   Sets the fleet's capacity to 1 "desired", which causes Amazon GameLift to start one new EC2 instance.   Starts launching server processes on the instance. If the fleet is configured to run multiple server processes per instance, Amazon GameLift staggers each launch by a few seconds.   Begins writing events to the fleet event log, which can be accessed in the Amazon GameLift console.   Sets the fleet's status to ACTIVE once one server process in the fleet is ready to host a game session.   After a fleet is created, use the following actions to change fleet properties and configuration:    UpdateFleetAttributes -- Update fleet metadata, including name and description.    UpdateFleetCapacity -- Increase or decrease the number of instances you want the fleet to maintain.    UpdateFleetPortSettings -- Change the IP address and port ranges that allow access to incoming traffic.    UpdateRuntimeConfiguration -- Change how server processes are launched in the fleet, including launch path, launch parameters, and the number of concurrent processes.    PutScalingPolicy -- Create or update rules that are used to set the fleet's capacity (autoscaling).  
   */
  createFleet(callback?: (err: AWSError, data: GameLift.Types.CreateFleetOutput) => void): Request<GameLift.Types.CreateFleetOutput, AWSError>;
  /**
   * Creates a multiplayer game session for players. This action creates a game session record and assigns an available server process in the specified fleet to host the game session. A fleet must have an ACTIVE status before a game session can be created in it. To create a game session, specify either fleet ID or alias ID and indicate a maximum number of players to allow in the game session. You can also provide a name and game-specific properties for this game session. If successful, a GameSession object is returned containing game session properties, including a game session ID with the custom string you provided.  Idempotency tokens. You can add a token that uniquely identifies game session requests. This is useful for ensuring that game session requests are idempotent. Multiple requests with the same idempotency token are processed only once; subsequent requests return the original result. All response values are the same with the exception of game session status, which may change.  Resource creation limits. If you are creating a game session on a fleet with a resource creation limit policy in force, then you must specify a creator ID. Without this ID, Amazon GameLift has no way to evaluate the policy for this new game session request.  By default, newly created game sessions allow new players to join. Use UpdateGameSession to change the game session's player session creation policy.  Available in Amazon GameLift Local. 
   */
  createGameSession(params: GameLift.Types.CreateGameSessionInput, callback?: (err: AWSError, data: GameLift.Types.CreateGameSessionOutput) => void): Request<GameLift.Types.CreateGameSessionOutput, AWSError>;
  /**
   * Creates a multiplayer game session for players. This action creates a game session record and assigns an available server process in the specified fleet to host the game session. A fleet must have an ACTIVE status before a game session can be created in it. To create a game session, specify either fleet ID or alias ID and indicate a maximum number of players to allow in the game session. You can also provide a name and game-specific properties for this game session. If successful, a GameSession object is returned containing game session properties, including a game session ID with the custom string you provided.  Idempotency tokens. You can add a token that uniquely identifies game session requests. This is useful for ensuring that game session requests are idempotent. Multiple requests with the same idempotency token are processed only once; subsequent requests return the original result. All response values are the same with the exception of game session status, which may change.  Resource creation limits. If you are creating a game session on a fleet with a resource creation limit policy in force, then you must specify a creator ID. Without this ID, Amazon GameLift has no way to evaluate the policy for this new game session request.  By default, newly created game sessions allow new players to join. Use UpdateGameSession to change the game session's player session creation policy.  Available in Amazon GameLift Local. 
   */
  createGameSession(callback?: (err: AWSError, data: GameLift.Types.CreateGameSessionOutput) => void): Request<GameLift.Types.CreateGameSessionOutput, AWSError>;
  /**
   * Establishes a new queue for processing requests to place new game sessions. A queue identifies where new game sessions can be hosted -- by specifying a list of destinations (fleets or aliases) -- and how long requests can wait in the queue before timing out. You can set up a queue to try to place game sessions on fleets in multiple regions. To add placement requests to a queue, call StartGameSessionPlacement and reference the queue name.  Destination order. When processing a request for a game session, Amazon GameLift tries each destination in order until it finds one with available resources to host the new game session. A queue's default order is determined by how destinations are listed. The default order is overridden when a game session placement request provides player latency information. Player latency information enables Amazon GameLift to prioritize destinations where players report the lowest average latency, as a result placing the new game session where the majority of players will have the best possible gameplay experience.  Player latency policies. For placement requests containing player latency information, use player latency policies to protect individual players from very high latencies. With a latency cap, even when a destination can deliver a low latency for most players, the game is not placed where any individual player is reporting latency higher than a policy's maximum. A queue can have multiple latency policies, which are enforced consecutively starting with the policy with the lowest latency cap. Use multiple policies to gradually relax latency controls; for example, you might set a policy with a low latency cap for the first 60 seconds, a second policy with a higher cap for the next 60 seconds, etc.  To create a new queue, provide a name, timeout value, a list of destinations and, if desired, a set of latency policies. If successful, a new queue object is returned.
   */
  createGameSessionQueue(params: GameLift.Types.CreateGameSessionQueueInput, callback?: (err: AWSError, data: GameLift.Types.CreateGameSessionQueueOutput) => void): Request<GameLift.Types.CreateGameSessionQueueOutput, AWSError>;
  /**
   * Establishes a new queue for processing requests to place new game sessions. A queue identifies where new game sessions can be hosted -- by specifying a list of destinations (fleets or aliases) -- and how long requests can wait in the queue before timing out. You can set up a queue to try to place game sessions on fleets in multiple regions. To add placement requests to a queue, call StartGameSessionPlacement and reference the queue name.  Destination order. When processing a request for a game session, Amazon GameLift tries each destination in order until it finds one with available resources to host the new game session. A queue's default order is determined by how destinations are listed. The default order is overridden when a game session placement request provides player latency information. Player latency information enables Amazon GameLift to prioritize destinations where players report the lowest average latency, as a result placing the new game session where the majority of players will have the best possible gameplay experience.  Player latency policies. For placement requests containing player latency information, use player latency policies to protect individual players from very high latencies. With a latency cap, even when a destination can deliver a low latency for most players, the game is not placed where any individual player is reporting latency higher than a policy's maximum. A queue can have multiple latency policies, which are enforced consecutively starting with the policy with the lowest latency cap. Use multiple policies to gradually relax latency controls; for example, you might set a policy with a low latency cap for the first 60 seconds, a second policy with a higher cap for the next 60 seconds, etc.  To create a new queue, provide a name, timeout value, a list of destinations and, if desired, a set of latency policies. If successful, a new queue object is returned.
   */
  createGameSessionQueue(callback?: (err: AWSError, data: GameLift.Types.CreateGameSessionQueueOutput) => void): Request<GameLift.Types.CreateGameSessionQueueOutput, AWSError>;
  /**
   * Adds a player to a game session and creates a player session record. Before a player can be added, a game session must have an ACTIVE status, have a creation policy of ALLOW_ALL, and have an open player slot. To add a group of players to a game session, use CreatePlayerSessions. To create a player session, specify a game session ID, player ID, and optionally a string of player data. If successful, the player is added to the game session and a new PlayerSession object is returned. Player sessions cannot be updated.   Available in Amazon GameLift Local. 
   */
  createPlayerSession(params: GameLift.Types.CreatePlayerSessionInput, callback?: (err: AWSError, data: GameLift.Types.CreatePlayerSessionOutput) => void): Request<GameLift.Types.CreatePlayerSessionOutput, AWSError>;
  /**
   * Adds a player to a game session and creates a player session record. Before a player can be added, a game session must have an ACTIVE status, have a creation policy of ALLOW_ALL, and have an open player slot. To add a group of players to a game session, use CreatePlayerSessions. To create a player session, specify a game session ID, player ID, and optionally a string of player data. If successful, the player is added to the game session and a new PlayerSession object is returned. Player sessions cannot be updated.   Available in Amazon GameLift Local. 
   */
  createPlayerSession(callback?: (err: AWSError, data: GameLift.Types.CreatePlayerSessionOutput) => void): Request<GameLift.Types.CreatePlayerSessionOutput, AWSError>;
  /**
   * Adds a group of players to a game session. This action is useful with a team matching feature. Before players can be added, a game session must have an ACTIVE status, have a creation policy of ALLOW_ALL, and have an open player slot. To add a single player to a game session, use CreatePlayerSession. To create player sessions, specify a game session ID, a list of player IDs, and optionally a set of player data strings. If successful, the players are added to the game session and a set of new PlayerSession objects is returned. Player sessions cannot be updated.  Available in Amazon GameLift Local. 
   */
  createPlayerSessions(params: GameLift.Types.CreatePlayerSessionsInput, callback?: (err: AWSError, data: GameLift.Types.CreatePlayerSessionsOutput) => void): Request<GameLift.Types.CreatePlayerSessionsOutput, AWSError>;
  /**
   * Adds a group of players to a game session. This action is useful with a team matching feature. Before players can be added, a game session must have an ACTIVE status, have a creation policy of ALLOW_ALL, and have an open player slot. To add a single player to a game session, use CreatePlayerSession. To create player sessions, specify a game session ID, a list of player IDs, and optionally a set of player data strings. If successful, the players are added to the game session and a set of new PlayerSession objects is returned. Player sessions cannot be updated.  Available in Amazon GameLift Local. 
   */
  createPlayerSessions(callback?: (err: AWSError, data: GameLift.Types.CreatePlayerSessionsOutput) => void): Request<GameLift.Types.CreatePlayerSessionsOutput, AWSError>;
  /**
   * Deletes a fleet alias. This action removes all record of the alias. Game clients attempting to access a server process using the deleted alias receive an error. To delete an alias, specify the alias ID to be deleted.
   */
  deleteAlias(params: GameLift.Types.DeleteAliasInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a fleet alias. This action removes all record of the alias. Game clients attempting to access a server process using the deleted alias receive an error. To delete an alias, specify the alias ID to be deleted.
   */
  deleteAlias(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a build. This action permanently deletes the build record and any uploaded build files. To delete a build, specify its ID. Deleting a build does not affect the status of any active fleets using the build, but you can no longer create new fleets with the deleted build.
   */
  deleteBuild(params: GameLift.Types.DeleteBuildInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a build. This action permanently deletes the build record and any uploaded build files. To delete a build, specify its ID. Deleting a build does not affect the status of any active fleets using the build, but you can no longer create new fleets with the deleted build.
   */
  deleteBuild(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes everything related to a fleet. Before deleting a fleet, you must set the fleet's desired capacity to zero. See UpdateFleetCapacity. This action removes the fleet's resources and the fleet record. Once a fleet is deleted, you can no longer use that fleet.
   */
  deleteFleet(params: GameLift.Types.DeleteFleetInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes everything related to a fleet. Before deleting a fleet, you must set the fleet's desired capacity to zero. See UpdateFleetCapacity. This action removes the fleet's resources and the fleet record. Once a fleet is deleted, you can no longer use that fleet.
   */
  deleteFleet(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a game session queue. This action means that any StartGameSessionPlacement requests that reference this queue will fail. To delete a queue, specify the queue name.
   */
  deleteGameSessionQueue(params: GameLift.Types.DeleteGameSessionQueueInput, callback?: (err: AWSError, data: GameLift.Types.DeleteGameSessionQueueOutput) => void): Request<GameLift.Types.DeleteGameSessionQueueOutput, AWSError>;
  /**
   * Deletes a game session queue. This action means that any StartGameSessionPlacement requests that reference this queue will fail. To delete a queue, specify the queue name.
   */
  deleteGameSessionQueue(callback?: (err: AWSError, data: GameLift.Types.DeleteGameSessionQueueOutput) => void): Request<GameLift.Types.DeleteGameSessionQueueOutput, AWSError>;
  /**
   * Deletes a fleet scaling policy. This action means that the policy is no longer in force and removes all record of it. To delete a scaling policy, specify both the scaling policy name and the fleet ID it is associated with.
   */
  deleteScalingPolicy(params: GameLift.Types.DeleteScalingPolicyInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a fleet scaling policy. This action means that the policy is no longer in force and removes all record of it. To delete a scaling policy, specify both the scaling policy name and the fleet ID it is associated with.
   */
  deleteScalingPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves properties for a fleet alias. This operation returns all alias metadata and settings. To get just the fleet ID an alias is currently pointing to, use ResolveAlias.  To get alias properties, specify the alias ID. If successful, an Alias object is returned.
   */
  describeAlias(params: GameLift.Types.DescribeAliasInput, callback?: (err: AWSError, data: GameLift.Types.DescribeAliasOutput) => void): Request<GameLift.Types.DescribeAliasOutput, AWSError>;
  /**
   * Retrieves properties for a fleet alias. This operation returns all alias metadata and settings. To get just the fleet ID an alias is currently pointing to, use ResolveAlias.  To get alias properties, specify the alias ID. If successful, an Alias object is returned.
   */
  describeAlias(callback?: (err: AWSError, data: GameLift.Types.DescribeAliasOutput) => void): Request<GameLift.Types.DescribeAliasOutput, AWSError>;
  /**
   * Retrieves properties for a build. To get a build record, specify a build ID. If successful, an object containing the build properties is returned.
   */
  describeBuild(params: GameLift.Types.DescribeBuildInput, callback?: (err: AWSError, data: GameLift.Types.DescribeBuildOutput) => void): Request<GameLift.Types.DescribeBuildOutput, AWSError>;
  /**
   * Retrieves properties for a build. To get a build record, specify a build ID. If successful, an object containing the build properties is returned.
   */
  describeBuild(callback?: (err: AWSError, data: GameLift.Types.DescribeBuildOutput) => void): Request<GameLift.Types.DescribeBuildOutput, AWSError>;
  /**
   * Retrieves the following information for the specified EC2 instance type:   maximum number of instances allowed per AWS account (service limit)   current usage level for the AWS account   Service limits vary depending on region. Available regions for Amazon GameLift can be found in the AWS Management Console for Amazon GameLift (see the drop-down list in the upper right corner).
   */
  describeEC2InstanceLimits(params: GameLift.Types.DescribeEC2InstanceLimitsInput, callback?: (err: AWSError, data: GameLift.Types.DescribeEC2InstanceLimitsOutput) => void): Request<GameLift.Types.DescribeEC2InstanceLimitsOutput, AWSError>;
  /**
   * Retrieves the following information for the specified EC2 instance type:   maximum number of instances allowed per AWS account (service limit)   current usage level for the AWS account   Service limits vary depending on region. Available regions for Amazon GameLift can be found in the AWS Management Console for Amazon GameLift (see the drop-down list in the upper right corner).
   */
  describeEC2InstanceLimits(callback?: (err: AWSError, data: GameLift.Types.DescribeEC2InstanceLimitsOutput) => void): Request<GameLift.Types.DescribeEC2InstanceLimitsOutput, AWSError>;
  /**
   * Retrieves fleet properties, including metadata, status, and configuration, for one or more fleets. You can request attributes for all fleets, or specify a list of one or more fleet IDs. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a FleetAttributes object is returned for each requested fleet ID. When specifying a list of fleet IDs, attribute objects are returned only for fleets that currently exist.   Some API actions may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed. 
   */
  describeFleetAttributes(params: GameLift.Types.DescribeFleetAttributesInput, callback?: (err: AWSError, data: GameLift.Types.DescribeFleetAttributesOutput) => void): Request<GameLift.Types.DescribeFleetAttributesOutput, AWSError>;
  /**
   * Retrieves fleet properties, including metadata, status, and configuration, for one or more fleets. You can request attributes for all fleets, or specify a list of one or more fleet IDs. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a FleetAttributes object is returned for each requested fleet ID. When specifying a list of fleet IDs, attribute objects are returned only for fleets that currently exist.   Some API actions may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed. 
   */
  describeFleetAttributes(callback?: (err: AWSError, data: GameLift.Types.DescribeFleetAttributesOutput) => void): Request<GameLift.Types.DescribeFleetAttributesOutput, AWSError>;
  /**
   * Retrieves the current status of fleet capacity for one or more fleets. This information includes the number of instances that have been requested for the fleet and the number currently active. You can request capacity for all fleets, or specify a list of one or more fleet IDs. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a FleetCapacity object is returned for each requested fleet ID. When specifying a list of fleet IDs, attribute objects are returned only for fleets that currently exist.   Some API actions may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed. 
   */
  describeFleetCapacity(params: GameLift.Types.DescribeFleetCapacityInput, callback?: (err: AWSError, data: GameLift.Types.DescribeFleetCapacityOutput) => void): Request<GameLift.Types.DescribeFleetCapacityOutput, AWSError>;
  /**
   * Retrieves the current status of fleet capacity for one or more fleets. This information includes the number of instances that have been requested for the fleet and the number currently active. You can request capacity for all fleets, or specify a list of one or more fleet IDs. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a FleetCapacity object is returned for each requested fleet ID. When specifying a list of fleet IDs, attribute objects are returned only for fleets that currently exist.   Some API actions may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed. 
   */
  describeFleetCapacity(callback?: (err: AWSError, data: GameLift.Types.DescribeFleetCapacityOutput) => void): Request<GameLift.Types.DescribeFleetCapacityOutput, AWSError>;
  /**
   * Retrieves entries from the specified fleet's event log. You can specify a time range to limit the result set. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a collection of event log entries matching the request are returned.
   */
  describeFleetEvents(params: GameLift.Types.DescribeFleetEventsInput, callback?: (err: AWSError, data: GameLift.Types.DescribeFleetEventsOutput) => void): Request<GameLift.Types.DescribeFleetEventsOutput, AWSError>;
  /**
   * Retrieves entries from the specified fleet's event log. You can specify a time range to limit the result set. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a collection of event log entries matching the request are returned.
   */
  describeFleetEvents(callback?: (err: AWSError, data: GameLift.Types.DescribeFleetEventsOutput) => void): Request<GameLift.Types.DescribeFleetEventsOutput, AWSError>;
  /**
   * Retrieves the inbound connection permissions for a fleet. Connection permissions include a range of IP addresses and port settings that incoming traffic can use to access server processes in the fleet. To get a fleet's inbound connection permissions, specify a fleet ID. If successful, a collection of IpPermission objects is returned for the requested fleet ID. If the requested fleet has been deleted, the result set is empty.
   */
  describeFleetPortSettings(params: GameLift.Types.DescribeFleetPortSettingsInput, callback?: (err: AWSError, data: GameLift.Types.DescribeFleetPortSettingsOutput) => void): Request<GameLift.Types.DescribeFleetPortSettingsOutput, AWSError>;
  /**
   * Retrieves the inbound connection permissions for a fleet. Connection permissions include a range of IP addresses and port settings that incoming traffic can use to access server processes in the fleet. To get a fleet's inbound connection permissions, specify a fleet ID. If successful, a collection of IpPermission objects is returned for the requested fleet ID. If the requested fleet has been deleted, the result set is empty.
   */
  describeFleetPortSettings(callback?: (err: AWSError, data: GameLift.Types.DescribeFleetPortSettingsOutput) => void): Request<GameLift.Types.DescribeFleetPortSettingsOutput, AWSError>;
  /**
   * Retrieves utilization statistics for one or more fleets. You can request utilization data for all fleets, or specify a list of one or more fleet IDs. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a FleetUtilization object is returned for each requested fleet ID. When specifying a list of fleet IDs, utilization objects are returned only for fleets that currently exist.   Some API actions may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed. 
   */
  describeFleetUtilization(params: GameLift.Types.DescribeFleetUtilizationInput, callback?: (err: AWSError, data: GameLift.Types.DescribeFleetUtilizationOutput) => void): Request<GameLift.Types.DescribeFleetUtilizationOutput, AWSError>;
  /**
   * Retrieves utilization statistics for one or more fleets. You can request utilization data for all fleets, or specify a list of one or more fleet IDs. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a FleetUtilization object is returned for each requested fleet ID. When specifying a list of fleet IDs, utilization objects are returned only for fleets that currently exist.   Some API actions may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed. 
   */
  describeFleetUtilization(callback?: (err: AWSError, data: GameLift.Types.DescribeFleetUtilizationOutput) => void): Request<GameLift.Types.DescribeFleetUtilizationOutput, AWSError>;
  /**
   * Retrieves properties, including the protection policy in force, for one or more game sessions. This action can be used in several ways: (1) provide a GameSessionId or GameSessionArn to request details for a specific game session; (2) provide either a FleetId or an AliasId to request properties for all game sessions running on a fleet.  To get game session record(s), specify just one of the following: game session ID, fleet ID, or alias ID. You can filter this request by game session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a GameSessionDetail object is returned for each session matching the request.
   */
  describeGameSessionDetails(params: GameLift.Types.DescribeGameSessionDetailsInput, callback?: (err: AWSError, data: GameLift.Types.DescribeGameSessionDetailsOutput) => void): Request<GameLift.Types.DescribeGameSessionDetailsOutput, AWSError>;
  /**
   * Retrieves properties, including the protection policy in force, for one or more game sessions. This action can be used in several ways: (1) provide a GameSessionId or GameSessionArn to request details for a specific game session; (2) provide either a FleetId or an AliasId to request properties for all game sessions running on a fleet.  To get game session record(s), specify just one of the following: game session ID, fleet ID, or alias ID. You can filter this request by game session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a GameSessionDetail object is returned for each session matching the request.
   */
  describeGameSessionDetails(callback?: (err: AWSError, data: GameLift.Types.DescribeGameSessionDetailsOutput) => void): Request<GameLift.Types.DescribeGameSessionDetailsOutput, AWSError>;
  /**
   * Retrieves properties and current status of a game session placement request. To get game session placement details, specify the placement ID. If successful, a GameSessionPlacement object is returned.
   */
  describeGameSessionPlacement(params: GameLift.Types.DescribeGameSessionPlacementInput, callback?: (err: AWSError, data: GameLift.Types.DescribeGameSessionPlacementOutput) => void): Request<GameLift.Types.DescribeGameSessionPlacementOutput, AWSError>;
  /**
   * Retrieves properties and current status of a game session placement request. To get game session placement details, specify the placement ID. If successful, a GameSessionPlacement object is returned.
   */
  describeGameSessionPlacement(callback?: (err: AWSError, data: GameLift.Types.DescribeGameSessionPlacementOutput) => void): Request<GameLift.Types.DescribeGameSessionPlacementOutput, AWSError>;
  /**
   * Retrieves the properties for one or more game session queues. When requesting multiple queues, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a GameSessionQueue object is returned for each requested queue. When specifying a list of queues, objects are returned only for queues that currently exist in the region.
   */
  describeGameSessionQueues(params: GameLift.Types.DescribeGameSessionQueuesInput, callback?: (err: AWSError, data: GameLift.Types.DescribeGameSessionQueuesOutput) => void): Request<GameLift.Types.DescribeGameSessionQueuesOutput, AWSError>;
  /**
   * Retrieves the properties for one or more game session queues. When requesting multiple queues, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a GameSessionQueue object is returned for each requested queue. When specifying a list of queues, objects are returned only for queues that currently exist in the region.
   */
  describeGameSessionQueues(callback?: (err: AWSError, data: GameLift.Types.DescribeGameSessionQueuesOutput) => void): Request<GameLift.Types.DescribeGameSessionQueuesOutput, AWSError>;
  /**
   * Retrieves a set of one or more game sessions. Request a specific game session or request all game sessions on a fleet. Alternatively, use SearchGameSessions to request a set of active game sessions that are filtered by certain criteria. To retrieve protection policy settings for game sessions, use DescribeGameSessionDetails. To get game sessions, specify one of the following: game session ID, fleet ID, or alias ID. You can filter this request by game session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a GameSession object is returned for each game session matching the request.  Available in Amazon GameLift Local. 
   */
  describeGameSessions(params: GameLift.Types.DescribeGameSessionsInput, callback?: (err: AWSError, data: GameLift.Types.DescribeGameSessionsOutput) => void): Request<GameLift.Types.DescribeGameSessionsOutput, AWSError>;
  /**
   * Retrieves a set of one or more game sessions. Request a specific game session or request all game sessions on a fleet. Alternatively, use SearchGameSessions to request a set of active game sessions that are filtered by certain criteria. To retrieve protection policy settings for game sessions, use DescribeGameSessionDetails. To get game sessions, specify one of the following: game session ID, fleet ID, or alias ID. You can filter this request by game session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a GameSession object is returned for each game session matching the request.  Available in Amazon GameLift Local. 
   */
  describeGameSessions(callback?: (err: AWSError, data: GameLift.Types.DescribeGameSessionsOutput) => void): Request<GameLift.Types.DescribeGameSessionsOutput, AWSError>;
  /**
   * Retrieves information about a fleet's instances, including instance IDs. Use this action to get details on all instances in the fleet or get details on one specific instance. To get a specific instance, specify fleet ID and instance ID. To get all instances in a fleet, specify a fleet ID only. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, an Instance object is returned for each result.
   */
  describeInstances(params: GameLift.Types.DescribeInstancesInput, callback?: (err: AWSError, data: GameLift.Types.DescribeInstancesOutput) => void): Request<GameLift.Types.DescribeInstancesOutput, AWSError>;
  /**
   * Retrieves information about a fleet's instances, including instance IDs. Use this action to get details on all instances in the fleet or get details on one specific instance. To get a specific instance, specify fleet ID and instance ID. To get all instances in a fleet, specify a fleet ID only. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, an Instance object is returned for each result.
   */
  describeInstances(callback?: (err: AWSError, data: GameLift.Types.DescribeInstancesOutput) => void): Request<GameLift.Types.DescribeInstancesOutput, AWSError>;
  /**
   * Retrieves properties for one or more player sessions. This action can be used in several ways: (1) provide a PlayerSessionId to request properties for a specific player session; (2) provide a GameSessionId to request properties for all player sessions in the specified game session; (3) provide a PlayerId to request properties for all player sessions of a specified player.  To get game session record(s), specify only one of the following: a player session ID, a game session ID, or a player ID. You can filter this request by player session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a PlayerSession object is returned for each session matching the request.  Available in Amazon GameLift Local. 
   */
  describePlayerSessions(params: GameLift.Types.DescribePlayerSessionsInput, callback?: (err: AWSError, data: GameLift.Types.DescribePlayerSessionsOutput) => void): Request<GameLift.Types.DescribePlayerSessionsOutput, AWSError>;
  /**
   * Retrieves properties for one or more player sessions. This action can be used in several ways: (1) provide a PlayerSessionId to request properties for a specific player session; (2) provide a GameSessionId to request properties for all player sessions in the specified game session; (3) provide a PlayerId to request properties for all player sessions of a specified player.  To get game session record(s), specify only one of the following: a player session ID, a game session ID, or a player ID. You can filter this request by player session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a PlayerSession object is returned for each session matching the request.  Available in Amazon GameLift Local. 
   */
  describePlayerSessions(callback?: (err: AWSError, data: GameLift.Types.DescribePlayerSessionsOutput) => void): Request<GameLift.Types.DescribePlayerSessionsOutput, AWSError>;
  /**
   * Retrieves the current runtime configuration for the specified fleet. The runtime configuration tells Amazon GameLift how to launch server processes on instances in the fleet.
   */
  describeRuntimeConfiguration(params: GameLift.Types.DescribeRuntimeConfigurationInput, callback?: (err: AWSError, data: GameLift.Types.DescribeRuntimeConfigurationOutput) => void): Request<GameLift.Types.DescribeRuntimeConfigurationOutput, AWSError>;
  /**
   * Retrieves the current runtime configuration for the specified fleet. The runtime configuration tells Amazon GameLift how to launch server processes on instances in the fleet.
   */
  describeRuntimeConfiguration(callback?: (err: AWSError, data: GameLift.Types.DescribeRuntimeConfigurationOutput) => void): Request<GameLift.Types.DescribeRuntimeConfigurationOutput, AWSError>;
  /**
   * Retrieves all scaling policies applied to a fleet. To get a fleet's scaling policies, specify the fleet ID. You can filter this request by policy status, such as to retrieve only active scaling policies. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, set of ScalingPolicy objects is returned for the fleet.
   */
  describeScalingPolicies(params: GameLift.Types.DescribeScalingPoliciesInput, callback?: (err: AWSError, data: GameLift.Types.DescribeScalingPoliciesOutput) => void): Request<GameLift.Types.DescribeScalingPoliciesOutput, AWSError>;
  /**
   * Retrieves all scaling policies applied to a fleet. To get a fleet's scaling policies, specify the fleet ID. You can filter this request by policy status, such as to retrieve only active scaling policies. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, set of ScalingPolicy objects is returned for the fleet.
   */
  describeScalingPolicies(callback?: (err: AWSError, data: GameLift.Types.DescribeScalingPoliciesOutput) => void): Request<GameLift.Types.DescribeScalingPoliciesOutput, AWSError>;
  /**
   * Retrieves the location of stored game session logs for a specified game session. When a game session is terminated, Amazon GameLift automatically stores the logs in Amazon S3. Use this URL to download the logs.  See the AWS Service Limits page for maximum log file sizes. Log files that exceed this limit are not saved. 
   */
  getGameSessionLogUrl(params: GameLift.Types.GetGameSessionLogUrlInput, callback?: (err: AWSError, data: GameLift.Types.GetGameSessionLogUrlOutput) => void): Request<GameLift.Types.GetGameSessionLogUrlOutput, AWSError>;
  /**
   * Retrieves the location of stored game session logs for a specified game session. When a game session is terminated, Amazon GameLift automatically stores the logs in Amazon S3. Use this URL to download the logs.  See the AWS Service Limits page for maximum log file sizes. Log files that exceed this limit are not saved. 
   */
  getGameSessionLogUrl(callback?: (err: AWSError, data: GameLift.Types.GetGameSessionLogUrlOutput) => void): Request<GameLift.Types.GetGameSessionLogUrlOutput, AWSError>;
  /**
   * Requests remote access to a fleet instance. Remote access is useful for debugging, gathering benchmarking data, or watching activity in real time.  Access requires credentials that match the operating system of the instance. For a Windows instance, Amazon GameLift returns a user name and password as strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA private key, also as strings, for use with an SSH client. The private key must be saved in the proper format to a .pem file before using. If you're making this request using the AWS CLI, saving the secret can be handled as part of the GetInstanceAccess request. (See the example later in this topic). For more information on remote access, see Remotely Accessing an Instance. To request access to a specific instance, specify the IDs of the instance and the fleet it belongs to. If successful, an InstanceAccess object is returned containing the instance's IP address and a set of credentials.
   */
  getInstanceAccess(params: GameLift.Types.GetInstanceAccessInput, callback?: (err: AWSError, data: GameLift.Types.GetInstanceAccessOutput) => void): Request<GameLift.Types.GetInstanceAccessOutput, AWSError>;
  /**
   * Requests remote access to a fleet instance. Remote access is useful for debugging, gathering benchmarking data, or watching activity in real time.  Access requires credentials that match the operating system of the instance. For a Windows instance, Amazon GameLift returns a user name and password as strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA private key, also as strings, for use with an SSH client. The private key must be saved in the proper format to a .pem file before using. If you're making this request using the AWS CLI, saving the secret can be handled as part of the GetInstanceAccess request. (See the example later in this topic). For more information on remote access, see Remotely Accessing an Instance. To request access to a specific instance, specify the IDs of the instance and the fleet it belongs to. If successful, an InstanceAccess object is returned containing the instance's IP address and a set of credentials.
   */
  getInstanceAccess(callback?: (err: AWSError, data: GameLift.Types.GetInstanceAccessOutput) => void): Request<GameLift.Types.GetInstanceAccessOutput, AWSError>;
  /**
   * Retrieves a collection of alias records for this AWS account. You can filter the result set by alias name and/or routing strategy type. Use the pagination parameters to retrieve results in sequential pages.  Aliases are not listed in any particular order. 
   */
  listAliases(params: GameLift.Types.ListAliasesInput, callback?: (err: AWSError, data: GameLift.Types.ListAliasesOutput) => void): Request<GameLift.Types.ListAliasesOutput, AWSError>;
  /**
   * Retrieves a collection of alias records for this AWS account. You can filter the result set by alias name and/or routing strategy type. Use the pagination parameters to retrieve results in sequential pages.  Aliases are not listed in any particular order. 
   */
  listAliases(callback?: (err: AWSError, data: GameLift.Types.ListAliasesOutput) => void): Request<GameLift.Types.ListAliasesOutput, AWSError>;
  /**
   * Retrieves build records for all builds associated with the AWS account in use. You can limit results to builds that are in a specific status by using the Status parameter. Use the pagination parameters to retrieve results in a set of sequential pages.   Build records are not listed in any particular order. 
   */
  listBuilds(params: GameLift.Types.ListBuildsInput, callback?: (err: AWSError, data: GameLift.Types.ListBuildsOutput) => void): Request<GameLift.Types.ListBuildsOutput, AWSError>;
  /**
   * Retrieves build records for all builds associated with the AWS account in use. You can limit results to builds that are in a specific status by using the Status parameter. Use the pagination parameters to retrieve results in a set of sequential pages.   Build records are not listed in any particular order. 
   */
  listBuilds(callback?: (err: AWSError, data: GameLift.Types.ListBuildsOutput) => void): Request<GameLift.Types.ListBuildsOutput, AWSError>;
  /**
   * Retrieves a collection of fleet records for this AWS account. You can filter the result set by build ID. Use the pagination parameters to retrieve results in sequential pages.  Fleet records are not listed in any particular order. 
   */
  listFleets(params: GameLift.Types.ListFleetsInput, callback?: (err: AWSError, data: GameLift.Types.ListFleetsOutput) => void): Request<GameLift.Types.ListFleetsOutput, AWSError>;
  /**
   * Retrieves a collection of fleet records for this AWS account. You can filter the result set by build ID. Use the pagination parameters to retrieve results in sequential pages.  Fleet records are not listed in any particular order. 
   */
  listFleets(callback?: (err: AWSError, data: GameLift.Types.ListFleetsOutput) => void): Request<GameLift.Types.ListFleetsOutput, AWSError>;
  /**
   * Creates or updates a scaling policy for a fleet. An active scaling policy prompts Amazon GameLift to track a certain metric for a fleet and automatically change the fleet's capacity in specific circumstances. Each scaling policy contains one rule statement. Fleets can have multiple scaling policies in force simultaneously. A scaling policy rule statement has the following structure: If [MetricName] is [ComparisonOperator] [Threshold] for [EvaluationPeriods] minutes, then [ScalingAdjustmentType] to/by [ScalingAdjustment]. For example, this policy: "If the number of idle instances exceeds 20 for more than 15 minutes, then reduce the fleet capacity by 10 instances" could be implemented as the following rule statement: If [IdleInstances] is [GreaterThanOrEqualToThreshold] [20] for [15] minutes, then [ChangeInCapacity] by [-10]. To create or update a scaling policy, specify a unique combination of name and fleet ID, and set the rule values. All parameters for this action are required. If successful, the policy name is returned. Scaling policies cannot be suspended or made inactive. To stop enforcing a scaling policy, call DeleteScalingPolicy.
   */
  putScalingPolicy(params: GameLift.Types.PutScalingPolicyInput, callback?: (err: AWSError, data: GameLift.Types.PutScalingPolicyOutput) => void): Request<GameLift.Types.PutScalingPolicyOutput, AWSError>;
  /**
   * Creates or updates a scaling policy for a fleet. An active scaling policy prompts Amazon GameLift to track a certain metric for a fleet and automatically change the fleet's capacity in specific circumstances. Each scaling policy contains one rule statement. Fleets can have multiple scaling policies in force simultaneously. A scaling policy rule statement has the following structure: If [MetricName] is [ComparisonOperator] [Threshold] for [EvaluationPeriods] minutes, then [ScalingAdjustmentType] to/by [ScalingAdjustment]. For example, this policy: "If the number of idle instances exceeds 20 for more than 15 minutes, then reduce the fleet capacity by 10 instances" could be implemented as the following rule statement: If [IdleInstances] is [GreaterThanOrEqualToThreshold] [20] for [15] minutes, then [ChangeInCapacity] by [-10]. To create or update a scaling policy, specify a unique combination of name and fleet ID, and set the rule values. All parameters for this action are required. If successful, the policy name is returned. Scaling policies cannot be suspended or made inactive. To stop enforcing a scaling policy, call DeleteScalingPolicy.
   */
  putScalingPolicy(callback?: (err: AWSError, data: GameLift.Types.PutScalingPolicyOutput) => void): Request<GameLift.Types.PutScalingPolicyOutput, AWSError>;
  /**
   *  This API call is not currently in use.  Retrieves a fresh set of upload credentials and the assigned Amazon S3 storage location for a specific build. Valid credentials are required to upload your game build files to Amazon S3.
   */
  requestUploadCredentials(params: GameLift.Types.RequestUploadCredentialsInput, callback?: (err: AWSError, data: GameLift.Types.RequestUploadCredentialsOutput) => void): Request<GameLift.Types.RequestUploadCredentialsOutput, AWSError>;
  /**
   *  This API call is not currently in use.  Retrieves a fresh set of upload credentials and the assigned Amazon S3 storage location for a specific build. Valid credentials are required to upload your game build files to Amazon S3.
   */
  requestUploadCredentials(callback?: (err: AWSError, data: GameLift.Types.RequestUploadCredentialsOutput) => void): Request<GameLift.Types.RequestUploadCredentialsOutput, AWSError>;
  /**
   * Retrieves the fleet ID that a specified alias is currently pointing to.
   */
  resolveAlias(params: GameLift.Types.ResolveAliasInput, callback?: (err: AWSError, data: GameLift.Types.ResolveAliasOutput) => void): Request<GameLift.Types.ResolveAliasOutput, AWSError>;
  /**
   * Retrieves the fleet ID that a specified alias is currently pointing to.
   */
  resolveAlias(callback?: (err: AWSError, data: GameLift.Types.ResolveAliasOutput) => void): Request<GameLift.Types.ResolveAliasOutput, AWSError>;
  /**
   * Retrieves a set of game sessions that match a set of search criteria and sorts them in a specified order. Currently a game session search is limited to a single fleet. Search results include only game sessions that are in ACTIVE status. If you need to retrieve game sessions with a status other than active, use DescribeGameSessions. If you need to retrieve the protection policy for each game session, use DescribeGameSessionDetails. You can search or sort by the following game session attributes:    gameSessionId -- Unique identifier for the game session. You can use either a GameSessionId or GameSessionArn value.     gameSessionName -- Name assigned to a game session. This value is set when requesting a new game session with CreateGameSession or updating with UpdateGameSession. Game session names do not need to be unique to a game session.    creationTimeMillis -- Value indicating when a game session was created. It is expressed in Unix time as milliseconds.    playerSessionCount -- Number of players currently connected to a game session. This value changes rapidly as players join the session or drop out.    maximumSessions -- Maximum number of player sessions allowed for a game session. This value is set when requesting a new game session with CreateGameSession or updating with UpdateGameSession.    hasAvailablePlayerSessions -- Boolean value indicating whether or not a game session has reached its maximum number of players. When searching with this attribute, the search value must be true or false. It is highly recommended that all search requests include this filter attribute to optimize search performance and return only sessions that players can join.    To search or sort, specify either a fleet ID or an alias ID, and provide a search filter expression, a sort expression, or both. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a collection of GameSession objects matching the request is returned.  Returned values for playerSessionCount and hasAvailablePlayerSessions change quickly as players join sessions and others drop out. Results should be considered a snapshot in time. Be sure to refresh search results often, and handle sessions that fill up before a player can join.    Available in Amazon GameLift Local. 
   */
  searchGameSessions(params: GameLift.Types.SearchGameSessionsInput, callback?: (err: AWSError, data: GameLift.Types.SearchGameSessionsOutput) => void): Request<GameLift.Types.SearchGameSessionsOutput, AWSError>;
  /**
   * Retrieves a set of game sessions that match a set of search criteria and sorts them in a specified order. Currently a game session search is limited to a single fleet. Search results include only game sessions that are in ACTIVE status. If you need to retrieve game sessions with a status other than active, use DescribeGameSessions. If you need to retrieve the protection policy for each game session, use DescribeGameSessionDetails. You can search or sort by the following game session attributes:    gameSessionId -- Unique identifier for the game session. You can use either a GameSessionId or GameSessionArn value.     gameSessionName -- Name assigned to a game session. This value is set when requesting a new game session with CreateGameSession or updating with UpdateGameSession. Game session names do not need to be unique to a game session.    creationTimeMillis -- Value indicating when a game session was created. It is expressed in Unix time as milliseconds.    playerSessionCount -- Number of players currently connected to a game session. This value changes rapidly as players join the session or drop out.    maximumSessions -- Maximum number of player sessions allowed for a game session. This value is set when requesting a new game session with CreateGameSession or updating with UpdateGameSession.    hasAvailablePlayerSessions -- Boolean value indicating whether or not a game session has reached its maximum number of players. When searching with this attribute, the search value must be true or false. It is highly recommended that all search requests include this filter attribute to optimize search performance and return only sessions that players can join.    To search or sort, specify either a fleet ID or an alias ID, and provide a search filter expression, a sort expression, or both. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a collection of GameSession objects matching the request is returned.  Returned values for playerSessionCount and hasAvailablePlayerSessions change quickly as players join sessions and others drop out. Results should be considered a snapshot in time. Be sure to refresh search results often, and handle sessions that fill up before a player can join.    Available in Amazon GameLift Local. 
   */
  searchGameSessions(callback?: (err: AWSError, data: GameLift.Types.SearchGameSessionsOutput) => void): Request<GameLift.Types.SearchGameSessionsOutput, AWSError>;
  /**
   * Places a request for a new game session in a queue (see CreateGameSessionQueue). When processing a placement request, Amazon GameLift searches for available resources on the queue's destinations, scanning each until it finds resources or the placement request times out. A game session placement request can also request player sessions. When a new game session is successfully created, Amazon GameLift creates a player session for each player included in the request. When placing a game session, by default Amazon GameLift tries each fleet in the order they are listed in the queue configuration. Ideally, a queue's destinations are listed in preference order. Alternatively, when requesting a game session with players, you can also provide latency data for each player in relevant regions. Latency data indicates the performance lag a player experiences when connected to a fleet in the region. Amazon GameLift uses latency data to reorder the list of destinations to place the game session in a region with minimal lag. If latency data is provided for multiple players, Amazon GameLift calculates each region's average lag for all players and reorders to get the best game play across all players.  To place a new game session request, specify the queue name and a set of game session properties and settings. Also provide a unique ID (such as a UUID) for the placement. You'll use this ID to track the status of the placement request. Optionally, provide a set of IDs and player data for each player you want to join to the new game session. To optimize game play for the players, also provide latency data for all players. If successful, a new game session placement is created. To track the status of a placement request, call DescribeGameSessionPlacement and check the request's status. If the status is Fulfilled, a new game session has been created and a game session ARN and region are referenced. If the placement request times out, you have the option of resubmitting the request or retrying it with a different queue. 
   */
  startGameSessionPlacement(params: GameLift.Types.StartGameSessionPlacementInput, callback?: (err: AWSError, data: GameLift.Types.StartGameSessionPlacementOutput) => void): Request<GameLift.Types.StartGameSessionPlacementOutput, AWSError>;
  /**
   * Places a request for a new game session in a queue (see CreateGameSessionQueue). When processing a placement request, Amazon GameLift searches for available resources on the queue's destinations, scanning each until it finds resources or the placement request times out. A game session placement request can also request player sessions. When a new game session is successfully created, Amazon GameLift creates a player session for each player included in the request. When placing a game session, by default Amazon GameLift tries each fleet in the order they are listed in the queue configuration. Ideally, a queue's destinations are listed in preference order. Alternatively, when requesting a game session with players, you can also provide latency data for each player in relevant regions. Latency data indicates the performance lag a player experiences when connected to a fleet in the region. Amazon GameLift uses latency data to reorder the list of destinations to place the game session in a region with minimal lag. If latency data is provided for multiple players, Amazon GameLift calculates each region's average lag for all players and reorders to get the best game play across all players.  To place a new game session request, specify the queue name and a set of game session properties and settings. Also provide a unique ID (such as a UUID) for the placement. You'll use this ID to track the status of the placement request. Optionally, provide a set of IDs and player data for each player you want to join to the new game session. To optimize game play for the players, also provide latency data for all players. If successful, a new game session placement is created. To track the status of a placement request, call DescribeGameSessionPlacement and check the request's status. If the status is Fulfilled, a new game session has been created and a game session ARN and region are referenced. If the placement request times out, you have the option of resubmitting the request or retrying it with a different queue. 
   */
  startGameSessionPlacement(callback?: (err: AWSError, data: GameLift.Types.StartGameSessionPlacementOutput) => void): Request<GameLift.Types.StartGameSessionPlacementOutput, AWSError>;
  /**
   * Cancels a game session placement that is in Pending status. To stop a placement, provide the placement ID values. If successful, the placement is moved to Cancelled status.
   */
  stopGameSessionPlacement(params: GameLift.Types.StopGameSessionPlacementInput, callback?: (err: AWSError, data: GameLift.Types.StopGameSessionPlacementOutput) => void): Request<GameLift.Types.StopGameSessionPlacementOutput, AWSError>;
  /**
   * Cancels a game session placement that is in Pending status. To stop a placement, provide the placement ID values. If successful, the placement is moved to Cancelled status.
   */
  stopGameSessionPlacement(callback?: (err: AWSError, data: GameLift.Types.StopGameSessionPlacementOutput) => void): Request<GameLift.Types.StopGameSessionPlacementOutput, AWSError>;
  /**
   * Updates properties for a fleet alias. To update properties, specify the alias ID to be updated and provide the information to be changed. To reassign an alias to another fleet, provide an updated routing strategy. If successful, the updated alias record is returned.
   */
  updateAlias(params: GameLift.Types.UpdateAliasInput, callback?: (err: AWSError, data: GameLift.Types.UpdateAliasOutput) => void): Request<GameLift.Types.UpdateAliasOutput, AWSError>;
  /**
   * Updates properties for a fleet alias. To update properties, specify the alias ID to be updated and provide the information to be changed. To reassign an alias to another fleet, provide an updated routing strategy. If successful, the updated alias record is returned.
   */
  updateAlias(callback?: (err: AWSError, data: GameLift.Types.UpdateAliasOutput) => void): Request<GameLift.Types.UpdateAliasOutput, AWSError>;
  /**
   * Updates metadata in a build record, including the build name and version. To update the metadata, specify the build ID to update and provide the new values. If successful, a build object containing the updated metadata is returned.
   */
  updateBuild(params: GameLift.Types.UpdateBuildInput, callback?: (err: AWSError, data: GameLift.Types.UpdateBuildOutput) => void): Request<GameLift.Types.UpdateBuildOutput, AWSError>;
  /**
   * Updates metadata in a build record, including the build name and version. To update the metadata, specify the build ID to update and provide the new values. If successful, a build object containing the updated metadata is returned.
   */
  updateBuild(callback?: (err: AWSError, data: GameLift.Types.UpdateBuildOutput) => void): Request<GameLift.Types.UpdateBuildOutput, AWSError>;
  /**
   * Updates fleet properties, including name and description, for a fleet. To update metadata, specify the fleet ID and the property values you want to change. If successful, the fleet ID for the updated fleet is returned.
   */
  updateFleetAttributes(params: GameLift.Types.UpdateFleetAttributesInput, callback?: (err: AWSError, data: GameLift.Types.UpdateFleetAttributesOutput) => void): Request<GameLift.Types.UpdateFleetAttributesOutput, AWSError>;
  /**
   * Updates fleet properties, including name and description, for a fleet. To update metadata, specify the fleet ID and the property values you want to change. If successful, the fleet ID for the updated fleet is returned.
   */
  updateFleetAttributes(callback?: (err: AWSError, data: GameLift.Types.UpdateFleetAttributesOutput) => void): Request<GameLift.Types.UpdateFleetAttributesOutput, AWSError>;
  /**
   * Updates capacity settings for a fleet. Use this action to specify the number of EC2 instances (hosts) that you want this fleet to contain. Before calling this action, you may want to call DescribeEC2InstanceLimits to get the maximum capacity based on the fleet's EC2 instance type. If you're using autoscaling (see PutScalingPolicy), you may want to specify a minimum and/or maximum capacity. If you don't provide these, autoscaling can set capacity anywhere between zero and the service limits. To update fleet capacity, specify the fleet ID and the number of instances you want the fleet to host. If successful, Amazon GameLift starts or terminates instances so that the fleet's active instance count matches the desired instance count. You can view a fleet's current capacity information by calling DescribeFleetCapacity. If the desired instance count is higher than the instance type's limit, the "Limit Exceeded" exception occurs.
   */
  updateFleetCapacity(params: GameLift.Types.UpdateFleetCapacityInput, callback?: (err: AWSError, data: GameLift.Types.UpdateFleetCapacityOutput) => void): Request<GameLift.Types.UpdateFleetCapacityOutput, AWSError>;
  /**
   * Updates capacity settings for a fleet. Use this action to specify the number of EC2 instances (hosts) that you want this fleet to contain. Before calling this action, you may want to call DescribeEC2InstanceLimits to get the maximum capacity based on the fleet's EC2 instance type. If you're using autoscaling (see PutScalingPolicy), you may want to specify a minimum and/or maximum capacity. If you don't provide these, autoscaling can set capacity anywhere between zero and the service limits. To update fleet capacity, specify the fleet ID and the number of instances you want the fleet to host. If successful, Amazon GameLift starts or terminates instances so that the fleet's active instance count matches the desired instance count. You can view a fleet's current capacity information by calling DescribeFleetCapacity. If the desired instance count is higher than the instance type's limit, the "Limit Exceeded" exception occurs.
   */
  updateFleetCapacity(callback?: (err: AWSError, data: GameLift.Types.UpdateFleetCapacityOutput) => void): Request<GameLift.Types.UpdateFleetCapacityOutput, AWSError>;
  /**
   * Updates port settings for a fleet. To update settings, specify the fleet ID to be updated and list the permissions you want to update. List the permissions you want to add in InboundPermissionAuthorizations, and permissions you want to remove in InboundPermissionRevocations. Permissions to be removed must match existing fleet permissions. If successful, the fleet ID for the updated fleet is returned.
   */
  updateFleetPortSettings(params: GameLift.Types.UpdateFleetPortSettingsInput, callback?: (err: AWSError, data: GameLift.Types.UpdateFleetPortSettingsOutput) => void): Request<GameLift.Types.UpdateFleetPortSettingsOutput, AWSError>;
  /**
   * Updates port settings for a fleet. To update settings, specify the fleet ID to be updated and list the permissions you want to update. List the permissions you want to add in InboundPermissionAuthorizations, and permissions you want to remove in InboundPermissionRevocations. Permissions to be removed must match existing fleet permissions. If successful, the fleet ID for the updated fleet is returned.
   */
  updateFleetPortSettings(callback?: (err: AWSError, data: GameLift.Types.UpdateFleetPortSettingsOutput) => void): Request<GameLift.Types.UpdateFleetPortSettingsOutput, AWSError>;
  /**
   * Updates game session properties. This includes the session name, maximum player count, protection policy, which controls whether or not an active game session can be terminated during a scale-down event, and the player session creation policy, which controls whether or not new players can join the session. To update a game session, specify the game session ID and the values you want to change. If successful, an updated GameSession object is returned. 
   */
  updateGameSession(params: GameLift.Types.UpdateGameSessionInput, callback?: (err: AWSError, data: GameLift.Types.UpdateGameSessionOutput) => void): Request<GameLift.Types.UpdateGameSessionOutput, AWSError>;
  /**
   * Updates game session properties. This includes the session name, maximum player count, protection policy, which controls whether or not an active game session can be terminated during a scale-down event, and the player session creation policy, which controls whether or not new players can join the session. To update a game session, specify the game session ID and the values you want to change. If successful, an updated GameSession object is returned. 
   */
  updateGameSession(callback?: (err: AWSError, data: GameLift.Types.UpdateGameSessionOutput) => void): Request<GameLift.Types.UpdateGameSessionOutput, AWSError>;
  /**
   * Updates settings for a game session queue, which determines how new game session requests in the queue are processed. To update settings, specify the queue name to be updated and provide the new settings. When updating destinations, provide a complete list of destinations. 
   */
  updateGameSessionQueue(params: GameLift.Types.UpdateGameSessionQueueInput, callback?: (err: AWSError, data: GameLift.Types.UpdateGameSessionQueueOutput) => void): Request<GameLift.Types.UpdateGameSessionQueueOutput, AWSError>;
  /**
   * Updates settings for a game session queue, which determines how new game session requests in the queue are processed. To update settings, specify the queue name to be updated and provide the new settings. When updating destinations, provide a complete list of destinations. 
   */
  updateGameSessionQueue(callback?: (err: AWSError, data: GameLift.Types.UpdateGameSessionQueueOutput) => void): Request<GameLift.Types.UpdateGameSessionQueueOutput, AWSError>;
  /**
   * Updates the current runtime configuration for the specified fleet, which tells Amazon GameLift how to launch server processes on instances in the fleet. You can update a fleet's runtime configuration at any time after the fleet is created; it does not need to be in an ACTIVE status. To update runtime configuration, specify the fleet ID and provide a RuntimeConfiguration object with the updated collection of server process configurations. Each instance in a Amazon GameLift fleet checks regularly for an updated runtime configuration and changes how it launches server processes to comply with the latest version. Existing server processes are not affected by the update; they continue to run until they end, while Amazon GameLift simply adds new server processes to fit the current runtime configuration. As a result, the runtime configuration changes are applied gradually as existing processes shut down and new processes are launched in Amazon GameLift's normal process recycling activity.
   */
  updateRuntimeConfiguration(params: GameLift.Types.UpdateRuntimeConfigurationInput, callback?: (err: AWSError, data: GameLift.Types.UpdateRuntimeConfigurationOutput) => void): Request<GameLift.Types.UpdateRuntimeConfigurationOutput, AWSError>;
  /**
   * Updates the current runtime configuration for the specified fleet, which tells Amazon GameLift how to launch server processes on instances in the fleet. You can update a fleet's runtime configuration at any time after the fleet is created; it does not need to be in an ACTIVE status. To update runtime configuration, specify the fleet ID and provide a RuntimeConfiguration object with the updated collection of server process configurations. Each instance in a Amazon GameLift fleet checks regularly for an updated runtime configuration and changes how it launches server processes to comply with the latest version. Existing server processes are not affected by the update; they continue to run until they end, while Amazon GameLift simply adds new server processes to fit the current runtime configuration. As a result, the runtime configuration changes are applied gradually as existing processes shut down and new processes are launched in Amazon GameLift's normal process recycling activity.
   */
  updateRuntimeConfiguration(callback?: (err: AWSError, data: GameLift.Types.UpdateRuntimeConfigurationOutput) => void): Request<GameLift.Types.UpdateRuntimeConfigurationOutput, AWSError>;
}
declare namespace GameLift {
  export interface Alias {
    /**
     * Unique identifier for an alias; alias IDs are unique within a region.
     */
    AliasId?: AliasId;
    /**
     * Descriptive label that is associated with an alias. Alias names do not need to be unique.
     */
    Name?: NonBlankAndLengthConstraintString;
    /**
     * Unique identifier for an alias; alias ARNs are unique across all regions.
     */
    AliasArn?: ArnStringModel;
    /**
     * Human-readable description of an alias.
     */
    Description?: FreeText;
    /**
     * Alias configuration for the alias, including routing type and settings.
     */
    RoutingStrategy?: RoutingStrategy;
    /**
     * Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    CreationTime?: Timestamp;
    /**
     * Time stamp indicating when this data object was last modified. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    LastUpdatedTime?: Timestamp;
  }
  export type AliasId = string;
  export type AliasList = Alias[];
  export type ArnStringModel = string;
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
     * Descriptive label that is associated with a build. Build names do not need to be unique. It can be set using CreateBuild or UpdateBuild.
     */
    Name?: FreeText;
    /**
     * Version that is associated with this build. Version strings do not need to be unique. This value can be set using CreateBuild or UpdateBuild.
     */
    Version?: FreeText;
    /**
     * Current status of the build. Possible build statuses include the following:    INITIALIZED – A new build has been defined, but no files have been uploaded. You cannot create fleets for builds that are in this status. When a build is successfully created, the build status is set to this value.     READY – The game build has been successfully uploaded. You can now create new fleets for this build.    FAILED – The game build upload failed. You cannot create new fleets for this build.   
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
     * Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    CreationTime?: Timestamp;
  }
  export type BuildId = string;
  export type BuildList = Build[];
  export type BuildStatus = "INITIALIZED"|"READY"|"FAILED"|string;
  export type ComparisonOperatorType = "GreaterThanOrEqualToThreshold"|"GreaterThanThreshold"|"LessThanThreshold"|"LessThanOrEqualToThreshold"|string;
  export interface CreateAliasInput {
    /**
     * Descriptive label that is associated with an alias. Alias names do not need to be unique.
     */
    Name: NonBlankAndLengthConstraintString;
    /**
     * Human-readable description of an alias.
     */
    Description?: NonZeroAndMaxString;
    /**
     * Object that specifies the fleet and routing type to use for the alias.
     */
    RoutingStrategy: RoutingStrategy;
  }
  export interface CreateAliasOutput {
    /**
     * Object that describes the newly created alias record.
     */
    Alias?: Alias;
  }
  export interface CreateBuildInput {
    /**
     * Descriptive label that is associated with a build. Build names do not need to be unique. You can use UpdateBuild to change this value later. 
     */
    Name?: NonZeroAndMaxString;
    /**
     * Version that is associated with this build. Version strings do not need to be unique. You can use UpdateBuild to change this value later. 
     */
    Version?: NonZeroAndMaxString;
    /**
     * Amazon S3 location of the game build files to be uploaded. The S3 bucket must be owned by the same AWS account that you're using to manage Amazon GameLift. It also must in the same region that you want to create a new build in. Before calling CreateBuild with this location, you must allow Amazon GameLift to access your Amazon S3 bucket (see Create a Build with Files in Amazon S3).
     */
    StorageLocation?: S3Location;
    /**
     * Operating system that the game server binaries are built to run on. This value determines the type of fleet resources that you can use for this build. If your game build contains multiple executables, they all must run on the same operating system.
     */
    OperatingSystem?: OperatingSystem;
  }
  export interface CreateBuildOutput {
    /**
     * The newly created build record, including a unique build ID and status. 
     */
    Build?: Build;
    /**
     * This element is not currently in use.
     */
    UploadCredentials?: AwsCredentials;
    /**
     * Amazon S3 location specified in the request.
     */
    StorageLocation?: S3Location;
  }
  export interface CreateFleetInput {
    /**
     * Descriptive label that is associated with a fleet. Fleet names do not need to be unique.
     */
    Name: NonZeroAndMaxString;
    /**
     * Human-readable description of a fleet.
     */
    Description?: NonZeroAndMaxString;
    /**
     * Unique identifier for a build to be deployed on the new fleet. The build must have been successfully uploaded to Amazon GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created.
     */
    BuildId: BuildId;
    /**
     * This parameter is no longer used. Instead, specify a server launch path using the RuntimeConfiguration parameter. (Requests that specify a server launch path and launch parameters instead of a runtime configuration will continue to work.)
     */
    ServerLaunchPath?: NonZeroAndMaxString;
    /**
     * This parameter is no longer used. Instead, specify server launch parameters in the RuntimeConfiguration parameter. (Requests that specify a server launch path and launch parameters instead of a runtime configuration will continue to work.)
     */
    ServerLaunchParameters?: NonZeroAndMaxString;
    /**
     * This parameter is no longer used. Instead, to specify where Amazon GameLift should store log files once a server process shuts down, use the Amazon GameLift server API ProcessReady() and specify one or more directory paths in logParameters. See more information in the Server API Reference. 
     */
    LogPaths?: StringList;
    /**
     * Name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.
     */
    EC2InstanceType: EC2InstanceType;
    /**
     * Range of IP addresses and port settings that permit inbound traffic to access server processes running on the fleet. If no inbound permissions are set, including both IP address range and port range, the server processes in the fleet cannot accept connections. You can specify one or more sets of permissions for a fleet.
     */
    EC2InboundPermissions?: IpPermissionsList;
    /**
     * Game session protection policy to apply to all instances in this fleet. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy using UpdateFleetAttributes, but this change will only affect sessions created after the policy change. You can also set protection for individual instances using UpdateGameSession.    NoProtection – The game session can be terminated during a scale-down event.    FullProtection – If the game session is in an ACTIVE status, it cannot be terminated during a scale-down event.  
     */
    NewGameSessionProtectionPolicy?: ProtectionPolicy;
    /**
     * Instructions for launching server processes on each instance in the fleet. The runtime configuration for a fleet has a collection of server process configurations, one for each type of server process to run on an instance. A server process configuration specifies the location of the server executable, launch parameters, and the number of concurrent processes with that configuration to maintain on each instance. A CreateFleet request must include a runtime configuration with at least one server process configuration; otherwise the request will fail with an invalid request exception. (This parameter replaces the parameters ServerLaunchPath and ServerLaunchParameters; requests that contain values for these parameters instead of a runtime configuration will continue to work.) 
     */
    RuntimeConfiguration?: RuntimeConfiguration;
    /**
     * Policy that limits the number of game sessions an individual player can create over a span of time for this fleet.
     */
    ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
  }
  export interface CreateFleetOutput {
    /**
     * Properties for the newly created fleet.
     */
    FleetAttributes?: FleetAttributes;
  }
  export interface CreateGameSessionInput {
    /**
     * Unique identifier for a fleet to create a game session in. Each request must reference either a fleet ID or alias ID, but not both.
     */
    FleetId?: FleetId;
    /**
     * Unique identifier for an alias associated with the fleet to create a game session in. Each request must reference either a fleet ID or alias ID, but not both.
     */
    AliasId?: AliasId;
    /**
     * Maximum number of players that can be connected simultaneously to the game session.
     */
    MaximumPlayerSessionCount: WholeNumber;
    /**
     * Descriptive label that is associated with a game session. Session names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
    /**
     * Set of developer-defined properties for a game session. These properties are passed to the server process hosting the game session.
     */
    GameProperties?: GamePropertyList;
    /**
     * Unique identifier for a player or entity creating the game session. This ID is used to enforce a resource protection policy (if one exists) that limits the number of concurrent active game sessions one player can have.
     */
    CreatorId?: NonZeroAndMaxString;
    /**
     *  This parameter is no longer preferred. Please use IdempotencyToken instead. Custom string that uniquely identifies a request for a new game session. Maximum token length is 48 characters. If provided, this string is included in the new game session's ID. (A game session ID has the following format: arn:aws:gamelift:&lt;region&gt;::gamesession/&lt;fleet ID&gt;/&lt;custom ID string or idempotency token&gt;.) 
     */
    GameSessionId?: IdStringModel;
    /**
     * Custom string that uniquely identifies a request for a new game session. Maximum token length is 48 characters. If provided, this string is included in the new game session's ID. (A game session ID has the following format: arn:aws:gamelift:&lt;region&gt;::gamesession/&lt;fleet ID&gt;/&lt;custom ID string or idempotency token&gt;.) 
     */
    IdempotencyToken?: IdStringModel;
  }
  export interface CreateGameSessionOutput {
    /**
     * Object that describes the newly created game session record.
     */
    GameSession?: GameSession;
  }
  export interface CreateGameSessionQueueInput {
    /**
     * Descriptive label that is associated with queue. Queue names must be unique within each region.
     */
    Name: GameSessionQueueName;
    /**
     * Maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a TIMED_OUT status.
     */
    TimeoutInSeconds?: WholeNumber;
    /**
     * Collection of latency policies to apply when processing game sessions placement requests with player latency information. Multiple policies are evaluated in order of the maximum latency value, starting with the lowest latency values. With just one policy, it is enforced at the start of the game session placement for the duration period. With multiple policies, each policy is enforced consecutively for its duration period. For example, a queue might enforce a 60-second policy followed by a 120-second policy, and then no policy for the remainder of the placement. A player latency policy must set a value for MaximumIndividualPlayerLatencyMilliseconds; if none is set, this API requests will fail.
     */
    PlayerLatencyPolicies?: PlayerLatencyPolicyList;
    /**
     * List of fleets that can be used to fulfill game session placement requests in the queue. Fleets are identified by either a fleet ARN or a fleet alias ARN. Destinations are listed in default preference order.
     */
    Destinations?: GameSessionQueueDestinationList;
  }
  export interface CreateGameSessionQueueOutput {
    /**
     * Object that describes the newly created game session queue.
     */
    GameSessionQueue?: GameSessionQueue;
  }
  export interface CreatePlayerSessionInput {
    /**
     * Unique identifier for the game session to add a player to.
     */
    GameSessionId: ArnStringModel;
    /**
     * Unique identifier for a player. Player IDs are developer-defined.
     */
    PlayerId: NonZeroAndMaxString;
    /**
     * Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game.
     */
    PlayerData?: PlayerData;
  }
  export interface CreatePlayerSessionOutput {
    /**
     * Object that describes the newly created player session record.
     */
    PlayerSession?: PlayerSession;
  }
  export interface CreatePlayerSessionsInput {
    /**
     * Unique identifier for the game session to add players to.
     */
    GameSessionId: ArnStringModel;
    /**
     * List of unique identifiers for the players to be added.
     */
    PlayerIds: PlayerIdList;
    /**
     * Map of string pairs, each specifying a player ID and a set of developer-defined information related to the player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game. Player data strings for player IDs not included in the PlayerIds parameter are ignored. 
     */
    PlayerDataMap?: PlayerDataMap;
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
     * Unique identifier for a build to delete.
     */
    BuildId: BuildId;
  }
  export interface DeleteFleetInput {
    /**
     * Unique identifier for a fleet to be deleted.
     */
    FleetId: FleetId;
  }
  export interface DeleteGameSessionQueueInput {
    /**
     * Descriptive label that is associated with queue. Queue names must be unique within each region.
     */
    Name: GameSessionQueueName;
  }
  export interface DeleteGameSessionQueueOutput {
  }
  export interface DeleteScalingPolicyInput {
    /**
     * Descriptive label that is associated with a scaling policy. Policy names do not need to be unique.
     */
    Name: NonZeroAndMaxString;
    /**
     * Unique identifier for a fleet to be deleted.
     */
    FleetId: FleetId;
  }
  export interface DescribeAliasInput {
    /**
     * Unique identifier for a fleet alias. Specify the alias you want to retrieve.
     */
    AliasId: AliasId;
  }
  export interface DescribeAliasOutput {
    /**
     * Object that contains the requested alias.
     */
    Alias?: Alias;
  }
  export interface DescribeBuildInput {
    /**
     * Unique identifier for a build to retrieve properties for.
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
     * Name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions. Leave this parameter blank to retrieve limits for all types.
     */
    EC2InstanceType?: EC2InstanceType;
  }
  export interface DescribeEC2InstanceLimitsOutput {
    /**
     * Object that contains the maximum number of instances for the specified instance type.
     */
    EC2InstanceLimits?: EC2InstanceLimitList;
  }
  export interface DescribeFleetAttributesInput {
    /**
     * Unique identifier for a fleet(s) to retrieve attributes for. To request attributes for all fleets, leave this parameter empty.
     */
    FleetIds?: FleetIdList;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet IDs.
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet IDs.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeFleetAttributesOutput {
    /**
     * Collection of objects containing attribute metadata for each requested fleet ID.
     */
    FleetAttributes?: FleetAttributesList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeFleetCapacityInput {
    /**
     * Unique identifier for a fleet(s) to retrieve capacity information for. To request capacity information for all fleets, leave this parameter empty.
     */
    FleetIds?: FleetIdList;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet IDs.
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet IDs.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeFleetCapacityOutput {
    /**
     * Collection of objects containing capacity information for each requested fleet ID. Leave this parameter empty to retrieve capacity information for all fleets.
     */
    FleetCapacity?: FleetCapacityList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeFleetEventsInput {
    /**
     * Unique identifier for a fleet to get event logs for.
     */
    FleetId: FleetId;
    /**
     * Earliest date to retrieve event logs for. If no start time is specified, this call returns entries starting from when the fleet was created to the specified end time. Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057").
     */
    StartTime?: Timestamp;
    /**
     * Most recent date to retrieve event logs for. If no end time is specified, this call returns entries from the specified start time up to the present. Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057").
     */
    EndTime?: Timestamp;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeFleetEventsOutput {
    /**
     * Collection of objects containing event log entries for the specified fleet.
     */
    Events?: EventList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeFleetPortSettingsInput {
    /**
     * Unique identifier for a fleet to retrieve port settings for.
     */
    FleetId: FleetId;
  }
  export interface DescribeFleetPortSettingsOutput {
    /**
     * Object that contains port settings for the requested fleet ID.
     */
    InboundPermissions?: IpPermissionsList;
  }
  export interface DescribeFleetUtilizationInput {
    /**
     * Unique identifier for a fleet(s) to retrieve utilization data for. To request utilization data for all fleets, leave this parameter empty.
     */
    FleetIds?: FleetIdList;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet IDs.
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet IDs.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeFleetUtilizationOutput {
    /**
     * Collection of objects containing utilization information for each requested fleet ID.
     */
    FleetUtilization?: FleetUtilizationList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeGameSessionDetailsInput {
    /**
     * Unique identifier for a fleet to retrieve all game sessions active on the fleet.
     */
    FleetId?: FleetId;
    /**
     * Unique identifier for the game session to retrieve.
     */
    GameSessionId?: ArnStringModel;
    /**
     * Unique identifier for an alias associated with the fleet to retrieve all game sessions for.
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
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeGameSessionDetailsOutput {
    /**
     * Collection of objects containing game session properties and the protection policy currently in force for each session matching the request.
     */
    GameSessionDetails?: GameSessionDetailList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeGameSessionPlacementInput {
    /**
     * Unique identifier for a game session placement to retrieve.
     */
    PlacementId: IdStringModel;
  }
  export interface DescribeGameSessionPlacementOutput {
    /**
     * Object that describes the requested game session placement.
     */
    GameSessionPlacement?: GameSessionPlacement;
  }
  export interface DescribeGameSessionQueuesInput {
    /**
     * List of queue names to retrieve information for. To request settings for all queues, leave this parameter empty.
     */
    Names?: GameSessionQueueNameList;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeGameSessionQueuesOutput {
    /**
     * Collection of objects that describes the requested game session queues.
     */
    GameSessionQueues?: GameSessionQueueList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeGameSessionsInput {
    /**
     * Unique identifier for a fleet to retrieve all game sessions for.
     */
    FleetId?: FleetId;
    /**
     * Unique identifier for the game session to retrieve. You can use either a GameSessionId or GameSessionArn value. 
     */
    GameSessionId?: ArnStringModel;
    /**
     * Unique identifier for an alias associated with the fleet to retrieve all game sessions for. 
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
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeGameSessionsOutput {
    /**
     * Collection of objects containing game session properties for each session matching the request.
     */
    GameSessions?: GameSessionList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeInstancesInput {
    /**
     * Unique identifier for a fleet to retrieve instance information for.
     */
    FleetId: FleetId;
    /**
     * Unique identifier for an instance to retrieve. Specify an instance ID or leave blank to retrieve all instances in the fleet.
     */
    InstanceId?: InstanceId;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeInstancesOutput {
    /**
     * Collection of objects containing properties for each instance returned.
     */
    Instances?: InstanceList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribePlayerSessionsInput {
    /**
     * Unique identifier for the game session to retrieve player sessions for.
     */
    GameSessionId?: ArnStringModel;
    /**
     * Unique identifier for a player to retrieve player sessions for.
     */
    PlayerId?: NonZeroAndMaxString;
    /**
     * Unique identifier for a player session to retrieve.
     */
    PlayerSessionId?: PlayerSessionId;
    /**
     * Player session status to filter results on. Possible player session statuses include the following:    RESERVED – The player session request has been received, but the player has not yet connected to the server process and/or been validated.     ACTIVE – The player has been validated by the server process and is currently connected.    COMPLETED – The player connection has been dropped.    TIMEDOUT – A player session request was received, but the player did not connect and/or was not validated within the time-out limit (60 seconds).  
     */
    PlayerSessionStatusFilter?: NonZeroAndMaxString;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. If a player session ID is specified, this parameter is ignored.
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value. If a player session ID is specified, this parameter is ignored.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribePlayerSessionsOutput {
    /**
     * Collection of objects containing properties for each player session that matches the request.
     */
    PlayerSessions?: PlayerSessionList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeRuntimeConfigurationInput {
    /**
     * Unique identifier for a fleet to get the runtime configuration for.
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
     * Unique identifier for a fleet to retrieve scaling policies for.
     */
    FleetId: FleetId;
    /**
     * Scaling policy status to filter results on. A scaling policy is only in force when in an ACTIVE status.    ACTIVE – The scaling policy is currently in force.    UPDATEREQUESTED – A request to update the scaling policy has been received.    UPDATING – A change is being made to the scaling policy.    DELETEREQUESTED – A request to delete the scaling policy has been received.    DELETING – The scaling policy is being deleted.    DELETED – The scaling policy has been deleted.    ERROR – An error occurred in creating the policy. It should be removed and recreated.  
     */
    StatusFilter?: ScalingStatusType;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeScalingPoliciesOutput {
    /**
     * Collection of objects containing the scaling policies matching the request.
     */
    ScalingPolicies?: ScalingPolicyList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DesiredPlayerSession {
    /**
     * Unique identifier for a player to associate with the player session.
     */
    PlayerId?: NonZeroAndMaxString;
    /**
     * Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game.
     */
    PlayerData?: PlayerData;
  }
  export type DesiredPlayerSessionList = DesiredPlayerSession[];
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
     * Name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.
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
  export type EC2InstanceType = "t2.micro"|"t2.small"|"t2.medium"|"t2.large"|"c3.large"|"c3.xlarge"|"c3.2xlarge"|"c3.4xlarge"|"c3.8xlarge"|"c4.large"|"c4.xlarge"|"c4.2xlarge"|"c4.4xlarge"|"c4.8xlarge"|"r3.large"|"r3.xlarge"|"r3.2xlarge"|"r3.4xlarge"|"r3.8xlarge"|"m3.medium"|"m3.large"|"m3.xlarge"|"m3.2xlarge"|"m4.large"|"m4.xlarge"|"m4.2xlarge"|"m4.4xlarge"|"m4.10xlarge"|string;
  export interface Event {
    /**
     * Unique identifier for a fleet event.
     */
    EventId?: NonZeroAndMaxString;
    /**
     * Unique identifier for an event resource, such as a fleet ID.
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
     * Time stamp indicating when this event occurred. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    EventTime?: Timestamp;
  }
  export type EventCode = "GENERIC_EVENT"|"FLEET_CREATED"|"FLEET_DELETED"|"FLEET_SCALING_EVENT"|"FLEET_STATE_DOWNLOADING"|"FLEET_STATE_VALIDATING"|"FLEET_STATE_BUILDING"|"FLEET_STATE_ACTIVATING"|"FLEET_STATE_ACTIVE"|"FLEET_STATE_ERROR"|"FLEET_INITIALIZATION_FAILED"|"FLEET_BINARY_DOWNLOAD_FAILED"|"FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND"|"FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE"|"FLEET_VALIDATION_TIMED_OUT"|"FLEET_ACTIVATION_FAILED"|"FLEET_ACTIVATION_FAILED_NO_INSTANCES"|"FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED"|"SERVER_PROCESS_INVALID_PATH"|"SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT"|"SERVER_PROCESS_PROCESS_READY_TIMEOUT"|"SERVER_PROCESS_CRASHED"|"SERVER_PROCESS_TERMINATED_UNHEALTHY"|"SERVER_PROCESS_FORCE_TERMINATED"|"SERVER_PROCESS_PROCESS_EXIT_TIMEOUT"|"GAME_SESSION_ACTIVATION_TIMEOUT"|string;
  export type EventList = Event[];
  export interface FleetAttributes {
    /**
     * Unique identifier for a fleet.
     */
    FleetId?: FleetId;
    /**
     * Identifier for a fleet that is unique across all regions.
     */
    FleetArn?: ArnStringModel;
    /**
     * Human-readable description of the fleet.
     */
    Description?: NonZeroAndMaxString;
    /**
     * Descriptive label that is associated with a fleet. Fleet names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
    /**
     * Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    CreationTime?: Timestamp;
    /**
     * Time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    TerminationTime?: Timestamp;
    /**
     * Current status of the fleet. Possible fleet statuses include the following:    NEW – A new fleet has been defined and desired instances is set to 1.     DOWNLOADING/VALIDATING/BUILDING/ACTIVATING – Amazon GameLift is setting up the new fleet, creating new instances with the game build and starting server processes.    ACTIVE – Hosts can now accept game sessions.    ERROR – An error occurred when downloading, validating, building, or activating the fleet.    DELETING – Hosts are responding to a delete fleet request.    TERMINATED – The fleet no longer exists.  
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
     * Location of default log files. When a server process is shut down, Amazon GameLift captures and stores any log files in this location. These logs are in addition to game session logs; see more on game session logs in the Amazon GameLift Developer Guide. If no default log path for a fleet is specified, Amazon GameLift will automatically upload logs that are stored on each instance at C:\game\logs (for Windows) or /local/game/logs (for Linux). Use the Amazon GameLift console to access stored logs. 
     */
    LogPaths?: StringList;
    /**
     * Type of game session protection to set for all new instances started in the fleet.    NoProtection – The game session can be terminated during a scale-down event.    FullProtection – If the game session is in an ACTIVE status, it cannot be terminated during a scale-down event.  
     */
    NewGameSessionProtectionPolicy?: ProtectionPolicy;
    /**
     * Operating system of the fleet's computing resources. A fleet's operating system depends on the OS specified for the build that is deployed on this fleet.
     */
    OperatingSystem?: OperatingSystem;
    /**
     * Fleet policy to limit the number of game sessions an individual player can create over a span of time.
     */
    ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
  }
  export type FleetAttributesList = FleetAttributes[];
  export interface FleetCapacity {
    /**
     * Unique identifier for a fleet.
     */
    FleetId?: FleetId;
    /**
     * Name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.
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
  export type FleetStatus = "NEW"|"DOWNLOADING"|"VALIDATING"|"BUILDING"|"ACTIVATING"|"ACTIVE"|"DELETING"|"ERROR"|"TERMINATED"|string;
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
  export type Float = number;
  export type FreeText = string;
  export interface GameProperty {
    /**
     * TBD
     */
    Key: GamePropertyKey;
    /**
     * TBD
     */
    Value: GamePropertyValue;
  }
  export type GamePropertyKey = string;
  export type GamePropertyList = GameProperty[];
  export type GamePropertyValue = string;
  export interface GameSession {
    /**
     * Unique identifier for the game session. A game session ID has the following format: arn:aws:gamelift:&lt;region&gt;::gamesession/&lt;fleet ID&gt;/&lt;custom ID string or idempotency token&gt;.
     */
    GameSessionId?: NonZeroAndMaxString;
    /**
     * Descriptive label that is associated with a game session. Session names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
    /**
     * Unique identifier for a fleet the game session is running on.
     */
    FleetId?: FleetId;
    /**
     * Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    CreationTime?: Timestamp;
    /**
     * Time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    TerminationTime?: Timestamp;
    /**
     * Number of players currently in the game session.
     */
    CurrentPlayerSessionCount?: WholeNumber;
    /**
     * Maximum number of players that can be connected simultaneously to the game session.
     */
    MaximumPlayerSessionCount?: WholeNumber;
    /**
     * Current status of the game session. A game session must have an ACTIVE status to have player sessions.
     */
    Status?: GameSessionStatus;
    /**
     * Set of developer-defined properties for a game session. These properties are passed to the server process hosting the game session.
     */
    GameProperties?: GamePropertyList;
    /**
     * IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.
     */
    IpAddress?: IpAddress;
    /**
     * Port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.
     */
    Port?: PortNumber;
    /**
     * Indicates whether or not the game session is accepting new players.
     */
    PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy;
    /**
     * Unique identifier for a player. This ID is used to enforce a resource protection policy (if one exists), that limits the number of game sessions a player can create.
     */
    CreatorId?: NonZeroAndMaxString;
  }
  export interface GameSessionDetail {
    /**
     * Object that describes a game session.
     */
    GameSession?: GameSession;
    /**
     * Current status of protection for the game session.    NoProtection – The game session can be terminated during a scale-down event.    FullProtection – If the game session is in an ACTIVE status, it cannot be terminated during a scale-down event.  
     */
    ProtectionPolicy?: ProtectionPolicy;
  }
  export type GameSessionDetailList = GameSessionDetail[];
  export type GameSessionList = GameSession[];
  export interface GameSessionPlacement {
    /**
     * Unique identifier for a game session placement.
     */
    PlacementId?: IdStringModel;
    /**
     * Descriptive label that is associated with queue. Queue names must be unique within each region.
     */
    GameSessionQueueName?: GameSessionQueueName;
    /**
     * Current status of the game session placement request.    PENDING – The placement request is currently in the queue waiting to be processed.    FULFILLED – A new game session and player sessions (if requested) have been successfully created. Values for GameSessionArn and GameSessionRegion are available.     CANCELLED – The placement request was canceled with a call to StopGameSessionPlacement.    TIMED_OUT – A new game session was not successfully created before the time limit expired. You can resubmit the placement request as needed.  
     */
    Status?: GameSessionPlacementState;
    /**
     * Set of developer-defined properties for a game session. These properties are passed to the server process hosting the game session.
     */
    GameProperties?: GamePropertyList;
    /**
     * Maximum number of players that can be connected simultaneously to the game session.
     */
    MaximumPlayerSessionCount?: WholeNumber;
    /**
     * Descriptive label that is associated with a game session. Session names do not need to be unique.
     */
    GameSessionName?: NonZeroAndMaxString;
    /**
     * Unique identifier for the game session. This value is set once the new game session is placed (placement status is Fulfilled).
     */
    GameSessionId?: NonZeroAndMaxString;
    /**
     * Identifier for the game session created by this placement request. This value is set once the new game session is placed (placement status is Fulfilled). This identifier is unique across all regions. You can use this value as a GameSessionId value as needed.
     */
    GameSessionArn?: NonZeroAndMaxString;
    /**
     * Name of the region where the game session created by this placement request is running. This value is set once the new game session is placed (placement status is Fulfilled).
     */
    GameSessionRegion?: NonZeroAndMaxString;
    /**
     * Set of values, expressed in milliseconds, indicating the amount of latency that players are experiencing when connected to AWS regions.
     */
    PlayerLatencies?: PlayerLatencyList;
    /**
     * Time stamp indicating when this request was placed in the queue. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    StartTime?: Timestamp;
    /**
     * Time stamp indicating when this request was completed, canceled, or timed out.
     */
    EndTime?: Timestamp;
    /**
     * IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number. This value is set once the new game session is placed (placement status is Fulfilled). 
     */
    IpAddress?: IpAddress;
    /**
     * Port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number. This value is set once the new game session is placed (placement status is Fulfilled).
     */
    Port?: PortNumber;
    /**
     * Collection of information on player sessions created in response to the game session placement request. These player sessions are created only once a new game session is successfully placed (placement status is Fulfilled). This information includes the player ID (as provided in the placement request) and the corresponding player session ID. Retrieve full player sessions by calling DescribePlayerSessions with the player session ID.
     */
    PlacedPlayerSessions?: PlacedPlayerSessionList;
  }
  export type GameSessionPlacementState = "PENDING"|"FULFILLED"|"CANCELLED"|"TIMED_OUT"|string;
  export interface GameSessionQueue {
    /**
     * Descriptive label that is associated with queue. Queue names must be unique within each region.
     */
    Name?: GameSessionQueueName;
    /**
     * Amazon Resource Name (ARN) that is assigned to a game session queue and uniquely identifies it. Format is arn:aws:gamelift:&lt;region&gt;::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912.
     */
    GameSessionQueueArn?: ArnStringModel;
    /**
     * Maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a TIMED_OUT status.
     */
    TimeoutInSeconds?: WholeNumber;
    /**
     * Collection of latency policies to apply when processing game sessions placement requests with player latency information. Multiple policies are evaluated in order of the maximum latency value, starting with the lowest latency values. With just one policy, it is enforced at the start of the game session placement for the duration period. With multiple policies, each policy is enforced consecutively for its duration period. For example, a queue might enforce a 60-second policy followed by a 120-second policy, and then no policy for the remainder of the placement. 
     */
    PlayerLatencyPolicies?: PlayerLatencyPolicyList;
    /**
     * List of fleets that can be used to fulfill game session placement requests in the queue. Fleets are identified by either a fleet ARN or a fleet alias ARN. Destinations are listed in default preference order.
     */
    Destinations?: GameSessionQueueDestinationList;
  }
  export interface GameSessionQueueDestination {
    /**
     * Amazon Resource Name (ARN) assigned to fleet or fleet alias. ARNs, which include a fleet ID or alias ID and a region name, provide a unique identifier across all regions. 
     */
    DestinationArn?: ArnStringModel;
  }
  export type GameSessionQueueDestinationList = GameSessionQueueDestination[];
  export type GameSessionQueueList = GameSessionQueue[];
  export type GameSessionQueueName = string;
  export type GameSessionQueueNameList = GameSessionQueueName[];
  export type GameSessionStatus = "ACTIVE"|"ACTIVATING"|"TERMINATED"|"TERMINATING"|"ERROR"|string;
  export interface GetGameSessionLogUrlInput {
    /**
     * Unique identifier for the game session to get logs for.
     */
    GameSessionId: ArnStringModel;
  }
  export interface GetGameSessionLogUrlOutput {
    /**
     * Location of the requested game session logs, available for download.
     */
    PreSignedUrl?: NonZeroAndMaxString;
  }
  export interface GetInstanceAccessInput {
    /**
     * Unique identifier for a fleet that contains the instance you want access to. The fleet can be in any of the following statuses: ACTIVATING, ACTIVE, or ERROR. Fleets with an ERROR status may be accessible for a short time before they are deleted.
     */
    FleetId: FleetId;
    /**
     * Unique identifier for an instance you want to get access to. You can access an instance in any status.
     */
    InstanceId: InstanceId;
  }
  export interface GetInstanceAccessOutput {
    /**
     * Object that contains connection information for a fleet instance, including IP address and access credentials.
     */
    InstanceAccess?: InstanceAccess;
  }
  export type IdStringModel = string;
  export interface Instance {
    /**
     * Unique identifier for a fleet that the instance is in.
     */
    FleetId?: FleetId;
    /**
     * Unique identifier for an instance.
     */
    InstanceId?: InstanceId;
    /**
     * IP address assigned to the instance.
     */
    IpAddress?: IpAddress;
    /**
     * Operating system that is running on this instance. 
     */
    OperatingSystem?: OperatingSystem;
    /**
     * EC2 instance type that defines the computing resources of this instance. 
     */
    Type?: EC2InstanceType;
    /**
     * Current status of the instance. Possible statuses include the following:    PENDING – The instance is in the process of being created and launching server processes as defined in the fleet's runtime configuration.     ACTIVE – The instance has been successfully created and at least one server process has successfully launched and reported back to Amazon GameLift that it is ready to host a game session. The instance is now considered ready to host game sessions.     TERMINATING – The instance is in the process of shutting down. This may happen to reduce capacity during a scaling down event or to recycle resources in the event of a problem.  
     */
    Status?: InstanceStatus;
    /**
     * Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    CreationTime?: Timestamp;
  }
  export interface InstanceAccess {
    /**
     * Unique identifier for a fleet containing the instance being accessed.
     */
    FleetId?: FleetId;
    /**
     * Unique identifier for an instance being accessed.
     */
    InstanceId?: InstanceId;
    /**
     * IP address assigned to the instance.
     */
    IpAddress?: IpAddress;
    /**
     * Operating system that is running on the instance.
     */
    OperatingSystem?: OperatingSystem;
    /**
     * Credentials required to access the instance.
     */
    Credentials?: InstanceCredentials;
  }
  export interface InstanceCredentials {
    /**
     * User login string.
     */
    UserName?: NonEmptyString;
    /**
     * Secret string. For Windows instances, the secret is a password for use with Windows Remote Desktop. For Linux instances, it is a private key (which must be saved as a .pem file) for use with SSH.
     */
    Secret?: NonEmptyString;
  }
  export type InstanceId = string;
  export type InstanceList = Instance[];
  export type InstanceStatus = "PENDING"|"ACTIVE"|"TERMINATING"|string;
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
    ToPort: PortNumber;
    /**
     * Range of allowed IP addresses. This value must be expressed in CIDR notation. Example: "000.000.000.000/[subnet mask]" or optionally the shortened version "0.0.0.0/[subnet mask]".
     */
    IpRange: NonBlankString;
    /**
     * Network communication protocol used by the fleet.
     */
    Protocol: IpProtocol;
  }
  export type IpPermissionsList = IpPermission[];
  export type IpProtocol = "TCP"|"UDP"|string;
  export interface ListAliasesInput {
    /**
     * Type of routing to filter results on. Use this parameter to retrieve only aliases of a certain type. To retrieve all aliases, leave this parameter empty. Possible routing types include the following:    SIMPLE – The alias resolves to one specific fleet. Use this type when routing to active fleets.    TERMINAL – The alias does not resolve to a fleet but instead can be used to display a message to the user. A terminal alias throws a TerminalRoutingStrategyException with the RoutingStrategy message embedded.  
     */
    RoutingStrategyType?: RoutingStrategyType;
    /**
     * Descriptive label that is associated with an alias. Alias names do not need to be unique.
     */
    Name?: NonEmptyString;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value.
     */
    NextToken?: NonEmptyString;
  }
  export interface ListAliasesOutput {
    /**
     * Collection of alias records that match the list request.
     */
    Aliases?: AliasList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonEmptyString;
  }
  export interface ListBuildsInput {
    /**
     * Build status to filter results by. To retrieve all builds, leave this parameter empty. Possible build statuses include the following:    INITIALIZED – A new build has been defined, but no files have been uploaded. You cannot create fleets for builds that are in this status. When a build is successfully created, the build status is set to this value.     READY – The game build has been successfully uploaded. You can now create new fleets for this build.    FAILED – The game build upload failed. You cannot create new fleets for this build.   
     */
    Status?: BuildStatus;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value.
     */
    NextToken?: NonEmptyString;
  }
  export interface ListBuildsOutput {
    /**
     * Collection of build records that match the request.
     */
    Builds?: BuildList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonEmptyString;
  }
  export interface ListFleetsInput {
    /**
     * Unique identifier for a build to return fleets for. Use this parameter to return only fleets using the specified build. To retrieve all fleets, leave this parameter empty.
     */
    BuildId?: BuildId;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface ListFleetsOutput {
    /**
     * Set of fleet IDs matching the list request. You can retrieve additional information about all returned fleets by passing this result set to a call to DescribeFleetAttributes, DescribeFleetCapacity, or DescribeFleetUtilization.
     */
    FleetIds?: FleetIdList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export type MetricName = "ActivatingGameSessions"|"ActiveGameSessions"|"ActiveInstances"|"AvailablePlayerSessions"|"CurrentPlayerSessions"|"IdleInstances"|"QueueDepth"|"WaitTime"|string;
  export type NonBlankAndLengthConstraintString = string;
  export type NonBlankString = string;
  export type NonEmptyString = string;
  export type NonZeroAndMaxString = string;
  export type OperatingSystem = "WINDOWS_2012"|"AMAZON_LINUX"|string;
  export interface PlacedPlayerSession {
    /**
     * Unique identifier for a player that is associated with this player session.
     */
    PlayerId?: NonZeroAndMaxString;
    /**
     * Unique identifier for a player session.
     */
    PlayerSessionId?: PlayerSessionId;
  }
  export type PlacedPlayerSessionList = PlacedPlayerSession[];
  export type PlayerData = string;
  export type PlayerDataMap = {[key: string]: PlayerData};
  export type PlayerIdList = NonZeroAndMaxString[];
  export interface PlayerLatency {
    /**
     * Unique identifier for a player associated with the latency data.
     */
    PlayerId?: NonZeroAndMaxString;
    /**
     * Name of the region that is associated with the latency value.
     */
    RegionIdentifier?: NonZeroAndMaxString;
    /**
     * Amount of time that represents the time lag experienced by the player when connected to the specified region.
     */
    LatencyInMilliseconds?: Float;
  }
  export type PlayerLatencyList = PlayerLatency[];
  export interface PlayerLatencyPolicy {
    /**
     * The maximum latency value that is allowed for any player, in milliseconds. All policies must have a value set for this property.
     */
    MaximumIndividualPlayerLatencyMilliseconds?: WholeNumber;
    /**
     * The length of time, in seconds, that the policy is enforced while placing a new game session. A null value for this property means that the policy is enforced until the queue times out.
     */
    PolicyDurationSeconds?: WholeNumber;
  }
  export type PlayerLatencyPolicyList = PlayerLatencyPolicy[];
  export interface PlayerSession {
    /**
     * Unique identifier for a player session.
     */
    PlayerSessionId?: PlayerSessionId;
    /**
     * Unique identifier for a player that is associated with this player session.
     */
    PlayerId?: NonZeroAndMaxString;
    /**
     * Unique identifier for the game session that the player session is connected to.
     */
    GameSessionId?: NonZeroAndMaxString;
    /**
     * Unique identifier for a fleet that the player's game session is running on.
     */
    FleetId?: FleetId;
    /**
     * Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    CreationTime?: Timestamp;
    /**
     * Time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    TerminationTime?: Timestamp;
    /**
     * Current status of the player session. Possible player session statuses include the following:    RESERVED – The player session request has been received, but the player has not yet connected to the server process and/or been validated.     ACTIVE – The player has been validated by the server process and is currently connected.    COMPLETED – The player connection has been dropped.    TIMEDOUT – A player session request was received, but the player did not connect and/or was not validated within the time-out limit (60 seconds).  
     */
    Status?: PlayerSessionStatus;
    /**
     * IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.
     */
    IpAddress?: IpAddress;
    /**
     * Port number for the game session. To connect to a Amazon GameLift server process, an app needs both the IP address and port number.
     */
    Port?: PortNumber;
    /**
     * Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game. 
     */
    PlayerData?: PlayerData;
  }
  export type PlayerSessionCreationPolicy = "ACCEPT_ALL"|"DENY_ALL"|string;
  export type PlayerSessionId = string;
  export type PlayerSessionList = PlayerSession[];
  export type PlayerSessionStatus = "RESERVED"|"ACTIVE"|"COMPLETED"|"TIMEDOUT"|string;
  export type PortNumber = number;
  export type PositiveInteger = number;
  export type PositiveLong = number;
  export type ProtectionPolicy = "NoProtection"|"FullProtection"|string;
  export interface PutScalingPolicyInput {
    /**
     * Descriptive label that is associated with a scaling policy. Policy names do not need to be unique. A fleet can have only one scaling policy with the same name.
     */
    Name: NonZeroAndMaxString;
    /**
     * Unique identifier for a fleet to apply this policy to.
     */
    FleetId: FleetId;
    /**
     * Amount of adjustment to make, based on the scaling adjustment type.
     */
    ScalingAdjustment: Integer;
    /**
     * Type of adjustment to make to a fleet's instance count (see FleetCapacity):    ChangeInCapacity – add (or subtract) the scaling adjustment value from the current instance count. Positive values scale up while negative values scale down.    ExactCapacity – set the instance count to the scaling adjustment value.    PercentChangeInCapacity – increase or reduce the current instance count by the scaling adjustment, read as a percentage. Positive values scale up while negative values scale down; for example, a value of "-10" scales the fleet down by 10%.  
     */
    ScalingAdjustmentType: ScalingAdjustmentType;
    /**
     * Metric value used to trigger a scaling event.
     */
    Threshold: Double;
    /**
     * Comparison operator to use when measuring the metric against the threshold value.
     */
    ComparisonOperator: ComparisonOperatorType;
    /**
     * Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.
     */
    EvaluationPeriods: PositiveInteger;
    /**
     * Name of the Amazon GameLift-defined metric that is used to trigger an adjustment.    ActivatingGameSessions – number of game sessions in the process of being created (game session status = ACTIVATING).    ActiveGameSessions – number of game sessions currently running (game session status = ACTIVE).    CurrentPlayerSessions – number of active or reserved player sessions (player session status = ACTIVE or RESERVED).     AvailablePlayerSessions – number of player session slots currently available in active game sessions across the fleet, calculated by subtracting a game session's current player session count from its maximum player session count. This number includes game sessions that are not currently accepting players (game session PlayerSessionCreationPolicy = DENY_ALL).    ActiveInstances – number of instances currently running a game session.    IdleInstances – number of instances not currently running a game session.  
     */
    MetricName: MetricName;
  }
  export interface PutScalingPolicyOutput {
    /**
     * Descriptive label that is associated with a scaling policy. Policy names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
  }
  export interface RequestUploadCredentialsInput {
    /**
     * Unique identifier for a build to get credentials for.
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
     * Fleet identifier that is associated with the requested alias.
     */
    FleetId?: FleetId;
  }
  export interface ResourceCreationLimitPolicy {
    /**
     * Maximum number of game sessions that an individual can create during the policy period. 
     */
    NewGameSessionsPerCreator?: WholeNumber;
    /**
     * Time span used in evaluating the resource creation limit policy. 
     */
    PolicyPeriodInMinutes?: WholeNumber;
  }
  export interface RoutingStrategy {
    /**
     * Type of routing strategy. Possible routing types include the following:    SIMPLE – The alias resolves to one specific fleet. Use this type when routing to active fleets.    TERMINAL – The alias does not resolve to a fleet but instead can be used to display a message to the user. A terminal alias throws a TerminalRoutingStrategyException with the RoutingStrategy message embedded.  
     */
    Type?: RoutingStrategyType;
    /**
     * Unique identifier for a fleet that the alias points to.
     */
    FleetId?: FleetId;
    /**
     * Message text to be used with a terminal routing strategy.
     */
    Message?: FreeText;
  }
  export type RoutingStrategyType = "SIMPLE"|"TERMINAL"|string;
  export interface RuntimeConfiguration {
    /**
     * Collection of server process configurations describing what server processes to run on each instance in a fleet
     */
    ServerProcesses?: ServerProcessList;
  }
  export interface S3Location {
    /**
     * Amazon S3 bucket identifier. This is the name of your S3 bucket.
     */
    Bucket?: NonEmptyString;
    /**
     * Name of the zip file containing your build files. 
     */
    Key?: NonEmptyString;
    /**
     * Amazon Resource Name (ARN) for the access role that allows Amazon GameLift to access your S3 bucket.
     */
    RoleArn?: NonEmptyString;
  }
  export type ScalingAdjustmentType = "ChangeInCapacity"|"ExactCapacity"|"PercentChangeInCapacity"|string;
  export interface ScalingPolicy {
    /**
     * Unique identifier for a fleet that is associated with this scaling policy.
     */
    FleetId?: FleetId;
    /**
     * Descriptive label that is associated with a scaling policy. Policy names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
    /**
     * Current status of the scaling policy. The scaling policy is only in force when in an ACTIVE status.    ACTIVE – The scaling policy is currently in force.    UPDATE_REQUESTED – A request to update the scaling policy has been received.    UPDATING – A change is being made to the scaling policy.    DELETE_REQUESTED – A request to delete the scaling policy has been received.    DELETING – The scaling policy is being deleted.    DELETED – The scaling policy has been deleted.    ERROR – An error occurred in creating the policy. It should be removed and recreated.  
     */
    Status?: ScalingStatusType;
    /**
     * Amount of adjustment to make, based on the scaling adjustment type.
     */
    ScalingAdjustment?: Integer;
    /**
     * Type of adjustment to make to a fleet's instance count (see FleetCapacity):    ChangeInCapacity – add (or subtract) the scaling adjustment value from the current instance count. Positive values scale up while negative values scale down.    ExactCapacity – set the instance count to the scaling adjustment value.    PercentChangeInCapacity – increase or reduce the current instance count by the scaling adjustment, read as a percentage. Positive values scale up while negative values scale down.  
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
     * Name of the Amazon GameLift-defined metric that is used to trigger an adjustment.    ActivatingGameSessions – number of game sessions in the process of being created (game session status = ACTIVATING).    ActiveGameSessions – number of game sessions currently running (game session status = ACTIVE).    CurrentPlayerSessions – number of active or reserved player sessions (player session status = ACTIVE or RESERVED).     AvailablePlayerSessions – number of player session slots currently available in active game sessions across the fleet, calculated by subtracting a game session's current player session count from its maximum player session count. This number does include game sessions that are not currently accepting players (game session PlayerSessionCreationPolicy = DENY_ALL).    ActiveInstances – number of instances currently running a game session.    IdleInstances – number of instances not currently running a game session.  
     */
    MetricName?: MetricName;
  }
  export type ScalingPolicyList = ScalingPolicy[];
  export type ScalingStatusType = "ACTIVE"|"UPDATE_REQUESTED"|"UPDATING"|"DELETE_REQUESTED"|"DELETING"|"DELETED"|"ERROR"|string;
  export interface SearchGameSessionsInput {
    /**
     * Unique identifier for a fleet to search for active game sessions. Each request must reference either a fleet ID or alias ID, but not both.
     */
    FleetId?: FleetId;
    /**
     * Unique identifier for an alias associated with the fleet to search for active game sessions. Each request must reference either a fleet ID or alias ID, but not both.
     */
    AliasId?: AliasId;
    /**
     * String containing the search criteria for the session search. If no filter expression is included, the request returns results for all game sessions in the fleet that are in ACTIVE status. A filter expression can contain one or multiple conditions. Each condition consists of the following:    Operand -- Name of a game session attribute. Valid values are gameSessionName, gameSessionId, creationTimeMillis, playerSessionCount, maximumSessions, hasAvailablePlayerSessions.    Comparator -- Valid comparators are: =, &lt;&gt;, &lt;, &gt;, &lt;=, &gt;=.     Value -- Value to be searched for. Values can be numbers, boolean values (true/false) or strings. String values are case sensitive, enclosed in single quotes. Special characters must be escaped. Boolean and string values can only be used with the comparators = and &lt;&gt;. For example, the following filter expression searches on gameSessionName: "FilterExpression": "gameSessionName = 'Matt\\'s Awesome Game 1'".    To chain multiple conditions in a single expression, use the logical keywords AND, OR, and NOT and parentheses as needed. For example: x AND y AND NOT z, NOT (x OR y). Session search evaluates conditions from left to right using the following precedence rules:    =, &lt;&gt;, &lt;, &gt;, &lt;=, &gt;=    Parentheses   NOT   AND   OR   For example, this filter expression retrieves game sessions hosting at least ten players that have an open player slot: "maximumSessions&gt;=10 AND hasAvailablePlayerSessions=true". 
     */
    FilterExpression?: NonZeroAndMaxString;
    /**
     * Instructions on how to sort the search results. If no sort expression is included, the request returns results in random order. A sort expression consists of the following elements:    Operand -- Name of a game session attribute. Valid values are gameSessionName, gameSessionId, creationTimeMillis, playerSessionCount, maximumSessions, hasAvailablePlayerSessions.    Order -- Valid sort orders are ASC (ascending) and DESC (descending).   For example, this sort expression returns the oldest active sessions first: "SortExpression": "creationTimeMillis ASC". Results with a null value for the sort operand are returned at the end of the list.
     */
    SortExpression?: NonZeroAndMaxString;
    /**
     * Maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. The maximum number of results returned is 20, even if this value is not set or is set higher than 20. 
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To specify the start of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface SearchGameSessionsOutput {
    /**
     * Collection of objects containing game session properties for each session matching the request.
     */
    GameSessions?: GameSessionList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface ServerProcess {
    /**
     * Location of the server executable in a game build. All game builds are installed on instances at the root : for Windows instances C:\game, and for Linux instances /local/game. A Windows game build with an executable file located at MyGame\latest\server.exe must have a launch path of "C:\game\MyGame\latest\server.exe". A Linux game build with an executable file located at MyGame/latest/server.exe must have a launch path of "/local/game/MyGame/latest/server.exe". 
     */
    LaunchPath: NonZeroAndMaxString;
    /**
     * Optional list of parameters to pass to the server executable on launch.
     */
    Parameters?: NonZeroAndMaxString;
    /**
     * Number of server processes using this configuration to run concurrently on an instance.
     */
    ConcurrentExecutions: PositiveInteger;
  }
  export type ServerProcessList = ServerProcess[];
  export interface StartGameSessionPlacementInput {
    /**
     * Unique identifier to assign to the new game session placement. This value is developer-defined. The value must be unique across all regions and cannot be reused unless you are resubmitting a canceled or timed-out placement request.
     */
    PlacementId: IdStringModel;
    /**
     * Name of the queue to use to place the new game session.
     */
    GameSessionQueueName: GameSessionQueueName;
    /**
     * Set of developer-defined properties for a game session. These properties are passed to the server process hosting the game session.
     */
    GameProperties?: GamePropertyList;
    /**
     * Maximum number of players that can be connected simultaneously to the game session.
     */
    MaximumPlayerSessionCount: WholeNumber;
    /**
     * Descriptive label that is associated with a game session. Session names do not need to be unique.
     */
    GameSessionName?: NonZeroAndMaxString;
    /**
     * Set of values, expressed in milliseconds, indicating the amount of latency that players are experiencing when connected to AWS regions. This information is used to try to place the new game session where it can offer the best possible gameplay experience for the players. 
     */
    PlayerLatencies?: PlayerLatencyList;
    /**
     * Set of information on each player to create a player session for.
     */
    DesiredPlayerSessions?: DesiredPlayerSessionList;
  }
  export interface StartGameSessionPlacementOutput {
    /**
     * Object that describes the newly created game session placement. This object includes all the information provided in the request, as well as start/end time stamps and placement status. 
     */
    GameSessionPlacement?: GameSessionPlacement;
  }
  export interface StopGameSessionPlacementInput {
    /**
     * Unique identifier for a game session placement to cancel.
     */
    PlacementId: IdStringModel;
  }
  export interface StopGameSessionPlacementOutput {
    /**
     * Object that describes the canceled game session placement, with Cancelled status and an end time stamp. 
     */
    GameSessionPlacement?: GameSessionPlacement;
  }
  export type StringList = NonZeroAndMaxString[];
  export type Timestamp = Date;
  export interface UpdateAliasInput {
    /**
     * Unique identifier for a fleet alias. Specify the alias you want to update.
     */
    AliasId: AliasId;
    /**
     * Descriptive label that is associated with an alias. Alias names do not need to be unique.
     */
    Name?: NonBlankAndLengthConstraintString;
    /**
     * Human-readable description of an alias.
     */
    Description?: NonZeroAndMaxString;
    /**
     * Object that specifies the fleet and routing type to use for the alias.
     */
    RoutingStrategy?: RoutingStrategy;
  }
  export interface UpdateAliasOutput {
    /**
     * Object that contains the updated alias configuration.
     */
    Alias?: Alias;
  }
  export interface UpdateBuildInput {
    /**
     * Unique identifier for a build to update.
     */
    BuildId: BuildId;
    /**
     * Descriptive label that is associated with a build. Build names do not need to be unique. 
     */
    Name?: NonZeroAndMaxString;
    /**
     * Version that is associated with this build. Version strings do not need to be unique.
     */
    Version?: NonZeroAndMaxString;
  }
  export interface UpdateBuildOutput {
    /**
     * Object that contains the updated build record.
     */
    Build?: Build;
  }
  export interface UpdateFleetAttributesInput {
    /**
     * Unique identifier for a fleet to update attribute metadata for.
     */
    FleetId: FleetId;
    /**
     * Descriptive label that is associated with a fleet. Fleet names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
    /**
     * Human-readable description of a fleet.
     */
    Description?: NonZeroAndMaxString;
    /**
     * Game session protection policy to apply to all new instances created in this fleet. Instances that already exist are not affected. You can set protection for individual instances using UpdateGameSession.    NoProtection – The game session can be terminated during a scale-down event.    FullProtection – If the game session is in an ACTIVE status, it cannot be terminated during a scale-down event.  
     */
    NewGameSessionProtectionPolicy?: ProtectionPolicy;
    /**
     * Policy that limits the number of game sessions an individual player can create over a span of time. 
     */
    ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
  }
  export interface UpdateFleetAttributesOutput {
    /**
     * Unique identifier for a fleet that was updated.
     */
    FleetId?: FleetId;
  }
  export interface UpdateFleetCapacityInput {
    /**
     * Unique identifier for a fleet to update capacity for.
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
     * Unique identifier for a fleet that was updated.
     */
    FleetId?: FleetId;
  }
  export interface UpdateFleetPortSettingsInput {
    /**
     * Unique identifier for a fleet to update port settings for.
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
     * Unique identifier for a fleet that was updated.
     */
    FleetId?: FleetId;
  }
  export interface UpdateGameSessionInput {
    /**
     * Unique identifier for the game session to update.
     */
    GameSessionId: ArnStringModel;
    /**
     * Maximum number of players that can be connected simultaneously to the game session.
     */
    MaximumPlayerSessionCount?: WholeNumber;
    /**
     * Descriptive label that is associated with a game session. Session names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
    /**
     * Policy determining whether or not the game session accepts new players.
     */
    PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy;
    /**
     * Game session protection policy to apply to this game session only.    NoProtection – The game session can be terminated during a scale-down event.    FullProtection – If the game session is in an ACTIVE status, it cannot be terminated during a scale-down event.  
     */
    ProtectionPolicy?: ProtectionPolicy;
  }
  export interface UpdateGameSessionOutput {
    /**
     * Object that contains the updated game session metadata.
     */
    GameSession?: GameSession;
  }
  export interface UpdateGameSessionQueueInput {
    /**
     * Descriptive label that is associated with queue. Queue names must be unique within each region.
     */
    Name: GameSessionQueueName;
    /**
     * Maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a TIMED_OUT status.
     */
    TimeoutInSeconds?: WholeNumber;
    /**
     * Collection of latency policies to apply when processing game sessions placement requests with player latency information. Multiple policies are evaluated in order of the maximum latency value, starting with the lowest latency values. With just one policy, it is enforced at the start of the game session placement for the duration period. With multiple policies, each policy is enforced consecutively for its duration period. For example, a queue might enforce a 60-second policy followed by a 120-second policy, and then no policy for the remainder of the placement. When updating policies, provide a complete collection of policies.
     */
    PlayerLatencyPolicies?: PlayerLatencyPolicyList;
    /**
     * List of fleets that can be used to fulfill game session placement requests in the queue. Fleets are identified by either a fleet ARN or a fleet alias ARN. Destinations are listed in default preference order. When updating this list, provide a complete list of destinations.
     */
    Destinations?: GameSessionQueueDestinationList;
  }
  export interface UpdateGameSessionQueueOutput {
    /**
     * Object that describes the newly updated game session queue.
     */
    GameSessionQueue?: GameSessionQueue;
  }
  export interface UpdateRuntimeConfigurationInput {
    /**
     * Unique identifier for a fleet to update runtime configuration for.
     */
    FleetId: FleetId;
    /**
     * Instructions for launching server processes on each instance in the fleet. The runtime configuration for a fleet has a collection of server process configurations, one for each type of server process to run on an instance. A server process configuration specifies the location of the server executable, launch parameters, and the number of concurrent processes with that configuration to maintain on each instance.
     */
    RuntimeConfiguration: RuntimeConfiguration;
  }
  export interface UpdateRuntimeConfigurationOutput {
    /**
     * The runtime configuration currently in force. If the update was successful, this object matches the one in the request.
     */
    RuntimeConfiguration?: RuntimeConfiguration;
  }
  export type WholeNumber = number;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-10-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the GameLift client.
   */
  export import Types = GameLift;
}
export = GameLift;
