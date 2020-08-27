import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class GameLift extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: GameLift.Types.ClientConfiguration)
  config: Config & GameLift.Types.ClientConfiguration;
  /**
   * Registers a player's acceptance or rejection of a proposed FlexMatch match. A matchmaking configuration may require player acceptance; if so, then matches built with that configuration cannot be completed unless all players accept the proposed match within a specified time limit.  When FlexMatch builds a match, all the matchmaking tickets involved in the proposed match are placed into status REQUIRES_ACCEPTANCE. This is a trigger for your game to get acceptance from all players in the ticket. Acceptances are only valid for tickets when they are in this status; all other acceptances result in an error. To register acceptance, specify the ticket ID, a response, and one or more players. Once all players have registered acceptance, the matchmaking tickets advance to status PLACING, where a new game session is created for the match.  If any player rejects the match, or if acceptances are not received before a specified timeout, the proposed match is dropped. The matchmaking tickets are then handled in one of two ways: For tickets where one or more players rejected the match, the ticket status is returned to SEARCHING to find a new match. For tickets where one or more players failed to respond, the ticket status is set to CANCELLED, and processing is terminated. A new matchmaking request for these players can be submitted as needed.   Learn more    Add FlexMatch to a Game Client    FlexMatch Events Reference   Related operations     StartMatchmaking     DescribeMatchmaking     StopMatchmaking     AcceptMatch     StartMatchBackfill   
   */
  acceptMatch(params: GameLift.Types.AcceptMatchInput, callback?: (err: AWSError, data: GameLift.Types.AcceptMatchOutput) => void): Request<GameLift.Types.AcceptMatchOutput, AWSError>;
  /**
   * Registers a player's acceptance or rejection of a proposed FlexMatch match. A matchmaking configuration may require player acceptance; if so, then matches built with that configuration cannot be completed unless all players accept the proposed match within a specified time limit.  When FlexMatch builds a match, all the matchmaking tickets involved in the proposed match are placed into status REQUIRES_ACCEPTANCE. This is a trigger for your game to get acceptance from all players in the ticket. Acceptances are only valid for tickets when they are in this status; all other acceptances result in an error. To register acceptance, specify the ticket ID, a response, and one or more players. Once all players have registered acceptance, the matchmaking tickets advance to status PLACING, where a new game session is created for the match.  If any player rejects the match, or if acceptances are not received before a specified timeout, the proposed match is dropped. The matchmaking tickets are then handled in one of two ways: For tickets where one or more players rejected the match, the ticket status is returned to SEARCHING to find a new match. For tickets where one or more players failed to respond, the ticket status is set to CANCELLED, and processing is terminated. A new matchmaking request for these players can be submitted as needed.   Learn more    Add FlexMatch to a Game Client    FlexMatch Events Reference   Related operations     StartMatchmaking     DescribeMatchmaking     StopMatchmaking     AcceptMatch     StartMatchBackfill   
   */
  acceptMatch(callback?: (err: AWSError, data: GameLift.Types.AcceptMatchOutput) => void): Request<GameLift.Types.AcceptMatchOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Locates an available game server and temporarily reserves it to host gameplay and players. This operation is called from a game client or client service (such as a matchmaker) to request hosting resources for a new game session. In response, GameLift FleetIQ locates an available game server, places it in CLAIMED status for 60 seconds, and returns connection information that players can use to connect to the game server.  To claim a game server, identify a game server group. You can also specify a game server ID, although this approach bypasses GameLift FleetIQ placement optimization. Optionally, include game data to pass to the game server at the start of a game session, such as a game map or player information.  When a game server is successfully claimed, connection information is returned. A claimed game server's utilization status remains AVAILABLE while the claim status is set to CLAIMED for up to 60 seconds. This time period gives the game server time to update its status to UTILIZED (using UpdateGameServer) once players join. If the game server's status is not updated within 60 seconds, the game server reverts to unclaimed status and is available to be claimed by another request. The claim time period is a fixed value and is not configurable. If you try to claim a specific game server, this request will fail in the following cases:   If the game server utilization status is UTILIZED.   If the game server claim status is CLAIMED.    When claiming a specific game server, this request will succeed even if the game server is running on an instance in DRAINING status. To avoid this, first check the instance status by calling DescribeGameServerInstances.   Learn more   GameLift FleetIQ Guide   Related operations     RegisterGameServer     ListGameServers     ClaimGameServer     DescribeGameServer     UpdateGameServer     DeregisterGameServer   
   */
  claimGameServer(params: GameLift.Types.ClaimGameServerInput, callback?: (err: AWSError, data: GameLift.Types.ClaimGameServerOutput) => void): Request<GameLift.Types.ClaimGameServerOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Locates an available game server and temporarily reserves it to host gameplay and players. This operation is called from a game client or client service (such as a matchmaker) to request hosting resources for a new game session. In response, GameLift FleetIQ locates an available game server, places it in CLAIMED status for 60 seconds, and returns connection information that players can use to connect to the game server.  To claim a game server, identify a game server group. You can also specify a game server ID, although this approach bypasses GameLift FleetIQ placement optimization. Optionally, include game data to pass to the game server at the start of a game session, such as a game map or player information.  When a game server is successfully claimed, connection information is returned. A claimed game server's utilization status remains AVAILABLE while the claim status is set to CLAIMED for up to 60 seconds. This time period gives the game server time to update its status to UTILIZED (using UpdateGameServer) once players join. If the game server's status is not updated within 60 seconds, the game server reverts to unclaimed status and is available to be claimed by another request. The claim time period is a fixed value and is not configurable. If you try to claim a specific game server, this request will fail in the following cases:   If the game server utilization status is UTILIZED.   If the game server claim status is CLAIMED.    When claiming a specific game server, this request will succeed even if the game server is running on an instance in DRAINING status. To avoid this, first check the instance status by calling DescribeGameServerInstances.   Learn more   GameLift FleetIQ Guide   Related operations     RegisterGameServer     ListGameServers     ClaimGameServer     DescribeGameServer     UpdateGameServer     DeregisterGameServer   
   */
  claimGameServer(callback?: (err: AWSError, data: GameLift.Types.ClaimGameServerOutput) => void): Request<GameLift.Types.ClaimGameServerOutput, AWSError>;
  /**
   * Creates an alias for a fleet. In most situations, you can use an alias ID in place of a fleet ID. An alias provides a level of abstraction for a fleet that is useful when redirecting player traffic from one fleet to another, such as when updating your game build.  Amazon GameLift supports two types of routing strategies for aliases: simple and terminal. A simple alias points to an active fleet. A terminal alias is used to display messaging or link to a URL instead of routing players to an active fleet. For example, you might use a terminal alias when a game version is no longer supported and you want to direct players to an upgrade site.  To create a fleet alias, specify an alias name, routing strategy, and optional description. Each simple alias can point to only one fleet, but a fleet can have multiple aliases. If successful, a new alias record is returned, including an alias ID and an ARN. You can reassign an alias to another fleet by calling UpdateAlias.    CreateAlias     ListAliases     DescribeAlias     UpdateAlias     DeleteAlias     ResolveAlias   
   */
  createAlias(params: GameLift.Types.CreateAliasInput, callback?: (err: AWSError, data: GameLift.Types.CreateAliasOutput) => void): Request<GameLift.Types.CreateAliasOutput, AWSError>;
  /**
   * Creates an alias for a fleet. In most situations, you can use an alias ID in place of a fleet ID. An alias provides a level of abstraction for a fleet that is useful when redirecting player traffic from one fleet to another, such as when updating your game build.  Amazon GameLift supports two types of routing strategies for aliases: simple and terminal. A simple alias points to an active fleet. A terminal alias is used to display messaging or link to a URL instead of routing players to an active fleet. For example, you might use a terminal alias when a game version is no longer supported and you want to direct players to an upgrade site.  To create a fleet alias, specify an alias name, routing strategy, and optional description. Each simple alias can point to only one fleet, but a fleet can have multiple aliases. If successful, a new alias record is returned, including an alias ID and an ARN. You can reassign an alias to another fleet by calling UpdateAlias.    CreateAlias     ListAliases     DescribeAlias     UpdateAlias     DeleteAlias     ResolveAlias   
   */
  createAlias(callback?: (err: AWSError, data: GameLift.Types.CreateAliasOutput) => void): Request<GameLift.Types.CreateAliasOutput, AWSError>;
  /**
   * Creates a new Amazon GameLift build resource for your game server binary files. Game server binaries must be combined into a zip file for use with Amazon GameLift.   When setting up a new game build for GameLift, we recommend using the AWS CLI command  upload-build . This helper command combines two tasks: (1) it uploads your build files from a file directory to a GameLift Amazon S3 location, and (2) it creates a new build resource.   The CreateBuild operation can used in the following scenarios:   To create a new game build with build files that are in an S3 location under an AWS account that you control. To use this option, you must first give Amazon GameLift access to the S3 bucket. With permissions in place, call CreateBuild and specify a build name, operating system, and the S3 storage location of your game build.   To directly upload your build files to a GameLift S3 location. To use this option, first call CreateBuild and specify a build name and operating system. This operation creates a new build resource and also returns an S3 location with temporary access credentials. Use the credentials to manually upload your build files to the specified S3 location. For more information, see Uploading Objects in the Amazon S3 Developer Guide. Build files can be uploaded to the GameLift S3 location once only; that can't be updated.    If successful, this operation creates a new build resource with a unique build ID and places it in INITIALIZED status. A build must be in READY status before you can create fleets with it.  Learn more   Uploading Your Game    Create a Build with Files in Amazon S3   Related operations     CreateBuild     ListBuilds     DescribeBuild     UpdateBuild     DeleteBuild   
   */
  createBuild(params: GameLift.Types.CreateBuildInput, callback?: (err: AWSError, data: GameLift.Types.CreateBuildOutput) => void): Request<GameLift.Types.CreateBuildOutput, AWSError>;
  /**
   * Creates a new Amazon GameLift build resource for your game server binary files. Game server binaries must be combined into a zip file for use with Amazon GameLift.   When setting up a new game build for GameLift, we recommend using the AWS CLI command  upload-build . This helper command combines two tasks: (1) it uploads your build files from a file directory to a GameLift Amazon S3 location, and (2) it creates a new build resource.   The CreateBuild operation can used in the following scenarios:   To create a new game build with build files that are in an S3 location under an AWS account that you control. To use this option, you must first give Amazon GameLift access to the S3 bucket. With permissions in place, call CreateBuild and specify a build name, operating system, and the S3 storage location of your game build.   To directly upload your build files to a GameLift S3 location. To use this option, first call CreateBuild and specify a build name and operating system. This operation creates a new build resource and also returns an S3 location with temporary access credentials. Use the credentials to manually upload your build files to the specified S3 location. For more information, see Uploading Objects in the Amazon S3 Developer Guide. Build files can be uploaded to the GameLift S3 location once only; that can't be updated.    If successful, this operation creates a new build resource with a unique build ID and places it in INITIALIZED status. A build must be in READY status before you can create fleets with it.  Learn more   Uploading Your Game    Create a Build with Files in Amazon S3   Related operations     CreateBuild     ListBuilds     DescribeBuild     UpdateBuild     DeleteBuild   
   */
  createBuild(callback?: (err: AWSError, data: GameLift.Types.CreateBuildOutput) => void): Request<GameLift.Types.CreateBuildOutput, AWSError>;
  /**
   * Creates a new fleet to run your game servers. whether they are custom game builds or Realtime Servers with game-specific script. A fleet is a set of Amazon Elastic Compute Cloud (Amazon EC2) instances, each of which can host multiple game sessions. When creating a fleet, you choose the hardware specifications, set some configuration options, and specify the game server to deploy on the new fleet.  To create a new fleet, provide the following: (1) a fleet name, (2) an EC2 instance type and fleet type (spot or on-demand), (3) the build ID for your game build or script ID if using Realtime Servers, and (4) a runtime configuration, which determines how game servers will run on each instance in the fleet.  If the CreateFleet call is successful, Amazon GameLift performs the following tasks. You can track the process of a fleet by checking the fleet status or by monitoring fleet creation events:   Creates a fleet resource. Status: NEW.   Begins writing events to the fleet event log, which can be accessed in the Amazon GameLift console.   Sets the fleet's target capacity to 1 (desired instances), which triggers Amazon GameLift to start one new EC2 instance.   Downloads the game build or Realtime script to the new instance and installs it. Statuses: DOWNLOADING, VALIDATING, BUILDING.    Starts launching server processes on the instance. If the fleet is configured to run multiple server processes per instance, Amazon GameLift staggers each process launch by a few seconds. Status: ACTIVATING.   Sets the fleet's status to ACTIVE as soon as one server process is ready to host a game session.    Learn more   Setting Up Fleets   Debug Fleet Creation Issues   Related operations     CreateFleet     ListFleets     DeleteFleet     DescribeFleetAttributes     UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  createFleet(params: GameLift.Types.CreateFleetInput, callback?: (err: AWSError, data: GameLift.Types.CreateFleetOutput) => void): Request<GameLift.Types.CreateFleetOutput, AWSError>;
  /**
   * Creates a new fleet to run your game servers. whether they are custom game builds or Realtime Servers with game-specific script. A fleet is a set of Amazon Elastic Compute Cloud (Amazon EC2) instances, each of which can host multiple game sessions. When creating a fleet, you choose the hardware specifications, set some configuration options, and specify the game server to deploy on the new fleet.  To create a new fleet, provide the following: (1) a fleet name, (2) an EC2 instance type and fleet type (spot or on-demand), (3) the build ID for your game build or script ID if using Realtime Servers, and (4) a runtime configuration, which determines how game servers will run on each instance in the fleet.  If the CreateFleet call is successful, Amazon GameLift performs the following tasks. You can track the process of a fleet by checking the fleet status or by monitoring fleet creation events:   Creates a fleet resource. Status: NEW.   Begins writing events to the fleet event log, which can be accessed in the Amazon GameLift console.   Sets the fleet's target capacity to 1 (desired instances), which triggers Amazon GameLift to start one new EC2 instance.   Downloads the game build or Realtime script to the new instance and installs it. Statuses: DOWNLOADING, VALIDATING, BUILDING.    Starts launching server processes on the instance. If the fleet is configured to run multiple server processes per instance, Amazon GameLift staggers each process launch by a few seconds. Status: ACTIVATING.   Sets the fleet's status to ACTIVE as soon as one server process is ready to host a game session.    Learn more   Setting Up Fleets   Debug Fleet Creation Issues   Related operations     CreateFleet     ListFleets     DeleteFleet     DescribeFleetAttributes     UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  createFleet(callback?: (err: AWSError, data: GameLift.Types.CreateFleetOutput) => void): Request<GameLift.Types.CreateFleetOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Creates a GameLift FleetIQ game server group for managing game hosting on a collection of Amazon EC2 instances for game hosting. This operation creates the game server group, creates an Auto Scaling group in your AWS account, and establishes a link between the two groups. You can view the status of your game server groups in the GameLift console. Game server group metrics and events are emitted to Amazon CloudWatch. Before creating a new game server group, you must have the following:    An Amazon EC2 launch template that specifies how to launch Amazon EC2 instances with your game server build. For more information, see  Launching an Instance from a Launch Template in the Amazon EC2 User Guide.    An IAM role that extends limited access to your AWS account to allow GameLift FleetIQ to create and interact with the Auto Scaling group. For more information, see Create IAM roles for cross-service interaction in the GameLift FleetIQ Developer Guide.   To create a new game server group, specify a unique group name, IAM role and Amazon EC2 launch template, and provide a list of instance types that can be used in the group. You must also set initial maximum and minimum limits on the group's instance count. You can optionally set an Auto Scaling policy with target tracking based on a GameLift FleetIQ metric. Once the game server group and corresponding Auto Scaling group are created, you have full access to change the Auto Scaling group's configuration as needed. Several properties that are set when creating a game server group, including maximum/minimum size and auto-scaling policy settings, must be updated directly in the Auto Scaling group. Keep in mind that some Auto Scaling group properties are periodically updated by GameLift FleetIQ as part of its balancing activities to optimize for availability and cost.  Learn more   GameLift FleetIQ Guide   Related operations     CreateGameServerGroup     ListGameServerGroups     DescribeGameServerGroup     UpdateGameServerGroup     DeleteGameServerGroup     ResumeGameServerGroup     SuspendGameServerGroup     DescribeGameServerInstances   
   */
  createGameServerGroup(params: GameLift.Types.CreateGameServerGroupInput, callback?: (err: AWSError, data: GameLift.Types.CreateGameServerGroupOutput) => void): Request<GameLift.Types.CreateGameServerGroupOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Creates a GameLift FleetIQ game server group for managing game hosting on a collection of Amazon EC2 instances for game hosting. This operation creates the game server group, creates an Auto Scaling group in your AWS account, and establishes a link between the two groups. You can view the status of your game server groups in the GameLift console. Game server group metrics and events are emitted to Amazon CloudWatch. Before creating a new game server group, you must have the following:    An Amazon EC2 launch template that specifies how to launch Amazon EC2 instances with your game server build. For more information, see  Launching an Instance from a Launch Template in the Amazon EC2 User Guide.    An IAM role that extends limited access to your AWS account to allow GameLift FleetIQ to create and interact with the Auto Scaling group. For more information, see Create IAM roles for cross-service interaction in the GameLift FleetIQ Developer Guide.   To create a new game server group, specify a unique group name, IAM role and Amazon EC2 launch template, and provide a list of instance types that can be used in the group. You must also set initial maximum and minimum limits on the group's instance count. You can optionally set an Auto Scaling policy with target tracking based on a GameLift FleetIQ metric. Once the game server group and corresponding Auto Scaling group are created, you have full access to change the Auto Scaling group's configuration as needed. Several properties that are set when creating a game server group, including maximum/minimum size and auto-scaling policy settings, must be updated directly in the Auto Scaling group. Keep in mind that some Auto Scaling group properties are periodically updated by GameLift FleetIQ as part of its balancing activities to optimize for availability and cost.  Learn more   GameLift FleetIQ Guide   Related operations     CreateGameServerGroup     ListGameServerGroups     DescribeGameServerGroup     UpdateGameServerGroup     DeleteGameServerGroup     ResumeGameServerGroup     SuspendGameServerGroup     DescribeGameServerInstances   
   */
  createGameServerGroup(callback?: (err: AWSError, data: GameLift.Types.CreateGameServerGroupOutput) => void): Request<GameLift.Types.CreateGameServerGroupOutput, AWSError>;
  /**
   * Creates a multiplayer game session for players. This operation creates a game session record and assigns an available server process in the specified fleet to host the game session. A fleet must have an ACTIVE status before a game session can be created in it. To create a game session, specify either fleet ID or alias ID and indicate a maximum number of players to allow in the game session. You can also provide a name and game-specific properties for this game session. If successful, a GameSession object is returned containing the game session properties and other settings you specified.  Idempotency tokens. You can add a token that uniquely identifies game session requests. This is useful for ensuring that game session requests are idempotent. Multiple requests with the same idempotency token are processed only once; subsequent requests return the original result. All response values are the same with the exception of game session status, which may change.  Resource creation limits. If you are creating a game session on a fleet with a resource creation limit policy in force, then you must specify a creator ID. Without this ID, Amazon GameLift has no way to evaluate the policy for this new game session request.  Player acceptance policy. By default, newly created game sessions are open to new players. You can restrict new player access by using UpdateGameSession to change the game session's player session creation policy.  Game session logs. Logs are retained for all active game sessions for 14 days. To access the logs, call GetGameSessionLogUrl to download the log files.  Available in Amazon GameLift Local.     CreateGameSession     DescribeGameSessions     DescribeGameSessionDetails     SearchGameSessions     UpdateGameSession     GetGameSessionLogUrl    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  createGameSession(params: GameLift.Types.CreateGameSessionInput, callback?: (err: AWSError, data: GameLift.Types.CreateGameSessionOutput) => void): Request<GameLift.Types.CreateGameSessionOutput, AWSError>;
  /**
   * Creates a multiplayer game session for players. This operation creates a game session record and assigns an available server process in the specified fleet to host the game session. A fleet must have an ACTIVE status before a game session can be created in it. To create a game session, specify either fleet ID or alias ID and indicate a maximum number of players to allow in the game session. You can also provide a name and game-specific properties for this game session. If successful, a GameSession object is returned containing the game session properties and other settings you specified.  Idempotency tokens. You can add a token that uniquely identifies game session requests. This is useful for ensuring that game session requests are idempotent. Multiple requests with the same idempotency token are processed only once; subsequent requests return the original result. All response values are the same with the exception of game session status, which may change.  Resource creation limits. If you are creating a game session on a fleet with a resource creation limit policy in force, then you must specify a creator ID. Without this ID, Amazon GameLift has no way to evaluate the policy for this new game session request.  Player acceptance policy. By default, newly created game sessions are open to new players. You can restrict new player access by using UpdateGameSession to change the game session's player session creation policy.  Game session logs. Logs are retained for all active game sessions for 14 days. To access the logs, call GetGameSessionLogUrl to download the log files.  Available in Amazon GameLift Local.     CreateGameSession     DescribeGameSessions     DescribeGameSessionDetails     SearchGameSessions     UpdateGameSession     GetGameSessionLogUrl    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  createGameSession(callback?: (err: AWSError, data: GameLift.Types.CreateGameSessionOutput) => void): Request<GameLift.Types.CreateGameSessionOutput, AWSError>;
  /**
   * Establishes a new queue for processing requests to place new game sessions. A queue identifies where new game sessions can be hosted -- by specifying a list of destinations (fleets or aliases) -- and how long requests can wait in the queue before timing out. You can set up a queue to try to place game sessions on fleets in multiple Regions. To add placement requests to a queue, call StartGameSessionPlacement and reference the queue name.  Destination order. When processing a request for a game session, Amazon GameLift tries each destination in order until it finds one with available resources to host the new game session. A queue's default order is determined by how destinations are listed. The default order is overridden when a game session placement request provides player latency information. Player latency information enables Amazon GameLift to prioritize destinations where players report the lowest average latency, as a result placing the new game session where the majority of players will have the best possible gameplay experience.  Player latency policies. For placement requests containing player latency information, use player latency policies to protect individual players from very high latencies. With a latency cap, even when a destination can deliver a low latency for most players, the game is not placed where any individual player is reporting latency higher than a policy's maximum. A queue can have multiple latency policies, which are enforced consecutively starting with the policy with the lowest latency cap. Use multiple policies to gradually relax latency controls; for example, you might set a policy with a low latency cap for the first 60 seconds, a second policy with a higher cap for the next 60 seconds, etc.  To create a new queue, provide a name, timeout value, a list of destinations and, if desired, a set of latency policies. If successful, a new queue object is returned.  Learn more    Design a Game Session Queue    Create a Game Session Queue   Related operations     CreateGameSessionQueue     DescribeGameSessionQueues     UpdateGameSessionQueue     DeleteGameSessionQueue   
   */
  createGameSessionQueue(params: GameLift.Types.CreateGameSessionQueueInput, callback?: (err: AWSError, data: GameLift.Types.CreateGameSessionQueueOutput) => void): Request<GameLift.Types.CreateGameSessionQueueOutput, AWSError>;
  /**
   * Establishes a new queue for processing requests to place new game sessions. A queue identifies where new game sessions can be hosted -- by specifying a list of destinations (fleets or aliases) -- and how long requests can wait in the queue before timing out. You can set up a queue to try to place game sessions on fleets in multiple Regions. To add placement requests to a queue, call StartGameSessionPlacement and reference the queue name.  Destination order. When processing a request for a game session, Amazon GameLift tries each destination in order until it finds one with available resources to host the new game session. A queue's default order is determined by how destinations are listed. The default order is overridden when a game session placement request provides player latency information. Player latency information enables Amazon GameLift to prioritize destinations where players report the lowest average latency, as a result placing the new game session where the majority of players will have the best possible gameplay experience.  Player latency policies. For placement requests containing player latency information, use player latency policies to protect individual players from very high latencies. With a latency cap, even when a destination can deliver a low latency for most players, the game is not placed where any individual player is reporting latency higher than a policy's maximum. A queue can have multiple latency policies, which are enforced consecutively starting with the policy with the lowest latency cap. Use multiple policies to gradually relax latency controls; for example, you might set a policy with a low latency cap for the first 60 seconds, a second policy with a higher cap for the next 60 seconds, etc.  To create a new queue, provide a name, timeout value, a list of destinations and, if desired, a set of latency policies. If successful, a new queue object is returned.  Learn more    Design a Game Session Queue    Create a Game Session Queue   Related operations     CreateGameSessionQueue     DescribeGameSessionQueues     UpdateGameSessionQueue     DeleteGameSessionQueue   
   */
  createGameSessionQueue(callback?: (err: AWSError, data: GameLift.Types.CreateGameSessionQueueOutput) => void): Request<GameLift.Types.CreateGameSessionQueueOutput, AWSError>;
  /**
   * Defines a new matchmaking configuration for use with FlexMatch. A matchmaking configuration sets out guidelines for matching players and getting the matches into games. You can set up multiple matchmaking configurations to handle the scenarios needed for your game. Each matchmaking ticket (StartMatchmaking or StartMatchBackfill) specifies a configuration for the match and provides player attributes to support the configuration being used.  To create a matchmaking configuration, at a minimum you must specify the following: configuration name; a rule set that governs how to evaluate players and find acceptable matches; a game session queue to use when placing a new game session for the match; and the maximum time allowed for a matchmaking attempt. To track the progress of matchmaking tickets, set up an Amazon Simple Notification Service (SNS) to receive notifications, and provide the topic ARN in the matchmaking configuration. An alternative method, continuously poling ticket status with DescribeMatchmaking, should only be used for games in development with low matchmaking usage.  Learn more    Design a FlexMatch Matchmaker    Set Up FlexMatch Event Notification   Related operations     CreateMatchmakingConfiguration     DescribeMatchmakingConfigurations     UpdateMatchmakingConfiguration     DeleteMatchmakingConfiguration     CreateMatchmakingRuleSet     DescribeMatchmakingRuleSets     ValidateMatchmakingRuleSet     DeleteMatchmakingRuleSet   
   */
  createMatchmakingConfiguration(params: GameLift.Types.CreateMatchmakingConfigurationInput, callback?: (err: AWSError, data: GameLift.Types.CreateMatchmakingConfigurationOutput) => void): Request<GameLift.Types.CreateMatchmakingConfigurationOutput, AWSError>;
  /**
   * Defines a new matchmaking configuration for use with FlexMatch. A matchmaking configuration sets out guidelines for matching players and getting the matches into games. You can set up multiple matchmaking configurations to handle the scenarios needed for your game. Each matchmaking ticket (StartMatchmaking or StartMatchBackfill) specifies a configuration for the match and provides player attributes to support the configuration being used.  To create a matchmaking configuration, at a minimum you must specify the following: configuration name; a rule set that governs how to evaluate players and find acceptable matches; a game session queue to use when placing a new game session for the match; and the maximum time allowed for a matchmaking attempt. To track the progress of matchmaking tickets, set up an Amazon Simple Notification Service (SNS) to receive notifications, and provide the topic ARN in the matchmaking configuration. An alternative method, continuously poling ticket status with DescribeMatchmaking, should only be used for games in development with low matchmaking usage.  Learn more    Design a FlexMatch Matchmaker    Set Up FlexMatch Event Notification   Related operations     CreateMatchmakingConfiguration     DescribeMatchmakingConfigurations     UpdateMatchmakingConfiguration     DeleteMatchmakingConfiguration     CreateMatchmakingRuleSet     DescribeMatchmakingRuleSets     ValidateMatchmakingRuleSet     DeleteMatchmakingRuleSet   
   */
  createMatchmakingConfiguration(callback?: (err: AWSError, data: GameLift.Types.CreateMatchmakingConfigurationOutput) => void): Request<GameLift.Types.CreateMatchmakingConfigurationOutput, AWSError>;
  /**
   * Creates a new rule set for FlexMatch matchmaking. A rule set describes the type of match to create, such as the number and size of teams. It also sets the parameters for acceptable player matches, such as minimum skill level or character type. A rule set is used by a MatchmakingConfiguration.  To create a matchmaking rule set, provide unique rule set name and the rule set body in JSON format. Rule sets must be defined in the same Region as the matchmaking configuration they are used with. Since matchmaking rule sets cannot be edited, it is a good idea to check the rule set syntax using ValidateMatchmakingRuleSet before creating a new rule set.  Learn more     Build a Rule Set     Design a Matchmaker     Matchmaking with FlexMatch     Related operations     CreateMatchmakingConfiguration     DescribeMatchmakingConfigurations     UpdateMatchmakingConfiguration     DeleteMatchmakingConfiguration     CreateMatchmakingRuleSet     DescribeMatchmakingRuleSets     ValidateMatchmakingRuleSet     DeleteMatchmakingRuleSet   
   */
  createMatchmakingRuleSet(params: GameLift.Types.CreateMatchmakingRuleSetInput, callback?: (err: AWSError, data: GameLift.Types.CreateMatchmakingRuleSetOutput) => void): Request<GameLift.Types.CreateMatchmakingRuleSetOutput, AWSError>;
  /**
   * Creates a new rule set for FlexMatch matchmaking. A rule set describes the type of match to create, such as the number and size of teams. It also sets the parameters for acceptable player matches, such as minimum skill level or character type. A rule set is used by a MatchmakingConfiguration.  To create a matchmaking rule set, provide unique rule set name and the rule set body in JSON format. Rule sets must be defined in the same Region as the matchmaking configuration they are used with. Since matchmaking rule sets cannot be edited, it is a good idea to check the rule set syntax using ValidateMatchmakingRuleSet before creating a new rule set.  Learn more     Build a Rule Set     Design a Matchmaker     Matchmaking with FlexMatch     Related operations     CreateMatchmakingConfiguration     DescribeMatchmakingConfigurations     UpdateMatchmakingConfiguration     DeleteMatchmakingConfiguration     CreateMatchmakingRuleSet     DescribeMatchmakingRuleSets     ValidateMatchmakingRuleSet     DeleteMatchmakingRuleSet   
   */
  createMatchmakingRuleSet(callback?: (err: AWSError, data: GameLift.Types.CreateMatchmakingRuleSetOutput) => void): Request<GameLift.Types.CreateMatchmakingRuleSetOutput, AWSError>;
  /**
   * Reserves an open player slot in an active game session. Before a player can be added, a game session must have an ACTIVE status, have a creation policy of ALLOW_ALL, and have an open player slot. To add a group of players to a game session, use CreatePlayerSessions. When the player connects to the game server and references a player session ID, the game server contacts the Amazon GameLift service to validate the player reservation and accept the player. To create a player session, specify a game session ID, player ID, and optionally a string of player data. If successful, a slot is reserved in the game session for the player and a new PlayerSession object is returned. Player sessions cannot be updated.   Available in Amazon GameLift Local.     CreatePlayerSession     CreatePlayerSessions     DescribePlayerSessions    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  createPlayerSession(params: GameLift.Types.CreatePlayerSessionInput, callback?: (err: AWSError, data: GameLift.Types.CreatePlayerSessionOutput) => void): Request<GameLift.Types.CreatePlayerSessionOutput, AWSError>;
  /**
   * Reserves an open player slot in an active game session. Before a player can be added, a game session must have an ACTIVE status, have a creation policy of ALLOW_ALL, and have an open player slot. To add a group of players to a game session, use CreatePlayerSessions. When the player connects to the game server and references a player session ID, the game server contacts the Amazon GameLift service to validate the player reservation and accept the player. To create a player session, specify a game session ID, player ID, and optionally a string of player data. If successful, a slot is reserved in the game session for the player and a new PlayerSession object is returned. Player sessions cannot be updated.   Available in Amazon GameLift Local.     CreatePlayerSession     CreatePlayerSessions     DescribePlayerSessions    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  createPlayerSession(callback?: (err: AWSError, data: GameLift.Types.CreatePlayerSessionOutput) => void): Request<GameLift.Types.CreatePlayerSessionOutput, AWSError>;
  /**
   * Reserves open slots in a game session for a group of players. Before players can be added, a game session must have an ACTIVE status, have a creation policy of ALLOW_ALL, and have an open player slot. To add a single player to a game session, use CreatePlayerSession. When a player connects to the game server and references a player session ID, the game server contacts the Amazon GameLift service to validate the player reservation and accept the player. To create player sessions, specify a game session ID, a list of player IDs, and optionally a set of player data strings. If successful, a slot is reserved in the game session for each player and a set of new PlayerSession objects is returned. Player sessions cannot be updated.  Available in Amazon GameLift Local.     CreatePlayerSession     CreatePlayerSessions     DescribePlayerSessions    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  createPlayerSessions(params: GameLift.Types.CreatePlayerSessionsInput, callback?: (err: AWSError, data: GameLift.Types.CreatePlayerSessionsOutput) => void): Request<GameLift.Types.CreatePlayerSessionsOutput, AWSError>;
  /**
   * Reserves open slots in a game session for a group of players. Before players can be added, a game session must have an ACTIVE status, have a creation policy of ALLOW_ALL, and have an open player slot. To add a single player to a game session, use CreatePlayerSession. When a player connects to the game server and references a player session ID, the game server contacts the Amazon GameLift service to validate the player reservation and accept the player. To create player sessions, specify a game session ID, a list of player IDs, and optionally a set of player data strings. If successful, a slot is reserved in the game session for each player and a set of new PlayerSession objects is returned. Player sessions cannot be updated.  Available in Amazon GameLift Local.     CreatePlayerSession     CreatePlayerSessions     DescribePlayerSessions    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  createPlayerSessions(callback?: (err: AWSError, data: GameLift.Types.CreatePlayerSessionsOutput) => void): Request<GameLift.Types.CreatePlayerSessionsOutput, AWSError>;
  /**
   * Creates a new script record for your Realtime Servers script. Realtime scripts are JavaScript that provide configuration settings and optional custom game logic for your game. The script is deployed when you create a Realtime Servers fleet to host your game sessions. Script logic is executed during an active game session.  To create a new script record, specify a script name and provide the script file(s). The script files and all dependencies must be zipped into a single file. You can pull the zip file from either of these locations:    A locally available directory. Use the ZipFile parameter for this option.   An Amazon Simple Storage Service (Amazon S3) bucket under your AWS account. Use the StorageLocation parameter for this option. You'll need to have an Identity Access Management (IAM) role that allows the Amazon GameLift service to access your S3 bucket.    If the call is successful, a new script record is created with a unique script ID. If the script file is provided as a local file, the file is uploaded to an Amazon GameLift-owned S3 bucket and the script record's storage location reflects this location. If the script file is provided as an S3 bucket, Amazon GameLift accesses the file at this storage location as needed for deployment.  Learn more   Amazon GameLift Realtime Servers   Set Up a Role for Amazon GameLift Access   Related operations     CreateScript     ListScripts     DescribeScript     UpdateScript     DeleteScript   
   */
  createScript(params: GameLift.Types.CreateScriptInput, callback?: (err: AWSError, data: GameLift.Types.CreateScriptOutput) => void): Request<GameLift.Types.CreateScriptOutput, AWSError>;
  /**
   * Creates a new script record for your Realtime Servers script. Realtime scripts are JavaScript that provide configuration settings and optional custom game logic for your game. The script is deployed when you create a Realtime Servers fleet to host your game sessions. Script logic is executed during an active game session.  To create a new script record, specify a script name and provide the script file(s). The script files and all dependencies must be zipped into a single file. You can pull the zip file from either of these locations:    A locally available directory. Use the ZipFile parameter for this option.   An Amazon Simple Storage Service (Amazon S3) bucket under your AWS account. Use the StorageLocation parameter for this option. You'll need to have an Identity Access Management (IAM) role that allows the Amazon GameLift service to access your S3 bucket.    If the call is successful, a new script record is created with a unique script ID. If the script file is provided as a local file, the file is uploaded to an Amazon GameLift-owned S3 bucket and the script record's storage location reflects this location. If the script file is provided as an S3 bucket, Amazon GameLift accesses the file at this storage location as needed for deployment.  Learn more   Amazon GameLift Realtime Servers   Set Up a Role for Amazon GameLift Access   Related operations     CreateScript     ListScripts     DescribeScript     UpdateScript     DeleteScript   
   */
  createScript(callback?: (err: AWSError, data: GameLift.Types.CreateScriptOutput) => void): Request<GameLift.Types.CreateScriptOutput, AWSError>;
  /**
   * Requests authorization to create or delete a peer connection between the VPC for your Amazon GameLift fleet and a virtual private cloud (VPC) in your AWS account. VPC peering enables the game servers on your fleet to communicate directly with other AWS resources. Once you've received authorization, call CreateVpcPeeringConnection to establish the peering connection. For more information, see VPC Peering with Amazon GameLift Fleets. You can peer with VPCs that are owned by any AWS account you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions. To request authorization to create a connection, call this operation from the AWS account with the VPC that you want to peer to your Amazon GameLift fleet. For example, to enable your game servers to retrieve data from a DynamoDB table, use the account that manages that DynamoDB resource. Identify the following values: (1) The ID of the VPC that you want to peer with, and (2) the ID of the AWS account that you use to manage Amazon GameLift. If successful, VPC peering is authorized for the specified VPC.  To request authorization to delete a connection, call this operation from the AWS account with the VPC that is peered with your Amazon GameLift fleet. Identify the following values: (1) VPC ID that you want to delete the peering connection for, and (2) ID of the AWS account that you use to manage Amazon GameLift.  The authorization remains valid for 24 hours unless it is canceled by a call to DeleteVpcPeeringAuthorization. You must create or delete the peering connection while the authorization is valid.     CreateVpcPeeringAuthorization     DescribeVpcPeeringAuthorizations     DeleteVpcPeeringAuthorization     CreateVpcPeeringConnection     DescribeVpcPeeringConnections     DeleteVpcPeeringConnection   
   */
  createVpcPeeringAuthorization(params: GameLift.Types.CreateVpcPeeringAuthorizationInput, callback?: (err: AWSError, data: GameLift.Types.CreateVpcPeeringAuthorizationOutput) => void): Request<GameLift.Types.CreateVpcPeeringAuthorizationOutput, AWSError>;
  /**
   * Requests authorization to create or delete a peer connection between the VPC for your Amazon GameLift fleet and a virtual private cloud (VPC) in your AWS account. VPC peering enables the game servers on your fleet to communicate directly with other AWS resources. Once you've received authorization, call CreateVpcPeeringConnection to establish the peering connection. For more information, see VPC Peering with Amazon GameLift Fleets. You can peer with VPCs that are owned by any AWS account you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions. To request authorization to create a connection, call this operation from the AWS account with the VPC that you want to peer to your Amazon GameLift fleet. For example, to enable your game servers to retrieve data from a DynamoDB table, use the account that manages that DynamoDB resource. Identify the following values: (1) The ID of the VPC that you want to peer with, and (2) the ID of the AWS account that you use to manage Amazon GameLift. If successful, VPC peering is authorized for the specified VPC.  To request authorization to delete a connection, call this operation from the AWS account with the VPC that is peered with your Amazon GameLift fleet. Identify the following values: (1) VPC ID that you want to delete the peering connection for, and (2) ID of the AWS account that you use to manage Amazon GameLift.  The authorization remains valid for 24 hours unless it is canceled by a call to DeleteVpcPeeringAuthorization. You must create or delete the peering connection while the authorization is valid.     CreateVpcPeeringAuthorization     DescribeVpcPeeringAuthorizations     DeleteVpcPeeringAuthorization     CreateVpcPeeringConnection     DescribeVpcPeeringConnections     DeleteVpcPeeringConnection   
   */
  createVpcPeeringAuthorization(callback?: (err: AWSError, data: GameLift.Types.CreateVpcPeeringAuthorizationOutput) => void): Request<GameLift.Types.CreateVpcPeeringAuthorizationOutput, AWSError>;
  /**
   * Establishes a VPC peering connection between a virtual private cloud (VPC) in an AWS account with the VPC for your Amazon GameLift fleet. VPC peering enables the game servers on your fleet to communicate directly with other AWS resources. You can peer with VPCs in any AWS account that you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions. For more information, see VPC Peering with Amazon GameLift Fleets. Before calling this operation to establish the peering connection, you first need to call CreateVpcPeeringAuthorization and identify the VPC you want to peer with. Once the authorization for the specified VPC is issued, you have 24 hours to establish the connection. These two operations handle all tasks necessary to peer the two VPCs, including acceptance, updating routing tables, etc.  To establish the connection, call this operation from the AWS account that is used to manage the Amazon GameLift fleets. Identify the following values: (1) The ID of the fleet you want to be enable a VPC peering connection for; (2) The AWS account with the VPC that you want to peer with; and (3) The ID of the VPC you want to peer with. This operation is asynchronous. If successful, a VpcPeeringConnection request is created. You can use continuous polling to track the request's status using DescribeVpcPeeringConnections, or by monitoring fleet events for success or failure using DescribeFleetEvents.     CreateVpcPeeringAuthorization     DescribeVpcPeeringAuthorizations     DeleteVpcPeeringAuthorization     CreateVpcPeeringConnection     DescribeVpcPeeringConnections     DeleteVpcPeeringConnection   
   */
  createVpcPeeringConnection(params: GameLift.Types.CreateVpcPeeringConnectionInput, callback?: (err: AWSError, data: GameLift.Types.CreateVpcPeeringConnectionOutput) => void): Request<GameLift.Types.CreateVpcPeeringConnectionOutput, AWSError>;
  /**
   * Establishes a VPC peering connection between a virtual private cloud (VPC) in an AWS account with the VPC for your Amazon GameLift fleet. VPC peering enables the game servers on your fleet to communicate directly with other AWS resources. You can peer with VPCs in any AWS account that you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions. For more information, see VPC Peering with Amazon GameLift Fleets. Before calling this operation to establish the peering connection, you first need to call CreateVpcPeeringAuthorization and identify the VPC you want to peer with. Once the authorization for the specified VPC is issued, you have 24 hours to establish the connection. These two operations handle all tasks necessary to peer the two VPCs, including acceptance, updating routing tables, etc.  To establish the connection, call this operation from the AWS account that is used to manage the Amazon GameLift fleets. Identify the following values: (1) The ID of the fleet you want to be enable a VPC peering connection for; (2) The AWS account with the VPC that you want to peer with; and (3) The ID of the VPC you want to peer with. This operation is asynchronous. If successful, a VpcPeeringConnection request is created. You can use continuous polling to track the request's status using DescribeVpcPeeringConnections, or by monitoring fleet events for success or failure using DescribeFleetEvents.     CreateVpcPeeringAuthorization     DescribeVpcPeeringAuthorizations     DeleteVpcPeeringAuthorization     CreateVpcPeeringConnection     DescribeVpcPeeringConnections     DeleteVpcPeeringConnection   
   */
  createVpcPeeringConnection(callback?: (err: AWSError, data: GameLift.Types.CreateVpcPeeringConnectionOutput) => void): Request<GameLift.Types.CreateVpcPeeringConnectionOutput, AWSError>;
  /**
   * Deletes an alias. This operation removes all record of the alias. Game clients attempting to access a server process using the deleted alias receive an error. To delete an alias, specify the alias ID to be deleted.    CreateAlias     ListAliases     DescribeAlias     UpdateAlias     DeleteAlias     ResolveAlias   
   */
  deleteAlias(params: GameLift.Types.DeleteAliasInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an alias. This operation removes all record of the alias. Game clients attempting to access a server process using the deleted alias receive an error. To delete an alias, specify the alias ID to be deleted.    CreateAlias     ListAliases     DescribeAlias     UpdateAlias     DeleteAlias     ResolveAlias   
   */
  deleteAlias(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a build. This operation permanently deletes the build resource and any uploaded build files. Deleting a build does not affect the status of any active fleets using the build, but you can no longer create new fleets with the deleted build. To delete a build, specify the build ID.   Learn more    Upload a Custom Server Build   Related operations     CreateBuild     ListBuilds     DescribeBuild     UpdateBuild     DeleteBuild   
   */
  deleteBuild(params: GameLift.Types.DeleteBuildInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a build. This operation permanently deletes the build resource and any uploaded build files. Deleting a build does not affect the status of any active fleets using the build, but you can no longer create new fleets with the deleted build. To delete a build, specify the build ID.   Learn more    Upload a Custom Server Build   Related operations     CreateBuild     ListBuilds     DescribeBuild     UpdateBuild     DeleteBuild   
   */
  deleteBuild(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes everything related to a fleet. Before deleting a fleet, you must set the fleet's desired capacity to zero. See UpdateFleetCapacity. If the fleet being deleted has a VPC peering connection, you first need to get a valid authorization (good for 24 hours) by calling CreateVpcPeeringAuthorization. You do not need to explicitly delete the VPC peering connection--this is done as part of the delete fleet process. This operation removes the fleet and its resources. Once a fleet is deleted, you can no longer use any of the resource in that fleet.  Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet     DescribeFleetAttributes     UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  deleteFleet(params: GameLift.Types.DeleteFleetInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes everything related to a fleet. Before deleting a fleet, you must set the fleet's desired capacity to zero. See UpdateFleetCapacity. If the fleet being deleted has a VPC peering connection, you first need to get a valid authorization (good for 24 hours) by calling CreateVpcPeeringAuthorization. You do not need to explicitly delete the VPC peering connection--this is done as part of the delete fleet process. This operation removes the fleet and its resources. Once a fleet is deleted, you can no longer use any of the resource in that fleet.  Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet     DescribeFleetAttributes     UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  deleteFleet(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Terminates a game server group and permanently deletes the game server group record. You have several options for how these resources are impacted when deleting the game server group. Depending on the type of delete operation selected, this operation might affect these resources:   The game server group   The corresponding Auto Scaling group   All game servers that are currently running in the group   To delete a game server group, identify the game server group to delete and specify the type of delete operation to initiate. Game server groups can only be deleted if they are in ACTIVE or ERROR status. If the delete request is successful, a series of operations are kicked off. The game server group status is changed to DELETE_SCHEDULED, which prevents new game servers from being registered and stops automatic scaling activity. Once all game servers in the game server group are deregistered, GameLift FleetIQ can begin deleting resources. If any of the delete operations fail, the game server group is placed in ERROR status. GameLift FleetIQ emits delete events to Amazon CloudWatch.  Learn more   GameLift FleetIQ Guide   Related operations     CreateGameServerGroup     ListGameServerGroups     DescribeGameServerGroup     UpdateGameServerGroup     DeleteGameServerGroup     ResumeGameServerGroup     SuspendGameServerGroup     DescribeGameServerInstances   
   */
  deleteGameServerGroup(params: GameLift.Types.DeleteGameServerGroupInput, callback?: (err: AWSError, data: GameLift.Types.DeleteGameServerGroupOutput) => void): Request<GameLift.Types.DeleteGameServerGroupOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Terminates a game server group and permanently deletes the game server group record. You have several options for how these resources are impacted when deleting the game server group. Depending on the type of delete operation selected, this operation might affect these resources:   The game server group   The corresponding Auto Scaling group   All game servers that are currently running in the group   To delete a game server group, identify the game server group to delete and specify the type of delete operation to initiate. Game server groups can only be deleted if they are in ACTIVE or ERROR status. If the delete request is successful, a series of operations are kicked off. The game server group status is changed to DELETE_SCHEDULED, which prevents new game servers from being registered and stops automatic scaling activity. Once all game servers in the game server group are deregistered, GameLift FleetIQ can begin deleting resources. If any of the delete operations fail, the game server group is placed in ERROR status. GameLift FleetIQ emits delete events to Amazon CloudWatch.  Learn more   GameLift FleetIQ Guide   Related operations     CreateGameServerGroup     ListGameServerGroups     DescribeGameServerGroup     UpdateGameServerGroup     DeleteGameServerGroup     ResumeGameServerGroup     SuspendGameServerGroup     DescribeGameServerInstances   
   */
  deleteGameServerGroup(callback?: (err: AWSError, data: GameLift.Types.DeleteGameServerGroupOutput) => void): Request<GameLift.Types.DeleteGameServerGroupOutput, AWSError>;
  /**
   * Deletes a game session queue. Once a queue is successfully deleted, unfulfilled StartGameSessionPlacement requests that reference the queue will fail. To delete a queue, specify the queue name.  Learn more    Using Multi-Region Queues   Related operations     CreateGameSessionQueue     DescribeGameSessionQueues     UpdateGameSessionQueue     DeleteGameSessionQueue   
   */
  deleteGameSessionQueue(params: GameLift.Types.DeleteGameSessionQueueInput, callback?: (err: AWSError, data: GameLift.Types.DeleteGameSessionQueueOutput) => void): Request<GameLift.Types.DeleteGameSessionQueueOutput, AWSError>;
  /**
   * Deletes a game session queue. Once a queue is successfully deleted, unfulfilled StartGameSessionPlacement requests that reference the queue will fail. To delete a queue, specify the queue name.  Learn more    Using Multi-Region Queues   Related operations     CreateGameSessionQueue     DescribeGameSessionQueues     UpdateGameSessionQueue     DeleteGameSessionQueue   
   */
  deleteGameSessionQueue(callback?: (err: AWSError, data: GameLift.Types.DeleteGameSessionQueueOutput) => void): Request<GameLift.Types.DeleteGameSessionQueueOutput, AWSError>;
  /**
   * Permanently removes a FlexMatch matchmaking configuration. To delete, specify the configuration name. A matchmaking configuration cannot be deleted if it is being used in any active matchmaking tickets.  Related operations     CreateMatchmakingConfiguration     DescribeMatchmakingConfigurations     UpdateMatchmakingConfiguration     DeleteMatchmakingConfiguration     CreateMatchmakingRuleSet     DescribeMatchmakingRuleSets     ValidateMatchmakingRuleSet     DeleteMatchmakingRuleSet   
   */
  deleteMatchmakingConfiguration(params: GameLift.Types.DeleteMatchmakingConfigurationInput, callback?: (err: AWSError, data: GameLift.Types.DeleteMatchmakingConfigurationOutput) => void): Request<GameLift.Types.DeleteMatchmakingConfigurationOutput, AWSError>;
  /**
   * Permanently removes a FlexMatch matchmaking configuration. To delete, specify the configuration name. A matchmaking configuration cannot be deleted if it is being used in any active matchmaking tickets.  Related operations     CreateMatchmakingConfiguration     DescribeMatchmakingConfigurations     UpdateMatchmakingConfiguration     DeleteMatchmakingConfiguration     CreateMatchmakingRuleSet     DescribeMatchmakingRuleSets     ValidateMatchmakingRuleSet     DeleteMatchmakingRuleSet   
   */
  deleteMatchmakingConfiguration(callback?: (err: AWSError, data: GameLift.Types.DeleteMatchmakingConfigurationOutput) => void): Request<GameLift.Types.DeleteMatchmakingConfigurationOutput, AWSError>;
  /**
   * Deletes an existing matchmaking rule set. To delete the rule set, provide the rule set name. Rule sets cannot be deleted if they are currently being used by a matchmaking configuration.   Learn more     Build a Rule Set     Related operations     CreateMatchmakingConfiguration     DescribeMatchmakingConfigurations     UpdateMatchmakingConfiguration     DeleteMatchmakingConfiguration     CreateMatchmakingRuleSet     DescribeMatchmakingRuleSets     ValidateMatchmakingRuleSet     DeleteMatchmakingRuleSet   
   */
  deleteMatchmakingRuleSet(params: GameLift.Types.DeleteMatchmakingRuleSetInput, callback?: (err: AWSError, data: GameLift.Types.DeleteMatchmakingRuleSetOutput) => void): Request<GameLift.Types.DeleteMatchmakingRuleSetOutput, AWSError>;
  /**
   * Deletes an existing matchmaking rule set. To delete the rule set, provide the rule set name. Rule sets cannot be deleted if they are currently being used by a matchmaking configuration.   Learn more     Build a Rule Set     Related operations     CreateMatchmakingConfiguration     DescribeMatchmakingConfigurations     UpdateMatchmakingConfiguration     DeleteMatchmakingConfiguration     CreateMatchmakingRuleSet     DescribeMatchmakingRuleSets     ValidateMatchmakingRuleSet     DeleteMatchmakingRuleSet   
   */
  deleteMatchmakingRuleSet(callback?: (err: AWSError, data: GameLift.Types.DeleteMatchmakingRuleSetOutput) => void): Request<GameLift.Types.DeleteMatchmakingRuleSetOutput, AWSError>;
  /**
   * Deletes a fleet scaling policy. Once deleted, the policy is no longer in force and GameLift removes all record of it. To delete a scaling policy, specify both the scaling policy name and the fleet ID it is associated with. To temporarily suspend scaling policies, call StopFleetActions. This operation suspends all policies for the fleet.    DescribeFleetCapacity     UpdateFleetCapacity     DescribeEC2InstanceLimits    Manage scaling policies:    PutScalingPolicy (auto-scaling)    DescribeScalingPolicies (auto-scaling)    DeleteScalingPolicy (auto-scaling)     Manage fleet actions:    StartFleetActions     StopFleetActions     
   */
  deleteScalingPolicy(params: GameLift.Types.DeleteScalingPolicyInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a fleet scaling policy. Once deleted, the policy is no longer in force and GameLift removes all record of it. To delete a scaling policy, specify both the scaling policy name and the fleet ID it is associated with. To temporarily suspend scaling policies, call StopFleetActions. This operation suspends all policies for the fleet.    DescribeFleetCapacity     UpdateFleetCapacity     DescribeEC2InstanceLimits    Manage scaling policies:    PutScalingPolicy (auto-scaling)    DescribeScalingPolicies (auto-scaling)    DeleteScalingPolicy (auto-scaling)     Manage fleet actions:    StartFleetActions     StopFleetActions     
   */
  deleteScalingPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a Realtime script. This operation permanently deletes the script record. If script files were uploaded, they are also deleted (files stored in an S3 bucket are not deleted).  To delete a script, specify the script ID. Before deleting a script, be sure to terminate all fleets that are deployed with the script being deleted. Fleet instances periodically check for script updates, and if the script record no longer exists, the instance will go into an error state and be unable to host game sessions.  Learn more   Amazon GameLift Realtime Servers   Related operations     CreateScript     ListScripts     DescribeScript     UpdateScript     DeleteScript   
   */
  deleteScript(params: GameLift.Types.DeleteScriptInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a Realtime script. This operation permanently deletes the script record. If script files were uploaded, they are also deleted (files stored in an S3 bucket are not deleted).  To delete a script, specify the script ID. Before deleting a script, be sure to terminate all fleets that are deployed with the script being deleted. Fleet instances periodically check for script updates, and if the script record no longer exists, the instance will go into an error state and be unable to host game sessions.  Learn more   Amazon GameLift Realtime Servers   Related operations     CreateScript     ListScripts     DescribeScript     UpdateScript     DeleteScript   
   */
  deleteScript(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Cancels a pending VPC peering authorization for the specified VPC. If you need to delete an existing VPC peering connection, call DeleteVpcPeeringConnection.     CreateVpcPeeringAuthorization     DescribeVpcPeeringAuthorizations     DeleteVpcPeeringAuthorization     CreateVpcPeeringConnection     DescribeVpcPeeringConnections     DeleteVpcPeeringConnection   
   */
  deleteVpcPeeringAuthorization(params: GameLift.Types.DeleteVpcPeeringAuthorizationInput, callback?: (err: AWSError, data: GameLift.Types.DeleteVpcPeeringAuthorizationOutput) => void): Request<GameLift.Types.DeleteVpcPeeringAuthorizationOutput, AWSError>;
  /**
   * Cancels a pending VPC peering authorization for the specified VPC. If you need to delete an existing VPC peering connection, call DeleteVpcPeeringConnection.     CreateVpcPeeringAuthorization     DescribeVpcPeeringAuthorizations     DeleteVpcPeeringAuthorization     CreateVpcPeeringConnection     DescribeVpcPeeringConnections     DeleteVpcPeeringConnection   
   */
  deleteVpcPeeringAuthorization(callback?: (err: AWSError, data: GameLift.Types.DeleteVpcPeeringAuthorizationOutput) => void): Request<GameLift.Types.DeleteVpcPeeringAuthorizationOutput, AWSError>;
  /**
   * Removes a VPC peering connection. To delete the connection, you must have a valid authorization for the VPC peering connection that you want to delete. You can check for an authorization by calling DescribeVpcPeeringAuthorizations or request a new one using CreateVpcPeeringAuthorization.  Once a valid authorization exists, call this operation from the AWS account that is used to manage the Amazon GameLift fleets. Identify the connection to delete by the connection ID and fleet ID. If successful, the connection is removed.     CreateVpcPeeringAuthorization     DescribeVpcPeeringAuthorizations     DeleteVpcPeeringAuthorization     CreateVpcPeeringConnection     DescribeVpcPeeringConnections     DeleteVpcPeeringConnection   
   */
  deleteVpcPeeringConnection(params: GameLift.Types.DeleteVpcPeeringConnectionInput, callback?: (err: AWSError, data: GameLift.Types.DeleteVpcPeeringConnectionOutput) => void): Request<GameLift.Types.DeleteVpcPeeringConnectionOutput, AWSError>;
  /**
   * Removes a VPC peering connection. To delete the connection, you must have a valid authorization for the VPC peering connection that you want to delete. You can check for an authorization by calling DescribeVpcPeeringAuthorizations or request a new one using CreateVpcPeeringAuthorization.  Once a valid authorization exists, call this operation from the AWS account that is used to manage the Amazon GameLift fleets. Identify the connection to delete by the connection ID and fleet ID. If successful, the connection is removed.     CreateVpcPeeringAuthorization     DescribeVpcPeeringAuthorizations     DeleteVpcPeeringAuthorization     CreateVpcPeeringConnection     DescribeVpcPeeringConnections     DeleteVpcPeeringConnection   
   */
  deleteVpcPeeringConnection(callback?: (err: AWSError, data: GameLift.Types.DeleteVpcPeeringConnectionOutput) => void): Request<GameLift.Types.DeleteVpcPeeringConnectionOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Removes the game server from a game server group. As a result of this operation, the deregistered game server can no longer be claimed and will not be returned in a list of active game servers.  To deregister a game server, specify the game server group and game server ID. If successful, this operation emits a CloudWatch event with termination timestamp and reason.  Learn more   GameLift FleetIQ Guide   Related operations     RegisterGameServer     ListGameServers     ClaimGameServer     DescribeGameServer     UpdateGameServer     DeregisterGameServer   
   */
  deregisterGameServer(params: GameLift.Types.DeregisterGameServerInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Removes the game server from a game server group. As a result of this operation, the deregistered game server can no longer be claimed and will not be returned in a list of active game servers.  To deregister a game server, specify the game server group and game server ID. If successful, this operation emits a CloudWatch event with termination timestamp and reason.  Learn more   GameLift FleetIQ Guide   Related operations     RegisterGameServer     ListGameServers     ClaimGameServer     DescribeGameServer     UpdateGameServer     DeregisterGameServer   
   */
  deregisterGameServer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves properties for an alias. This operation returns all alias metadata and settings. To get an alias's target fleet ID only, use ResolveAlias.  To get alias properties, specify the alias ID. If successful, the requested alias record is returned.    CreateAlias     ListAliases     DescribeAlias     UpdateAlias     DeleteAlias     ResolveAlias   
   */
  describeAlias(params: GameLift.Types.DescribeAliasInput, callback?: (err: AWSError, data: GameLift.Types.DescribeAliasOutput) => void): Request<GameLift.Types.DescribeAliasOutput, AWSError>;
  /**
   * Retrieves properties for an alias. This operation returns all alias metadata and settings. To get an alias's target fleet ID only, use ResolveAlias.  To get alias properties, specify the alias ID. If successful, the requested alias record is returned.    CreateAlias     ListAliases     DescribeAlias     UpdateAlias     DeleteAlias     ResolveAlias   
   */
  describeAlias(callback?: (err: AWSError, data: GameLift.Types.DescribeAliasOutput) => void): Request<GameLift.Types.DescribeAliasOutput, AWSError>;
  /**
   * Retrieves properties for a custom game build. To request a build resource, specify a build ID. If successful, an object containing the build properties is returned.  Learn more    Upload a Custom Server Build   Related operations     CreateBuild     ListBuilds     DescribeBuild     UpdateBuild     DeleteBuild   
   */
  describeBuild(params: GameLift.Types.DescribeBuildInput, callback?: (err: AWSError, data: GameLift.Types.DescribeBuildOutput) => void): Request<GameLift.Types.DescribeBuildOutput, AWSError>;
  /**
   * Retrieves properties for a custom game build. To request a build resource, specify a build ID. If successful, an object containing the build properties is returned.  Learn more    Upload a Custom Server Build   Related operations     CreateBuild     ListBuilds     DescribeBuild     UpdateBuild     DeleteBuild   
   */
  describeBuild(callback?: (err: AWSError, data: GameLift.Types.DescribeBuildOutput) => void): Request<GameLift.Types.DescribeBuildOutput, AWSError>;
  /**
   * Retrieves the following information for the specified EC2 instance type:   Maximum number of instances allowed per AWS account (service limit).   Current usage for the AWS account.   To learn more about the capabilities of each instance type, see Amazon EC2 Instance Types. Note that the instance types offered may vary depending on the region.  Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet     DescribeFleetAttributes     UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  describeEC2InstanceLimits(params: GameLift.Types.DescribeEC2InstanceLimitsInput, callback?: (err: AWSError, data: GameLift.Types.DescribeEC2InstanceLimitsOutput) => void): Request<GameLift.Types.DescribeEC2InstanceLimitsOutput, AWSError>;
  /**
   * Retrieves the following information for the specified EC2 instance type:   Maximum number of instances allowed per AWS account (service limit).   Current usage for the AWS account.   To learn more about the capabilities of each instance type, see Amazon EC2 Instance Types. Note that the instance types offered may vary depending on the region.  Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet     DescribeFleetAttributes     UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  describeEC2InstanceLimits(callback?: (err: AWSError, data: GameLift.Types.DescribeEC2InstanceLimitsOutput) => void): Request<GameLift.Types.DescribeEC2InstanceLimitsOutput, AWSError>;
  /**
   * Retrieves core properties, including configuration, status, and metadata, for a fleet.  To get attributes for one or more fleets, provide a list of fleet IDs or fleet ARNs. To get attributes for all fleets, do not specify a fleet identifier. When requesting attributes for multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a FleetAttributes object is returned for each fleet requested, unless the fleet identifier is not found.  Some API operations may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed number.   Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet    Describe fleets:    DescribeFleetAttributes     DescribeFleetCapacity     DescribeFleetPortSettings     DescribeFleetUtilization     DescribeRuntimeConfiguration     DescribeEC2InstanceLimits     DescribeFleetEvents       UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  describeFleetAttributes(params: GameLift.Types.DescribeFleetAttributesInput, callback?: (err: AWSError, data: GameLift.Types.DescribeFleetAttributesOutput) => void): Request<GameLift.Types.DescribeFleetAttributesOutput, AWSError>;
  /**
   * Retrieves core properties, including configuration, status, and metadata, for a fleet.  To get attributes for one or more fleets, provide a list of fleet IDs or fleet ARNs. To get attributes for all fleets, do not specify a fleet identifier. When requesting attributes for multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a FleetAttributes object is returned for each fleet requested, unless the fleet identifier is not found.  Some API operations may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed number.   Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet    Describe fleets:    DescribeFleetAttributes     DescribeFleetCapacity     DescribeFleetPortSettings     DescribeFleetUtilization     DescribeRuntimeConfiguration     DescribeEC2InstanceLimits     DescribeFleetEvents       UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  describeFleetAttributes(callback?: (err: AWSError, data: GameLift.Types.DescribeFleetAttributesOutput) => void): Request<GameLift.Types.DescribeFleetAttributesOutput, AWSError>;
  /**
   * Retrieves the current capacity statistics for one or more fleets. These statistics present a snapshot of the fleet's instances and provide insight on current or imminent scaling activity. To get statistics on game hosting activity in the fleet, see DescribeFleetUtilization. You can request capacity for all fleets or specify a list of one or more fleet identifiers. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a FleetCapacity object is returned for each requested fleet ID. When a list of fleet IDs is provided, attribute objects are returned only for fleets that currently exist.  Some API operations may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.   Learn more   Setting up GameLift Fleets   GameLift Metrics for Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet    Describe fleets:    DescribeFleetAttributes     DescribeFleetCapacity     DescribeFleetPortSettings     DescribeFleetUtilization     DescribeRuntimeConfiguration     DescribeEC2InstanceLimits     DescribeFleetEvents       UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  describeFleetCapacity(params: GameLift.Types.DescribeFleetCapacityInput, callback?: (err: AWSError, data: GameLift.Types.DescribeFleetCapacityOutput) => void): Request<GameLift.Types.DescribeFleetCapacityOutput, AWSError>;
  /**
   * Retrieves the current capacity statistics for one or more fleets. These statistics present a snapshot of the fleet's instances and provide insight on current or imminent scaling activity. To get statistics on game hosting activity in the fleet, see DescribeFleetUtilization. You can request capacity for all fleets or specify a list of one or more fleet identifiers. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a FleetCapacity object is returned for each requested fleet ID. When a list of fleet IDs is provided, attribute objects are returned only for fleets that currently exist.  Some API operations may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.   Learn more   Setting up GameLift Fleets   GameLift Metrics for Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet    Describe fleets:    DescribeFleetAttributes     DescribeFleetCapacity     DescribeFleetPortSettings     DescribeFleetUtilization     DescribeRuntimeConfiguration     DescribeEC2InstanceLimits     DescribeFleetEvents       UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  describeFleetCapacity(callback?: (err: AWSError, data: GameLift.Types.DescribeFleetCapacityOutput) => void): Request<GameLift.Types.DescribeFleetCapacityOutput, AWSError>;
  /**
   * Retrieves entries from the specified fleet's event log. You can specify a time range to limit the result set. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a collection of event log entries matching the request are returned.  Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet    Describe fleets:    DescribeFleetAttributes     DescribeFleetCapacity     DescribeFleetPortSettings     DescribeFleetUtilization     DescribeRuntimeConfiguration     DescribeEC2InstanceLimits     DescribeFleetEvents       UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  describeFleetEvents(params: GameLift.Types.DescribeFleetEventsInput, callback?: (err: AWSError, data: GameLift.Types.DescribeFleetEventsOutput) => void): Request<GameLift.Types.DescribeFleetEventsOutput, AWSError>;
  /**
   * Retrieves entries from the specified fleet's event log. You can specify a time range to limit the result set. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a collection of event log entries matching the request are returned.  Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet    Describe fleets:    DescribeFleetAttributes     DescribeFleetCapacity     DescribeFleetPortSettings     DescribeFleetUtilization     DescribeRuntimeConfiguration     DescribeEC2InstanceLimits     DescribeFleetEvents       UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  describeFleetEvents(callback?: (err: AWSError, data: GameLift.Types.DescribeFleetEventsOutput) => void): Request<GameLift.Types.DescribeFleetEventsOutput, AWSError>;
  /**
   * Retrieves a fleet's inbound connection permissions. Connection permissions specify the range of IP addresses and port settings that incoming traffic can use to access server processes in the fleet. Game sessions that are running on instances in the fleet use connections that fall in this range.  To get a fleet's inbound connection permissions, specify the fleet's unique identifier. If successful, a collection of IpPermission objects is returned for the requested fleet ID. If the requested fleet has been deleted, the result set is empty.  Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet    Describe fleets:    DescribeFleetAttributes     DescribeFleetCapacity     DescribeFleetPortSettings     DescribeFleetUtilization     DescribeRuntimeConfiguration     DescribeEC2InstanceLimits     DescribeFleetEvents       UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  describeFleetPortSettings(params: GameLift.Types.DescribeFleetPortSettingsInput, callback?: (err: AWSError, data: GameLift.Types.DescribeFleetPortSettingsOutput) => void): Request<GameLift.Types.DescribeFleetPortSettingsOutput, AWSError>;
  /**
   * Retrieves a fleet's inbound connection permissions. Connection permissions specify the range of IP addresses and port settings that incoming traffic can use to access server processes in the fleet. Game sessions that are running on instances in the fleet use connections that fall in this range.  To get a fleet's inbound connection permissions, specify the fleet's unique identifier. If successful, a collection of IpPermission objects is returned for the requested fleet ID. If the requested fleet has been deleted, the result set is empty.  Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet    Describe fleets:    DescribeFleetAttributes     DescribeFleetCapacity     DescribeFleetPortSettings     DescribeFleetUtilization     DescribeRuntimeConfiguration     DescribeEC2InstanceLimits     DescribeFleetEvents       UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  describeFleetPortSettings(callback?: (err: AWSError, data: GameLift.Types.DescribeFleetPortSettingsOutput) => void): Request<GameLift.Types.DescribeFleetPortSettingsOutput, AWSError>;
  /**
   * Retrieves utilization statistics for one or more fleets. These statistics provide insight into how available hosting resources are currently being used. To get statistics on available hosting resources, see DescribeFleetCapacity. You can request utilization data for all fleets, or specify a list of one or more fleet IDs. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a FleetUtilization object is returned for each requested fleet ID, unless the fleet identifier is not found.   Some API operations may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.   Learn more   Setting up GameLift Fleets   GameLift Metrics for Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet    Describe fleets:    DescribeFleetAttributes     DescribeFleetCapacity     DescribeFleetPortSettings     DescribeFleetUtilization     DescribeRuntimeConfiguration     DescribeEC2InstanceLimits     DescribeFleetEvents       UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  describeFleetUtilization(params: GameLift.Types.DescribeFleetUtilizationInput, callback?: (err: AWSError, data: GameLift.Types.DescribeFleetUtilizationOutput) => void): Request<GameLift.Types.DescribeFleetUtilizationOutput, AWSError>;
  /**
   * Retrieves utilization statistics for one or more fleets. These statistics provide insight into how available hosting resources are currently being used. To get statistics on available hosting resources, see DescribeFleetCapacity. You can request utilization data for all fleets, or specify a list of one or more fleet IDs. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a FleetUtilization object is returned for each requested fleet ID, unless the fleet identifier is not found.   Some API operations may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.   Learn more   Setting up GameLift Fleets   GameLift Metrics for Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet    Describe fleets:    DescribeFleetAttributes     DescribeFleetCapacity     DescribeFleetPortSettings     DescribeFleetUtilization     DescribeRuntimeConfiguration     DescribeEC2InstanceLimits     DescribeFleetEvents       UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  describeFleetUtilization(callback?: (err: AWSError, data: GameLift.Types.DescribeFleetUtilizationOutput) => void): Request<GameLift.Types.DescribeFleetUtilizationOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Retrieves information for a registered game server. Information includes game server status, health check info, and the instance that the game server is running on.  To retrieve game server information, specify the game server ID. If successful, the requested game server object is returned.   Learn more   GameLift FleetIQ Guide   Related operations     RegisterGameServer     ListGameServers     ClaimGameServer     DescribeGameServer     UpdateGameServer     DeregisterGameServer   
   */
  describeGameServer(params: GameLift.Types.DescribeGameServerInput, callback?: (err: AWSError, data: GameLift.Types.DescribeGameServerOutput) => void): Request<GameLift.Types.DescribeGameServerOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Retrieves information for a registered game server. Information includes game server status, health check info, and the instance that the game server is running on.  To retrieve game server information, specify the game server ID. If successful, the requested game server object is returned.   Learn more   GameLift FleetIQ Guide   Related operations     RegisterGameServer     ListGameServers     ClaimGameServer     DescribeGameServer     UpdateGameServer     DeregisterGameServer   
   */
  describeGameServer(callback?: (err: AWSError, data: GameLift.Types.DescribeGameServerOutput) => void): Request<GameLift.Types.DescribeGameServerOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Retrieves information on a game server group. This operation returns only properties related to GameLift FleetIQ. To view or update properties for the corresponding Auto Scaling group, such as launch template, auto scaling policies, and maximum/minimum group size, access the Auto Scaling group directly. To get attributes for a game server group, provide a group name or ARN value. If successful, a GameServerGroup object is returned.  Learn more   GameLift FleetIQ Guide   Related operations     CreateGameServerGroup     ListGameServerGroups     DescribeGameServerGroup     UpdateGameServerGroup     DeleteGameServerGroup     ResumeGameServerGroup     SuspendGameServerGroup     DescribeGameServerInstances   
   */
  describeGameServerGroup(params: GameLift.Types.DescribeGameServerGroupInput, callback?: (err: AWSError, data: GameLift.Types.DescribeGameServerGroupOutput) => void): Request<GameLift.Types.DescribeGameServerGroupOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Retrieves information on a game server group. This operation returns only properties related to GameLift FleetIQ. To view or update properties for the corresponding Auto Scaling group, such as launch template, auto scaling policies, and maximum/minimum group size, access the Auto Scaling group directly. To get attributes for a game server group, provide a group name or ARN value. If successful, a GameServerGroup object is returned.  Learn more   GameLift FleetIQ Guide   Related operations     CreateGameServerGroup     ListGameServerGroups     DescribeGameServerGroup     UpdateGameServerGroup     DeleteGameServerGroup     ResumeGameServerGroup     SuspendGameServerGroup     DescribeGameServerInstances   
   */
  describeGameServerGroup(callback?: (err: AWSError, data: GameLift.Types.DescribeGameServerGroupOutput) => void): Request<GameLift.Types.DescribeGameServerGroupOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Retrieves status information about the Amazon EC2 instances associated with a GameLift FleetIQ game server group. Use this operation to detect when instances are active or not available to host new game servers. If you are looking for instance configuration information, call DescribeGameServerGroup or access the corresponding Auto Scaling group properties. To request status for all instances in the game server group, provide a game server group ID only. To request status for specific instances, provide the game server group ID and one or more instance IDs. Use the pagination parameters to retrieve results in sequential segments. If successful, a collection of GameServerInstance objects is returned.  This operation is not designed to be called with every game server claim request; this practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, cache the results and refresh your cache no more than once every 10 seconds.  Learn more   GameLift FleetIQ Guide   Related operations     CreateGameServerGroup     ListGameServerGroups     DescribeGameServerGroup     UpdateGameServerGroup     DeleteGameServerGroup     ResumeGameServerGroup     SuspendGameServerGroup     DescribeGameServerInstances   
   */
  describeGameServerInstances(params: GameLift.Types.DescribeGameServerInstancesInput, callback?: (err: AWSError, data: GameLift.Types.DescribeGameServerInstancesOutput) => void): Request<GameLift.Types.DescribeGameServerInstancesOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Retrieves status information about the Amazon EC2 instances associated with a GameLift FleetIQ game server group. Use this operation to detect when instances are active or not available to host new game servers. If you are looking for instance configuration information, call DescribeGameServerGroup or access the corresponding Auto Scaling group properties. To request status for all instances in the game server group, provide a game server group ID only. To request status for specific instances, provide the game server group ID and one or more instance IDs. Use the pagination parameters to retrieve results in sequential segments. If successful, a collection of GameServerInstance objects is returned.  This operation is not designed to be called with every game server claim request; this practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, cache the results and refresh your cache no more than once every 10 seconds.  Learn more   GameLift FleetIQ Guide   Related operations     CreateGameServerGroup     ListGameServerGroups     DescribeGameServerGroup     UpdateGameServerGroup     DeleteGameServerGroup     ResumeGameServerGroup     SuspendGameServerGroup     DescribeGameServerInstances   
   */
  describeGameServerInstances(callback?: (err: AWSError, data: GameLift.Types.DescribeGameServerInstancesOutput) => void): Request<GameLift.Types.DescribeGameServerInstancesOutput, AWSError>;
  /**
   * Retrieves properties, including the protection policy in force, for one or more game sessions. This operation can be used in several ways: (1) provide a GameSessionId or GameSessionArn to request details for a specific game session; (2) provide either a FleetId or an AliasId to request properties for all game sessions running on a fleet.  To get game session record(s), specify just one of the following: game session ID, fleet ID, or alias ID. You can filter this request by game session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a GameSessionDetail object is returned for each session matching the request.    CreateGameSession     DescribeGameSessions     DescribeGameSessionDetails     SearchGameSessions     UpdateGameSession     GetGameSessionLogUrl    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  describeGameSessionDetails(params: GameLift.Types.DescribeGameSessionDetailsInput, callback?: (err: AWSError, data: GameLift.Types.DescribeGameSessionDetailsOutput) => void): Request<GameLift.Types.DescribeGameSessionDetailsOutput, AWSError>;
  /**
   * Retrieves properties, including the protection policy in force, for one or more game sessions. This operation can be used in several ways: (1) provide a GameSessionId or GameSessionArn to request details for a specific game session; (2) provide either a FleetId or an AliasId to request properties for all game sessions running on a fleet.  To get game session record(s), specify just one of the following: game session ID, fleet ID, or alias ID. You can filter this request by game session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a GameSessionDetail object is returned for each session matching the request.    CreateGameSession     DescribeGameSessions     DescribeGameSessionDetails     SearchGameSessions     UpdateGameSession     GetGameSessionLogUrl    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  describeGameSessionDetails(callback?: (err: AWSError, data: GameLift.Types.DescribeGameSessionDetailsOutput) => void): Request<GameLift.Types.DescribeGameSessionDetailsOutput, AWSError>;
  /**
   * Retrieves properties and current status of a game session placement request. To get game session placement details, specify the placement ID. If successful, a GameSessionPlacement object is returned.    CreateGameSession     DescribeGameSessions     DescribeGameSessionDetails     SearchGameSessions     UpdateGameSession     GetGameSessionLogUrl    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  describeGameSessionPlacement(params: GameLift.Types.DescribeGameSessionPlacementInput, callback?: (err: AWSError, data: GameLift.Types.DescribeGameSessionPlacementOutput) => void): Request<GameLift.Types.DescribeGameSessionPlacementOutput, AWSError>;
  /**
   * Retrieves properties and current status of a game session placement request. To get game session placement details, specify the placement ID. If successful, a GameSessionPlacement object is returned.    CreateGameSession     DescribeGameSessions     DescribeGameSessionDetails     SearchGameSessions     UpdateGameSession     GetGameSessionLogUrl    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  describeGameSessionPlacement(callback?: (err: AWSError, data: GameLift.Types.DescribeGameSessionPlacementOutput) => void): Request<GameLift.Types.DescribeGameSessionPlacementOutput, AWSError>;
  /**
   * Retrieves the properties for one or more game session queues. When requesting multiple queues, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a GameSessionQueue object is returned for each requested queue. When specifying a list of queues, objects are returned only for queues that currently exist in the Region.  Learn more    View Your Queues   Related operations     CreateGameSessionQueue     DescribeGameSessionQueues     UpdateGameSessionQueue     DeleteGameSessionQueue   
   */
  describeGameSessionQueues(params: GameLift.Types.DescribeGameSessionQueuesInput, callback?: (err: AWSError, data: GameLift.Types.DescribeGameSessionQueuesOutput) => void): Request<GameLift.Types.DescribeGameSessionQueuesOutput, AWSError>;
  /**
   * Retrieves the properties for one or more game session queues. When requesting multiple queues, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a GameSessionQueue object is returned for each requested queue. When specifying a list of queues, objects are returned only for queues that currently exist in the Region.  Learn more    View Your Queues   Related operations     CreateGameSessionQueue     DescribeGameSessionQueues     UpdateGameSessionQueue     DeleteGameSessionQueue   
   */
  describeGameSessionQueues(callback?: (err: AWSError, data: GameLift.Types.DescribeGameSessionQueuesOutput) => void): Request<GameLift.Types.DescribeGameSessionQueuesOutput, AWSError>;
  /**
   * Retrieves a set of one or more game sessions. Request a specific game session or request all game sessions on a fleet. Alternatively, use SearchGameSessions to request a set of active game sessions that are filtered by certain criteria. To retrieve protection policy settings for game sessions, use DescribeGameSessionDetails. To get game sessions, specify one of the following: game session ID, fleet ID, or alias ID. You can filter this request by game session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a GameSession object is returned for each game session matching the request.  Available in Amazon GameLift Local.     CreateGameSession     DescribeGameSessions     DescribeGameSessionDetails     SearchGameSessions     UpdateGameSession     GetGameSessionLogUrl    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  describeGameSessions(params: GameLift.Types.DescribeGameSessionsInput, callback?: (err: AWSError, data: GameLift.Types.DescribeGameSessionsOutput) => void): Request<GameLift.Types.DescribeGameSessionsOutput, AWSError>;
  /**
   * Retrieves a set of one or more game sessions. Request a specific game session or request all game sessions on a fleet. Alternatively, use SearchGameSessions to request a set of active game sessions that are filtered by certain criteria. To retrieve protection policy settings for game sessions, use DescribeGameSessionDetails. To get game sessions, specify one of the following: game session ID, fleet ID, or alias ID. You can filter this request by game session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a GameSession object is returned for each game session matching the request.  Available in Amazon GameLift Local.     CreateGameSession     DescribeGameSessions     DescribeGameSessionDetails     SearchGameSessions     UpdateGameSession     GetGameSessionLogUrl    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  describeGameSessions(callback?: (err: AWSError, data: GameLift.Types.DescribeGameSessionsOutput) => void): Request<GameLift.Types.DescribeGameSessionsOutput, AWSError>;
  /**
   * Retrieves information about a fleet's instances, including instance IDs. Use this operation to get details on all instances in the fleet or get details on one specific instance. To get a specific instance, specify fleet ID and instance ID. To get all instances in a fleet, specify a fleet ID only. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, an Instance object is returned for each result.  Learn more   Remotely Access Fleet Instances   Debug Fleet Issues   Related operations     DescribeInstances     GetInstanceAccess   
   */
  describeInstances(params: GameLift.Types.DescribeInstancesInput, callback?: (err: AWSError, data: GameLift.Types.DescribeInstancesOutput) => void): Request<GameLift.Types.DescribeInstancesOutput, AWSError>;
  /**
   * Retrieves information about a fleet's instances, including instance IDs. Use this operation to get details on all instances in the fleet or get details on one specific instance. To get a specific instance, specify fleet ID and instance ID. To get all instances in a fleet, specify a fleet ID only. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, an Instance object is returned for each result.  Learn more   Remotely Access Fleet Instances   Debug Fleet Issues   Related operations     DescribeInstances     GetInstanceAccess   
   */
  describeInstances(callback?: (err: AWSError, data: GameLift.Types.DescribeInstancesOutput) => void): Request<GameLift.Types.DescribeInstancesOutput, AWSError>;
  /**
   * Retrieves one or more matchmaking tickets. Use this operation to retrieve ticket information, including--after a successful match is made--connection information for the resulting new game session.  To request matchmaking tickets, provide a list of up to 10 ticket IDs. If the request is successful, a ticket object is returned for each requested ID that currently exists. This operation is not designed to be continually called to track matchmaking ticket status. This practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, set up an Amazon Simple Notification Service (SNS) to receive notifications, and provide the topic ARN in the matchmaking configuration. Continuously poling ticket status with DescribeMatchmaking should only be used for games in development with low matchmaking usage.   Learn more    Add FlexMatch to a Game Client    Set Up FlexMatch Event Notification   Related operations     StartMatchmaking     DescribeMatchmaking     StopMatchmaking     AcceptMatch     StartMatchBackfill   
   */
  describeMatchmaking(params: GameLift.Types.DescribeMatchmakingInput, callback?: (err: AWSError, data: GameLift.Types.DescribeMatchmakingOutput) => void): Request<GameLift.Types.DescribeMatchmakingOutput, AWSError>;
  /**
   * Retrieves one or more matchmaking tickets. Use this operation to retrieve ticket information, including--after a successful match is made--connection information for the resulting new game session.  To request matchmaking tickets, provide a list of up to 10 ticket IDs. If the request is successful, a ticket object is returned for each requested ID that currently exists. This operation is not designed to be continually called to track matchmaking ticket status. This practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, set up an Amazon Simple Notification Service (SNS) to receive notifications, and provide the topic ARN in the matchmaking configuration. Continuously poling ticket status with DescribeMatchmaking should only be used for games in development with low matchmaking usage.   Learn more    Add FlexMatch to a Game Client    Set Up FlexMatch Event Notification   Related operations     StartMatchmaking     DescribeMatchmaking     StopMatchmaking     AcceptMatch     StartMatchBackfill   
   */
  describeMatchmaking(callback?: (err: AWSError, data: GameLift.Types.DescribeMatchmakingOutput) => void): Request<GameLift.Types.DescribeMatchmakingOutput, AWSError>;
  /**
   * Retrieves the details of FlexMatch matchmaking configurations.  This operation offers the following options: (1) retrieve all matchmaking configurations, (2) retrieve configurations for a specified list, or (3) retrieve all configurations that use a specified rule set name. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages.  If successful, a configuration is returned for each requested name. When specifying a list of names, only configurations that currently exist are returned.   Learn more    Setting Up FlexMatch Matchmakers   Related operations     CreateMatchmakingConfiguration     DescribeMatchmakingConfigurations     UpdateMatchmakingConfiguration     DeleteMatchmakingConfiguration     CreateMatchmakingRuleSet     DescribeMatchmakingRuleSets     ValidateMatchmakingRuleSet     DeleteMatchmakingRuleSet   
   */
  describeMatchmakingConfigurations(params: GameLift.Types.DescribeMatchmakingConfigurationsInput, callback?: (err: AWSError, data: GameLift.Types.DescribeMatchmakingConfigurationsOutput) => void): Request<GameLift.Types.DescribeMatchmakingConfigurationsOutput, AWSError>;
  /**
   * Retrieves the details of FlexMatch matchmaking configurations.  This operation offers the following options: (1) retrieve all matchmaking configurations, (2) retrieve configurations for a specified list, or (3) retrieve all configurations that use a specified rule set name. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages.  If successful, a configuration is returned for each requested name. When specifying a list of names, only configurations that currently exist are returned.   Learn more    Setting Up FlexMatch Matchmakers   Related operations     CreateMatchmakingConfiguration     DescribeMatchmakingConfigurations     UpdateMatchmakingConfiguration     DeleteMatchmakingConfiguration     CreateMatchmakingRuleSet     DescribeMatchmakingRuleSets     ValidateMatchmakingRuleSet     DeleteMatchmakingRuleSet   
   */
  describeMatchmakingConfigurations(callback?: (err: AWSError, data: GameLift.Types.DescribeMatchmakingConfigurationsOutput) => void): Request<GameLift.Types.DescribeMatchmakingConfigurationsOutput, AWSError>;
  /**
   * Retrieves the details for FlexMatch matchmaking rule sets. You can request all existing rule sets for the Region, or provide a list of one or more rule set names. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a rule set is returned for each requested name.   Learn more     Build a Rule Set     Related operations     CreateMatchmakingConfiguration     DescribeMatchmakingConfigurations     UpdateMatchmakingConfiguration     DeleteMatchmakingConfiguration     CreateMatchmakingRuleSet     DescribeMatchmakingRuleSets     ValidateMatchmakingRuleSet     DeleteMatchmakingRuleSet   
   */
  describeMatchmakingRuleSets(params: GameLift.Types.DescribeMatchmakingRuleSetsInput, callback?: (err: AWSError, data: GameLift.Types.DescribeMatchmakingRuleSetsOutput) => void): Request<GameLift.Types.DescribeMatchmakingRuleSetsOutput, AWSError>;
  /**
   * Retrieves the details for FlexMatch matchmaking rule sets. You can request all existing rule sets for the Region, or provide a list of one or more rule set names. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a rule set is returned for each requested name.   Learn more     Build a Rule Set     Related operations     CreateMatchmakingConfiguration     DescribeMatchmakingConfigurations     UpdateMatchmakingConfiguration     DeleteMatchmakingConfiguration     CreateMatchmakingRuleSet     DescribeMatchmakingRuleSets     ValidateMatchmakingRuleSet     DeleteMatchmakingRuleSet   
   */
  describeMatchmakingRuleSets(callback?: (err: AWSError, data: GameLift.Types.DescribeMatchmakingRuleSetsOutput) => void): Request<GameLift.Types.DescribeMatchmakingRuleSetsOutput, AWSError>;
  /**
   * Retrieves properties for one or more player sessions. This operation can be used in several ways: (1) provide a PlayerSessionId to request properties for a specific player session; (2) provide a GameSessionId to request properties for all player sessions in the specified game session; (3) provide a PlayerId to request properties for all player sessions of a specified player.  To get game session record(s), specify only one of the following: a player session ID, a game session ID, or a player ID. You can filter this request by player session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a PlayerSession object is returned for each session matching the request.  Available in Amazon GameLift Local.     CreatePlayerSession     CreatePlayerSessions     DescribePlayerSessions    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  describePlayerSessions(params: GameLift.Types.DescribePlayerSessionsInput, callback?: (err: AWSError, data: GameLift.Types.DescribePlayerSessionsOutput) => void): Request<GameLift.Types.DescribePlayerSessionsOutput, AWSError>;
  /**
   * Retrieves properties for one or more player sessions. This operation can be used in several ways: (1) provide a PlayerSessionId to request properties for a specific player session; (2) provide a GameSessionId to request properties for all player sessions in the specified game session; (3) provide a PlayerId to request properties for all player sessions of a specified player.  To get game session record(s), specify only one of the following: a player session ID, a game session ID, or a player ID. You can filter this request by player session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a PlayerSession object is returned for each session matching the request.  Available in Amazon GameLift Local.     CreatePlayerSession     CreatePlayerSessions     DescribePlayerSessions    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  describePlayerSessions(callback?: (err: AWSError, data: GameLift.Types.DescribePlayerSessionsOutput) => void): Request<GameLift.Types.DescribePlayerSessionsOutput, AWSError>;
  /**
   * Retrieves a fleet's runtime configuration settings. The runtime configuration tells Amazon GameLift which server processes to run (and how) on each instance in the fleet. To get a runtime configuration, specify the fleet's unique identifier. If successful, a RuntimeConfiguration object is returned for the requested fleet. If the requested fleet has been deleted, the result set is empty.  Learn more   Setting up GameLift Fleets   Running Multiple Processes on a Fleet   Related operations     CreateFleet     ListFleets     DeleteFleet    Describe fleets:    DescribeFleetAttributes     DescribeFleetCapacity     DescribeFleetPortSettings     DescribeFleetUtilization     DescribeRuntimeConfiguration     DescribeEC2InstanceLimits     DescribeFleetEvents       UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  describeRuntimeConfiguration(params: GameLift.Types.DescribeRuntimeConfigurationInput, callback?: (err: AWSError, data: GameLift.Types.DescribeRuntimeConfigurationOutput) => void): Request<GameLift.Types.DescribeRuntimeConfigurationOutput, AWSError>;
  /**
   * Retrieves a fleet's runtime configuration settings. The runtime configuration tells Amazon GameLift which server processes to run (and how) on each instance in the fleet. To get a runtime configuration, specify the fleet's unique identifier. If successful, a RuntimeConfiguration object is returned for the requested fleet. If the requested fleet has been deleted, the result set is empty.  Learn more   Setting up GameLift Fleets   Running Multiple Processes on a Fleet   Related operations     CreateFleet     ListFleets     DeleteFleet    Describe fleets:    DescribeFleetAttributes     DescribeFleetCapacity     DescribeFleetPortSettings     DescribeFleetUtilization     DescribeRuntimeConfiguration     DescribeEC2InstanceLimits     DescribeFleetEvents       UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  describeRuntimeConfiguration(callback?: (err: AWSError, data: GameLift.Types.DescribeRuntimeConfigurationOutput) => void): Request<GameLift.Types.DescribeRuntimeConfigurationOutput, AWSError>;
  /**
   * Retrieves all scaling policies applied to a fleet. To get a fleet's scaling policies, specify the fleet ID. You can filter this request by policy status, such as to retrieve only active scaling policies. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, set of ScalingPolicy objects is returned for the fleet. A fleet may have all of its scaling policies suspended (StopFleetActions). This operation does not affect the status of the scaling policies, which remains ACTIVE. To see whether a fleet's scaling policies are in force or suspended, call DescribeFleetAttributes and check the stopped actions.    DescribeFleetCapacity     UpdateFleetCapacity     DescribeEC2InstanceLimits    Manage scaling policies:    PutScalingPolicy (auto-scaling)    DescribeScalingPolicies (auto-scaling)    DeleteScalingPolicy (auto-scaling)     Manage fleet actions:    StartFleetActions     StopFleetActions     
   */
  describeScalingPolicies(params: GameLift.Types.DescribeScalingPoliciesInput, callback?: (err: AWSError, data: GameLift.Types.DescribeScalingPoliciesOutput) => void): Request<GameLift.Types.DescribeScalingPoliciesOutput, AWSError>;
  /**
   * Retrieves all scaling policies applied to a fleet. To get a fleet's scaling policies, specify the fleet ID. You can filter this request by policy status, such as to retrieve only active scaling policies. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, set of ScalingPolicy objects is returned for the fleet. A fleet may have all of its scaling policies suspended (StopFleetActions). This operation does not affect the status of the scaling policies, which remains ACTIVE. To see whether a fleet's scaling policies are in force or suspended, call DescribeFleetAttributes and check the stopped actions.    DescribeFleetCapacity     UpdateFleetCapacity     DescribeEC2InstanceLimits    Manage scaling policies:    PutScalingPolicy (auto-scaling)    DescribeScalingPolicies (auto-scaling)    DeleteScalingPolicy (auto-scaling)     Manage fleet actions:    StartFleetActions     StopFleetActions     
   */
  describeScalingPolicies(callback?: (err: AWSError, data: GameLift.Types.DescribeScalingPoliciesOutput) => void): Request<GameLift.Types.DescribeScalingPoliciesOutput, AWSError>;
  /**
   * Retrieves properties for a Realtime script.  To request a script record, specify the script ID. If successful, an object containing the script properties is returned.  Learn more   Amazon GameLift Realtime Servers   Related operations     CreateScript     ListScripts     DescribeScript     UpdateScript     DeleteScript   
   */
  describeScript(params: GameLift.Types.DescribeScriptInput, callback?: (err: AWSError, data: GameLift.Types.DescribeScriptOutput) => void): Request<GameLift.Types.DescribeScriptOutput, AWSError>;
  /**
   * Retrieves properties for a Realtime script.  To request a script record, specify the script ID. If successful, an object containing the script properties is returned.  Learn more   Amazon GameLift Realtime Servers   Related operations     CreateScript     ListScripts     DescribeScript     UpdateScript     DeleteScript   
   */
  describeScript(callback?: (err: AWSError, data: GameLift.Types.DescribeScriptOutput) => void): Request<GameLift.Types.DescribeScriptOutput, AWSError>;
  /**
   * Retrieves valid VPC peering authorizations that are pending for the AWS account. This operation returns all VPC peering authorizations and requests for peering. This includes those initiated and received by this account.     CreateVpcPeeringAuthorization     DescribeVpcPeeringAuthorizations     DeleteVpcPeeringAuthorization     CreateVpcPeeringConnection     DescribeVpcPeeringConnections     DeleteVpcPeeringConnection   
   */
  describeVpcPeeringAuthorizations(params: GameLift.Types.DescribeVpcPeeringAuthorizationsInput, callback?: (err: AWSError, data: GameLift.Types.DescribeVpcPeeringAuthorizationsOutput) => void): Request<GameLift.Types.DescribeVpcPeeringAuthorizationsOutput, AWSError>;
  /**
   * Retrieves valid VPC peering authorizations that are pending for the AWS account. This operation returns all VPC peering authorizations and requests for peering. This includes those initiated and received by this account.     CreateVpcPeeringAuthorization     DescribeVpcPeeringAuthorizations     DeleteVpcPeeringAuthorization     CreateVpcPeeringConnection     DescribeVpcPeeringConnections     DeleteVpcPeeringConnection   
   */
  describeVpcPeeringAuthorizations(callback?: (err: AWSError, data: GameLift.Types.DescribeVpcPeeringAuthorizationsOutput) => void): Request<GameLift.Types.DescribeVpcPeeringAuthorizationsOutput, AWSError>;
  /**
   * Retrieves information on VPC peering connections. Use this operation to get peering information for all fleets or for one specific fleet ID.  To retrieve connection information, call this operation from the AWS account that is used to manage the Amazon GameLift fleets. Specify a fleet ID or leave the parameter empty to retrieve all connection records. If successful, the retrieved information includes both active and pending connections. Active connections identify the IpV4 CIDR block that the VPC uses to connect.     CreateVpcPeeringAuthorization     DescribeVpcPeeringAuthorizations     DeleteVpcPeeringAuthorization     CreateVpcPeeringConnection     DescribeVpcPeeringConnections     DeleteVpcPeeringConnection   
   */
  describeVpcPeeringConnections(params: GameLift.Types.DescribeVpcPeeringConnectionsInput, callback?: (err: AWSError, data: GameLift.Types.DescribeVpcPeeringConnectionsOutput) => void): Request<GameLift.Types.DescribeVpcPeeringConnectionsOutput, AWSError>;
  /**
   * Retrieves information on VPC peering connections. Use this operation to get peering information for all fleets or for one specific fleet ID.  To retrieve connection information, call this operation from the AWS account that is used to manage the Amazon GameLift fleets. Specify a fleet ID or leave the parameter empty to retrieve all connection records. If successful, the retrieved information includes both active and pending connections. Active connections identify the IpV4 CIDR block that the VPC uses to connect.     CreateVpcPeeringAuthorization     DescribeVpcPeeringAuthorizations     DeleteVpcPeeringAuthorization     CreateVpcPeeringConnection     DescribeVpcPeeringConnections     DeleteVpcPeeringConnection   
   */
  describeVpcPeeringConnections(callback?: (err: AWSError, data: GameLift.Types.DescribeVpcPeeringConnectionsOutput) => void): Request<GameLift.Types.DescribeVpcPeeringConnectionsOutput, AWSError>;
  /**
   * Retrieves the location of stored game session logs for a specified game session. When a game session is terminated, Amazon GameLift automatically stores the logs in Amazon S3 and retains them for 14 days. Use this URL to download the logs.  See the AWS Service Limits page for maximum log file sizes. Log files that exceed this limit are not saved.     CreateGameSession     DescribeGameSessions     DescribeGameSessionDetails     SearchGameSessions     UpdateGameSession     GetGameSessionLogUrl    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  getGameSessionLogUrl(params: GameLift.Types.GetGameSessionLogUrlInput, callback?: (err: AWSError, data: GameLift.Types.GetGameSessionLogUrlOutput) => void): Request<GameLift.Types.GetGameSessionLogUrlOutput, AWSError>;
  /**
   * Retrieves the location of stored game session logs for a specified game session. When a game session is terminated, Amazon GameLift automatically stores the logs in Amazon S3 and retains them for 14 days. Use this URL to download the logs.  See the AWS Service Limits page for maximum log file sizes. Log files that exceed this limit are not saved.     CreateGameSession     DescribeGameSessions     DescribeGameSessionDetails     SearchGameSessions     UpdateGameSession     GetGameSessionLogUrl    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  getGameSessionLogUrl(callback?: (err: AWSError, data: GameLift.Types.GetGameSessionLogUrlOutput) => void): Request<GameLift.Types.GetGameSessionLogUrlOutput, AWSError>;
  /**
   * Requests remote access to a fleet instance. Remote access is useful for debugging, gathering benchmarking data, or observing activity in real time.  To remotely access an instance, you need credentials that match the operating system of the instance. For a Windows instance, Amazon GameLift returns a user name and password as strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA private key, also as strings, for use with an SSH client. The private key must be saved in the proper format to a .pem file before using. If you're making this request using the AWS CLI, saving the secret can be handled as part of the GetInstanceAccess request, as shown in one of the examples for this operation.  To request access to a specific instance, specify the IDs of both the instance and the fleet it belongs to. You can retrieve a fleet's instance IDs by calling DescribeInstances. If successful, an InstanceAccess object is returned that contains the instance's IP address and a set of credentials.  Learn more   Remotely Access Fleet Instances   Debug Fleet Issues   Related operations     DescribeInstances     GetInstanceAccess   
   */
  getInstanceAccess(params: GameLift.Types.GetInstanceAccessInput, callback?: (err: AWSError, data: GameLift.Types.GetInstanceAccessOutput) => void): Request<GameLift.Types.GetInstanceAccessOutput, AWSError>;
  /**
   * Requests remote access to a fleet instance. Remote access is useful for debugging, gathering benchmarking data, or observing activity in real time.  To remotely access an instance, you need credentials that match the operating system of the instance. For a Windows instance, Amazon GameLift returns a user name and password as strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA private key, also as strings, for use with an SSH client. The private key must be saved in the proper format to a .pem file before using. If you're making this request using the AWS CLI, saving the secret can be handled as part of the GetInstanceAccess request, as shown in one of the examples for this operation.  To request access to a specific instance, specify the IDs of both the instance and the fleet it belongs to. You can retrieve a fleet's instance IDs by calling DescribeInstances. If successful, an InstanceAccess object is returned that contains the instance's IP address and a set of credentials.  Learn more   Remotely Access Fleet Instances   Debug Fleet Issues   Related operations     DescribeInstances     GetInstanceAccess   
   */
  getInstanceAccess(callback?: (err: AWSError, data: GameLift.Types.GetInstanceAccessOutput) => void): Request<GameLift.Types.GetInstanceAccessOutput, AWSError>;
  /**
   * Retrieves all aliases for this AWS account. You can filter the result set by alias name and/or routing strategy type. Use the pagination parameters to retrieve results in sequential pages.  Returned aliases are not listed in any particular order.     CreateAlias     ListAliases     DescribeAlias     UpdateAlias     DeleteAlias     ResolveAlias   
   */
  listAliases(params: GameLift.Types.ListAliasesInput, callback?: (err: AWSError, data: GameLift.Types.ListAliasesOutput) => void): Request<GameLift.Types.ListAliasesOutput, AWSError>;
  /**
   * Retrieves all aliases for this AWS account. You can filter the result set by alias name and/or routing strategy type. Use the pagination parameters to retrieve results in sequential pages.  Returned aliases are not listed in any particular order.     CreateAlias     ListAliases     DescribeAlias     UpdateAlias     DeleteAlias     ResolveAlias   
   */
  listAliases(callback?: (err: AWSError, data: GameLift.Types.ListAliasesOutput) => void): Request<GameLift.Types.ListAliasesOutput, AWSError>;
  /**
   * Retrieves build resources for all builds associated with the AWS account in use. You can limit results to builds that are in a specific status by using the Status parameter. Use the pagination parameters to retrieve results in a set of sequential pages.   Build resources are not listed in any particular order.   Learn more    Upload a Custom Server Build   Related operations     CreateBuild     ListBuilds     DescribeBuild     UpdateBuild     DeleteBuild   
   */
  listBuilds(params: GameLift.Types.ListBuildsInput, callback?: (err: AWSError, data: GameLift.Types.ListBuildsOutput) => void): Request<GameLift.Types.ListBuildsOutput, AWSError>;
  /**
   * Retrieves build resources for all builds associated with the AWS account in use. You can limit results to builds that are in a specific status by using the Status parameter. Use the pagination parameters to retrieve results in a set of sequential pages.   Build resources are not listed in any particular order.   Learn more    Upload a Custom Server Build   Related operations     CreateBuild     ListBuilds     DescribeBuild     UpdateBuild     DeleteBuild   
   */
  listBuilds(callback?: (err: AWSError, data: GameLift.Types.ListBuildsOutput) => void): Request<GameLift.Types.ListBuildsOutput, AWSError>;
  /**
   * Retrieves a collection of fleet resources for this AWS account. You can filter the result set to find only those fleets that are deployed with a specific build or script. Use the pagination parameters to retrieve results in sequential pages.  Fleet resources are not listed in a particular order.   Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet     DescribeFleetAttributes     UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  listFleets(params: GameLift.Types.ListFleetsInput, callback?: (err: AWSError, data: GameLift.Types.ListFleetsOutput) => void): Request<GameLift.Types.ListFleetsOutput, AWSError>;
  /**
   * Retrieves a collection of fleet resources for this AWS account. You can filter the result set to find only those fleets that are deployed with a specific build or script. Use the pagination parameters to retrieve results in sequential pages.  Fleet resources are not listed in a particular order.   Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet     DescribeFleetAttributes     UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  listFleets(callback?: (err: AWSError, data: GameLift.Types.ListFleetsOutput) => void): Request<GameLift.Types.ListFleetsOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Retrieves information on all game servers groups that exist in the current AWS account for the selected Region. Use the pagination parameters to retrieve results in a set of sequential segments.   Learn more   GameLift FleetIQ Guide   Related operations     CreateGameServerGroup     ListGameServerGroups     DescribeGameServerGroup     UpdateGameServerGroup     DeleteGameServerGroup     ResumeGameServerGroup     SuspendGameServerGroup     DescribeGameServerInstances   
   */
  listGameServerGroups(params: GameLift.Types.ListGameServerGroupsInput, callback?: (err: AWSError, data: GameLift.Types.ListGameServerGroupsOutput) => void): Request<GameLift.Types.ListGameServerGroupsOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Retrieves information on all game servers groups that exist in the current AWS account for the selected Region. Use the pagination parameters to retrieve results in a set of sequential segments.   Learn more   GameLift FleetIQ Guide   Related operations     CreateGameServerGroup     ListGameServerGroups     DescribeGameServerGroup     UpdateGameServerGroup     DeleteGameServerGroup     ResumeGameServerGroup     SuspendGameServerGroup     DescribeGameServerInstances   
   */
  listGameServerGroups(callback?: (err: AWSError, data: GameLift.Types.ListGameServerGroupsOutput) => void): Request<GameLift.Types.ListGameServerGroupsOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Retrieves information on all game servers that are currently active in a specified game server group. You can opt to sort the list by game server age. Use the pagination parameters to retrieve results in a set of sequential segments.   Learn more   GameLift FleetIQ Guide   Related operations     RegisterGameServer     ListGameServers     ClaimGameServer     DescribeGameServer     UpdateGameServer     DeregisterGameServer   
   */
  listGameServers(params: GameLift.Types.ListGameServersInput, callback?: (err: AWSError, data: GameLift.Types.ListGameServersOutput) => void): Request<GameLift.Types.ListGameServersOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Retrieves information on all game servers that are currently active in a specified game server group. You can opt to sort the list by game server age. Use the pagination parameters to retrieve results in a set of sequential segments.   Learn more   GameLift FleetIQ Guide   Related operations     RegisterGameServer     ListGameServers     ClaimGameServer     DescribeGameServer     UpdateGameServer     DeregisterGameServer   
   */
  listGameServers(callback?: (err: AWSError, data: GameLift.Types.ListGameServersOutput) => void): Request<GameLift.Types.ListGameServersOutput, AWSError>;
  /**
   * Retrieves script records for all Realtime scripts that are associated with the AWS account in use.   Learn more   Amazon GameLift Realtime Servers   Related operations     CreateScript     ListScripts     DescribeScript     UpdateScript     DeleteScript   
   */
  listScripts(params: GameLift.Types.ListScriptsInput, callback?: (err: AWSError, data: GameLift.Types.ListScriptsOutput) => void): Request<GameLift.Types.ListScriptsOutput, AWSError>;
  /**
   * Retrieves script records for all Realtime scripts that are associated with the AWS account in use.   Learn more   Amazon GameLift Realtime Servers   Related operations     CreateScript     ListScripts     DescribeScript     UpdateScript     DeleteScript   
   */
  listScripts(callback?: (err: AWSError, data: GameLift.Types.ListScriptsOutput) => void): Request<GameLift.Types.ListScriptsOutput, AWSError>;
  /**
   *  Retrieves all tags that are assigned to a GameLift resource. Resource tags are used to organize AWS resources for a range of purposes. This operation handles the permissions necessary to manage tags for the following GameLift resource types:   Build   Script   Fleet   Alias   GameSessionQueue   MatchmakingConfiguration   MatchmakingRuleSet   To list tags for a resource, specify the unique ARN value for the resource.  Learn more   Tagging AWS Resources in the AWS General Reference    AWS Tagging Strategies   Related operations     TagResource     UntagResource     ListTagsForResource   
   */
  listTagsForResource(params: GameLift.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: GameLift.Types.ListTagsForResourceResponse) => void): Request<GameLift.Types.ListTagsForResourceResponse, AWSError>;
  /**
   *  Retrieves all tags that are assigned to a GameLift resource. Resource tags are used to organize AWS resources for a range of purposes. This operation handles the permissions necessary to manage tags for the following GameLift resource types:   Build   Script   Fleet   Alias   GameSessionQueue   MatchmakingConfiguration   MatchmakingRuleSet   To list tags for a resource, specify the unique ARN value for the resource.  Learn more   Tagging AWS Resources in the AWS General Reference    AWS Tagging Strategies   Related operations     TagResource     UntagResource     ListTagsForResource   
   */
  listTagsForResource(callback?: (err: AWSError, data: GameLift.Types.ListTagsForResourceResponse) => void): Request<GameLift.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Creates or updates a scaling policy for a fleet. Scaling policies are used to automatically scale a fleet's hosting capacity to meet player demand. An active scaling policy instructs Amazon GameLift to track a fleet metric and automatically change the fleet's capacity when a certain threshold is reached. There are two types of scaling policies: target-based and rule-based. Use a target-based policy to quickly and efficiently manage fleet scaling; this option is the most commonly used. Use rule-based policies when you need to exert fine-grained control over auto-scaling.  Fleets can have multiple scaling policies of each type in force at the same time; you can have one target-based policy, one or multiple rule-based scaling policies, or both. We recommend caution, however, because multiple auto-scaling policies can have unintended consequences. You can temporarily suspend all scaling policies for a fleet by calling StopFleetActions with the fleet action AUTO_SCALING. To resume scaling policies, call StartFleetActions with the same fleet action. To stop just one scaling policy--or to permanently remove it, you must delete the policy with DeleteScalingPolicy. Learn more about how to work with auto-scaling in Set Up Fleet Automatic Scaling.  Target-based policy  A target-based policy tracks a single metric: PercentAvailableGameSessions. This metric tells us how much of a fleet's hosting capacity is ready to host game sessions but is not currently in use. This is the fleet's buffer; it measures the additional player demand that the fleet could handle at current capacity. With a target-based policy, you set your ideal buffer size and leave it to Amazon GameLift to take whatever action is needed to maintain that target.  For example, you might choose to maintain a 10% buffer for a fleet that has the capacity to host 100 simultaneous game sessions. This policy tells Amazon GameLift to take action whenever the fleet's available capacity falls below or rises above 10 game sessions. Amazon GameLift will start new instances or stop unused instances in order to return to the 10% buffer.  To create or update a target-based policy, specify a fleet ID and name, and set the policy type to "TargetBased". Specify the metric to track (PercentAvailableGameSessions) and reference a TargetConfiguration object with your desired buffer value. Exclude all other parameters. On a successful request, the policy name is returned. The scaling policy is automatically in force as soon as it's successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.  Rule-based policy  A rule-based policy tracks specified fleet metric, sets a threshold value, and specifies the type of action to initiate when triggered. With a rule-based policy, you can select from several available fleet metrics. Each policy specifies whether to scale up or scale down (and by how much), so you need one policy for each type of action.  For example, a policy may make the following statement: "If the percentage of idle instances is greater than 20% for more than 15 minutes, then reduce the fleet capacity by 10%." A policy's rule statement has the following structure: If [MetricName] is [ComparisonOperator] [Threshold] for [EvaluationPeriods] minutes, then [ScalingAdjustmentType] to/by [ScalingAdjustment]. To implement the example, the rule statement would look like this: If [PercentIdleInstances] is [GreaterThanThreshold] [20] for [15] minutes, then [PercentChangeInCapacity] to/by [10]. To create or update a scaling policy, specify a unique combination of name and fleet ID, and set the policy type to "RuleBased". Specify the parameter values for a policy rule statement. On a successful request, the policy name is returned. Scaling policies are automatically in force as soon as they're successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.    DescribeFleetCapacity     UpdateFleetCapacity     DescribeEC2InstanceLimits    Manage scaling policies:    PutScalingPolicy (auto-scaling)    DescribeScalingPolicies (auto-scaling)    DeleteScalingPolicy (auto-scaling)     Manage fleet actions:    StartFleetActions     StopFleetActions     
   */
  putScalingPolicy(params: GameLift.Types.PutScalingPolicyInput, callback?: (err: AWSError, data: GameLift.Types.PutScalingPolicyOutput) => void): Request<GameLift.Types.PutScalingPolicyOutput, AWSError>;
  /**
   * Creates or updates a scaling policy for a fleet. Scaling policies are used to automatically scale a fleet's hosting capacity to meet player demand. An active scaling policy instructs Amazon GameLift to track a fleet metric and automatically change the fleet's capacity when a certain threshold is reached. There are two types of scaling policies: target-based and rule-based. Use a target-based policy to quickly and efficiently manage fleet scaling; this option is the most commonly used. Use rule-based policies when you need to exert fine-grained control over auto-scaling.  Fleets can have multiple scaling policies of each type in force at the same time; you can have one target-based policy, one or multiple rule-based scaling policies, or both. We recommend caution, however, because multiple auto-scaling policies can have unintended consequences. You can temporarily suspend all scaling policies for a fleet by calling StopFleetActions with the fleet action AUTO_SCALING. To resume scaling policies, call StartFleetActions with the same fleet action. To stop just one scaling policy--or to permanently remove it, you must delete the policy with DeleteScalingPolicy. Learn more about how to work with auto-scaling in Set Up Fleet Automatic Scaling.  Target-based policy  A target-based policy tracks a single metric: PercentAvailableGameSessions. This metric tells us how much of a fleet's hosting capacity is ready to host game sessions but is not currently in use. This is the fleet's buffer; it measures the additional player demand that the fleet could handle at current capacity. With a target-based policy, you set your ideal buffer size and leave it to Amazon GameLift to take whatever action is needed to maintain that target.  For example, you might choose to maintain a 10% buffer for a fleet that has the capacity to host 100 simultaneous game sessions. This policy tells Amazon GameLift to take action whenever the fleet's available capacity falls below or rises above 10 game sessions. Amazon GameLift will start new instances or stop unused instances in order to return to the 10% buffer.  To create or update a target-based policy, specify a fleet ID and name, and set the policy type to "TargetBased". Specify the metric to track (PercentAvailableGameSessions) and reference a TargetConfiguration object with your desired buffer value. Exclude all other parameters. On a successful request, the policy name is returned. The scaling policy is automatically in force as soon as it's successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.  Rule-based policy  A rule-based policy tracks specified fleet metric, sets a threshold value, and specifies the type of action to initiate when triggered. With a rule-based policy, you can select from several available fleet metrics. Each policy specifies whether to scale up or scale down (and by how much), so you need one policy for each type of action.  For example, a policy may make the following statement: "If the percentage of idle instances is greater than 20% for more than 15 minutes, then reduce the fleet capacity by 10%." A policy's rule statement has the following structure: If [MetricName] is [ComparisonOperator] [Threshold] for [EvaluationPeriods] minutes, then [ScalingAdjustmentType] to/by [ScalingAdjustment]. To implement the example, the rule statement would look like this: If [PercentIdleInstances] is [GreaterThanThreshold] [20] for [15] minutes, then [PercentChangeInCapacity] to/by [10]. To create or update a scaling policy, specify a unique combination of name and fleet ID, and set the policy type to "RuleBased". Specify the parameter values for a policy rule statement. On a successful request, the policy name is returned. Scaling policies are automatically in force as soon as they're successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.    DescribeFleetCapacity     UpdateFleetCapacity     DescribeEC2InstanceLimits    Manage scaling policies:    PutScalingPolicy (auto-scaling)    DescribeScalingPolicies (auto-scaling)    DeleteScalingPolicy (auto-scaling)     Manage fleet actions:    StartFleetActions     StopFleetActions     
   */
  putScalingPolicy(callback?: (err: AWSError, data: GameLift.Types.PutScalingPolicyOutput) => void): Request<GameLift.Types.PutScalingPolicyOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Creates a new game server resource and notifies GameLift FleetIQ that the game server is ready to host gameplay and players. This operation is called by a game server process that is running on an instance in a game server group. Registering game servers enables GameLift FleetIQ to track available game servers and enables game clients and services to claim a game server for a new game session.  To register a game server, identify the game server group and instance where the game server is running, and provide a unique identifier for the game server. You can also include connection and game server data. When a game client or service requests a game server by calling ClaimGameServer, this information is returned in the response. Once a game server is successfully registered, it is put in status AVAILABLE. A request to register a game server may fail if the instance it is running on is in the process of shutting down as part of instance balancing or scale-down activity.   Learn more   GameLift FleetIQ Guide   Related operations     RegisterGameServer     ListGameServers     ClaimGameServer     DescribeGameServer     UpdateGameServer     DeregisterGameServer   
   */
  registerGameServer(params: GameLift.Types.RegisterGameServerInput, callback?: (err: AWSError, data: GameLift.Types.RegisterGameServerOutput) => void): Request<GameLift.Types.RegisterGameServerOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Creates a new game server resource and notifies GameLift FleetIQ that the game server is ready to host gameplay and players. This operation is called by a game server process that is running on an instance in a game server group. Registering game servers enables GameLift FleetIQ to track available game servers and enables game clients and services to claim a game server for a new game session.  To register a game server, identify the game server group and instance where the game server is running, and provide a unique identifier for the game server. You can also include connection and game server data. When a game client or service requests a game server by calling ClaimGameServer, this information is returned in the response. Once a game server is successfully registered, it is put in status AVAILABLE. A request to register a game server may fail if the instance it is running on is in the process of shutting down as part of instance balancing or scale-down activity.   Learn more   GameLift FleetIQ Guide   Related operations     RegisterGameServer     ListGameServers     ClaimGameServer     DescribeGameServer     UpdateGameServer     DeregisterGameServer   
   */
  registerGameServer(callback?: (err: AWSError, data: GameLift.Types.RegisterGameServerOutput) => void): Request<GameLift.Types.RegisterGameServerOutput, AWSError>;
  /**
   * Retrieves a fresh set of credentials for use when uploading a new set of game build files to Amazon GameLift's Amazon S3. This is done as part of the build creation process; see CreateBuild. To request new credentials, specify the build ID as returned with an initial CreateBuild request. If successful, a new set of credentials are returned, along with the S3 storage location associated with the build ID.  Learn more    Create a Build with Files in S3   Related operations     CreateBuild     ListBuilds     DescribeBuild     UpdateBuild     DeleteBuild   
   */
  requestUploadCredentials(params: GameLift.Types.RequestUploadCredentialsInput, callback?: (err: AWSError, data: GameLift.Types.RequestUploadCredentialsOutput) => void): Request<GameLift.Types.RequestUploadCredentialsOutput, AWSError>;
  /**
   * Retrieves a fresh set of credentials for use when uploading a new set of game build files to Amazon GameLift's Amazon S3. This is done as part of the build creation process; see CreateBuild. To request new credentials, specify the build ID as returned with an initial CreateBuild request. If successful, a new set of credentials are returned, along with the S3 storage location associated with the build ID.  Learn more    Create a Build with Files in S3   Related operations     CreateBuild     ListBuilds     DescribeBuild     UpdateBuild     DeleteBuild   
   */
  requestUploadCredentials(callback?: (err: AWSError, data: GameLift.Types.RequestUploadCredentialsOutput) => void): Request<GameLift.Types.RequestUploadCredentialsOutput, AWSError>;
  /**
   * Retrieves the fleet ID that an alias is currently pointing to.    CreateAlias     ListAliases     DescribeAlias     UpdateAlias     DeleteAlias     ResolveAlias   
   */
  resolveAlias(params: GameLift.Types.ResolveAliasInput, callback?: (err: AWSError, data: GameLift.Types.ResolveAliasOutput) => void): Request<GameLift.Types.ResolveAliasOutput, AWSError>;
  /**
   * Retrieves the fleet ID that an alias is currently pointing to.    CreateAlias     ListAliases     DescribeAlias     UpdateAlias     DeleteAlias     ResolveAlias   
   */
  resolveAlias(callback?: (err: AWSError, data: GameLift.Types.ResolveAliasOutput) => void): Request<GameLift.Types.ResolveAliasOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Reinstates activity on a game server group after it has been suspended. A game server group might be suspended by theSuspendGameServerGroup operation, or it might be suspended involuntarily due to a configuration problem. In the second case, you can manually resume activity on the group once the configuration problem has been resolved. Refer to the game server group status and status reason for more information on why group activity is suspended. To resume activity, specify a game server group ARN and the type of activity to be resumed. If successful, a GameServerGroup object is returned showing that the resumed activity is no longer listed in SuspendedActions.   Learn more   GameLift FleetIQ Guide   Related operations     CreateGameServerGroup     ListGameServerGroups     DescribeGameServerGroup     UpdateGameServerGroup     DeleteGameServerGroup     ResumeGameServerGroup     SuspendGameServerGroup     DescribeGameServerInstances   
   */
  resumeGameServerGroup(params: GameLift.Types.ResumeGameServerGroupInput, callback?: (err: AWSError, data: GameLift.Types.ResumeGameServerGroupOutput) => void): Request<GameLift.Types.ResumeGameServerGroupOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Reinstates activity on a game server group after it has been suspended. A game server group might be suspended by theSuspendGameServerGroup operation, or it might be suspended involuntarily due to a configuration problem. In the second case, you can manually resume activity on the group once the configuration problem has been resolved. Refer to the game server group status and status reason for more information on why group activity is suspended. To resume activity, specify a game server group ARN and the type of activity to be resumed. If successful, a GameServerGroup object is returned showing that the resumed activity is no longer listed in SuspendedActions.   Learn more   GameLift FleetIQ Guide   Related operations     CreateGameServerGroup     ListGameServerGroups     DescribeGameServerGroup     UpdateGameServerGroup     DeleteGameServerGroup     ResumeGameServerGroup     SuspendGameServerGroup     DescribeGameServerInstances   
   */
  resumeGameServerGroup(callback?: (err: AWSError, data: GameLift.Types.ResumeGameServerGroupOutput) => void): Request<GameLift.Types.ResumeGameServerGroupOutput, AWSError>;
  /**
   * Retrieves all active game sessions that match a set of search criteria and sorts them in a specified order. You can search or sort by the following game session attributes:    gameSessionId -- A unique identifier for the game session. You can use either a GameSessionId or GameSessionArn value.     gameSessionName -- Name assigned to a game session. This value is set when requesting a new game session with CreateGameSession or updating with UpdateGameSession. Game session names do not need to be unique to a game session.    gameSessionProperties -- Custom data defined in a game session's GameProperty parameter. GameProperty values are stored as key:value pairs; the filter expression must indicate the key and a string to search the data values for. For example, to search for game sessions with custom data containing the key:value pair "gameMode:brawl", specify the following: gameSessionProperties.gameMode = "brawl". All custom data values are searched as strings.    maximumSessions -- Maximum number of player sessions allowed for a game session. This value is set when requesting a new game session with CreateGameSession or updating with UpdateGameSession.    creationTimeMillis -- Value indicating when a game session was created. It is expressed in Unix time as milliseconds.    playerSessionCount -- Number of players currently connected to a game session. This value changes rapidly as players join the session or drop out.    hasAvailablePlayerSessions -- Boolean value indicating whether a game session has reached its maximum number of players. It is highly recommended that all search requests include this filter attribute to optimize search performance and return only sessions that players can join.     Returned values for playerSessionCount and hasAvailablePlayerSessions change quickly as players join sessions and others drop out. Results should be considered a snapshot in time. Be sure to refresh search results often, and handle sessions that fill up before a player can join.   To search or sort, specify either a fleet ID or an alias ID, and provide a search filter expression, a sort expression, or both. If successful, a collection of GameSession objects matching the request is returned. Use the pagination parameters to retrieve results as a set of sequential pages.  You can search for game sessions one fleet at a time only. To find game sessions across multiple fleets, you must search each fleet separately and combine the results. This search feature finds only game sessions that are in ACTIVE status. To locate games in statuses other than active, use DescribeGameSessionDetails.    CreateGameSession     DescribeGameSessions     DescribeGameSessionDetails     SearchGameSessions     UpdateGameSession     GetGameSessionLogUrl    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  searchGameSessions(params: GameLift.Types.SearchGameSessionsInput, callback?: (err: AWSError, data: GameLift.Types.SearchGameSessionsOutput) => void): Request<GameLift.Types.SearchGameSessionsOutput, AWSError>;
  /**
   * Retrieves all active game sessions that match a set of search criteria and sorts them in a specified order. You can search or sort by the following game session attributes:    gameSessionId -- A unique identifier for the game session. You can use either a GameSessionId or GameSessionArn value.     gameSessionName -- Name assigned to a game session. This value is set when requesting a new game session with CreateGameSession or updating with UpdateGameSession. Game session names do not need to be unique to a game session.    gameSessionProperties -- Custom data defined in a game session's GameProperty parameter. GameProperty values are stored as key:value pairs; the filter expression must indicate the key and a string to search the data values for. For example, to search for game sessions with custom data containing the key:value pair "gameMode:brawl", specify the following: gameSessionProperties.gameMode = "brawl". All custom data values are searched as strings.    maximumSessions -- Maximum number of player sessions allowed for a game session. This value is set when requesting a new game session with CreateGameSession or updating with UpdateGameSession.    creationTimeMillis -- Value indicating when a game session was created. It is expressed in Unix time as milliseconds.    playerSessionCount -- Number of players currently connected to a game session. This value changes rapidly as players join the session or drop out.    hasAvailablePlayerSessions -- Boolean value indicating whether a game session has reached its maximum number of players. It is highly recommended that all search requests include this filter attribute to optimize search performance and return only sessions that players can join.     Returned values for playerSessionCount and hasAvailablePlayerSessions change quickly as players join sessions and others drop out. Results should be considered a snapshot in time. Be sure to refresh search results often, and handle sessions that fill up before a player can join.   To search or sort, specify either a fleet ID or an alias ID, and provide a search filter expression, a sort expression, or both. If successful, a collection of GameSession objects matching the request is returned. Use the pagination parameters to retrieve results as a set of sequential pages.  You can search for game sessions one fleet at a time only. To find game sessions across multiple fleets, you must search each fleet separately and combine the results. This search feature finds only game sessions that are in ACTIVE status. To locate games in statuses other than active, use DescribeGameSessionDetails.    CreateGameSession     DescribeGameSessions     DescribeGameSessionDetails     SearchGameSessions     UpdateGameSession     GetGameSessionLogUrl    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  searchGameSessions(callback?: (err: AWSError, data: GameLift.Types.SearchGameSessionsOutput) => void): Request<GameLift.Types.SearchGameSessionsOutput, AWSError>;
  /**
   * Resumes activity on a fleet that was suspended with StopFleetActions. Currently, this operation is used to restart a fleet's auto-scaling activity.  To start fleet actions, specify the fleet ID and the type of actions to restart. When auto-scaling fleet actions are restarted, Amazon GameLift once again initiates scaling events as triggered by the fleet's scaling policies. If actions on the fleet were never stopped, this operation will have no effect. You can view a fleet's stopped actions using DescribeFleetAttributes.  Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet     DescribeFleetAttributes     UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  startFleetActions(params: GameLift.Types.StartFleetActionsInput, callback?: (err: AWSError, data: GameLift.Types.StartFleetActionsOutput) => void): Request<GameLift.Types.StartFleetActionsOutput, AWSError>;
  /**
   * Resumes activity on a fleet that was suspended with StopFleetActions. Currently, this operation is used to restart a fleet's auto-scaling activity.  To start fleet actions, specify the fleet ID and the type of actions to restart. When auto-scaling fleet actions are restarted, Amazon GameLift once again initiates scaling events as triggered by the fleet's scaling policies. If actions on the fleet were never stopped, this operation will have no effect. You can view a fleet's stopped actions using DescribeFleetAttributes.  Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet     DescribeFleetAttributes     UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  startFleetActions(callback?: (err: AWSError, data: GameLift.Types.StartFleetActionsOutput) => void): Request<GameLift.Types.StartFleetActionsOutput, AWSError>;
  /**
   * Places a request for a new game session in a queue (see CreateGameSessionQueue). When processing a placement request, Amazon GameLift searches for available resources on the queue's destinations, scanning each until it finds resources or the placement request times out. A game session placement request can also request player sessions. When a new game session is successfully created, Amazon GameLift creates a player session for each player included in the request. When placing a game session, by default Amazon GameLift tries each fleet in the order they are listed in the queue configuration. Ideally, a queue's destinations are listed in preference order. Alternatively, when requesting a game session with players, you can also provide latency data for each player in relevant Regions. Latency data indicates the performance lag a player experiences when connected to a fleet in the Region. Amazon GameLift uses latency data to reorder the list of destinations to place the game session in a Region with minimal lag. If latency data is provided for multiple players, Amazon GameLift calculates each Region's average lag for all players and reorders to get the best game play across all players.  To place a new game session request, specify the following:   The queue name and a set of game session properties and settings   A unique ID (such as a UUID) for the placement. You use this ID to track the status of the placement request   (Optional) A set of player data and a unique player ID for each player that you are joining to the new game session (player data is optional, but if you include it, you must also provide a unique ID for each player)   Latency data for all players (if you want to optimize game play for the players)   If successful, a new game session placement is created. To track the status of a placement request, call DescribeGameSessionPlacement and check the request's status. If the status is FULFILLED, a new game session has been created and a game session ARN and Region are referenced. If the placement request times out, you can resubmit the request or retry it with a different queue.     CreateGameSession     DescribeGameSessions     DescribeGameSessionDetails     SearchGameSessions     UpdateGameSession     GetGameSessionLogUrl    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  startGameSessionPlacement(params: GameLift.Types.StartGameSessionPlacementInput, callback?: (err: AWSError, data: GameLift.Types.StartGameSessionPlacementOutput) => void): Request<GameLift.Types.StartGameSessionPlacementOutput, AWSError>;
  /**
   * Places a request for a new game session in a queue (see CreateGameSessionQueue). When processing a placement request, Amazon GameLift searches for available resources on the queue's destinations, scanning each until it finds resources or the placement request times out. A game session placement request can also request player sessions. When a new game session is successfully created, Amazon GameLift creates a player session for each player included in the request. When placing a game session, by default Amazon GameLift tries each fleet in the order they are listed in the queue configuration. Ideally, a queue's destinations are listed in preference order. Alternatively, when requesting a game session with players, you can also provide latency data for each player in relevant Regions. Latency data indicates the performance lag a player experiences when connected to a fleet in the Region. Amazon GameLift uses latency data to reorder the list of destinations to place the game session in a Region with minimal lag. If latency data is provided for multiple players, Amazon GameLift calculates each Region's average lag for all players and reorders to get the best game play across all players.  To place a new game session request, specify the following:   The queue name and a set of game session properties and settings   A unique ID (such as a UUID) for the placement. You use this ID to track the status of the placement request   (Optional) A set of player data and a unique player ID for each player that you are joining to the new game session (player data is optional, but if you include it, you must also provide a unique ID for each player)   Latency data for all players (if you want to optimize game play for the players)   If successful, a new game session placement is created. To track the status of a placement request, call DescribeGameSessionPlacement and check the request's status. If the status is FULFILLED, a new game session has been created and a game session ARN and Region are referenced. If the placement request times out, you can resubmit the request or retry it with a different queue.     CreateGameSession     DescribeGameSessions     DescribeGameSessionDetails     SearchGameSessions     UpdateGameSession     GetGameSessionLogUrl    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  startGameSessionPlacement(callback?: (err: AWSError, data: GameLift.Types.StartGameSessionPlacementOutput) => void): Request<GameLift.Types.StartGameSessionPlacementOutput, AWSError>;
  /**
   * Finds new players to fill open slots in an existing game session. This operation can be used to add players to matched games that start with fewer than the maximum number of players or to replace players when they drop out. By backfilling with the same matchmaker used to create the original match, you ensure that new players meet the match criteria and maintain a consistent experience throughout the game session. You can backfill a match anytime after a game session has been created.  To request a match backfill, specify a unique ticket ID, the existing game session's ARN, a matchmaking configuration, and a set of data that describes all current players in the game session. If successful, a match backfill ticket is created and returned with status set to QUEUED. The ticket is placed in the matchmaker's ticket pool and processed. Track the status of the ticket to respond as needed.  The process of finding backfill matches is essentially identical to the initial matchmaking process. The matchmaker searches the pool and groups tickets together to form potential matches, allowing only one backfill ticket per potential match. Once the a match is formed, the matchmaker creates player sessions for the new players. All tickets in the match are updated with the game session's connection information, and the GameSession object is updated to include matchmaker data on the new players. For more detail on how match backfill requests are processed, see  How Amazon GameLift FlexMatch Works.   Learn more    Backfill Existing Games with FlexMatch    How GameLift FlexMatch Works   Related operations     StartMatchmaking     DescribeMatchmaking     StopMatchmaking     AcceptMatch     StartMatchBackfill   
   */
  startMatchBackfill(params: GameLift.Types.StartMatchBackfillInput, callback?: (err: AWSError, data: GameLift.Types.StartMatchBackfillOutput) => void): Request<GameLift.Types.StartMatchBackfillOutput, AWSError>;
  /**
   * Finds new players to fill open slots in an existing game session. This operation can be used to add players to matched games that start with fewer than the maximum number of players or to replace players when they drop out. By backfilling with the same matchmaker used to create the original match, you ensure that new players meet the match criteria and maintain a consistent experience throughout the game session. You can backfill a match anytime after a game session has been created.  To request a match backfill, specify a unique ticket ID, the existing game session's ARN, a matchmaking configuration, and a set of data that describes all current players in the game session. If successful, a match backfill ticket is created and returned with status set to QUEUED. The ticket is placed in the matchmaker's ticket pool and processed. Track the status of the ticket to respond as needed.  The process of finding backfill matches is essentially identical to the initial matchmaking process. The matchmaker searches the pool and groups tickets together to form potential matches, allowing only one backfill ticket per potential match. Once the a match is formed, the matchmaker creates player sessions for the new players. All tickets in the match are updated with the game session's connection information, and the GameSession object is updated to include matchmaker data on the new players. For more detail on how match backfill requests are processed, see  How Amazon GameLift FlexMatch Works.   Learn more    Backfill Existing Games with FlexMatch    How GameLift FlexMatch Works   Related operations     StartMatchmaking     DescribeMatchmaking     StopMatchmaking     AcceptMatch     StartMatchBackfill   
   */
  startMatchBackfill(callback?: (err: AWSError, data: GameLift.Types.StartMatchBackfillOutput) => void): Request<GameLift.Types.StartMatchBackfillOutput, AWSError>;
  /**
   * Uses FlexMatch to create a game match for a group of players based on custom matchmaking rules, and starts a new game for the matched players. Each matchmaking request specifies the type of match to build (team configuration, rules for an acceptable match, etc.). The request also specifies the players to find a match for and where to host the new game session for optimal performance. A matchmaking request might start with a single player or a group of players who want to play together. FlexMatch finds additional players as needed to fill the match. Match type, rules, and the queue used to place a new game session are defined in a MatchmakingConfiguration.  To start matchmaking, provide a unique ticket ID, specify a matchmaking configuration, and include the players to be matched. You must also include a set of player attributes relevant for the matchmaking configuration. If successful, a matchmaking ticket is returned with status set to QUEUED.  Track the status of the ticket to respond as needed and acquire game session connection information for successfully completed matches. Ticket status updates are tracked using event notification through Amazon Simple Notification Service (SNS), which is defined in the matchmaking configuration.  Processing a matchmaking request -- FlexMatch handles a matchmaking request as follows:    Your client code submits a StartMatchmaking request for one or more players and tracks the status of the request ticket.    FlexMatch uses this ticket and others in process to build an acceptable match. When a potential match is identified, all tickets in the proposed match are advanced to the next status.    If the match requires player acceptance (set in the matchmaking configuration), the tickets move into status REQUIRES_ACCEPTANCE. This status triggers your client code to solicit acceptance from all players in every ticket involved in the match, and then call AcceptMatch for each player. If any player rejects or fails to accept the match before a specified timeout, the proposed match is dropped (see AcceptMatch for more details).   Once a match is proposed and accepted, the matchmaking tickets move into status PLACING. FlexMatch locates resources for a new game session using the game session queue (set in the matchmaking configuration) and creates the game session based on the match data.    When the match is successfully placed, the matchmaking tickets move into COMPLETED status. Connection information (including game session endpoint and player session) is added to the matchmaking tickets. Matched players can use the connection information to join the game.     Learn more    Add FlexMatch to a Game Client    Set Up FlexMatch Event Notification    FlexMatch Integration Roadmap    How GameLift FlexMatch Works   Related operations     StartMatchmaking     DescribeMatchmaking     StopMatchmaking     AcceptMatch     StartMatchBackfill   
   */
  startMatchmaking(params: GameLift.Types.StartMatchmakingInput, callback?: (err: AWSError, data: GameLift.Types.StartMatchmakingOutput) => void): Request<GameLift.Types.StartMatchmakingOutput, AWSError>;
  /**
   * Uses FlexMatch to create a game match for a group of players based on custom matchmaking rules, and starts a new game for the matched players. Each matchmaking request specifies the type of match to build (team configuration, rules for an acceptable match, etc.). The request also specifies the players to find a match for and where to host the new game session for optimal performance. A matchmaking request might start with a single player or a group of players who want to play together. FlexMatch finds additional players as needed to fill the match. Match type, rules, and the queue used to place a new game session are defined in a MatchmakingConfiguration.  To start matchmaking, provide a unique ticket ID, specify a matchmaking configuration, and include the players to be matched. You must also include a set of player attributes relevant for the matchmaking configuration. If successful, a matchmaking ticket is returned with status set to QUEUED.  Track the status of the ticket to respond as needed and acquire game session connection information for successfully completed matches. Ticket status updates are tracked using event notification through Amazon Simple Notification Service (SNS), which is defined in the matchmaking configuration.  Processing a matchmaking request -- FlexMatch handles a matchmaking request as follows:    Your client code submits a StartMatchmaking request for one or more players and tracks the status of the request ticket.    FlexMatch uses this ticket and others in process to build an acceptable match. When a potential match is identified, all tickets in the proposed match are advanced to the next status.    If the match requires player acceptance (set in the matchmaking configuration), the tickets move into status REQUIRES_ACCEPTANCE. This status triggers your client code to solicit acceptance from all players in every ticket involved in the match, and then call AcceptMatch for each player. If any player rejects or fails to accept the match before a specified timeout, the proposed match is dropped (see AcceptMatch for more details).   Once a match is proposed and accepted, the matchmaking tickets move into status PLACING. FlexMatch locates resources for a new game session using the game session queue (set in the matchmaking configuration) and creates the game session based on the match data.    When the match is successfully placed, the matchmaking tickets move into COMPLETED status. Connection information (including game session endpoint and player session) is added to the matchmaking tickets. Matched players can use the connection information to join the game.     Learn more    Add FlexMatch to a Game Client    Set Up FlexMatch Event Notification    FlexMatch Integration Roadmap    How GameLift FlexMatch Works   Related operations     StartMatchmaking     DescribeMatchmaking     StopMatchmaking     AcceptMatch     StartMatchBackfill   
   */
  startMatchmaking(callback?: (err: AWSError, data: GameLift.Types.StartMatchmakingOutput) => void): Request<GameLift.Types.StartMatchmakingOutput, AWSError>;
  /**
   * Suspends activity on a fleet. Currently, this operation is used to stop a fleet's auto-scaling activity. It is used to temporarily stop triggering scaling events. The policies can be retained and auto-scaling activity can be restarted using StartFleetActions. You can view a fleet's stopped actions using DescribeFleetAttributes. To stop fleet actions, specify the fleet ID and the type of actions to suspend. When auto-scaling fleet actions are stopped, Amazon GameLift no longer initiates scaling events except in response to manual changes using UpdateFleetCapacity.   Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet     DescribeFleetAttributes     UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  stopFleetActions(params: GameLift.Types.StopFleetActionsInput, callback?: (err: AWSError, data: GameLift.Types.StopFleetActionsOutput) => void): Request<GameLift.Types.StopFleetActionsOutput, AWSError>;
  /**
   * Suspends activity on a fleet. Currently, this operation is used to stop a fleet's auto-scaling activity. It is used to temporarily stop triggering scaling events. The policies can be retained and auto-scaling activity can be restarted using StartFleetActions. You can view a fleet's stopped actions using DescribeFleetAttributes. To stop fleet actions, specify the fleet ID and the type of actions to suspend. When auto-scaling fleet actions are stopped, Amazon GameLift no longer initiates scaling events except in response to manual changes using UpdateFleetCapacity.   Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet     DescribeFleetAttributes     UpdateFleetAttributes     StartFleetActions or StopFleetActions   
   */
  stopFleetActions(callback?: (err: AWSError, data: GameLift.Types.StopFleetActionsOutput) => void): Request<GameLift.Types.StopFleetActionsOutput, AWSError>;
  /**
   * Cancels a game session placement that is in PENDING status. To stop a placement, provide the placement ID values. If successful, the placement is moved to CANCELLED status.    CreateGameSession     DescribeGameSessions     DescribeGameSessionDetails     SearchGameSessions     UpdateGameSession     GetGameSessionLogUrl    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  stopGameSessionPlacement(params: GameLift.Types.StopGameSessionPlacementInput, callback?: (err: AWSError, data: GameLift.Types.StopGameSessionPlacementOutput) => void): Request<GameLift.Types.StopGameSessionPlacementOutput, AWSError>;
  /**
   * Cancels a game session placement that is in PENDING status. To stop a placement, provide the placement ID values. If successful, the placement is moved to CANCELLED status.    CreateGameSession     DescribeGameSessions     DescribeGameSessionDetails     SearchGameSessions     UpdateGameSession     GetGameSessionLogUrl    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  stopGameSessionPlacement(callback?: (err: AWSError, data: GameLift.Types.StopGameSessionPlacementOutput) => void): Request<GameLift.Types.StopGameSessionPlacementOutput, AWSError>;
  /**
   * Cancels a matchmaking ticket or match backfill ticket that is currently being processed. To stop the matchmaking operation, specify the ticket ID. If successful, work on the ticket is stopped, and the ticket status is changed to CANCELLED. This call is also used to turn off automatic backfill for an individual game session. This is for game sessions that are created with a matchmaking configuration that has automatic backfill enabled. The ticket ID is included in the MatchmakerData of an updated game session object, which is provided to the game server.  If the operation is successful, the service sends back an empty JSON struct with the HTTP 200 response (not an empty HTTP body).   Learn more    Add FlexMatch to a Game Client   Related operations     StartMatchmaking     DescribeMatchmaking     StopMatchmaking     AcceptMatch     StartMatchBackfill   
   */
  stopMatchmaking(params: GameLift.Types.StopMatchmakingInput, callback?: (err: AWSError, data: GameLift.Types.StopMatchmakingOutput) => void): Request<GameLift.Types.StopMatchmakingOutput, AWSError>;
  /**
   * Cancels a matchmaking ticket or match backfill ticket that is currently being processed. To stop the matchmaking operation, specify the ticket ID. If successful, work on the ticket is stopped, and the ticket status is changed to CANCELLED. This call is also used to turn off automatic backfill for an individual game session. This is for game sessions that are created with a matchmaking configuration that has automatic backfill enabled. The ticket ID is included in the MatchmakerData of an updated game session object, which is provided to the game server.  If the operation is successful, the service sends back an empty JSON struct with the HTTP 200 response (not an empty HTTP body).   Learn more    Add FlexMatch to a Game Client   Related operations     StartMatchmaking     DescribeMatchmaking     StopMatchmaking     AcceptMatch     StartMatchBackfill   
   */
  stopMatchmaking(callback?: (err: AWSError, data: GameLift.Types.StopMatchmakingOutput) => void): Request<GameLift.Types.StopMatchmakingOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Temporarily stops activity on a game server group without terminating instances or the game server group. You can restart activity by calling ResumeGameServerGroup. You can suspend the following activity:    Instance type replacement - This activity evaluates the current game hosting viability of all Spot instance types that are defined for the game server group. It updates the Auto Scaling group to remove nonviable Spot Instance types, which have a higher chance of game server interruptions. It then balances capacity across the remaining viable Spot Instance types. When this activity is suspended, the Auto Scaling group continues with its current balance, regardless of viability. Instance protection, utilization metrics, and capacity scaling activities continue to be active.    To suspend activity, specify a game server group ARN and the type of activity to be suspended. If successful, a GameServerGroup object is returned showing that the activity is listed in SuspendedActions.  Learn more   GameLift FleetIQ Guide   Related operations     CreateGameServerGroup     ListGameServerGroups     DescribeGameServerGroup     UpdateGameServerGroup     DeleteGameServerGroup     ResumeGameServerGroup     SuspendGameServerGroup     DescribeGameServerInstances   
   */
  suspendGameServerGroup(params: GameLift.Types.SuspendGameServerGroupInput, callback?: (err: AWSError, data: GameLift.Types.SuspendGameServerGroupOutput) => void): Request<GameLift.Types.SuspendGameServerGroupOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Temporarily stops activity on a game server group without terminating instances or the game server group. You can restart activity by calling ResumeGameServerGroup. You can suspend the following activity:    Instance type replacement - This activity evaluates the current game hosting viability of all Spot instance types that are defined for the game server group. It updates the Auto Scaling group to remove nonviable Spot Instance types, which have a higher chance of game server interruptions. It then balances capacity across the remaining viable Spot Instance types. When this activity is suspended, the Auto Scaling group continues with its current balance, regardless of viability. Instance protection, utilization metrics, and capacity scaling activities continue to be active.    To suspend activity, specify a game server group ARN and the type of activity to be suspended. If successful, a GameServerGroup object is returned showing that the activity is listed in SuspendedActions.  Learn more   GameLift FleetIQ Guide   Related operations     CreateGameServerGroup     ListGameServerGroups     DescribeGameServerGroup     UpdateGameServerGroup     DeleteGameServerGroup     ResumeGameServerGroup     SuspendGameServerGroup     DescribeGameServerInstances   
   */
  suspendGameServerGroup(callback?: (err: AWSError, data: GameLift.Types.SuspendGameServerGroupOutput) => void): Request<GameLift.Types.SuspendGameServerGroupOutput, AWSError>;
  /**
   *  Assigns a tag to a GameLift resource. AWS resource tags provide an additional management tool set. You can use tags to organize resources, create IAM permissions policies to manage access to groups of resources, customize AWS cost breakdowns, etc. This operation handles the permissions necessary to manage tags for the following GameLift resource types:   Build   Script   Fleet   Alias   GameSessionQueue   MatchmakingConfiguration   MatchmakingRuleSet   To add a tag to a resource, specify the unique ARN value for the resource and provide a tag list containing one or more tags. The operation succeeds even if the list includes tags that are already assigned to the specified resource.   Learn more   Tagging AWS Resources in the AWS General Reference    AWS Tagging Strategies   Related operations     TagResource     UntagResource     ListTagsForResource   
   */
  tagResource(params: GameLift.Types.TagResourceRequest, callback?: (err: AWSError, data: GameLift.Types.TagResourceResponse) => void): Request<GameLift.Types.TagResourceResponse, AWSError>;
  /**
   *  Assigns a tag to a GameLift resource. AWS resource tags provide an additional management tool set. You can use tags to organize resources, create IAM permissions policies to manage access to groups of resources, customize AWS cost breakdowns, etc. This operation handles the permissions necessary to manage tags for the following GameLift resource types:   Build   Script   Fleet   Alias   GameSessionQueue   MatchmakingConfiguration   MatchmakingRuleSet   To add a tag to a resource, specify the unique ARN value for the resource and provide a tag list containing one or more tags. The operation succeeds even if the list includes tags that are already assigned to the specified resource.   Learn more   Tagging AWS Resources in the AWS General Reference    AWS Tagging Strategies   Related operations     TagResource     UntagResource     ListTagsForResource   
   */
  tagResource(callback?: (err: AWSError, data: GameLift.Types.TagResourceResponse) => void): Request<GameLift.Types.TagResourceResponse, AWSError>;
  /**
   * Removes a tag that is assigned to a GameLift resource. Resource tags are used to organize AWS resources for a range of purposes. This operation handles the permissions necessary to manage tags for the following GameLift resource types:   Build   Script   Fleet   Alias   GameSessionQueue   MatchmakingConfiguration   MatchmakingRuleSet   To remove a tag from a resource, specify the unique ARN value for the resource and provide a string list containing one or more tags to be removed. This operation succeeds even if the list includes tags that are not currently assigned to the specified resource.  Learn more   Tagging AWS Resources in the AWS General Reference    AWS Tagging Strategies   Related operations     TagResource     UntagResource     ListTagsForResource   
   */
  untagResource(params: GameLift.Types.UntagResourceRequest, callback?: (err: AWSError, data: GameLift.Types.UntagResourceResponse) => void): Request<GameLift.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes a tag that is assigned to a GameLift resource. Resource tags are used to organize AWS resources for a range of purposes. This operation handles the permissions necessary to manage tags for the following GameLift resource types:   Build   Script   Fleet   Alias   GameSessionQueue   MatchmakingConfiguration   MatchmakingRuleSet   To remove a tag from a resource, specify the unique ARN value for the resource and provide a string list containing one or more tags to be removed. This operation succeeds even if the list includes tags that are not currently assigned to the specified resource.  Learn more   Tagging AWS Resources in the AWS General Reference    AWS Tagging Strategies   Related operations     TagResource     UntagResource     ListTagsForResource   
   */
  untagResource(callback?: (err: AWSError, data: GameLift.Types.UntagResourceResponse) => void): Request<GameLift.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates properties for an alias. To update properties, specify the alias ID to be updated and provide the information to be changed. To reassign an alias to another fleet, provide an updated routing strategy. If successful, the updated alias record is returned.    CreateAlias     ListAliases     DescribeAlias     UpdateAlias     DeleteAlias     ResolveAlias   
   */
  updateAlias(params: GameLift.Types.UpdateAliasInput, callback?: (err: AWSError, data: GameLift.Types.UpdateAliasOutput) => void): Request<GameLift.Types.UpdateAliasOutput, AWSError>;
  /**
   * Updates properties for an alias. To update properties, specify the alias ID to be updated and provide the information to be changed. To reassign an alias to another fleet, provide an updated routing strategy. If successful, the updated alias record is returned.    CreateAlias     ListAliases     DescribeAlias     UpdateAlias     DeleteAlias     ResolveAlias   
   */
  updateAlias(callback?: (err: AWSError, data: GameLift.Types.UpdateAliasOutput) => void): Request<GameLift.Types.UpdateAliasOutput, AWSError>;
  /**
   * Updates metadata in a build resource, including the build name and version. To update the metadata, specify the build ID to update and provide the new values. If successful, a build object containing the updated metadata is returned.  Learn more    Upload a Custom Server Build   Related operations     CreateBuild     ListBuilds     DescribeBuild     UpdateBuild     DeleteBuild   
   */
  updateBuild(params: GameLift.Types.UpdateBuildInput, callback?: (err: AWSError, data: GameLift.Types.UpdateBuildOutput) => void): Request<GameLift.Types.UpdateBuildOutput, AWSError>;
  /**
   * Updates metadata in a build resource, including the build name and version. To update the metadata, specify the build ID to update and provide the new values. If successful, a build object containing the updated metadata is returned.  Learn more    Upload a Custom Server Build   Related operations     CreateBuild     ListBuilds     DescribeBuild     UpdateBuild     DeleteBuild   
   */
  updateBuild(callback?: (err: AWSError, data: GameLift.Types.UpdateBuildOutput) => void): Request<GameLift.Types.UpdateBuildOutput, AWSError>;
  /**
   * Updates fleet properties, including name and description, for a fleet. To update metadata, specify the fleet ID and the property values that you want to change. If successful, the fleet ID for the updated fleet is returned.  Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet     DescribeFleetAttributes    Update fleets:    UpdateFleetAttributes     UpdateFleetCapacity     UpdateFleetPortSettings     UpdateRuntimeConfiguration       StartFleetActions or StopFleetActions   
   */
  updateFleetAttributes(params: GameLift.Types.UpdateFleetAttributesInput, callback?: (err: AWSError, data: GameLift.Types.UpdateFleetAttributesOutput) => void): Request<GameLift.Types.UpdateFleetAttributesOutput, AWSError>;
  /**
   * Updates fleet properties, including name and description, for a fleet. To update metadata, specify the fleet ID and the property values that you want to change. If successful, the fleet ID for the updated fleet is returned.  Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet     DescribeFleetAttributes    Update fleets:    UpdateFleetAttributes     UpdateFleetCapacity     UpdateFleetPortSettings     UpdateRuntimeConfiguration       StartFleetActions or StopFleetActions   
   */
  updateFleetAttributes(callback?: (err: AWSError, data: GameLift.Types.UpdateFleetAttributesOutput) => void): Request<GameLift.Types.UpdateFleetAttributesOutput, AWSError>;
  /**
   * Updates capacity settings for a fleet. Use this operation to specify the number of EC2 instances (hosts) that you want this fleet to contain. Before calling this operation, you may want to call DescribeEC2InstanceLimits to get the maximum capacity based on the fleet's EC2 instance type. Specify minimum and maximum number of instances. Amazon GameLift will not change fleet capacity to values fall outside of this range. This is particularly important when using auto-scaling (see PutScalingPolicy) to allow capacity to adjust based on player demand while imposing limits on automatic adjustments. To update fleet capacity, specify the fleet ID and the number of instances you want the fleet to host. If successful, Amazon GameLift starts or terminates instances so that the fleet's active instance count matches the desired instance count. You can view a fleet's current capacity information by calling DescribeFleetCapacity. If the desired instance count is higher than the instance type's limit, the "Limit Exceeded" exception occurs.  Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet     DescribeFleetAttributes    Update fleets:    UpdateFleetAttributes     UpdateFleetCapacity     UpdateFleetPortSettings     UpdateRuntimeConfiguration       StartFleetActions or StopFleetActions   
   */
  updateFleetCapacity(params: GameLift.Types.UpdateFleetCapacityInput, callback?: (err: AWSError, data: GameLift.Types.UpdateFleetCapacityOutput) => void): Request<GameLift.Types.UpdateFleetCapacityOutput, AWSError>;
  /**
   * Updates capacity settings for a fleet. Use this operation to specify the number of EC2 instances (hosts) that you want this fleet to contain. Before calling this operation, you may want to call DescribeEC2InstanceLimits to get the maximum capacity based on the fleet's EC2 instance type. Specify minimum and maximum number of instances. Amazon GameLift will not change fleet capacity to values fall outside of this range. This is particularly important when using auto-scaling (see PutScalingPolicy) to allow capacity to adjust based on player demand while imposing limits on automatic adjustments. To update fleet capacity, specify the fleet ID and the number of instances you want the fleet to host. If successful, Amazon GameLift starts or terminates instances so that the fleet's active instance count matches the desired instance count. You can view a fleet's current capacity information by calling DescribeFleetCapacity. If the desired instance count is higher than the instance type's limit, the "Limit Exceeded" exception occurs.  Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet     DescribeFleetAttributes    Update fleets:    UpdateFleetAttributes     UpdateFleetCapacity     UpdateFleetPortSettings     UpdateRuntimeConfiguration       StartFleetActions or StopFleetActions   
   */
  updateFleetCapacity(callback?: (err: AWSError, data: GameLift.Types.UpdateFleetCapacityOutput) => void): Request<GameLift.Types.UpdateFleetCapacityOutput, AWSError>;
  /**
   * Updates port settings for a fleet. To update settings, specify the fleet ID to be updated and list the permissions you want to update. List the permissions you want to add in InboundPermissionAuthorizations, and permissions you want to remove in InboundPermissionRevocations. Permissions to be removed must match existing fleet permissions. If successful, the fleet ID for the updated fleet is returned.  Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet     DescribeFleetAttributes    Update fleets:    UpdateFleetAttributes     UpdateFleetCapacity     UpdateFleetPortSettings     UpdateRuntimeConfiguration       StartFleetActions or StopFleetActions   
   */
  updateFleetPortSettings(params: GameLift.Types.UpdateFleetPortSettingsInput, callback?: (err: AWSError, data: GameLift.Types.UpdateFleetPortSettingsOutput) => void): Request<GameLift.Types.UpdateFleetPortSettingsOutput, AWSError>;
  /**
   * Updates port settings for a fleet. To update settings, specify the fleet ID to be updated and list the permissions you want to update. List the permissions you want to add in InboundPermissionAuthorizations, and permissions you want to remove in InboundPermissionRevocations. Permissions to be removed must match existing fleet permissions. If successful, the fleet ID for the updated fleet is returned.  Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet     DescribeFleetAttributes    Update fleets:    UpdateFleetAttributes     UpdateFleetCapacity     UpdateFleetPortSettings     UpdateRuntimeConfiguration       StartFleetActions or StopFleetActions   
   */
  updateFleetPortSettings(callback?: (err: AWSError, data: GameLift.Types.UpdateFleetPortSettingsOutput) => void): Request<GameLift.Types.UpdateFleetPortSettingsOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Updates information about a registered game server to help GameLift FleetIQ to track game server availability. This operation is called by a game server process that is running on an instance in a game server group.  Use this operation to update the following types of game server information. You can make all three types of updates in the same request:   To update the game server's utilization status, identify the game server and game server group and specify the current utilization status. Use this status to identify when game servers are currently hosting games and when they are available to be claimed.   To report health status, identify the game server and game server group and set health check to HEALTHY. If a game server does not report health status for a certain length of time, the game server is no longer considered healthy. As a result, it will be eventually deregistered from the game server group to avoid affecting utilization metrics. The best practice is to report health every 60 seconds.   To change game server metadata, provide updated game server data.   Once a game server is successfully updated, the relevant statuses and timestamps are updated.  Learn more   GameLift FleetIQ Guide   Related operations     RegisterGameServer     ListGameServers     ClaimGameServer     DescribeGameServer     UpdateGameServer     DeregisterGameServer   
   */
  updateGameServer(params: GameLift.Types.UpdateGameServerInput, callback?: (err: AWSError, data: GameLift.Types.UpdateGameServerOutput) => void): Request<GameLift.Types.UpdateGameServerOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Updates information about a registered game server to help GameLift FleetIQ to track game server availability. This operation is called by a game server process that is running on an instance in a game server group.  Use this operation to update the following types of game server information. You can make all three types of updates in the same request:   To update the game server's utilization status, identify the game server and game server group and specify the current utilization status. Use this status to identify when game servers are currently hosting games and when they are available to be claimed.   To report health status, identify the game server and game server group and set health check to HEALTHY. If a game server does not report health status for a certain length of time, the game server is no longer considered healthy. As a result, it will be eventually deregistered from the game server group to avoid affecting utilization metrics. The best practice is to report health every 60 seconds.   To change game server metadata, provide updated game server data.   Once a game server is successfully updated, the relevant statuses and timestamps are updated.  Learn more   GameLift FleetIQ Guide   Related operations     RegisterGameServer     ListGameServers     ClaimGameServer     DescribeGameServer     UpdateGameServer     DeregisterGameServer   
   */
  updateGameServer(callback?: (err: AWSError, data: GameLift.Types.UpdateGameServerOutput) => void): Request<GameLift.Types.UpdateGameServerOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Updates GameLift FleetIQ-specific properties for a game server group. Many Auto Scaling group properties are updated on the Auto Scaling group directly, including the launch template, Auto Scaling policies, and maximum/minimum/desired instance counts. To update the game server group, specify the game server group ID and provide the updated values. Before applying the updates, the new values are validated to ensure that GameLift FleetIQ can continue to perform instance balancing activity. If successful, a GameServerGroup object is returned.  Learn more   GameLift FleetIQ Guide   Related operations     CreateGameServerGroup     ListGameServerGroups     DescribeGameServerGroup     UpdateGameServerGroup     DeleteGameServerGroup     ResumeGameServerGroup     SuspendGameServerGroup     DescribeGameServerInstances   
   */
  updateGameServerGroup(params: GameLift.Types.UpdateGameServerGroupInput, callback?: (err: AWSError, data: GameLift.Types.UpdateGameServerGroupOutput) => void): Request<GameLift.Types.UpdateGameServerGroupOutput, AWSError>;
  /**
   *  This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Updates GameLift FleetIQ-specific properties for a game server group. Many Auto Scaling group properties are updated on the Auto Scaling group directly, including the launch template, Auto Scaling policies, and maximum/minimum/desired instance counts. To update the game server group, specify the game server group ID and provide the updated values. Before applying the updates, the new values are validated to ensure that GameLift FleetIQ can continue to perform instance balancing activity. If successful, a GameServerGroup object is returned.  Learn more   GameLift FleetIQ Guide   Related operations     CreateGameServerGroup     ListGameServerGroups     DescribeGameServerGroup     UpdateGameServerGroup     DeleteGameServerGroup     ResumeGameServerGroup     SuspendGameServerGroup     DescribeGameServerInstances   
   */
  updateGameServerGroup(callback?: (err: AWSError, data: GameLift.Types.UpdateGameServerGroupOutput) => void): Request<GameLift.Types.UpdateGameServerGroupOutput, AWSError>;
  /**
   * Updates game session properties. This includes the session name, maximum player count, protection policy, which controls whether or not an active game session can be terminated during a scale-down event, and the player session creation policy, which controls whether or not new players can join the session. To update a game session, specify the game session ID and the values you want to change. If successful, an updated GameSession object is returned.     CreateGameSession     DescribeGameSessions     DescribeGameSessionDetails     SearchGameSessions     UpdateGameSession     GetGameSessionLogUrl    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  updateGameSession(params: GameLift.Types.UpdateGameSessionInput, callback?: (err: AWSError, data: GameLift.Types.UpdateGameSessionOutput) => void): Request<GameLift.Types.UpdateGameSessionOutput, AWSError>;
  /**
   * Updates game session properties. This includes the session name, maximum player count, protection policy, which controls whether or not an active game session can be terminated during a scale-down event, and the player session creation policy, which controls whether or not new players can join the session. To update a game session, specify the game session ID and the values you want to change. If successful, an updated GameSession object is returned.     CreateGameSession     DescribeGameSessions     DescribeGameSessionDetails     SearchGameSessions     UpdateGameSession     GetGameSessionLogUrl    Game session placements    StartGameSessionPlacement     DescribeGameSessionPlacement     StopGameSessionPlacement     
   */
  updateGameSession(callback?: (err: AWSError, data: GameLift.Types.UpdateGameSessionOutput) => void): Request<GameLift.Types.UpdateGameSessionOutput, AWSError>;
  /**
   * Updates settings for a game session queue, which determines how new game session requests in the queue are processed. To update settings, specify the queue name to be updated and provide the new settings. When updating destinations, provide a complete list of destinations.   Learn more    Using Multi-Region Queues   Related operations     CreateGameSessionQueue     DescribeGameSessionQueues     UpdateGameSessionQueue     DeleteGameSessionQueue   
   */
  updateGameSessionQueue(params: GameLift.Types.UpdateGameSessionQueueInput, callback?: (err: AWSError, data: GameLift.Types.UpdateGameSessionQueueOutput) => void): Request<GameLift.Types.UpdateGameSessionQueueOutput, AWSError>;
  /**
   * Updates settings for a game session queue, which determines how new game session requests in the queue are processed. To update settings, specify the queue name to be updated and provide the new settings. When updating destinations, provide a complete list of destinations.   Learn more    Using Multi-Region Queues   Related operations     CreateGameSessionQueue     DescribeGameSessionQueues     UpdateGameSessionQueue     DeleteGameSessionQueue   
   */
  updateGameSessionQueue(callback?: (err: AWSError, data: GameLift.Types.UpdateGameSessionQueueOutput) => void): Request<GameLift.Types.UpdateGameSessionQueueOutput, AWSError>;
  /**
   * Updates settings for a FlexMatch matchmaking configuration. These changes affect all matches and game sessions that are created after the update. To update settings, specify the configuration name to be updated and provide the new settings.   Learn more    Design a FlexMatch Matchmaker   Related operations     CreateMatchmakingConfiguration     DescribeMatchmakingConfigurations     UpdateMatchmakingConfiguration     DeleteMatchmakingConfiguration     CreateMatchmakingRuleSet     DescribeMatchmakingRuleSets     ValidateMatchmakingRuleSet     DeleteMatchmakingRuleSet   
   */
  updateMatchmakingConfiguration(params: GameLift.Types.UpdateMatchmakingConfigurationInput, callback?: (err: AWSError, data: GameLift.Types.UpdateMatchmakingConfigurationOutput) => void): Request<GameLift.Types.UpdateMatchmakingConfigurationOutput, AWSError>;
  /**
   * Updates settings for a FlexMatch matchmaking configuration. These changes affect all matches and game sessions that are created after the update. To update settings, specify the configuration name to be updated and provide the new settings.   Learn more    Design a FlexMatch Matchmaker   Related operations     CreateMatchmakingConfiguration     DescribeMatchmakingConfigurations     UpdateMatchmakingConfiguration     DeleteMatchmakingConfiguration     CreateMatchmakingRuleSet     DescribeMatchmakingRuleSets     ValidateMatchmakingRuleSet     DeleteMatchmakingRuleSet   
   */
  updateMatchmakingConfiguration(callback?: (err: AWSError, data: GameLift.Types.UpdateMatchmakingConfigurationOutput) => void): Request<GameLift.Types.UpdateMatchmakingConfigurationOutput, AWSError>;
  /**
   * Updates the current runtime configuration for the specified fleet, which tells Amazon GameLift how to launch server processes on instances in the fleet. You can update a fleet's runtime configuration at any time after the fleet is created; it does not need to be in an ACTIVE status. To update runtime configuration, specify the fleet ID and provide a RuntimeConfiguration object with an updated set of server process configurations. Each instance in a Amazon GameLift fleet checks regularly for an updated runtime configuration and changes how it launches server processes to comply with the latest version. Existing server processes are not affected by the update; runtime configuration changes are applied gradually as existing processes shut down and new processes are launched during Amazon GameLift's normal process recycling activity.  Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet     DescribeFleetAttributes    Update fleets:    UpdateFleetAttributes     UpdateFleetCapacity     UpdateFleetPortSettings     UpdateRuntimeConfiguration       StartFleetActions or StopFleetActions   
   */
  updateRuntimeConfiguration(params: GameLift.Types.UpdateRuntimeConfigurationInput, callback?: (err: AWSError, data: GameLift.Types.UpdateRuntimeConfigurationOutput) => void): Request<GameLift.Types.UpdateRuntimeConfigurationOutput, AWSError>;
  /**
   * Updates the current runtime configuration for the specified fleet, which tells Amazon GameLift how to launch server processes on instances in the fleet. You can update a fleet's runtime configuration at any time after the fleet is created; it does not need to be in an ACTIVE status. To update runtime configuration, specify the fleet ID and provide a RuntimeConfiguration object with an updated set of server process configurations. Each instance in a Amazon GameLift fleet checks regularly for an updated runtime configuration and changes how it launches server processes to comply with the latest version. Existing server processes are not affected by the update; runtime configuration changes are applied gradually as existing processes shut down and new processes are launched during Amazon GameLift's normal process recycling activity.  Learn more   Setting up GameLift Fleets   Related operations     CreateFleet     ListFleets     DeleteFleet     DescribeFleetAttributes    Update fleets:    UpdateFleetAttributes     UpdateFleetCapacity     UpdateFleetPortSettings     UpdateRuntimeConfiguration       StartFleetActions or StopFleetActions   
   */
  updateRuntimeConfiguration(callback?: (err: AWSError, data: GameLift.Types.UpdateRuntimeConfigurationOutput) => void): Request<GameLift.Types.UpdateRuntimeConfigurationOutput, AWSError>;
  /**
   * Updates Realtime script metadata and content. To update script metadata, specify the script ID and provide updated name and/or version values.  To update script content, provide an updated zip file by pointing to either a local file or an Amazon S3 bucket location. You can use either method regardless of how the original script was uploaded. Use the Version parameter to track updates to the script. If the call is successful, the updated metadata is stored in the script record and a revised script is uploaded to the Amazon GameLift service. Once the script is updated and acquired by a fleet instance, the new version is used for all new game sessions.   Learn more   Amazon GameLift Realtime Servers   Related operations     CreateScript     ListScripts     DescribeScript     UpdateScript     DeleteScript   
   */
  updateScript(params: GameLift.Types.UpdateScriptInput, callback?: (err: AWSError, data: GameLift.Types.UpdateScriptOutput) => void): Request<GameLift.Types.UpdateScriptOutput, AWSError>;
  /**
   * Updates Realtime script metadata and content. To update script metadata, specify the script ID and provide updated name and/or version values.  To update script content, provide an updated zip file by pointing to either a local file or an Amazon S3 bucket location. You can use either method regardless of how the original script was uploaded. Use the Version parameter to track updates to the script. If the call is successful, the updated metadata is stored in the script record and a revised script is uploaded to the Amazon GameLift service. Once the script is updated and acquired by a fleet instance, the new version is used for all new game sessions.   Learn more   Amazon GameLift Realtime Servers   Related operations     CreateScript     ListScripts     DescribeScript     UpdateScript     DeleteScript   
   */
  updateScript(callback?: (err: AWSError, data: GameLift.Types.UpdateScriptOutput) => void): Request<GameLift.Types.UpdateScriptOutput, AWSError>;
  /**
   * Validates the syntax of a matchmaking rule or rule set. This operation checks that the rule set is using syntactically correct JSON and that it conforms to allowed property expressions. To validate syntax, provide a rule set JSON string.  Learn more     Build a Rule Set     Related operations     CreateMatchmakingConfiguration     DescribeMatchmakingConfigurations     UpdateMatchmakingConfiguration     DeleteMatchmakingConfiguration     CreateMatchmakingRuleSet     DescribeMatchmakingRuleSets     ValidateMatchmakingRuleSet     DeleteMatchmakingRuleSet   
   */
  validateMatchmakingRuleSet(params: GameLift.Types.ValidateMatchmakingRuleSetInput, callback?: (err: AWSError, data: GameLift.Types.ValidateMatchmakingRuleSetOutput) => void): Request<GameLift.Types.ValidateMatchmakingRuleSetOutput, AWSError>;
  /**
   * Validates the syntax of a matchmaking rule or rule set. This operation checks that the rule set is using syntactically correct JSON and that it conforms to allowed property expressions. To validate syntax, provide a rule set JSON string.  Learn more     Build a Rule Set     Related operations     CreateMatchmakingConfiguration     DescribeMatchmakingConfigurations     UpdateMatchmakingConfiguration     DeleteMatchmakingConfiguration     CreateMatchmakingRuleSet     DescribeMatchmakingRuleSets     ValidateMatchmakingRuleSet     DeleteMatchmakingRuleSet   
   */
  validateMatchmakingRuleSet(callback?: (err: AWSError, data: GameLift.Types.ValidateMatchmakingRuleSetOutput) => void): Request<GameLift.Types.ValidateMatchmakingRuleSetOutput, AWSError>;
}
declare namespace GameLift {
  export interface AcceptMatchInput {
    /**
     * A unique identifier for a matchmaking ticket. The ticket must be in status REQUIRES_ACCEPTANCE; otherwise this request will fail.
     */
    TicketId: MatchmakingIdStringModel;
    /**
     * A unique identifier for a player delivering the response. This parameter can include one or multiple player IDs.
     */
    PlayerIds: StringList;
    /**
     * Player response to the proposed match.
     */
    AcceptanceType: AcceptanceType;
  }
  export interface AcceptMatchOutput {
  }
  export type AcceptanceType = "ACCEPT"|"REJECT"|string;
  export interface Alias {
    /**
     * A unique identifier for an alias. Alias IDs are unique within a Region.
     */
    AliasId?: AliasId;
    /**
     * A descriptive label that is associated with an alias. Alias names do not need to be unique.
     */
    Name?: NonBlankAndLengthConstraintString;
    /**
     * Amazon Resource Name (ARN) that is assigned to a GameLift alias resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift alias ARN, the resource ID matches the alias ID value.
     */
    AliasArn?: AliasArn;
    /**
     * A human-readable description of an alias.
     */
    Description?: FreeText;
    /**
     * The routing configuration, including routing type and fleet target, for the alias. 
     */
    RoutingStrategy?: RoutingStrategy;
    /**
     * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    CreationTime?: Timestamp;
    /**
     * The time that this data object was last modified. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    LastUpdatedTime?: Timestamp;
  }
  export type AliasArn = string;
  export type AliasId = string;
  export type AliasIdOrArn = string;
  export type AliasList = Alias[];
  export type AmazonResourceName = string;
  export type ArnStringModel = string;
  export interface AttributeValue {
    /**
     * For single string values. Maximum string length is 100 characters.
     */
    S?: NonZeroAndMaxString;
    /**
     * For number values, expressed as double.
     */
    N?: DoubleObject;
    /**
     * For a list of up to 10 strings. Maximum length for each string is 100 characters. Duplicate values are not recognized; all occurrences of the repeated value after the first of a repeated value are ignored.
     */
    SL?: StringList;
    /**
     * For a map of up to 10 data type:value pairs. Maximum length for each string value is 100 characters. 
     */
    SDM?: StringDoubleMap;
  }
  export type AutoScalingGroupArn = string;
  export interface AwsCredentials {
    /**
     * Temporary key allowing access to the Amazon GameLift S3 account.
     */
    AccessKeyId?: NonEmptyString;
    /**
     * Temporary secret key allowing access to the Amazon GameLift S3 account.
     */
    SecretAccessKey?: NonEmptyString;
    /**
     * Token used to associate a specific build ID with the files uploaded using these credentials.
     */
    SessionToken?: NonEmptyString;
  }
  export type BackfillMode = "AUTOMATIC"|"MANUAL"|string;
  export type BalancingStrategy = "SPOT_ONLY"|"SPOT_PREFERRED"|"ON_DEMAND_ONLY"|string;
  export type BooleanModel = boolean;
  export interface Build {
    /**
     * A unique identifier for a build.
     */
    BuildId?: BuildId;
    /**
     * Amazon Resource Name (ARN) that is assigned to a GameLift build resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift build ARN, the resource ID matches the BuildId value.
     */
    BuildArn?: BuildArn;
    /**
     * A descriptive label that is associated with a build. Build names do not need to be unique. It can be set using CreateBuild or UpdateBuild.
     */
    Name?: FreeText;
    /**
     * Version information that is associated with a build or script. Version strings do not need to be unique. This value can be set using CreateBuild or UpdateBuild.
     */
    Version?: FreeText;
    /**
     * Current status of the build. Possible build statuses include the following:    INITIALIZED -- A new build has been defined, but no files have been uploaded. You cannot create fleets for builds that are in this status. When a build is successfully created, the build status is set to this value.     READY -- The game build has been successfully uploaded. You can now create new fleets for this build.    FAILED -- The game build upload failed. You cannot create new fleets for this build.   
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
  export type BuildArn = string;
  export type BuildId = string;
  export type BuildIdOrArn = string;
  export type BuildList = Build[];
  export type BuildStatus = "INITIALIZED"|"READY"|"FAILED"|string;
  export interface CertificateConfiguration {
    /**
     * Indicates whether a TLS/SSL certificate was generated for a fleet.     
     */
    CertificateType: CertificateType;
  }
  export type CertificateType = "DISABLED"|"GENERATED"|string;
  export interface ClaimGameServerInput {
    /**
     * A unique identifier for the game server group where the game server is running. Use either the GameServerGroup name or ARN value.. If you are not specifying a game server to claim, this value identifies where you want GameLift FleetIQ to look for an available game server to claim. 
     */
    GameServerGroupName: GameServerGroupNameOrArn;
    /**
     * A custom string that uniquely identifies the game server to claim. If this parameter is left empty, GameLift FleetIQ searches for an available game server in the specified game server group.
     */
    GameServerId?: GameServerId;
    /**
     * A set of custom game server properties, formatted as a single string value. This data is passed to a game client or service when it requests information on game servers using ListGameServers or ClaimGameServer. 
     */
    GameServerData?: GameServerData;
  }
  export interface ClaimGameServerOutput {
    /**
     * Object that describes the newly claimed game server.
     */
    GameServer?: GameServer;
  }
  export type ComparisonOperatorType = "GreaterThanOrEqualToThreshold"|"GreaterThanThreshold"|"LessThanThreshold"|"LessThanOrEqualToThreshold"|string;
  export interface CreateAliasInput {
    /**
     * A descriptive label that is associated with an alias. Alias names do not need to be unique.
     */
    Name: NonBlankAndLengthConstraintString;
    /**
     * A human-readable description of the alias.
     */
    Description?: NonZeroAndMaxString;
    /**
     * The routing configuration, including routing type and fleet target, for the alias. 
     */
    RoutingStrategy: RoutingStrategy;
    /**
     * A list of labels to assign to the new alias resource. Tags are developer-defined key-value pairs. Tagging AWS resources are useful for resource management, access management and cost allocation. For more information, see  Tagging AWS Resources in the AWS General Reference. Once the resource is created, you can use TagResource, UntagResource, and ListTagsForResource to add, remove, and view tags. The maximum tag limit may be lower than stated. See the AWS General Reference for actual tagging limits.
     */
    Tags?: TagList;
  }
  export interface CreateAliasOutput {
    /**
     * The newly created alias resource.
     */
    Alias?: Alias;
  }
  export interface CreateBuildInput {
    /**
     * A descriptive label that is associated with a build. Build names do not need to be unique. You can use UpdateBuild to change this value later. 
     */
    Name?: NonZeroAndMaxString;
    /**
     * Version information that is associated with a build or script. Version strings do not need to be unique. You can use UpdateBuild to change this value later. 
     */
    Version?: NonZeroAndMaxString;
    /**
     * Information indicating where your game build files are stored. Use this parameter only when creating a build with files stored in an S3 bucket that you own. The storage location must specify an S3 bucket name and key. The location must also specify a role ARN that you set up to allow Amazon GameLift to access your S3 bucket. The S3 bucket and your new build must be in the same Region.
     */
    StorageLocation?: S3Location;
    /**
     * The operating system that the game server binaries are built to run on. This value determines the type of fleet resources that you can use for this build. If your game build contains multiple executables, they all must run on the same operating system. If an operating system is not specified when creating a build, Amazon GameLift uses the default value (WINDOWS_2012). This value cannot be changed later.
     */
    OperatingSystem?: OperatingSystem;
    /**
     * A list of labels to assign to the new build resource. Tags are developer-defined key-value pairs. Tagging AWS resources are useful for resource management, access management and cost allocation. For more information, see  Tagging AWS Resources in the AWS General Reference. Once the resource is created, you can use TagResource, UntagResource, and ListTagsForResource to add, remove, and view tags. The maximum tag limit may be lower than stated. See the AWS General Reference for actual tagging limits.
     */
    Tags?: TagList;
  }
  export interface CreateBuildOutput {
    /**
     * The newly created build resource, including a unique build IDs and status. 
     */
    Build?: Build;
    /**
     * This element is returned only when the operation is called without a storage location. It contains credentials to use when you are uploading a build file to an S3 bucket that is owned by Amazon GameLift. Credentials have a limited life span. To refresh these credentials, call RequestUploadCredentials. 
     */
    UploadCredentials?: AwsCredentials;
    /**
     * Amazon S3 location for your game build file, including bucket name and key.
     */
    StorageLocation?: S3Location;
  }
  export interface CreateFleetInput {
    /**
     * A descriptive label that is associated with a fleet. Fleet names do not need to be unique.
     */
    Name: NonZeroAndMaxString;
    /**
     * A human-readable description of a fleet.
     */
    Description?: NonZeroAndMaxString;
    /**
     * A unique identifier for a build to be deployed on the new fleet. You can use either the build ID or ARN value. The custom game server build must have been successfully uploaded to Amazon GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created. 
     */
    BuildId?: BuildIdOrArn;
    /**
     * A unique identifier for a Realtime script to be deployed on the new fleet. You can use either the script ID or ARN value. The Realtime script must have been successfully uploaded to Amazon GameLift. This fleet setting cannot be changed once the fleet is created.
     */
    ScriptId?: ScriptIdOrArn;
    /**
     * This parameter is no longer used. Instead, specify a server launch path using the RuntimeConfiguration parameter. Requests that specify a server launch path and launch parameters instead of a runtime configuration will continue to work.
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
     * The name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.
     */
    EC2InstanceType: EC2InstanceType;
    /**
     * Range of IP addresses and port settings that permit inbound traffic to access game sessions that are running on the fleet. For fleets using a custom game build, this parameter is required before game sessions running on the fleet can accept connections. For Realtime Servers fleets, Amazon GameLift automatically sets TCP and UDP ranges for use by the Realtime servers. You can specify multiple permission settings or add more by updating the fleet.
     */
    EC2InboundPermissions?: IpPermissionsList;
    /**
     * A game session protection policy to apply to all instances in this fleet. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy using UpdateFleetAttributes, but this change will only affect sessions created after the policy change. You can also set protection for individual instances using UpdateGameSession.    NoProtection - The game session can be terminated during a scale-down event.    FullProtection - If the game session is in an ACTIVE status, it cannot be terminated during a scale-down event.  
     */
    NewGameSessionProtectionPolicy?: ProtectionPolicy;
    /**
     * Instructions for launching server processes on each instance in the fleet. Server processes run either a custom game build executable or a Realtime script. The runtime configuration defines the server executables or launch script file, launch parameters, and the number of processes to run concurrently on each instance. When creating a fleet, the runtime configuration must have at least one server process configuration; otherwise the request fails with an invalid request exception. (This parameter replaces the parameters ServerLaunchPath and ServerLaunchParameters, although requests that contain values for these parameters instead of a runtime configuration will continue to work.) This parameter is required unless the parameters ServerLaunchPath and ServerLaunchParameters are defined. Runtime configuration replaced these parameters, but fleets that use them will continue to work. 
     */
    RuntimeConfiguration?: RuntimeConfiguration;
    /**
     * A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.
     */
    ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
    /**
     * The name of an Amazon CloudWatch metric group to add this fleet to. A metric group aggregates the metrics for all fleets in the group. Specify an existing metric group name, or provide a new name to create a new metric group. A fleet can only be included in one metric group at a time. 
     */
    MetricGroups?: MetricGroupList;
    /**
     * A unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with. You can find your account ID in the AWS Management Console under account settings. 
     */
    PeerVpcAwsAccountId?: NonZeroAndMaxString;
    /**
     * A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the VPC Dashboard in the AWS Management Console. Learn more about VPC peering in VPC Peering with Amazon GameLift Fleets. 
     */
    PeerVpcId?: NonZeroAndMaxString;
    /**
     * Indicates whether to use On-Demand instances or Spot instances for this fleet. If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet. Learn more about  On-Demand versus Spot Instances. 
     */
    FleetType?: FleetType;
    /**
     * A unique identifier for an AWS IAM role that manages access to your AWS services. With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, and daemons (background processes). Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console. Learn more about using on-box credentials for your game servers at  Access external resources from a game server.
     */
    InstanceRoleArn?: NonEmptyString;
    /**
     * Indicates whether to generate a TLS/SSL certificate for the new fleet. TLS certificates are used for encrypting traffic between game clients and game servers running on GameLift. If this parameter is not specified, the default value, DISABLED, is used. This fleet setting cannot be changed once the fleet is created. Learn more at Securing Client/Server Communication.  Note: This feature requires the AWS Certificate Manager (ACM) service, which is available in the AWS global partition but not in all other partitions. When working in a partition that does not support this feature, a request for a new fleet with certificate generation results fails with a 4xx unsupported Region error. Valid values include:     GENERATED - Generate a TLS/SSL certificate for this fleet.    DISABLED - (default) Do not generate a TLS/SSL certificate for this fleet.  
     */
    CertificateConfiguration?: CertificateConfiguration;
    /**
     * A list of labels to assign to the new fleet resource. Tags are developer-defined key-value pairs. Tagging AWS resources are useful for resource management, access management and cost allocation. For more information, see  Tagging AWS Resources in the AWS General Reference. Once the resource is created, you can use TagResource, UntagResource, and ListTagsForResource to add, remove, and view tags. The maximum tag limit may be lower than stated. See the AWS General Reference for actual tagging limits.
     */
    Tags?: TagList;
  }
  export interface CreateFleetOutput {
    /**
     * Properties for the newly created fleet.
     */
    FleetAttributes?: FleetAttributes;
  }
  export interface CreateGameServerGroupInput {
    /**
     * An identifier for the new game server group. This value is used to generate unique ARN identifiers for the EC2 Auto Scaling group and the GameLift FleetIQ game server group. The name must be unique per Region per AWS account.
     */
    GameServerGroupName: GameServerGroupName;
    /**
     * The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access your EC2 Auto Scaling groups.
     */
    RoleArn: IamRoleArn;
    /**
     * The minimum number of instances allowed in the EC2 Auto Scaling group. During automatic scaling events, GameLift FleetIQ and EC2 do not scale down the group below this minimum. In production, this value should be set to at least 1. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the AWS console or APIs.
     */
    MinSize: WholeNumber;
    /**
     * The maximum number of instances allowed in the EC2 Auto Scaling group. During automatic scaling events, GameLift FleetIQ and EC2 do not scale up the group above this maximum. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the AWS console or APIs.
     */
    MaxSize: PositiveInteger;
    /**
     * The EC2 launch template that contains configuration settings and game server code to be deployed to all instances in the game server group. You can specify the template using either the template name or ID. For help with creating a launch template, see Creating a Launch Template for an Auto Scaling Group in the Amazon EC2 Auto Scaling User Guide. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the AWS console or APIs.
     */
    LaunchTemplate: LaunchTemplateSpecification;
    /**
     * The EC2 instance types and sizes to use in the Auto Scaling group. The instance definitions must specify at least two different instance types that are supported by GameLift FleetIQ. For more information on instance types, see EC2 Instance Types in the Amazon EC2 User Guide. You can optionally specify capacity weighting for each instance type. If no weight value is specified for an instance type, it is set to the default value "1". For more information about capacity weighting, see  Instance Weighting for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.
     */
    InstanceDefinitions: InstanceDefinitions;
    /**
     * Configuration settings to define a scaling policy for the Auto Scaling group that is optimized for game hosting. The scaling policy uses the metric "PercentUtilizedGameServers" to maintain a buffer of idle game servers that can immediately accommodate new games and players. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the AWS console or APIs.
     */
    AutoScalingPolicy?: GameServerGroupAutoScalingPolicy;
    /**
     * Indicates how GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances in the game server group. Method options include the following:    SPOT_ONLY - Only Spot Instances are used in the game server group. If Spot Instances are unavailable or not viable for game hosting, the game server group provides no hosting capacity until Spot Instances can again be used. Until then, no new instances are started, and the existing nonviable Spot Instances are terminated (after current gameplay ends) and are not replaced.    SPOT_PREFERRED - (default value) Spot Instances are used whenever available in the game server group. If Spot Instances are unavailable, the game server group continues to provide hosting capacity by falling back to On-Demand Instances. Existing nonviable Spot Instances are terminated (after current gameplay ends) and are replaced with new On-Demand Instances.    ON_DEMAND_ONLY - Only On-Demand Instances are used in the game server group. No Spot Instances are used, even when available, while this balancing strategy is in force.  
     */
    BalancingStrategy?: BalancingStrategy;
    /**
     * A flag that indicates whether instances in the game server group are protected from early termination. Unprotected instances that have active game servers running might be terminated during a scale-down event, causing players to be dropped from the game. Protected instances cannot be terminated while there are active game servers running except in the event of a forced game server group deletion (see ). An exception to this is with Spot Instances, which can be terminated by AWS regardless of protection status. This property is set to NO_PROTECTION by default.
     */
    GameServerProtectionPolicy?: GameServerProtectionPolicy;
    /**
     * A list of virtual private cloud (VPC) subnets to use with instances in the game server group. By default, all GameLift FleetIQ-supported Availability Zones are used. You can use this parameter to specify VPCs that you've set up. This property cannot be updated after the game server group is created, and the corresponding Auto Scaling group will always use the property value that is set with this request, even if the Auto Scaling group is updated directly
     */
    VpcSubnets?: VpcSubnets;
    /**
     * A list of labels to assign to the new game server group resource. Tags are developer-defined key-value pairs. Tagging AWS resources is useful for resource management, access management, and cost allocation. For more information, see  Tagging AWS Resources in the AWS General Reference. Once the resource is created, you can use TagResource, UntagResource, and ListTagsForResource to add, remove, and view tags, respectively. The maximum tag limit may be lower than stated. See the AWS General Reference for actual tagging limits.
     */
    Tags?: TagList;
  }
  export interface CreateGameServerGroupOutput {
    /**
     * The newly created game server group object, including the new ARN value for the GameLift FleetIQ game server group and the object's status. The EC2 Auto Scaling group ARN is initially null, since the group has not yet been created. This value is added once the game server group status reaches ACTIVE. 
     */
    GameServerGroup?: GameServerGroup;
  }
  export interface CreateGameSessionInput {
    /**
     * A unique identifier for a fleet to create a game session in. You can use either the fleet ID or ARN value. Each request must reference either a fleet ID or alias ID, but not both.
     */
    FleetId?: FleetIdOrArn;
    /**
     * A unique identifier for an alias associated with the fleet to create a game session in. You can use either the alias ID or ARN value. Each request must reference either a fleet ID or alias ID, but not both.
     */
    AliasId?: AliasIdOrArn;
    /**
     * The maximum number of players that can be connected simultaneously to the game session.
     */
    MaximumPlayerSessionCount: WholeNumber;
    /**
     * A descriptive label that is associated with a game session. Session names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
    /**
     * Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the GameSession object with a request to start a new game session (see Start a Game Session).
     */
    GameProperties?: GamePropertyList;
    /**
     * A unique identifier for a player or entity creating the game session. This ID is used to enforce a resource protection policy (if one exists) that limits the number of concurrent active game sessions one player can have.
     */
    CreatorId?: NonZeroAndMaxString;
    /**
     *  This parameter is no longer preferred. Please use IdempotencyToken instead. Custom string that uniquely identifies a request for a new game session. Maximum token length is 48 characters. If provided, this string is included in the new game session's ID. (A game session ARN has the following format: arn:aws:gamelift:&lt;region&gt;::gamesession/&lt;fleet ID&gt;/&lt;custom ID string or idempotency token&gt;.) 
     */
    GameSessionId?: IdStringModel;
    /**
     * Custom string that uniquely identifies a request for a new game session. Maximum token length is 48 characters. If provided, this string is included in the new game session's ID. (A game session ARN has the following format: arn:aws:gamelift:&lt;region&gt;::gamesession/&lt;fleet ID&gt;/&lt;custom ID string or idempotency token&gt;.) Idempotency tokens remain in use for 30 days after a game session has ended; game session objects are retained for this time period and then deleted.
     */
    IdempotencyToken?: IdStringModel;
    /**
     * Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the GameSession object with a request to start a new game session (see Start a Game Session).
     */
    GameSessionData?: GameSessionData;
  }
  export interface CreateGameSessionOutput {
    /**
     * Object that describes the newly created game session record.
     */
    GameSession?: GameSession;
  }
  export interface CreateGameSessionQueueInput {
    /**
     * A descriptive label that is associated with game session queue. Queue names must be unique within each Region.
     */
    Name: GameSessionQueueName;
    /**
     * The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a TIMED_OUT status.
     */
    TimeoutInSeconds?: WholeNumber;
    /**
     * A collection of latency policies to apply when processing game sessions placement requests with player latency information. Multiple policies are evaluated in order of the maximum latency value, starting with the lowest latency values. With just one policy, the policy is enforced at the start of the game session placement for the duration period. With multiple policies, each policy is enforced consecutively for its duration period. For example, a queue might enforce a 60-second policy followed by a 120-second policy, and then no policy for the remainder of the placement. A player latency policy must set a value for MaximumIndividualPlayerLatencyMilliseconds. If none is set, this API request fails.
     */
    PlayerLatencyPolicies?: PlayerLatencyPolicyList;
    /**
     * A list of fleets that can be used to fulfill game session placement requests in the queue. Fleets are identified by either a fleet ARN or a fleet alias ARN. Destinations are listed in default preference order.
     */
    Destinations?: GameSessionQueueDestinationList;
    /**
     * A list of labels to assign to the new game session queue resource. Tags are developer-defined key-value pairs. Tagging AWS resources are useful for resource management, access management and cost allocation. For more information, see  Tagging AWS Resources in the AWS General Reference. Once the resource is created, you can use TagResource, UntagResource, and ListTagsForResource to add, remove, and view tags. The maximum tag limit may be lower than stated. See the AWS General Reference for actual tagging limits.
     */
    Tags?: TagList;
  }
  export interface CreateGameSessionQueueOutput {
    /**
     * An object that describes the newly created game session queue.
     */
    GameSessionQueue?: GameSessionQueue;
  }
  export interface CreateMatchmakingConfigurationInput {
    /**
     * A unique identifier for a matchmaking configuration. This name is used to identify the configuration associated with a matchmaking request or ticket.
     */
    Name: MatchmakingIdStringModel;
    /**
     * A human-readable description of the matchmaking configuration. 
     */
    Description?: NonZeroAndMaxString;
    /**
     * Amazon Resource Name (ARN) that is assigned to a GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. These queues are used when placing game sessions for matches that are created with this matchmaking configuration. Queues can be located in any Region.
     */
    GameSessionQueueArns: QueueArnsList;
    /**
     * The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out. Requests that fail due to timing out can be resubmitted as needed.
     */
    RequestTimeoutSeconds: MatchmakingRequestTimeoutInteger;
    /**
     * The length of time (in seconds) to wait for players to accept a proposed match. If any player rejects the match or fails to accept before the timeout, the ticket continues to look for an acceptable match.
     */
    AcceptanceTimeoutSeconds?: MatchmakingAcceptanceTimeoutInteger;
    /**
     * A flag that determines whether a match that was created with this configuration must be accepted by the matched players. To require acceptance, set to TRUE.
     */
    AcceptanceRequired: BooleanModel;
    /**
     * A unique identifier for a matchmaking rule set to use with this configuration. You can use either the rule set name or ARN value. A matchmaking configuration can only use rule sets that are defined in the same Region.
     */
    RuleSetName: MatchmakingRuleSetName;
    /**
     * An SNS topic ARN that is set up to receive matchmaking notifications.
     */
    NotificationTarget?: SnsArnStringModel;
    /**
     * The number of player slots in a match to keep open for future players. For example, assume that the configuration's rule set specifies a match for a single 12-person team. If the additional player count is set to 2, only 10 players are initially selected for the match.
     */
    AdditionalPlayerCount?: WholeNumber;
    /**
     * Information to be added to all events related to this matchmaking configuration. 
     */
    CustomEventData?: CustomEventData;
    /**
     * A set of custom properties for a game session, formatted as key-value pairs. These properties are passed to a game server process in the GameSession object with a request to start a new game session (see Start a Game Session). This information is added to the new GameSession object that is created for a successful match. 
     */
    GameProperties?: GamePropertyList;
    /**
     * A set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the GameSession object with a request to start a new game session (see Start a Game Session). This information is added to the new GameSession object that is created for a successful match.
     */
    GameSessionData?: GameSessionData;
    /**
     * The method used to backfill game sessions that are created with this matchmaking configuration. Specify MANUAL when your game manages backfill requests manually or does not use the match backfill feature. Specify AUTOMATIC to have GameLift create a StartMatchBackfill request whenever a game session has one or more open slots. Learn more about manual and automatic backfill in  Backfill Existing Games with FlexMatch. 
     */
    BackfillMode?: BackfillMode;
    /**
     * A list of labels to assign to the new matchmaking configuration resource. Tags are developer-defined key-value pairs. Tagging AWS resources are useful for resource management, access management and cost allocation. For more information, see  Tagging AWS Resources in the AWS General Reference. Once the resource is created, you can use TagResource, UntagResource, and ListTagsForResource to add, remove, and view tags. The maximum tag limit may be lower than stated. See the AWS General Reference for actual tagging limits.
     */
    Tags?: TagList;
  }
  export interface CreateMatchmakingConfigurationOutput {
    /**
     * Object that describes the newly created matchmaking configuration.
     */
    Configuration?: MatchmakingConfiguration;
  }
  export interface CreateMatchmakingRuleSetInput {
    /**
     * A unique identifier for a matchmaking rule set. A matchmaking configuration identifies the rule set it uses by this name value. Note that the rule set name is different from the optional name field in the rule set body.
     */
    Name: MatchmakingIdStringModel;
    /**
     * A collection of matchmaking rules, formatted as a JSON string. Comments are not allowed in JSON, but most elements support a description field.
     */
    RuleSetBody: RuleSetBody;
    /**
     * A list of labels to assign to the new matchmaking rule set resource. Tags are developer-defined key-value pairs. Tagging AWS resources are useful for resource management, access management and cost allocation. For more information, see  Tagging AWS Resources in the AWS General Reference. Once the resource is created, you can use TagResource, UntagResource, and ListTagsForResource to add, remove, and view tags. The maximum tag limit may be lower than stated. See the AWS General Reference for actual tagging limits.
     */
    Tags?: TagList;
  }
  export interface CreateMatchmakingRuleSetOutput {
    /**
     * The newly created matchmaking rule set.
     */
    RuleSet: MatchmakingRuleSet;
  }
  export interface CreatePlayerSessionInput {
    /**
     * A unique identifier for the game session to add a player to.
     */
    GameSessionId: ArnStringModel;
    /**
     * A unique identifier for a player. Player IDs are developer-defined.
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
     * A unique identifier for the game session to add players to.
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
     * A collection of player session objects created for the added players.
     */
    PlayerSessions?: PlayerSessionList;
  }
  export interface CreateScriptInput {
    /**
     * A descriptive label that is associated with a script. Script names do not need to be unique. You can use UpdateScript to change this value later. 
     */
    Name?: NonZeroAndMaxString;
    /**
     * The version that is associated with a build or script. Version strings do not need to be unique. You can use UpdateScript to change this value later. 
     */
    Version?: NonZeroAndMaxString;
    /**
     * The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is stored. The storage location must specify the Amazon S3 bucket name, the zip file name (the "key"), and a role ARN that allows Amazon GameLift to access the Amazon S3 storage location. The S3 bucket must be in the same Region where you want to create a new script. By default, Amazon GameLift uploads the latest version of the zip file; if you have S3 object versioning turned on, you can use the ObjectVersion parameter to specify an earlier version. 
     */
    StorageLocation?: S3Location;
    /**
     * A data object containing your Realtime scripts and dependencies as a zip file. The zip file can have one or multiple files. Maximum size of a zip file is 5 MB. When using the AWS CLI tool to create a script, this parameter is set to the zip file name. It must be prepended with the string "fileb://" to indicate that the file data is a binary object. For example: --zip-file fileb://myRealtimeScript.zip.
     */
    ZipFile?: ZipBlob;
    /**
     * A list of labels to assign to the new script resource. Tags are developer-defined key-value pairs. Tagging AWS resources are useful for resource management, access management and cost allocation. For more information, see  Tagging AWS Resources in the AWS General Reference. Once the resource is created, you can use TagResource, UntagResource, and ListTagsForResource to add, remove, and view tags. The maximum tag limit may be lower than stated. See the AWS General Reference for actual tagging limits.
     */
    Tags?: TagList;
  }
  export interface CreateScriptOutput {
    /**
     * The newly created script record with a unique script ID and ARN. The new script's storage location reflects an Amazon S3 location: (1) If the script was uploaded from an S3 bucket under your account, the storage location reflects the information that was provided in the CreateScript request; (2) If the script file was uploaded from a local zip file, the storage location reflects an S3 location controls by the Amazon GameLift service.
     */
    Script?: Script;
  }
  export interface CreateVpcPeeringAuthorizationInput {
    /**
     * A unique identifier for the AWS account that you use to manage your Amazon GameLift fleet. You can find your Account ID in the AWS Management Console under account settings.
     */
    GameLiftAwsAccountId: NonZeroAndMaxString;
    /**
     * A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region where your fleet is deployed. Look up a VPC ID using the VPC Dashboard in the AWS Management Console. Learn more about VPC peering in VPC Peering with Amazon GameLift Fleets.
     */
    PeerVpcId: NonZeroAndMaxString;
  }
  export interface CreateVpcPeeringAuthorizationOutput {
    /**
     * Details on the requested VPC peering authorization, including expiration.
     */
    VpcPeeringAuthorization?: VpcPeeringAuthorization;
  }
  export interface CreateVpcPeeringConnectionInput {
    /**
     * A unique identifier for a fleet. You can use either the fleet ID or ARN value. This tells Amazon GameLift which GameLift VPC to peer with. 
     */
    FleetId: FleetId;
    /**
     * A unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with. You can find your Account ID in the AWS Management Console under account settings.
     */
    PeerVpcAwsAccountId: NonZeroAndMaxString;
    /**
     * A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region where your fleet is deployed. Look up a VPC ID using the VPC Dashboard in the AWS Management Console. Learn more about VPC peering in VPC Peering with Amazon GameLift Fleets.
     */
    PeerVpcId: NonZeroAndMaxString;
  }
  export interface CreateVpcPeeringConnectionOutput {
  }
  export type CustomEventData = string;
  export interface DeleteAliasInput {
    /**
     * A unique identifier of the alias that you want to delete. You can use either the alias ID or ARN value.
     */
    AliasId: AliasIdOrArn;
  }
  export interface DeleteBuildInput {
    /**
     * A unique identifier for a build to delete. You can use either the build ID or ARN value. 
     */
    BuildId: BuildIdOrArn;
  }
  export interface DeleteFleetInput {
    /**
     * A unique identifier for a fleet to be deleted. You can use either the fleet ID or ARN value.
     */
    FleetId: FleetIdOrArn;
  }
  export interface DeleteGameServerGroupInput {
    /**
     * A unique identifier for the game server group. Use either the GameServerGroup name or ARN value.
     */
    GameServerGroupName: GameServerGroupNameOrArn;
    /**
     * The type of delete to perform. Options include the following:    SAFE_DELETE – Terminates the game server group and EC2 Auto Scaling group only when it has no game servers that are in UTILIZED status.    FORCE_DELETE – Terminates the game server group, including all active game servers regardless of their utilization status, and the EC2 Auto Scaling group.     RETAIN – Does a safe delete of the game server group but retains the EC2 Auto Scaling group as is.  
     */
    DeleteOption?: GameServerGroupDeleteOption;
  }
  export interface DeleteGameServerGroupOutput {
    /**
     * An object that describes the deleted game server group resource, with status updated to DELETE_SCHEDULED. 
     */
    GameServerGroup?: GameServerGroup;
  }
  export interface DeleteGameSessionQueueInput {
    /**
     * A descriptive label that is associated with game session queue. Queue names must be unique within each Region. You can use either the queue ID or ARN value. 
     */
    Name: GameSessionQueueNameOrArn;
  }
  export interface DeleteGameSessionQueueOutput {
  }
  export interface DeleteMatchmakingConfigurationInput {
    /**
     * A unique identifier for a matchmaking configuration. You can use either the configuration name or ARN value.
     */
    Name: MatchmakingConfigurationName;
  }
  export interface DeleteMatchmakingConfigurationOutput {
  }
  export interface DeleteMatchmakingRuleSetInput {
    /**
     * A unique identifier for a matchmaking rule set to be deleted. (Note: The rule set name is different from the optional "name" field in the rule set body.) You can use either the rule set name or ARN value.
     */
    Name: MatchmakingRuleSetName;
  }
  export interface DeleteMatchmakingRuleSetOutput {
  }
  export interface DeleteScalingPolicyInput {
    /**
     * A descriptive label that is associated with a scaling policy. Policy names do not need to be unique.
     */
    Name: NonZeroAndMaxString;
    /**
     * A unique identifier for a fleet to be deleted. You can use either the fleet ID or ARN value.
     */
    FleetId: FleetIdOrArn;
  }
  export interface DeleteScriptInput {
    /**
     * A unique identifier for a Realtime script to delete. You can use either the script ID or ARN value.
     */
    ScriptId: ScriptIdOrArn;
  }
  export interface DeleteVpcPeeringAuthorizationInput {
    /**
     * A unique identifier for the AWS account that you use to manage your Amazon GameLift fleet. You can find your Account ID in the AWS Management Console under account settings.
     */
    GameLiftAwsAccountId: NonZeroAndMaxString;
    /**
     * A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region where your fleet is deployed. Look up a VPC ID using the VPC Dashboard in the AWS Management Console. Learn more about VPC peering in VPC Peering with Amazon GameLift Fleets.
     */
    PeerVpcId: NonZeroAndMaxString;
  }
  export interface DeleteVpcPeeringAuthorizationOutput {
  }
  export interface DeleteVpcPeeringConnectionInput {
    /**
     * A unique identifier for a fleet. This fleet specified must match the fleet referenced in the VPC peering connection record. You can use either the fleet ID or ARN value.
     */
    FleetId: FleetId;
    /**
     * A unique identifier for a VPC peering connection. This value is included in the VpcPeeringConnection object, which can be retrieved by calling DescribeVpcPeeringConnections.
     */
    VpcPeeringConnectionId: NonZeroAndMaxString;
  }
  export interface DeleteVpcPeeringConnectionOutput {
  }
  export interface DeregisterGameServerInput {
    /**
     * A unique identifier for the game server group where the game server is running. Use either the GameServerGroup name or ARN value.
     */
    GameServerGroupName: GameServerGroupNameOrArn;
    /**
     * A custom string that uniquely identifies the game server to deregister.
     */
    GameServerId: GameServerId;
  }
  export interface DescribeAliasInput {
    /**
     * The unique identifier for the fleet alias that you want to retrieve. You can use either the alias ID or ARN value. 
     */
    AliasId: AliasIdOrArn;
  }
  export interface DescribeAliasOutput {
    /**
     * The requested alias resource.
     */
    Alias?: Alias;
  }
  export interface DescribeBuildInput {
    /**
     * A unique identifier for a build to retrieve properties for. You can use either the build ID or ARN value. 
     */
    BuildId: BuildIdOrArn;
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
     * The maximum number of instances for the specified instance type.
     */
    EC2InstanceLimits?: EC2InstanceLimitList;
  }
  export interface DescribeFleetAttributesInput {
    /**
     * A list of unique fleet identifiers to retrieve attributes for. You can use either the fleet ID or ARN value. To retrieve attributes for all current fleets, do not include this parameter. If the list of fleet identifiers includes fleets that don't currently exist, the request succeeds but no attributes for that fleet are returned.
     */
    FleetIds?: FleetIdOrArnList;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet IDs.
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet IDs.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeFleetAttributesOutput {
    /**
     * A collection of objects containing attribute metadata for each requested fleet ID. Attribute objects are returned only for fleets that currently exist.
     */
    FleetAttributes?: FleetAttributesList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeFleetCapacityInput {
    /**
     * A unique identifier for a fleet(s) to retrieve capacity information for. You can use either the fleet ID or ARN value.
     */
    FleetIds?: FleetIdOrArnList;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet IDs.
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet IDs.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeFleetCapacityOutput {
    /**
     * A collection of objects containing capacity information for each requested fleet ID. Leave this parameter empty to retrieve capacity information for all fleets.
     */
    FleetCapacity?: FleetCapacityList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeFleetEventsInput {
    /**
     * A unique identifier for a fleet to get event logs for. You can use either the fleet ID or ARN value.
     */
    FleetId: FleetIdOrArn;
    /**
     * Earliest date to retrieve event logs for. If no start time is specified, this call returns entries starting from when the fleet was created to the specified end time. Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057").
     */
    StartTime?: Timestamp;
    /**
     * Most recent date to retrieve event logs for. If no end time is specified, this call returns entries from the specified start time up to the present. Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057").
     */
    EndTime?: Timestamp;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeFleetEventsOutput {
    /**
     * A collection of objects containing event log entries for the specified fleet.
     */
    Events?: EventList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeFleetPortSettingsInput {
    /**
     * A unique identifier for a fleet to retrieve port settings for. You can use either the fleet ID or ARN value.
     */
    FleetId: FleetIdOrArn;
  }
  export interface DescribeFleetPortSettingsOutput {
    /**
     * The port settings for the requested fleet ID.
     */
    InboundPermissions?: IpPermissionsList;
  }
  export interface DescribeFleetUtilizationInput {
    /**
     * A unique identifier for a fleet(s) to retrieve utilization data for. You can use either the fleet ID or ARN value. To retrieve attributes for all current fleets, do not include this parameter. If the list of fleet identifiers includes fleets that don't currently exist, the request succeeds but no attributes for that fleet are returned.
     */
    FleetIds?: FleetIdOrArnList;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet IDs.
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet IDs.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeFleetUtilizationOutput {
    /**
     * A collection of objects containing utilization information for each requested fleet ID.
     */
    FleetUtilization?: FleetUtilizationList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeGameServerGroupInput {
    /**
     * A unique identifier for the game server group. Use either the GameServerGroup name or ARN value.
     */
    GameServerGroupName: GameServerGroupNameOrArn;
  }
  export interface DescribeGameServerGroupOutput {
    /**
     * An object with the property settings for the requested game server group resource. 
     */
    GameServerGroup?: GameServerGroup;
  }
  export interface DescribeGameServerInput {
    /**
     * A unique identifier for the game server group where the game server is running. Use either the GameServerGroup name or ARN value.
     */
    GameServerGroupName: GameServerGroupNameOrArn;
    /**
     * A custom string that uniquely identifies the game server information to be retrieved.
     */
    GameServerId: GameServerId;
  }
  export interface DescribeGameServerInstancesInput {
    /**
     * A unique identifier for the game server group. Use either the GameServerGroup name or ARN value.
     */
    GameServerGroupName: GameServerGroupNameOrArn;
    /**
     * The EC2 instance IDs that you want to retrieve status on. EC2 instance IDs use a 17-character format, for example: i-1234567890abcdef0. To retrieve all instances in the game server group, leave this parameter empty. 
     */
    InstanceIds?: GameServerInstanceIds;
    /**
     *  The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential segments. 
     */
    Limit?: PositiveInteger;
    /**
     *  A token that indicates the start of the next sequential segment of results. Use the token returned with the previous call to this operation. To start at the beginning of the result set, do not specify a value. 
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeGameServerInstancesOutput {
    /**
     *  The collection of requested game server instances. 
     */
    GameServerInstances?: GameServerInstances;
    /**
     *  A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list. 
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeGameServerOutput {
    /**
     * Object that describes the requested game server.
     */
    GameServer?: GameServer;
  }
  export interface DescribeGameSessionDetailsInput {
    /**
     * A unique identifier for a fleet to retrieve all game sessions active on the fleet. You can use either the fleet ID or ARN value.
     */
    FleetId?: FleetIdOrArn;
    /**
     * A unique identifier for the game session to retrieve. 
     */
    GameSessionId?: ArnStringModel;
    /**
     * A unique identifier for an alias associated with the fleet to retrieve all game sessions for. You can use either the alias ID or ARN value.
     */
    AliasId?: AliasIdOrArn;
    /**
     * Game session status to filter results on. Possible game session statuses include ACTIVE, TERMINATED, ACTIVATING and TERMINATING (the last two are transitory). 
     */
    StatusFilter?: NonZeroAndMaxString;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeGameSessionDetailsOutput {
    /**
     * A collection of objects containing game session properties and the protection policy currently in force for each session matching the request.
     */
    GameSessionDetails?: GameSessionDetailList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeGameSessionPlacementInput {
    /**
     * A unique identifier for a game session placement to retrieve.
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
     * A list of queue names to retrieve information for. You can use either the queue ID or ARN value. To request settings for all queues, leave this parameter empty. 
     */
    Names?: GameSessionQueueNameOrArnList;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. You can request up to 50 results.
     */
    Limit?: PositiveInteger;
    /**
     * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeGameSessionQueuesOutput {
    /**
     * A collection of objects that describe the requested game session queues.
     */
    GameSessionQueues?: GameSessionQueueList;
    /**
     * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeGameSessionsInput {
    /**
     * A unique identifier for a fleet to retrieve all game sessions for. You can use either the fleet ID or ARN value. 
     */
    FleetId?: FleetIdOrArn;
    /**
     * A unique identifier for the game session to retrieve. 
     */
    GameSessionId?: ArnStringModel;
    /**
     * A unique identifier for an alias associated with the fleet to retrieve all game sessions for. You can use either the alias ID or ARN value.
     */
    AliasId?: AliasIdOrArn;
    /**
     * Game session status to filter results on. Possible game session statuses include ACTIVE, TERMINATED, ACTIVATING, and TERMINATING (the last two are transitory). 
     */
    StatusFilter?: NonZeroAndMaxString;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeGameSessionsOutput {
    /**
     * A collection of objects containing game session properties for each session matching the request.
     */
    GameSessions?: GameSessionList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeInstancesInput {
    /**
     * A unique identifier for a fleet to retrieve instance information for. You can use either the fleet ID or ARN value.
     */
    FleetId: FleetIdOrArn;
    /**
     * A unique identifier for an instance to retrieve. Specify an instance ID or leave blank to retrieve all instances in the fleet.
     */
    InstanceId?: InstanceId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeInstancesOutput {
    /**
     * A collection of objects containing properties for each instance returned.
     */
    Instances?: InstanceList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeMatchmakingConfigurationsInput {
    /**
     * A unique identifier for a matchmaking configuration(s) to retrieve. You can use either the configuration name or ARN value. To request all existing configurations, leave this parameter empty.
     */
    Names?: MatchmakingConfigurationNameList;
    /**
     * A unique identifier for a matchmaking rule set. You can use either the rule set name or ARN value. Use this parameter to retrieve all matchmaking configurations that use this rule set.
     */
    RuleSetName?: MatchmakingRuleSetName;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. This parameter is limited to 10.
     */
    Limit?: PositiveInteger;
    /**
     * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeMatchmakingConfigurationsOutput {
    /**
     * A collection of requested matchmaking configurations.
     */
    Configurations?: MatchmakingConfigurationList;
    /**
     * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeMatchmakingInput {
    /**
     * A unique identifier for a matchmaking ticket. You can include up to 10 ID values. 
     */
    TicketIds: MatchmakingIdList;
  }
  export interface DescribeMatchmakingOutput {
    /**
     * A collection of existing matchmaking ticket objects matching the request.
     */
    TicketList?: MatchmakingTicketList;
  }
  export interface DescribeMatchmakingRuleSetsInput {
    /**
     * A list of one or more matchmaking rule set names to retrieve details for. (Note: The rule set name is different from the optional "name" field in the rule set body.) You can use either the rule set name or ARN value. 
     */
    Names?: MatchmakingRuleSetNameList;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: RuleSetLimit;
    /**
     * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeMatchmakingRuleSetsOutput {
    /**
     * A collection of requested matchmaking rule set objects. 
     */
    RuleSets: MatchmakingRuleSetList;
    /**
     * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribePlayerSessionsInput {
    /**
     * A unique identifier for the game session to retrieve player sessions for.
     */
    GameSessionId?: ArnStringModel;
    /**
     * A unique identifier for a player to retrieve player sessions for.
     */
    PlayerId?: NonZeroAndMaxString;
    /**
     * A unique identifier for a player session to retrieve.
     */
    PlayerSessionId?: PlayerSessionId;
    /**
     * Player session status to filter results on. Possible player session statuses include the following:    RESERVED -- The player session request has been received, but the player has not yet connected to the server process and/or been validated.     ACTIVE -- The player has been validated by the server process and is currently connected.    COMPLETED -- The player connection has been dropped.    TIMEDOUT -- A player session request was received, but the player did not connect and/or was not validated within the timeout limit (60 seconds).  
     */
    PlayerSessionStatusFilter?: NonZeroAndMaxString;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. If a player session ID is specified, this parameter is ignored.
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. If a player session ID is specified, this parameter is ignored.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribePlayerSessionsOutput {
    /**
     * A collection of objects containing properties for each player session that matches the request.
     */
    PlayerSessions?: PlayerSessionList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeRuntimeConfigurationInput {
    /**
     * A unique identifier for a fleet to get the runtime configuration for. You can use either the fleet ID or ARN value.
     */
    FleetId: FleetIdOrArn;
  }
  export interface DescribeRuntimeConfigurationOutput {
    /**
     * Instructions describing how server processes should be launched and maintained on each instance in the fleet.
     */
    RuntimeConfiguration?: RuntimeConfiguration;
  }
  export interface DescribeScalingPoliciesInput {
    /**
     * A unique identifier for a fleet to retrieve scaling policies for. You can use either the fleet ID or ARN value.
     */
    FleetId: FleetIdOrArn;
    /**
     * Scaling policy status to filter results on. A scaling policy is only in force when in an ACTIVE status.    ACTIVE -- The scaling policy is currently in force.    UPDATEREQUESTED -- A request to update the scaling policy has been received.    UPDATING -- A change is being made to the scaling policy.    DELETEREQUESTED -- A request to delete the scaling policy has been received.    DELETING -- The scaling policy is being deleted.    DELETED -- The scaling policy has been deleted.    ERROR -- An error occurred in creating the policy. It should be removed and recreated.  
     */
    StatusFilter?: ScalingStatusType;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeScalingPoliciesOutput {
    /**
     * A collection of objects containing the scaling policies matching the request.
     */
    ScalingPolicies?: ScalingPolicyList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface DescribeScriptInput {
    /**
     * A unique identifier for a Realtime script to retrieve properties for. You can use either the script ID or ARN value.
     */
    ScriptId: ScriptIdOrArn;
  }
  export interface DescribeScriptOutput {
    /**
     * A set of properties describing the requested script.
     */
    Script?: Script;
  }
  export interface DescribeVpcPeeringAuthorizationsInput {
  }
  export interface DescribeVpcPeeringAuthorizationsOutput {
    /**
     * A collection of objects that describe all valid VPC peering operations for the current AWS account.
     */
    VpcPeeringAuthorizations?: VpcPeeringAuthorizationList;
  }
  export interface DescribeVpcPeeringConnectionsInput {
    /**
     * A unique identifier for a fleet. You can use either the fleet ID or ARN value.
     */
    FleetId?: FleetId;
  }
  export interface DescribeVpcPeeringConnectionsOutput {
    /**
     * A collection of VPC peering connection records that match the request.
     */
    VpcPeeringConnections?: VpcPeeringConnectionList;
  }
  export interface DesiredPlayerSession {
    /**
     * A unique identifier for a player to associate with the player session.
     */
    PlayerId?: NonZeroAndMaxString;
    /**
     * Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game.
     */
    PlayerData?: PlayerData;
  }
  export type DesiredPlayerSessionList = DesiredPlayerSession[];
  export type DnsName = string;
  export type Double = number;
  export type DoubleObject = number;
  export interface EC2InstanceCounts {
    /**
     * Ideal number of active instances in the fleet.
     */
    DESIRED?: WholeNumber;
    /**
     * The minimum value allowed for the fleet's instance count.
     */
    MINIMUM?: WholeNumber;
    /**
     * The maximum value allowed for the fleet's instance count.
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
  export type EC2InstanceType = "t2.micro"|"t2.small"|"t2.medium"|"t2.large"|"c3.large"|"c3.xlarge"|"c3.2xlarge"|"c3.4xlarge"|"c3.8xlarge"|"c4.large"|"c4.xlarge"|"c4.2xlarge"|"c4.4xlarge"|"c4.8xlarge"|"c5.large"|"c5.xlarge"|"c5.2xlarge"|"c5.4xlarge"|"c5.9xlarge"|"c5.12xlarge"|"c5.18xlarge"|"c5.24xlarge"|"r3.large"|"r3.xlarge"|"r3.2xlarge"|"r3.4xlarge"|"r3.8xlarge"|"r4.large"|"r4.xlarge"|"r4.2xlarge"|"r4.4xlarge"|"r4.8xlarge"|"r4.16xlarge"|"r5.large"|"r5.xlarge"|"r5.2xlarge"|"r5.4xlarge"|"r5.8xlarge"|"r5.12xlarge"|"r5.16xlarge"|"r5.24xlarge"|"m3.medium"|"m3.large"|"m3.xlarge"|"m3.2xlarge"|"m4.large"|"m4.xlarge"|"m4.2xlarge"|"m4.4xlarge"|"m4.10xlarge"|"m5.large"|"m5.xlarge"|"m5.2xlarge"|"m5.4xlarge"|"m5.8xlarge"|"m5.12xlarge"|"m5.16xlarge"|"m5.24xlarge"|string;
  export interface Event {
    /**
     * A unique identifier for a fleet event.
     */
    EventId?: NonZeroAndMaxString;
    /**
     * A unique identifier for an event resource, such as a fleet ID.
     */
    ResourceId?: NonZeroAndMaxString;
    /**
     * The type of event being logged.   Fleet creation events (ordered by fleet creation activity):    FLEET_CREATED -- A fleet resource was successfully created with a status of NEW. Event messaging includes the fleet ID.   FLEET_STATE_DOWNLOADING -- Fleet status changed from NEW to DOWNLOADING. The compressed build has started downloading to a fleet instance for installation.    FLEET_BINARY_DOWNLOAD_FAILED -- The build failed to download to the fleet instance.   FLEET_CREATION_EXTRACTING_BUILD – The game server build was successfully downloaded to an instance, and the build files are now being extracted from the uploaded build and saved to an instance. Failure at this stage prevents a fleet from moving to ACTIVE status. Logs for this stage display a list of the files that are extracted and saved on the instance. Access the logs by using the URL in PreSignedLogUrl.   FLEET_CREATION_RUNNING_INSTALLER – The game server build files were successfully extracted, and the Amazon GameLift is now running the build's install script (if one is included). Failure in this stage prevents a fleet from moving to ACTIVE status. Logs for this stage list the installation steps and whether or not the install completed successfully. Access the logs by using the URL in PreSignedLogUrl.    FLEET_CREATION_VALIDATING_RUNTIME_CONFIG -- The build process was successful, and the Amazon GameLift is now verifying that the game server launch paths, which are specified in the fleet's runtime configuration, exist. If any listed launch path exists, Amazon GameLift tries to launch a game server process and waits for the process to report ready. Failures in this stage prevent a fleet from moving to ACTIVE status. Logs for this stage list the launch paths in the runtime configuration and indicate whether each is found. Access the logs by using the URL in PreSignedLogUrl.    FLEET_STATE_VALIDATING -- Fleet status changed from DOWNLOADING to VALIDATING.    FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND -- Validation of the runtime configuration failed because the executable specified in a launch path does not exist on the instance.   FLEET_STATE_BUILDING -- Fleet status changed from VALIDATING to BUILDING.   FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE -- Validation of the runtime configuration failed because the executable specified in a launch path failed to run on the fleet instance.   FLEET_STATE_ACTIVATING -- Fleet status changed from BUILDING to ACTIVATING.     FLEET_ACTIVATION_FAILED - The fleet failed to successfully complete one of the steps in the fleet activation process. This event code indicates that the game build was successfully downloaded to a fleet instance, built, and validated, but was not able to start a server process. Learn more at  Debug Fleet Creation Issues    FLEET_STATE_ACTIVE -- The fleet's status changed from ACTIVATING to ACTIVE. The fleet is now ready to host game sessions.    VPC peering events:    FLEET_VPC_PEERING_SUCCEEDED -- A VPC peering connection has been established between the VPC for an Amazon GameLift fleet and a VPC in your AWS account.   FLEET_VPC_PEERING_FAILED -- A requested VPC peering connection has failed. Event details and status information (see DescribeVpcPeeringConnections) provide additional detail. A common reason for peering failure is that the two VPCs have overlapping CIDR blocks of IPv4 addresses. To resolve this, change the CIDR block for the VPC in your AWS account. For more information on VPC peering failures, see https://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/invalid-peering-configurations.html    FLEET_VPC_PEERING_DELETED -- A VPC peering connection has been successfully deleted.    Spot instance events:     INSTANCE_INTERRUPTED -- A spot instance was interrupted by EC2 with a two-minute notification.    Other fleet events:    FLEET_SCALING_EVENT -- A change was made to the fleet's capacity settings (desired instances, minimum/maximum scaling limits). Event messaging includes the new capacity settings.   FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED -- A change was made to the fleet's game session protection policy setting. Event messaging includes both the old and new policy setting.    FLEET_DELETED -- A request to delete a fleet was initiated.    GENERIC_EVENT -- An unspecified event has occurred.  
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
    /**
     * Location of stored logs with additional detail that is related to the event. This is useful for debugging issues. The URL is valid for 15 minutes. You can also access fleet creation logs through the Amazon GameLift console.
     */
    PreSignedLogUrl?: NonZeroAndMaxString;
  }
  export type EventCode = "GENERIC_EVENT"|"FLEET_CREATED"|"FLEET_DELETED"|"FLEET_SCALING_EVENT"|"FLEET_STATE_DOWNLOADING"|"FLEET_STATE_VALIDATING"|"FLEET_STATE_BUILDING"|"FLEET_STATE_ACTIVATING"|"FLEET_STATE_ACTIVE"|"FLEET_STATE_ERROR"|"FLEET_INITIALIZATION_FAILED"|"FLEET_BINARY_DOWNLOAD_FAILED"|"FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND"|"FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE"|"FLEET_VALIDATION_TIMED_OUT"|"FLEET_ACTIVATION_FAILED"|"FLEET_ACTIVATION_FAILED_NO_INSTANCES"|"FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED"|"SERVER_PROCESS_INVALID_PATH"|"SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT"|"SERVER_PROCESS_PROCESS_READY_TIMEOUT"|"SERVER_PROCESS_CRASHED"|"SERVER_PROCESS_TERMINATED_UNHEALTHY"|"SERVER_PROCESS_FORCE_TERMINATED"|"SERVER_PROCESS_PROCESS_EXIT_TIMEOUT"|"GAME_SESSION_ACTIVATION_TIMEOUT"|"FLEET_CREATION_EXTRACTING_BUILD"|"FLEET_CREATION_RUNNING_INSTALLER"|"FLEET_CREATION_VALIDATING_RUNTIME_CONFIG"|"FLEET_VPC_PEERING_SUCCEEDED"|"FLEET_VPC_PEERING_FAILED"|"FLEET_VPC_PEERING_DELETED"|"INSTANCE_INTERRUPTED"|string;
  export type EventList = Event[];
  export type FleetAction = "AUTO_SCALING"|string;
  export type FleetActionList = FleetAction[];
  export type FleetArn = string;
  export interface FleetAttributes {
    /**
     * A unique identifier for a fleet.
     */
    FleetId?: FleetId;
    /**
     * The Amazon Resource Name (ARN) that is assigned to a GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift fleet ARN, the resource ID matches the FleetId value.
     */
    FleetArn?: FleetArn;
    /**
     * Indicates whether the fleet uses on-demand or spot instances. A spot instance in use may be interrupted with a two-minute notification.
     */
    FleetType?: FleetType;
    /**
     * EC2 instance type indicating the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. See Amazon EC2 Instance Types for detailed descriptions.
     */
    InstanceType?: EC2InstanceType;
    /**
     * Human-readable description of the fleet.
     */
    Description?: NonZeroAndMaxString;
    /**
     * A descriptive label that is associated with a fleet. Fleet names do not need to be unique.
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
     * Current status of the fleet. Possible fleet statuses include the following:    NEW -- A new fleet has been defined and desired instances is set to 1.     DOWNLOADING/VALIDATING/BUILDING/ACTIVATING -- Amazon GameLift is setting up the new fleet, creating new instances with the game build or Realtime script and starting server processes.    ACTIVE -- Hosts can now accept game sessions.    ERROR -- An error occurred when downloading, validating, building, or activating the fleet.    DELETING -- Hosts are responding to a delete fleet request.    TERMINATED -- The fleet no longer exists.  
     */
    Status?: FleetStatus;
    /**
     * A unique identifier for a build.
     */
    BuildId?: BuildId;
    /**
     *  The Amazon Resource Name (ARN) associated with the GameLift build resource that is deployed on instances in this fleet. In a GameLift build ARN, the resource ID matches the BuildId value.
     */
    BuildArn?: BuildArn;
    /**
     * A unique identifier for a Realtime script.
     */
    ScriptId?: ScriptId;
    /**
     *  The Amazon Resource Name (ARN) associated with the GameLift script resource that is deployed on instances in this fleet. In a GameLift script ARN, the resource ID matches the ScriptId value.
     */
    ScriptArn?: ScriptArn;
    /**
     * Path to a game server executable in the fleet's build, specified for fleets created before 2016-08-04 (or AWS SDK v. 0.12.16). Server launch paths for fleets created after this date are specified in the fleet's RuntimeConfiguration.
     */
    ServerLaunchPath?: NonZeroAndMaxString;
    /**
     * Game server launch parameters specified for fleets created before 2016-08-04 (or AWS SDK v. 0.12.16). Server launch parameters for fleets created after this date are specified in the fleet's RuntimeConfiguration.
     */
    ServerLaunchParameters?: NonZeroAndMaxString;
    /**
     * Location of default log files. When a server process is shut down, Amazon GameLift captures and stores any log files in this location. These logs are in addition to game session logs; see more on game session logs in the Amazon GameLift Developer Guide. If no default log path for a fleet is specified, Amazon GameLift automatically uploads logs that are stored on each instance at C:\game\logs (for Windows) or /local/game/logs (for Linux). Use the Amazon GameLift console to access stored logs. 
     */
    LogPaths?: StringList;
    /**
     * The type of game session protection to set for all new instances started in the fleet.    NoProtection -- The game session can be terminated during a scale-down event.    FullProtection -- If the game session is in an ACTIVE status, it cannot be terminated during a scale-down event.  
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
    /**
     * Names of metric groups that this fleet is included in. In Amazon CloudWatch, you can view metrics for an individual fleet or aggregated metrics for fleets that are in a fleet metric group. A fleet can be included in only one metric group at a time.
     */
    MetricGroups?: MetricGroupList;
    /**
     * List of fleet activity that have been suspended using StopFleetActions. This includes auto-scaling.
     */
    StoppedActions?: FleetActionList;
    /**
     * A unique identifier for an AWS IAM role that manages access to your AWS services. With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, and daemons (background processes). Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console. Learn more about using on-box credentials for your game servers at  Access external resources from a game server.
     */
    InstanceRoleArn?: NonEmptyString;
    /**
     * Indicates whether a TLS/SSL certificate was generated for the fleet. 
     */
    CertificateConfiguration?: CertificateConfiguration;
  }
  export type FleetAttributesList = FleetAttributes[];
  export interface FleetCapacity {
    /**
     * A unique identifier for a fleet.
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
  export type FleetIdOrArn = string;
  export type FleetIdOrArnList = FleetIdOrArn[];
  export type FleetStatus = "NEW"|"DOWNLOADING"|"VALIDATING"|"BUILDING"|"ACTIVATING"|"ACTIVE"|"DELETING"|"ERROR"|"TERMINATED"|string;
  export type FleetType = "ON_DEMAND"|"SPOT"|string;
  export interface FleetUtilization {
    /**
     * A unique identifier for a fleet.
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
     * The maximum number of players allowed across all game sessions currently being hosted on all instances in the fleet.
     */
    MaximumPlayerSessionCount?: WholeNumber;
  }
  export type FleetUtilizationList = FleetUtilization[];
  export type Float = number;
  export type FreeText = string;
  export interface GameProperty {
    /**
     * The game property identifier.
     */
    Key: GamePropertyKey;
    /**
     * The game property value.
     */
    Value: GamePropertyValue;
  }
  export type GamePropertyKey = string;
  export type GamePropertyList = GameProperty[];
  export type GamePropertyValue = string;
  export interface GameServer {
    /**
     * A unique identifier for the game server group where the game server is running. Use either the GameServerGroup name or ARN value.
     */
    GameServerGroupName?: GameServerGroupName;
    /**
     * The ARN identifier for the game server group where the game server is located.
     */
    GameServerGroupArn?: GameServerGroupArn;
    /**
     * A custom string that uniquely identifies the game server. Game server IDs are developer-defined and are unique across all game server groups in an AWS account.
     */
    GameServerId?: GameServerId;
    /**
     * The unique identifier for the instance where the game server is running. This ID is available in the instance metadata. EC2 instance IDs use a 17-character format, for example: i-1234567890abcdef0.
     */
    InstanceId?: GameServerInstanceId;
    /**
     * The port and IP address that must be used to establish a client connection to the game server.
     */
    ConnectionInfo?: GameServerConnectionInfo;
    /**
     * A set of custom game server properties, formatted as a single string value. This data is passed to a game client or service when it requests information on game servers using ListGameServers or ClaimGameServer.
     */
    GameServerData?: GameServerData;
    /**
     * Indicates when an available game server has been reserved for gameplay but has not yet started hosting a game. Once it is claimed, the game server remains in CLAIMED status for a maximum of one minute. During this time, game clients connect to the game server to start the game and trigger the game server to update its utilization status. After one minute, the game server claim status reverts to null.
     */
    ClaimStatus?: GameServerClaimStatus;
    /**
     * Indicates whether the game server is currently available for new games or is busy. Possible statuses include:    AVAILABLE - The game server is available to be claimed. A game server that has been claimed remains in this status until it reports game hosting activity.     UTILIZED - The game server is currently hosting a game session with players.   
     */
    UtilizationStatus?: GameServerUtilizationStatus;
    /**
     * Timestamp that indicates when the game server was created with a RegisterGameServer request. The format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    RegistrationTime?: Timestamp;
    /**
     * Timestamp that indicates the last time the game server was claimed with a ClaimGameServer request. The format is a number expressed in Unix time as milliseconds (for example "1469498468.057"). This value is used to calculate when a claimed game server's status should revert to null.
     */
    LastClaimTime?: Timestamp;
    /**
     * Timestamp that indicates the last time the game server was updated with health status using an UpdateGameServer request. The format is a number expressed in Unix time as milliseconds (for example "1469498468.057"). After game server registration, this property is only changed when a game server update specifies a health check value.
     */
    LastHealthCheckTime?: Timestamp;
  }
  export type GameServerClaimStatus = "CLAIMED"|string;
  export type GameServerConnectionInfo = string;
  export type GameServerData = string;
  export interface GameServerGroup {
    /**
     * A developer-defined identifier for the game server group. The name is unique for each Region in each AWS account.
     */
    GameServerGroupName?: GameServerGroupName;
    /**
     * A generated unique ID for the game server group.
     */
    GameServerGroupArn?: GameServerGroupArn;
    /**
     * The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access your EC2 Auto Scaling groups.
     */
    RoleArn?: IamRoleArn;
    /**
     * The set of EC2 instance types that GameLift FleetIQ can use when balancing and automatically scaling instances in the corresponding Auto Scaling group. 
     */
    InstanceDefinitions?: InstanceDefinitions;
    /**
     * Indicates how GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances in the game server group. Method options include the following:    SPOT_ONLY - Only Spot Instances are used in the game server group. If Spot Instances are unavailable or not viable for game hosting, the game server group provides no hosting capacity until Spot Instances can again be used. Until then, no new instances are started, and the existing nonviable Spot Instances are terminated (after current gameplay ends) and are not replaced.    SPOT_PREFERRED - (default value) Spot Instances are used whenever available in the game server group. If Spot Instances are unavailable, the game server group continues to provide hosting capacity by falling back to On-Demand Instances. Existing nonviable Spot Instances are terminated (after current gameplay ends) and are replaced with new On-Demand Instances.    ON_DEMAND_ONLY - Only On-Demand Instances are used in the game server group. No Spot Instances are used, even when available, while this balancing strategy is in force.  
     */
    BalancingStrategy?: BalancingStrategy;
    /**
     * A flag that indicates whether instances in the game server group are protected from early termination. Unprotected instances that have active game servers running might be terminated during a scale-down event, causing players to be dropped from the game. Protected instances cannot be terminated while there are active game servers running except in the event of a forced game server group deletion (see ). An exception to this is with Spot Instances, which can be terminated by AWS regardless of protection status. 
     */
    GameServerProtectionPolicy?: GameServerProtectionPolicy;
    /**
     * A generated unique ID for the EC2 Auto Scaling group that is associated with this game server group.
     */
    AutoScalingGroupArn?: AutoScalingGroupArn;
    /**
     * The current status of the game server group. Possible statuses include:    NEW - GameLift FleetIQ has validated the CreateGameServerGroup() request.     ACTIVATING - GameLift FleetIQ is setting up a game server group, which includes creating an Auto Scaling group in your AWS account.     ACTIVE - The game server group has been successfully created.     DELETE_SCHEDULED - A request to delete the game server group has been received.     DELETING - GameLift FleetIQ has received a valid DeleteGameServerGroup() request and is processing it. GameLift FleetIQ must first complete and release hosts before it deletes the Auto Scaling group and the game server group.     DELETED - The game server group has been successfully deleted.     ERROR - The asynchronous processes of activating or deleting a game server group has failed, resulting in an error state.  
     */
    Status?: GameServerGroupStatus;
    /**
     * Additional information about the current game server group status. This information might provide additional insight on groups that are in ERROR status.
     */
    StatusReason?: NonZeroAndMaxString;
    /**
     * A list of activities that are currently suspended for this game server group. If this property is empty, all activities are occurring.
     */
    SuspendedActions?: GameServerGroupActions;
    /**
     * A timestamp that indicates when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    CreationTime?: Timestamp;
    /**
     * A timestamp that indicates when this game server group was last updated.
     */
    LastUpdatedTime?: Timestamp;
  }
  export type GameServerGroupAction = "REPLACE_INSTANCE_TYPES"|string;
  export type GameServerGroupActions = GameServerGroupAction[];
  export type GameServerGroupArn = string;
  export interface GameServerGroupAutoScalingPolicy {
    /**
     * Length of time, in seconds, it takes for a new instance to start new game server processes and register with GameLift FleetIQ. Specifying a warm-up time can be useful, particularly with game servers that take a long time to start up, because it avoids prematurely starting new instances. 
     */
    EstimatedInstanceWarmup?: PositiveInteger;
    /**
     * Settings for a target-based scaling policy applied to Auto Scaling group. These settings are used to create a target-based policy that tracks the GameLift FleetIQ metric "PercentUtilizedGameServers" and specifies a target value for the metric. As player usage changes, the policy triggers to adjust the game server group capacity so that the metric returns to the target value. 
     */
    TargetTrackingConfiguration: TargetTrackingConfiguration;
  }
  export type GameServerGroupDeleteOption = "SAFE_DELETE"|"FORCE_DELETE"|"RETAIN"|string;
  export type GameServerGroupInstanceType = "c4.large"|"c4.xlarge"|"c4.2xlarge"|"c4.4xlarge"|"c4.8xlarge"|"c5.large"|"c5.xlarge"|"c5.2xlarge"|"c5.4xlarge"|"c5.9xlarge"|"c5.12xlarge"|"c5.18xlarge"|"c5.24xlarge"|"r4.large"|"r4.xlarge"|"r4.2xlarge"|"r4.4xlarge"|"r4.8xlarge"|"r4.16xlarge"|"r5.large"|"r5.xlarge"|"r5.2xlarge"|"r5.4xlarge"|"r5.8xlarge"|"r5.12xlarge"|"r5.16xlarge"|"r5.24xlarge"|"m4.large"|"m4.xlarge"|"m4.2xlarge"|"m4.4xlarge"|"m4.10xlarge"|"m5.large"|"m5.xlarge"|"m5.2xlarge"|"m5.4xlarge"|"m5.8xlarge"|"m5.12xlarge"|"m5.16xlarge"|"m5.24xlarge"|string;
  export type GameServerGroupName = string;
  export type GameServerGroupNameOrArn = string;
  export type GameServerGroupStatus = "NEW"|"ACTIVATING"|"ACTIVE"|"DELETE_SCHEDULED"|"DELETING"|"DELETED"|"ERROR"|string;
  export type GameServerGroups = GameServerGroup[];
  export type GameServerHealthCheck = "HEALTHY"|string;
  export type GameServerId = string;
  export interface GameServerInstance {
    /**
     * A developer-defined identifier for the game server group that includes the game server instance. The name is unique for each Region in each AWS account.
     */
    GameServerGroupName?: GameServerGroupName;
    /**
     * A generated unique identifier for the game server group that includes the game server instance. 
     */
    GameServerGroupArn?: GameServerGroupArn;
    /**
     * The unique identifier for the instance where the game server is running. This ID is available in the instance metadata. EC2 instance IDs use a 17-character format, for example: i-1234567890abcdef0.
     */
    InstanceId?: GameServerInstanceId;
    /**
     *  Current status of the game server instance.     ACTIVE -- The instance is viable for hosting game servers.     DRAINING -- The instance is not viable for hosting game servers. Existing game servers are in the process of ending, and new game servers are not started on this instance unless no other resources are available. When the instance is put in DRAINING, a new instance is started up to replace it. Once the instance has no UTILIZED game servers, it will be terminated in favor of the new instance.    SPOT_TERMINATING -- The instance is in the process of shutting down due to a Spot instance interruption. No new game servers are started on this instance.  
     */
    InstanceStatus?: GameServerInstanceStatus;
  }
  export type GameServerInstanceId = string;
  export type GameServerInstanceIds = GameServerInstanceId[];
  export type GameServerInstanceStatus = "ACTIVE"|"DRAINING"|"SPOT_TERMINATING"|string;
  export type GameServerInstances = GameServerInstance[];
  export type GameServerProtectionPolicy = "NO_PROTECTION"|"FULL_PROTECTION"|string;
  export type GameServerUtilizationStatus = "AVAILABLE"|"UTILIZED"|string;
  export type GameServers = GameServer[];
  export interface GameSession {
    /**
     * A unique identifier for the game session. A game session ARN has the following format: arn:aws:gamelift:&lt;region&gt;::gamesession/&lt;fleet ID&gt;/&lt;custom ID string or idempotency token&gt;.
     */
    GameSessionId?: NonZeroAndMaxString;
    /**
     * A descriptive label that is associated with a game session. Session names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
    /**
     * A unique identifier for a fleet that the game session is running on.
     */
    FleetId?: FleetId;
    /**
     *  The Amazon Resource Name (ARN) associated with the GameLift fleet that this game session is running on. 
     */
    FleetArn?: FleetArn;
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
     * The maximum number of players that can be connected simultaneously to the game session.
     */
    MaximumPlayerSessionCount?: WholeNumber;
    /**
     * Current status of the game session. A game session must have an ACTIVE status to have player sessions.
     */
    Status?: GameSessionStatus;
    /**
     * Provides additional information about game session status. INTERRUPTED indicates that the game session was hosted on a spot instance that was reclaimed, causing the active game session to be terminated.
     */
    StatusReason?: GameSessionStatusReason;
    /**
     * Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the GameSession object with a request to start a new game session (see Start a Game Session). You can search for active game sessions based on this custom data with SearchGameSessions.
     */
    GameProperties?: GamePropertyList;
    /**
     * IP address of the instance that is running the game session. When connecting to a Amazon GameLift game server, a client needs to reference an IP address (or DNS name) and port number.
     */
    IpAddress?: IpAddress;
    /**
     * DNS identifier assigned to the instance that is running the game session. Values have the following format:   TLS-enabled fleets: &lt;unique identifier&gt;.&lt;region identifier&gt;.amazongamelift.com.   Non-TLS-enabled fleets: ec2-&lt;unique identifier&gt;.compute.amazonaws.com. (See Amazon EC2 Instance IP Addressing.)   When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.
     */
    DnsName?: DnsName;
    /**
     * Port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.
     */
    Port?: PortNumber;
    /**
     * Indicates whether or not the game session is accepting new players.
     */
    PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy;
    /**
     * A unique identifier for a player. This ID is used to enforce a resource protection policy (if one exists), that limits the number of game sessions a player can create.
     */
    CreatorId?: NonZeroAndMaxString;
    /**
     * Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the GameSession object with a request to start a new game session (see Start a Game Session).
     */
    GameSessionData?: GameSessionData;
    /**
     * Information about the matchmaking process that was used to create the game session. It is in JSON syntax, formatted as a string. In addition the matchmaking configuration used, it contains data on all players assigned to the match, including player attributes and team assignments. For more details on matchmaker data, see Match Data. Matchmaker data is useful when requesting match backfills, and is updated whenever new players are added during a successful backfill (see StartMatchBackfill). 
     */
    MatchmakerData?: MatchmakerData;
  }
  export type GameSessionActivationTimeoutSeconds = number;
  export interface GameSessionConnectionInfo {
    /**
     * Amazon Resource Name (ARN) that is assigned to a game session and uniquely identifies it.
     */
    GameSessionArn?: ArnStringModel;
    /**
     * IP address of the instance that is running the game session. When connecting to a Amazon GameLift game server, a client needs to reference an IP address (or DNS name) and port number.
     */
    IpAddress?: StringModel;
    /**
     * DNS identifier assigned to the instance that is running the game session. Values have the following format:   TLS-enabled fleets: &lt;unique identifier&gt;.&lt;region identifier&gt;.amazongamelift.com.   Non-TLS-enabled fleets: ec2-&lt;unique identifier&gt;.compute.amazonaws.com. (See Amazon EC2 Instance IP Addressing.)   When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.
     */
    DnsName?: DnsName;
    /**
     * Port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.
     */
    Port?: PositiveInteger;
    /**
     * A collection of player session IDs, one for each player ID that was included in the original matchmaking request. 
     */
    MatchedPlayerSessions?: MatchedPlayerSessionList;
  }
  export type GameSessionData = string;
  export interface GameSessionDetail {
    /**
     * Object that describes a game session.
     */
    GameSession?: GameSession;
    /**
     * Current status of protection for the game session.    NoProtection -- The game session can be terminated during a scale-down event.    FullProtection -- If the game session is in an ACTIVE status, it cannot be terminated during a scale-down event.  
     */
    ProtectionPolicy?: ProtectionPolicy;
  }
  export type GameSessionDetailList = GameSessionDetail[];
  export type GameSessionList = GameSession[];
  export interface GameSessionPlacement {
    /**
     * A unique identifier for a game session placement.
     */
    PlacementId?: IdStringModel;
    /**
     * A descriptive label that is associated with game session queue. Queue names must be unique within each Region.
     */
    GameSessionQueueName?: GameSessionQueueName;
    /**
     * Current status of the game session placement request.    PENDING -- The placement request is currently in the queue waiting to be processed.    FULFILLED -- A new game session and player sessions (if requested) have been successfully created. Values for GameSessionArn and GameSessionRegion are available.     CANCELLED -- The placement request was canceled with a call to StopGameSessionPlacement.    TIMED_OUT -- A new game session was not successfully created before the time limit expired. You can resubmit the placement request as needed.    FAILED -- GameLift is not able to complete the process of placing the game session. Common reasons are the game session terminated before the placement process was completed, or an unexpected internal error.  
     */
    Status?: GameSessionPlacementState;
    /**
     * Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the GameSession object with a request to start a new game session (see Start a Game Session).
     */
    GameProperties?: GamePropertyList;
    /**
     * The maximum number of players that can be connected simultaneously to the game session.
     */
    MaximumPlayerSessionCount?: WholeNumber;
    /**
     * A descriptive label that is associated with a game session. Session names do not need to be unique.
     */
    GameSessionName?: NonZeroAndMaxString;
    /**
     * A unique identifier for the game session. This value is set once the new game session is placed (placement status is FULFILLED).
     */
    GameSessionId?: NonZeroAndMaxString;
    /**
     * Identifier for the game session created by this placement request. This value is set once the new game session is placed (placement status is FULFILLED). This identifier is unique across all Regions. You can use this value as a GameSessionId value as needed.
     */
    GameSessionArn?: NonZeroAndMaxString;
    /**
     * Name of the Region where the game session created by this placement request is running. This value is set once the new game session is placed (placement status is FULFILLED).
     */
    GameSessionRegion?: NonZeroAndMaxString;
    /**
     * Set of values, expressed in milliseconds, indicating the amount of latency that a player experiences when connected to AWS Regions.
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
     * IP address of the instance that is running the game session. When connecting to a Amazon GameLift game server, a client needs to reference an IP address (or DNS name) and port number. This value is set once the new game session is placed (placement status is FULFILLED). 
     */
    IpAddress?: IpAddress;
    /**
     * DNS identifier assigned to the instance that is running the game session. Values have the following format:   TLS-enabled fleets: &lt;unique identifier&gt;.&lt;region identifier&gt;.amazongamelift.com.   Non-TLS-enabled fleets: ec2-&lt;unique identifier&gt;.compute.amazonaws.com. (See Amazon EC2 Instance IP Addressing.)   When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.
     */
    DnsName?: DnsName;
    /**
     * Port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number. This value is set once the new game session is placed (placement status is FULFILLED).
     */
    Port?: PortNumber;
    /**
     * A collection of information on player sessions created in response to the game session placement request. These player sessions are created only once a new game session is successfully placed (placement status is FULFILLED). This information includes the player ID (as provided in the placement request) and the corresponding player session ID. Retrieve full player sessions by calling DescribePlayerSessions with the player session ID.
     */
    PlacedPlayerSessions?: PlacedPlayerSessionList;
    /**
     * Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the GameSession object with a request to start a new game session (see Start a Game Session).
     */
    GameSessionData?: GameSessionData;
    /**
     * Information on the matchmaking process for this game. Data is in JSON syntax, formatted as a string. It identifies the matchmaking configuration used to create the match, and contains data on all players assigned to the match, including player attributes and team assignments. For more details on matchmaker data, see Match Data.
     */
    MatchmakerData?: MatchmakerData;
  }
  export type GameSessionPlacementState = "PENDING"|"FULFILLED"|"CANCELLED"|"TIMED_OUT"|"FAILED"|string;
  export interface GameSessionQueue {
    /**
     * A descriptive label that is associated with game session queue. Queue names must be unique within each Region.
     */
    Name?: GameSessionQueueName;
    /**
     * Amazon Resource Name (ARN) that is assigned to a GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift game session queue ARN, the resource ID matches the Name value.
     */
    GameSessionQueueArn?: GameSessionQueueArn;
    /**
     * The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a TIMED_OUT status.
     */
    TimeoutInSeconds?: WholeNumber;
    /**
     * A collection of latency policies to apply when processing game sessions placement requests with player latency information. Multiple policies are evaluated in order of the maximum latency value, starting with the lowest latency values. With just one policy, the policy is enforced at the start of the game session placement for the duration period. With multiple policies, each policy is enforced consecutively for its duration period. For example, a queue might enforce a 60-second policy followed by a 120-second policy, and then no policy for the remainder of the placement. 
     */
    PlayerLatencyPolicies?: PlayerLatencyPolicyList;
    /**
     * A list of fleets that can be used to fulfill game session placement requests in the queue. Fleets are identified by either a fleet ARN or a fleet alias ARN. Destinations are listed in default preference order.
     */
    Destinations?: GameSessionQueueDestinationList;
  }
  export type GameSessionQueueArn = string;
  export interface GameSessionQueueDestination {
    /**
     * The Amazon Resource Name (ARN) that is assigned to fleet or fleet alias. ARNs, which include a fleet ID or alias ID and a Region name, provide a unique identifier across all Regions. 
     */
    DestinationArn?: ArnStringModel;
  }
  export type GameSessionQueueDestinationList = GameSessionQueueDestination[];
  export type GameSessionQueueList = GameSessionQueue[];
  export type GameSessionQueueName = string;
  export type GameSessionQueueNameOrArn = string;
  export type GameSessionQueueNameOrArnList = GameSessionQueueNameOrArn[];
  export type GameSessionStatus = "ACTIVE"|"ACTIVATING"|"TERMINATED"|"TERMINATING"|"ERROR"|string;
  export type GameSessionStatusReason = "INTERRUPTED"|string;
  export interface GetGameSessionLogUrlInput {
    /**
     * A unique identifier for the game session to get logs for. 
     */
    GameSessionId: ArnStringModel;
  }
  export interface GetGameSessionLogUrlOutput {
    /**
     * Location of the requested game session logs, available for download. This URL is valid for 15 minutes, after which S3 will reject any download request using this URL. You can request a new URL any time within the 14-day period that the logs are retained.
     */
    PreSignedUrl?: NonZeroAndMaxString;
  }
  export interface GetInstanceAccessInput {
    /**
     * A unique identifier for a fleet that contains the instance you want access to. You can use either the fleet ID or ARN value. The fleet can be in any of the following statuses: ACTIVATING, ACTIVE, or ERROR. Fleets with an ERROR status may be accessible for a short time before they are deleted.
     */
    FleetId: FleetIdOrArn;
    /**
     * A unique identifier for an instance you want to get access to. You can access an instance in any status.
     */
    InstanceId: InstanceId;
  }
  export interface GetInstanceAccessOutput {
    /**
     * The connection information for a fleet instance, including IP address and access credentials.
     */
    InstanceAccess?: InstanceAccess;
  }
  export type IamRoleArn = string;
  export type IdStringModel = string;
  export interface Instance {
    /**
     * A unique identifier for a fleet that the instance is in.
     */
    FleetId?: FleetId;
    /**
     * A unique identifier for an instance.
     */
    InstanceId?: InstanceId;
    /**
     * IP address that is assigned to the instance.
     */
    IpAddress?: IpAddress;
    /**
     * DNS identifier assigned to the instance that is running the game session. Values have the following format:   TLS-enabled fleets: &lt;unique identifier&gt;.&lt;region identifier&gt;.amazongamelift.com.   Non-TLS-enabled fleets: ec2-&lt;unique identifier&gt;.compute.amazonaws.com. (See Amazon EC2 Instance IP Addressing.)   When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.
     */
    DnsName?: DnsName;
    /**
     * Operating system that is running on this instance. 
     */
    OperatingSystem?: OperatingSystem;
    /**
     * EC2 instance type that defines the computing resources of this instance. 
     */
    Type?: EC2InstanceType;
    /**
     * Current status of the instance. Possible statuses include the following:    PENDING -- The instance is in the process of being created and launching server processes as defined in the fleet's run-time configuration.     ACTIVE -- The instance has been successfully created and at least one server process has successfully launched and reported back to Amazon GameLift that it is ready to host a game session. The instance is now considered ready to host game sessions.     TERMINATING -- The instance is in the process of shutting down. This may happen to reduce capacity during a scaling down event or to recycle resources in the event of a problem.  
     */
    Status?: InstanceStatus;
    /**
     * Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    CreationTime?: Timestamp;
  }
  export interface InstanceAccess {
    /**
     * A unique identifier for a fleet containing the instance being accessed.
     */
    FleetId?: FleetId;
    /**
     * A unique identifier for an instance being accessed.
     */
    InstanceId?: InstanceId;
    /**
     * IP address that is assigned to the instance.
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
  export interface InstanceDefinition {
    /**
     * An EC2 instance type designation.
     */
    InstanceType: GameServerGroupInstanceType;
    /**
     * Instance weighting that indicates how much this instance type contributes to the total capacity of a game server group. Instance weights are used by GameLift FleetIQ to calculate the instance type's cost per unit hour and better identify the most cost-effective options. For detailed information on weighting instance capacity, see Instance Weighting in the Amazon EC2 Auto Scaling User Guide. Default value is "1".
     */
    WeightedCapacity?: WeightedCapacity;
  }
  export type InstanceDefinitions = InstanceDefinition[];
  export type InstanceId = string;
  export type InstanceList = Instance[];
  export type InstanceStatus = "PENDING"|"ACTIVE"|"TERMINATING"|string;
  export type Integer = number;
  export type IpAddress = string;
  export interface IpPermission {
    /**
     * A starting value for a range of allowed port numbers.
     */
    FromPort: PortNumber;
    /**
     * An ending value for a range of allowed port numbers. Port numbers are end-inclusive. This value must be higher than FromPort.
     */
    ToPort: PortNumber;
    /**
     * A range of allowed IP addresses. This value must be expressed in CIDR notation. Example: "000.000.000.000/[subnet mask]" or optionally the shortened version "0.0.0.0/[subnet mask]".
     */
    IpRange: NonBlankString;
    /**
     * The network communication protocol used by the fleet.
     */
    Protocol: IpProtocol;
  }
  export type IpPermissionsList = IpPermission[];
  export type IpProtocol = "TCP"|"UDP"|string;
  export type LatencyMap = {[key: string]: PositiveInteger};
  export type LaunchTemplateId = string;
  export type LaunchTemplateName = string;
  export interface LaunchTemplateSpecification {
    /**
     * A unique identifier for an existing EC2 launch template.
     */
    LaunchTemplateId?: LaunchTemplateId;
    /**
     * A readable identifier for an existing EC2 launch template. 
     */
    LaunchTemplateName?: LaunchTemplateName;
    /**
     * The version of the EC2 launch template to use. If no version is specified, the default version will be used. With Amazon EC2, you can specify a default version for a launch template. If none is set, the default is the first version created.
     */
    Version?: LaunchTemplateVersion;
  }
  export type LaunchTemplateVersion = string;
  export interface ListAliasesInput {
    /**
     * The routing type to filter results on. Use this parameter to retrieve only aliases with a certain routing type. To retrieve all aliases, leave this parameter empty. Possible routing types include the following:    SIMPLE -- The alias resolves to one specific fleet. Use this type when routing to active fleets.    TERMINAL -- The alias does not resolve to a fleet but instead can be used to display a message to the user. A terminal alias throws a TerminalRoutingStrategyException with the RoutingStrategy message embedded.  
     */
    RoutingStrategyType?: RoutingStrategyType;
    /**
     * A descriptive label that is associated with an alias. Alias names do not need to be unique.
     */
    Name?: NonEmptyString;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
     */
    NextToken?: NonEmptyString;
  }
  export interface ListAliasesOutput {
    /**
     * A collection of alias resources that match the request parameters.
     */
    Aliases?: AliasList;
    /**
     * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonEmptyString;
  }
  export interface ListBuildsInput {
    /**
     * Build status to filter results by. To retrieve all builds, leave this parameter empty. Possible build statuses include the following:    INITIALIZED -- A new build has been defined, but no files have been uploaded. You cannot create fleets for builds that are in this status. When a build is successfully created, the build status is set to this value.     READY -- The game build has been successfully uploaded. You can now create new fleets for this build.    FAILED -- The game build upload failed. You cannot create new fleets for this build.   
     */
    Status?: BuildStatus;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
     */
    NextToken?: NonEmptyString;
  }
  export interface ListBuildsOutput {
    /**
     * A collection of build resources that match the request.
     */
    Builds?: BuildList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonEmptyString;
  }
  export interface ListFleetsInput {
    /**
     * A unique identifier for a build to return fleets for. Use this parameter to return only fleets using a specified build. Use either the build ID or ARN value. To retrieve all fleets, do not include either a BuildId and ScriptID parameter.
     */
    BuildId?: BuildIdOrArn;
    /**
     * A unique identifier for a Realtime script to return fleets for. Use this parameter to return only fleets using a specified script. Use either the script ID or ARN value. To retrieve all fleets, leave this parameter empty.
     */
    ScriptId?: ScriptIdOrArn;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface ListFleetsOutput {
    /**
     * Set of fleet IDs matching the list request. You can retrieve additional information about all returned fleets by passing this result set to a call to DescribeFleetAttributes, DescribeFleetCapacity, or DescribeFleetUtilization.
     */
    FleetIds?: FleetIdList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface ListGameServerGroupsInput {
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential segments.
     */
    Limit?: PositiveInteger;
    /**
     * A token that indicates the start of the next sequential segment of results. Use the token returned with the previous call to this operation. To start at the beginning of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface ListGameServerGroupsOutput {
    /**
     * A collection of game server group objects that match the request.
     */
    GameServerGroups?: GameServerGroups;
    /**
     * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface ListGameServersInput {
    /**
     * An identifier for the game server group to retrieve a list of game servers from. Use either the GameServerGroup name or ARN value.
     */
    GameServerGroupName: GameServerGroupNameOrArn;
    /**
     * Indicates how to sort the returned data based on game server registration timestamp. Use ASCENDING to retrieve oldest game servers first, or use DESCENDING to retrieve newest game servers first. If this parameter is left empty, game servers are returned in no particular order.
     */
    SortOrder?: SortOrder;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential segments.
     */
    Limit?: PositiveInteger;
    /**
     * A token that indicates the start of the next sequential segment of results. Use the token returned with the previous call to this operation. To start at the beginning of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface ListGameServersOutput {
    /**
     * A collection of game server objects that match the request.
     */
    GameServers?: GameServers;
    /**
     * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface ListScriptsInput {
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    Limit?: PositiveInteger;
    /**
     * A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
     */
    NextToken?: NonEmptyString;
  }
  export interface ListScriptsOutput {
    /**
     * A set of properties describing the requested script.
     */
    Scripts?: ScriptList;
    /**
     * A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonEmptyString;
  }
  export interface ListTagsForResourceRequest {
    /**
     *  The Amazon Resource Name (ARN) that is assigned to and uniquely identifies the GameLift resource that you want to retrieve tags for. GameLift resource ARNs are included in the data object for the resource, which can be retrieved by calling a List or Describe operation for the resource type. 
     */
    ResourceARN: AmazonResourceName;
  }
  export interface ListTagsForResourceResponse {
    /**
     *  The collection of tags that have been assigned to the specified resource. 
     */
    Tags?: TagList;
  }
  export interface MatchedPlayerSession {
    /**
     * A unique identifier for a player 
     */
    PlayerId?: NonZeroAndMaxString;
    /**
     * A unique identifier for a player session
     */
    PlayerSessionId?: PlayerSessionId;
  }
  export type MatchedPlayerSessionList = MatchedPlayerSession[];
  export type MatchmakerData = string;
  export type MatchmakingAcceptanceTimeoutInteger = number;
  export interface MatchmakingConfiguration {
    /**
     * A unique identifier for a matchmaking configuration. This name is used to identify the configuration associated with a matchmaking request or ticket.
     */
    Name?: MatchmakingIdStringModel;
    /**
     * Amazon Resource Name (ARN) that is assigned to a GameLift matchmaking configuration resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift configuration ARN, the resource ID matches the Name value.
     */
    ConfigurationArn?: MatchmakingConfigurationArn;
    /**
     * A descriptive label that is associated with matchmaking configuration.
     */
    Description?: NonZeroAndMaxString;
    /**
     * Amazon Resource Name (ARN) that is assigned to a GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. GameLift uses the listed queues when placing game sessions for matches that are created with this matchmaking configuration. Queues can be located in any Region.
     */
    GameSessionQueueArns?: QueueArnsList;
    /**
     * The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out. Requests that fail due to timing out can be resubmitted as needed.
     */
    RequestTimeoutSeconds?: MatchmakingRequestTimeoutInteger;
    /**
     * The length of time (in seconds) to wait for players to accept a proposed match. If any player rejects the match or fails to accept before the timeout, the ticket continues to look for an acceptable match.
     */
    AcceptanceTimeoutSeconds?: MatchmakingAcceptanceTimeoutInteger;
    /**
     * A flag that indicates whether a match that was created with this configuration must be accepted by the matched players. To require acceptance, set to TRUE.
     */
    AcceptanceRequired?: BooleanModel;
    /**
     * A unique identifier for a matchmaking rule set to use with this configuration. A matchmaking configuration can only use rule sets that are defined in the same Region.
     */
    RuleSetName?: MatchmakingIdStringModel;
    /**
     * The Amazon Resource Name (ARN) associated with the GameLift matchmaking rule set resource that this configuration uses.
     */
    RuleSetArn?: MatchmakingRuleSetArn;
    /**
     * An SNS topic ARN that is set up to receive matchmaking notifications.
     */
    NotificationTarget?: SnsArnStringModel;
    /**
     * The number of player slots in a match to keep open for future players. For example, assume that the configuration's rule set specifies a match for a single 12-person team. If the additional player count is set to 2, only 10 players are initially selected for the match.
     */
    AdditionalPlayerCount?: WholeNumber;
    /**
     * Information to attach to all events related to the matchmaking configuration. 
     */
    CustomEventData?: CustomEventData;
    /**
     * The time stamp indicating when this data object was created. The format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    CreationTime?: Timestamp;
    /**
     * A set of custom properties for a game session, formatted as key-value pairs. These properties are passed to a game server process in the GameSession object with a request to start a new game session (see Start a Game Session). This information is added to the new GameSession object that is created for a successful match. 
     */
    GameProperties?: GamePropertyList;
    /**
     * A set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the GameSession object with a request to start a new game session (see Start a Game Session). This information is added to the new GameSession object that is created for a successful match. 
     */
    GameSessionData?: GameSessionData;
    /**
     * The method used to backfill game sessions created with this matchmaking configuration. MANUAL indicates that the game makes backfill requests or does not use the match backfill feature. AUTOMATIC indicates that GameLift creates StartMatchBackfill requests whenever a game session has one or more open slots. Learn more about manual and automatic backfill in Backfill Existing Games with FlexMatch.
     */
    BackfillMode?: BackfillMode;
  }
  export type MatchmakingConfigurationArn = string;
  export type MatchmakingConfigurationList = MatchmakingConfiguration[];
  export type MatchmakingConfigurationName = string;
  export type MatchmakingConfigurationNameList = MatchmakingConfigurationName[];
  export type MatchmakingConfigurationStatus = "CANCELLED"|"COMPLETED"|"FAILED"|"PLACING"|"QUEUED"|"REQUIRES_ACCEPTANCE"|"SEARCHING"|"TIMED_OUT"|string;
  export type MatchmakingIdList = MatchmakingIdStringModel[];
  export type MatchmakingIdStringModel = string;
  export type MatchmakingRequestTimeoutInteger = number;
  export interface MatchmakingRuleSet {
    /**
     * A unique identifier for a matchmaking rule set
     */
    RuleSetName?: MatchmakingIdStringModel;
    /**
     * Amazon Resource Name (ARN) that is assigned to a GameLift matchmaking rule set resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift rule set ARN, the resource ID matches the RuleSetName value.
     */
    RuleSetArn?: MatchmakingRuleSetArn;
    /**
     * A collection of matchmaking rules, formatted as a JSON string. Comments are not allowed in JSON, but most elements support a description field.
     */
    RuleSetBody: RuleSetBody;
    /**
     * The time stamp indicating when this data object was created. The format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    CreationTime?: Timestamp;
  }
  export type MatchmakingRuleSetArn = string;
  export type MatchmakingRuleSetList = MatchmakingRuleSet[];
  export type MatchmakingRuleSetName = string;
  export type MatchmakingRuleSetNameList = MatchmakingRuleSetName[];
  export interface MatchmakingTicket {
    /**
     * A unique identifier for a matchmaking ticket.
     */
    TicketId?: MatchmakingIdStringModel;
    /**
     * Name of the MatchmakingConfiguration that is used with this ticket. Matchmaking configurations determine how players are grouped into a match and how a new game session is created for the match.
     */
    ConfigurationName?: MatchmakingIdStringModel;
    /**
     * The Amazon Resource Name (ARN) associated with the GameLift matchmaking configuration resource that is used with this ticket.
     */
    ConfigurationArn?: MatchmakingConfigurationArn;
    /**
     * Current status of the matchmaking request.    QUEUED -- The matchmaking request has been received and is currently waiting to be processed.    SEARCHING -- The matchmaking request is currently being processed.     REQUIRES_ACCEPTANCE -- A match has been proposed and the players must accept the match (see AcceptMatch). This status is used only with requests that use a matchmaking configuration with a player acceptance requirement.    PLACING -- The FlexMatch engine has matched players and is in the process of placing a new game session for the match.    COMPLETED -- Players have been matched and a game session is ready to host the players. A ticket in this state contains the necessary connection information for players.    FAILED -- The matchmaking request was not completed.    CANCELLED -- The matchmaking request was canceled. This may be the result of a call to StopMatchmaking or a proposed match that one or more players failed to accept.    TIMED_OUT -- The matchmaking request was not successful within the duration specified in the matchmaking configuration.     Matchmaking requests that fail to successfully complete (statuses FAILED, CANCELLED, TIMED_OUT) can be resubmitted as new requests with new ticket IDs. 
     */
    Status?: MatchmakingConfigurationStatus;
    /**
     * Code to explain the current status. For example, a status reason may indicate when a ticket has returned to SEARCHING status after a proposed match fails to receive player acceptances.
     */
    StatusReason?: StringModel;
    /**
     * Additional information about the current status.
     */
    StatusMessage?: StringModel;
    /**
     * Time stamp indicating when this matchmaking request was received. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    StartTime?: Timestamp;
    /**
     * Time stamp indicating when this matchmaking request stopped being processed due to success, failure, or cancellation. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    EndTime?: Timestamp;
    /**
     * A set of Player objects, each representing a player to find matches for. Players are identified by a unique player ID and may include latency data for use during matchmaking. If the ticket is in status COMPLETED, the Player objects include the team the players were assigned to in the resulting match.
     */
    Players?: PlayerList;
    /**
     * Identifier and connection information of the game session created for the match. This information is added to the ticket only after the matchmaking request has been successfully completed.
     */
    GameSessionConnectionInfo?: GameSessionConnectionInfo;
    /**
     * Average amount of time (in seconds) that players are currently waiting for a match. If there is not enough recent data, this property may be empty.
     */
    EstimatedWaitTime?: WholeNumber;
  }
  export type MatchmakingTicketList = MatchmakingTicket[];
  export type MaxConcurrentGameSessionActivations = number;
  export type MetricGroup = string;
  export type MetricGroupList = MetricGroup[];
  export type MetricName = "ActivatingGameSessions"|"ActiveGameSessions"|"ActiveInstances"|"AvailableGameSessions"|"AvailablePlayerSessions"|"CurrentPlayerSessions"|"IdleInstances"|"PercentAvailableGameSessions"|"PercentIdleInstances"|"QueueDepth"|"WaitTime"|string;
  export type NonBlankAndLengthConstraintString = string;
  export type NonBlankString = string;
  export type NonEmptyString = string;
  export type NonNegativeDouble = number;
  export type NonZeroAndMaxString = string;
  export type OperatingSystem = "WINDOWS_2012"|"AMAZON_LINUX"|"AMAZON_LINUX_2"|string;
  export interface PlacedPlayerSession {
    /**
     * A unique identifier for a player that is associated with this player session.
     */
    PlayerId?: NonZeroAndMaxString;
    /**
     * A unique identifier for a player session.
     */
    PlayerSessionId?: PlayerSessionId;
  }
  export type PlacedPlayerSessionList = PlacedPlayerSession[];
  export interface Player {
    /**
     * A unique identifier for a player
     */
    PlayerId?: NonZeroAndMaxString;
    /**
     * A collection of key:value pairs containing player information for use in matchmaking. Player attribute keys must match the playerAttributes used in a matchmaking rule set. Example: "PlayerAttributes": {"skill": {"N": "23"}, "gameMode": {"S": "deathmatch"}}.
     */
    PlayerAttributes?: PlayerAttributeMap;
    /**
     * Name of the team that the player is assigned to in a match. Team names are defined in a matchmaking rule set.
     */
    Team?: NonZeroAndMaxString;
    /**
     * Set of values, expressed in milliseconds, indicating the amount of latency that a player experiences when connected to AWS Regions. If this property is present, FlexMatch considers placing the match only in Regions for which latency is reported.  If a matchmaker has a rule that evaluates player latency, players must report latency in order to be matched. If no latency is reported in this scenario, FlexMatch assumes that no Regions are available to the player and the ticket is not matchable. 
     */
    LatencyInMs?: LatencyMap;
  }
  export type PlayerAttributeMap = {[key: string]: AttributeValue};
  export type PlayerData = string;
  export type PlayerDataMap = {[key: string]: PlayerData};
  export type PlayerIdList = NonZeroAndMaxString[];
  export interface PlayerLatency {
    /**
     * A unique identifier for a player associated with the latency data.
     */
    PlayerId?: NonZeroAndMaxString;
    /**
     * Name of the Region that is associated with the latency value.
     */
    RegionIdentifier?: NonZeroAndMaxString;
    /**
     * Amount of time that represents the time lag experienced by the player when connected to the specified Region.
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
  export type PlayerList = Player[];
  export interface PlayerSession {
    /**
     * A unique identifier for a player session.
     */
    PlayerSessionId?: PlayerSessionId;
    /**
     * A unique identifier for a player that is associated with this player session.
     */
    PlayerId?: NonZeroAndMaxString;
    /**
     * A unique identifier for the game session that the player session is connected to.
     */
    GameSessionId?: NonZeroAndMaxString;
    /**
     * A unique identifier for a fleet that the player's game session is running on.
     */
    FleetId?: FleetId;
    /**
     *  The Amazon Resource Name (ARN) associated with the GameLift fleet that the player's game session is running on. 
     */
    FleetArn?: FleetArn;
    /**
     * Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    CreationTime?: Timestamp;
    /**
     * Time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    TerminationTime?: Timestamp;
    /**
     * Current status of the player session. Possible player session statuses include the following:    RESERVED -- The player session request has been received, but the player has not yet connected to the server process and/or been validated.     ACTIVE -- The player has been validated by the server process and is currently connected.    COMPLETED -- The player connection has been dropped.    TIMEDOUT -- A player session request was received, but the player did not connect and/or was not validated within the timeout limit (60 seconds).  
     */
    Status?: PlayerSessionStatus;
    /**
     * IP address of the instance that is running the game session. When connecting to a Amazon GameLift game server, a client needs to reference an IP address (or DNS name) and port number.
     */
    IpAddress?: IpAddress;
    /**
     * DNS identifier assigned to the instance that is running the game session. Values have the following format:   TLS-enabled fleets: &lt;unique identifier&gt;.&lt;region identifier&gt;.amazongamelift.com.   Non-TLS-enabled fleets: ec2-&lt;unique identifier&gt;.compute.amazonaws.com. (See Amazon EC2 Instance IP Addressing.)   When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.
     */
    DnsName?: DnsName;
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
  export type PolicyType = "RuleBased"|"TargetBased"|string;
  export type PortNumber = number;
  export type PositiveInteger = number;
  export type PositiveLong = number;
  export type ProtectionPolicy = "NoProtection"|"FullProtection"|string;
  export interface PutScalingPolicyInput {
    /**
     * A descriptive label that is associated with a scaling policy. Policy names do not need to be unique. A fleet can have only one scaling policy with the same name.
     */
    Name: NonZeroAndMaxString;
    /**
     * A unique identifier for a fleet to apply this policy to. You can use either the fleet ID or ARN value. The fleet cannot be in any of the following statuses: ERROR or DELETING.
     */
    FleetId: FleetIdOrArn;
    /**
     * Amount of adjustment to make, based on the scaling adjustment type.
     */
    ScalingAdjustment?: Integer;
    /**
     * The type of adjustment to make to a fleet's instance count (see FleetCapacity):    ChangeInCapacity -- add (or subtract) the scaling adjustment value from the current instance count. Positive values scale up while negative values scale down.    ExactCapacity -- set the instance count to the scaling adjustment value.    PercentChangeInCapacity -- increase or reduce the current instance count by the scaling adjustment, read as a percentage. Positive values scale up while negative values scale down; for example, a value of "-10" scales the fleet down by 10%.  
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
     * Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. For detailed descriptions of fleet metrics, see Monitor Amazon GameLift with Amazon CloudWatch.     ActivatingGameSessions -- Game sessions in the process of being created.    ActiveGameSessions -- Game sessions that are currently running.    ActiveInstances -- Fleet instances that are currently running at least one game session.    AvailableGameSessions -- Additional game sessions that fleet could host simultaneously, given current capacity.    AvailablePlayerSessions -- Empty player slots in currently active game sessions. This includes game sessions that are not currently accepting players. Reserved player slots are not included.    CurrentPlayerSessions -- Player slots in active game sessions that are being used by a player or are reserved for a player.     IdleInstances -- Active instances that are currently hosting zero game sessions.     PercentAvailableGameSessions -- Unused percentage of the total number of game sessions that a fleet could host simultaneously, given current capacity. Use this metric for a target-based scaling policy.    PercentIdleInstances -- Percentage of the total number of active instances that are hosting zero game sessions.    QueueDepth -- Pending game session placement requests, in any queue, where the current fleet is the top-priority destination.    WaitTime -- Current wait time for pending game session placement requests, in any queue, where the current fleet is the top-priority destination.   
     */
    MetricName: MetricName;
    /**
     * The type of scaling policy to create. For a target-based policy, set the parameter MetricName to 'PercentAvailableGameSessions' and specify a TargetConfiguration. For a rule-based policy set the following parameters: MetricName, ComparisonOperator, Threshold, EvaluationPeriods, ScalingAdjustmentType, and ScalingAdjustment.
     */
    PolicyType?: PolicyType;
    /**
     * The settings for a target-based scaling policy.
     */
    TargetConfiguration?: TargetConfiguration;
  }
  export interface PutScalingPolicyOutput {
    /**
     * A descriptive label that is associated with a scaling policy. Policy names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
  }
  export type QueueArnsList = ArnStringModel[];
  export interface RegisterGameServerInput {
    /**
     * A unique identifier for the game server group where the game server is running. Use either the GameServerGroup name or ARN value.
     */
    GameServerGroupName: GameServerGroupNameOrArn;
    /**
     * A custom string that uniquely identifies the game server to register. Game server IDs are developer-defined and must be unique across all game server groups in your AWS account.
     */
    GameServerId: GameServerId;
    /**
     * The unique identifier for the instance where the game server is running. This ID is available in the instance metadata. EC2 instance IDs use a 17-character format, for example: i-1234567890abcdef0.
     */
    InstanceId: GameServerInstanceId;
    /**
     * Information that is needed to make inbound client connections to the game server. This might include the IP address and port, DNS name, and other information.
     */
    ConnectionInfo?: GameServerConnectionInfo;
    /**
     * A set of custom game server properties, formatted as a single string value. This data is passed to a game client or service when it requests information on game servers using ListGameServers or ClaimGameServer. 
     */
    GameServerData?: GameServerData;
  }
  export interface RegisterGameServerOutput {
    /**
     * Object that describes the newly registered game server.
     */
    GameServer?: GameServer;
  }
  export interface RequestUploadCredentialsInput {
    /**
     * A unique identifier for a build to get credentials for. You can use either the build ID or ARN value. 
     */
    BuildId: BuildIdOrArn;
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
     * The unique identifier of the alias that you want to retrieve a fleet ID for. You can use either the alias ID or ARN value.
     */
    AliasId: AliasIdOrArn;
  }
  export interface ResolveAliasOutput {
    /**
     * The fleet identifier that the alias is pointing to.
     */
    FleetId?: FleetId;
    /**
     *  The Amazon Resource Name (ARN) associated with the GameLift fleet resource that this alias points to. 
     */
    FleetArn?: FleetArn;
  }
  export interface ResourceCreationLimitPolicy {
    /**
     * The maximum number of game sessions that an individual can create during the policy period. 
     */
    NewGameSessionsPerCreator?: WholeNumber;
    /**
     * The time span used in evaluating the resource creation limit policy. 
     */
    PolicyPeriodInMinutes?: WholeNumber;
  }
  export interface ResumeGameServerGroupInput {
    /**
     * A unique identifier for the game server group. Use either the GameServerGroup name or ARN value.
     */
    GameServerGroupName: GameServerGroupNameOrArn;
    /**
     * The activity to resume for this game server group.
     */
    ResumeActions: GameServerGroupActions;
  }
  export interface ResumeGameServerGroupOutput {
    /**
     * An object that describes the game server group resource, with the SuspendedActions property updated to reflect the resumed activity.
     */
    GameServerGroup?: GameServerGroup;
  }
  export interface RoutingStrategy {
    /**
     * The type of routing strategy for the alias. Possible routing types include the following:    SIMPLE - The alias resolves to one specific fleet. Use this type when routing to active fleets.    TERMINAL - The alias does not resolve to a fleet but instead can be used to display a message to the user. A terminal alias throws a TerminalRoutingStrategyException with the RoutingStrategy message embedded.  
     */
    Type?: RoutingStrategyType;
    /**
     * The unique identifier for a fleet that the alias points to. This value is the fleet ID, not the fleet ARN.
     */
    FleetId?: FleetId;
    /**
     * The message text to be used with a terminal routing strategy.
     */
    Message?: FreeText;
  }
  export type RoutingStrategyType = "SIMPLE"|"TERMINAL"|string;
  export type RuleSetBody = string;
  export type RuleSetLimit = number;
  export interface RuntimeConfiguration {
    /**
     * A collection of server process configurations that describe which server processes to run on each instance in a fleet.
     */
    ServerProcesses?: ServerProcessList;
    /**
     * The maximum number of game sessions with status ACTIVATING to allow on an instance simultaneously. This setting limits the amount of instance resources that can be used for new game activations at any one time.
     */
    MaxConcurrentGameSessionActivations?: MaxConcurrentGameSessionActivations;
    /**
     * The maximum amount of time (in seconds) that a game session can remain in status ACTIVATING. If the game session is not active before the timeout, activation is terminated and the game session status is changed to TERMINATED.
     */
    GameSessionActivationTimeoutSeconds?: GameSessionActivationTimeoutSeconds;
  }
  export interface S3Location {
    /**
     * An S3 bucket identifier. This is the name of the S3 bucket.  GameLift currently does not support uploading from S3 buckets with names that contain a dot (.). 
     */
    Bucket?: NonEmptyString;
    /**
     * The name of the zip file that contains the build files or script files. 
     */
    Key?: NonEmptyString;
    /**
     * The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access the S3 bucket.
     */
    RoleArn?: NonEmptyString;
    /**
     * The version of the file, if object versioning is turned on for the bucket. Amazon GameLift uses this information when retrieving files from an S3 bucket that you own. Use this parameter to specify a specific version of the file. If not set, the latest version of the file is retrieved. 
     */
    ObjectVersion?: NonEmptyString;
  }
  export type ScalingAdjustmentType = "ChangeInCapacity"|"ExactCapacity"|"PercentChangeInCapacity"|string;
  export interface ScalingPolicy {
    /**
     * A unique identifier for a fleet that is associated with this scaling policy.
     */
    FleetId?: FleetId;
    /**
     * A descriptive label that is associated with a scaling policy. Policy names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
    /**
     * Current status of the scaling policy. The scaling policy can be in force only when in an ACTIVE status. Scaling policies can be suspended for individual fleets (see StopFleetActions; if suspended for a fleet, the policy status does not change. View a fleet's stopped actions by calling DescribeFleetCapacity.    ACTIVE -- The scaling policy can be used for auto-scaling a fleet.    UPDATE_REQUESTED -- A request to update the scaling policy has been received.    UPDATING -- A change is being made to the scaling policy.    DELETE_REQUESTED -- A request to delete the scaling policy has been received.    DELETING -- The scaling policy is being deleted.    DELETED -- The scaling policy has been deleted.    ERROR -- An error occurred in creating the policy. It should be removed and recreated.  
     */
    Status?: ScalingStatusType;
    /**
     * Amount of adjustment to make, based on the scaling adjustment type.
     */
    ScalingAdjustment?: Integer;
    /**
     * The type of adjustment to make to a fleet's instance count (see FleetCapacity):    ChangeInCapacity -- add (or subtract) the scaling adjustment value from the current instance count. Positive values scale up while negative values scale down.    ExactCapacity -- set the instance count to the scaling adjustment value.    PercentChangeInCapacity -- increase or reduce the current instance count by the scaling adjustment, read as a percentage. Positive values scale up while negative values scale down.  
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
     * Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. For detailed descriptions of fleet metrics, see Monitor Amazon GameLift with Amazon CloudWatch.     ActivatingGameSessions -- Game sessions in the process of being created.    ActiveGameSessions -- Game sessions that are currently running.    ActiveInstances -- Fleet instances that are currently running at least one game session.    AvailableGameSessions -- Additional game sessions that fleet could host simultaneously, given current capacity.    AvailablePlayerSessions -- Empty player slots in currently active game sessions. This includes game sessions that are not currently accepting players. Reserved player slots are not included.    CurrentPlayerSessions -- Player slots in active game sessions that are being used by a player or are reserved for a player.     IdleInstances -- Active instances that are currently hosting zero game sessions.     PercentAvailableGameSessions -- Unused percentage of the total number of game sessions that a fleet could host simultaneously, given current capacity. Use this metric for a target-based scaling policy.    PercentIdleInstances -- Percentage of the total number of active instances that are hosting zero game sessions.    QueueDepth -- Pending game session placement requests, in any queue, where the current fleet is the top-priority destination.    WaitTime -- Current wait time for pending game session placement requests, in any queue, where the current fleet is the top-priority destination.   
     */
    MetricName?: MetricName;
    /**
     * The type of scaling policy to create. For a target-based policy, set the parameter MetricName to 'PercentAvailableGameSessions' and specify a TargetConfiguration. For a rule-based policy set the following parameters: MetricName, ComparisonOperator, Threshold, EvaluationPeriods, ScalingAdjustmentType, and ScalingAdjustment.
     */
    PolicyType?: PolicyType;
    /**
     * The settings for a target-based scaling policy.
     */
    TargetConfiguration?: TargetConfiguration;
  }
  export type ScalingPolicyList = ScalingPolicy[];
  export type ScalingStatusType = "ACTIVE"|"UPDATE_REQUESTED"|"UPDATING"|"DELETE_REQUESTED"|"DELETING"|"DELETED"|"ERROR"|string;
  export interface Script {
    /**
     * A unique identifier for a Realtime script
     */
    ScriptId?: ScriptId;
    /**
     * Amazon Resource Name (ARN) that is assigned to a GameLift script resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift script ARN, the resource ID matches the ScriptId value.
     */
    ScriptArn?: ScriptArn;
    /**
     * A descriptive label that is associated with a script. Script names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
    /**
     * The version that is associated with a build or script. Version strings do not need to be unique.
     */
    Version?: NonZeroAndMaxString;
    /**
     * The file size of the uploaded Realtime script, expressed in bytes. When files are uploaded from an S3 location, this value remains at "0".
     */
    SizeOnDisk?: PositiveLong;
    /**
     * A time stamp indicating when this data object was created. The format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    CreationTime?: Timestamp;
    StorageLocation?: S3Location;
  }
  export type ScriptArn = string;
  export type ScriptId = string;
  export type ScriptIdOrArn = string;
  export type ScriptList = Script[];
  export interface SearchGameSessionsInput {
    /**
     * A unique identifier for a fleet to search for active game sessions. You can use either the fleet ID or ARN value. Each request must reference either a fleet ID or alias ID, but not both.
     */
    FleetId?: FleetIdOrArn;
    /**
     * A unique identifier for an alias associated with the fleet to search for active game sessions. You can use either the alias ID or ARN value. Each request must reference either a fleet ID or alias ID, but not both.
     */
    AliasId?: AliasIdOrArn;
    /**
     * String containing the search criteria for the session search. If no filter expression is included, the request returns results for all game sessions in the fleet that are in ACTIVE status. A filter expression can contain one or multiple conditions. Each condition consists of the following:    Operand -- Name of a game session attribute. Valid values are gameSessionName, gameSessionId, gameSessionProperties, maximumSessions, creationTimeMillis, playerSessionCount, hasAvailablePlayerSessions.    Comparator -- Valid comparators are: =, &lt;&gt;, &lt;, &gt;, &lt;=, &gt;=.     Value -- Value to be searched for. Values may be numbers, boolean values (true/false) or strings depending on the operand. String values are case sensitive and must be enclosed in single quotes. Special characters must be escaped. Boolean and string values can only be used with the comparators = and &lt;&gt;. For example, the following filter expression searches on gameSessionName: "FilterExpression": "gameSessionName = 'Matt\\'s Awesome Game 1'".    To chain multiple conditions in a single expression, use the logical keywords AND, OR, and NOT and parentheses as needed. For example: x AND y AND NOT z, NOT (x OR y). Session search evaluates conditions from left to right using the following precedence rules:    =, &lt;&gt;, &lt;, &gt;, &lt;=, &gt;=    Parentheses   NOT   AND   OR   For example, this filter expression retrieves game sessions hosting at least ten players that have an open player slot: "maximumSessions&gt;=10 AND hasAvailablePlayerSessions=true". 
     */
    FilterExpression?: NonZeroAndMaxString;
    /**
     * Instructions on how to sort the search results. If no sort expression is included, the request returns results in random order. A sort expression consists of the following elements:    Operand -- Name of a game session attribute. Valid values are gameSessionName, gameSessionId, gameSessionProperties, maximumSessions, creationTimeMillis, playerSessionCount, hasAvailablePlayerSessions.    Order -- Valid sort orders are ASC (ascending) and DESC (descending).   For example, this sort expression returns the oldest active sessions first: "SortExpression": "creationTimeMillis ASC". Results with a null value for the sort operand are returned at the end of the list.
     */
    SortExpression?: NonZeroAndMaxString;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. The maximum number of results returned is 20, even if this value is not set or is set higher than 20. 
     */
    Limit?: PositiveInteger;
    /**
     * Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface SearchGameSessionsOutput {
    /**
     * A collection of objects containing game session properties for each session matching the request.
     */
    GameSessions?: GameSessionList;
    /**
     * Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
     */
    NextToken?: NonZeroAndMaxString;
  }
  export interface ServerProcess {
    /**
     * The location of the server executable in a custom game build or the name of the Realtime script file that contains the Init() function. Game builds and Realtime scripts are installed on instances at the root:    Windows (for custom game builds only): C:\game. Example: "C:\game\MyGame\server.exe"    Linux: /local/game. Examples: "/local/game/MyGame/server.exe" or "/local/game/MyRealtimeScript.js"  
     */
    LaunchPath: NonZeroAndMaxString;
    /**
     * An optional list of parameters to pass to the server executable or Realtime script on launch.
     */
    Parameters?: NonZeroAndMaxString;
    /**
     * The number of server processes that use this configuration to run concurrently on an instance.
     */
    ConcurrentExecutions: PositiveInteger;
  }
  export type ServerProcessList = ServerProcess[];
  export type SnsArnStringModel = string;
  export type SortOrder = "ASCENDING"|"DESCENDING"|string;
  export interface StartFleetActionsInput {
    /**
     * A unique identifier for a fleet to start actions on. You can use either the fleet ID or ARN value.
     */
    FleetId: FleetIdOrArn;
    /**
     * List of actions to restart on the fleet.
     */
    Actions: FleetActionList;
  }
  export interface StartFleetActionsOutput {
  }
  export interface StartGameSessionPlacementInput {
    /**
     * A unique identifier to assign to the new game session placement. This value is developer-defined. The value must be unique across all Regions and cannot be reused unless you are resubmitting a canceled or timed-out placement request.
     */
    PlacementId: IdStringModel;
    /**
     * Name of the queue to use to place the new game session. You can use either the queue name or ARN value. 
     */
    GameSessionQueueName: GameSessionQueueNameOrArn;
    /**
     * Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the GameSession object with a request to start a new game session (see Start a Game Session).
     */
    GameProperties?: GamePropertyList;
    /**
     * The maximum number of players that can be connected simultaneously to the game session.
     */
    MaximumPlayerSessionCount: WholeNumber;
    /**
     * A descriptive label that is associated with a game session. Session names do not need to be unique.
     */
    GameSessionName?: NonZeroAndMaxString;
    /**
     * Set of values, expressed in milliseconds, indicating the amount of latency that a player experiences when connected to AWS Regions. This information is used to try to place the new game session where it can offer the best possible gameplay experience for the players. 
     */
    PlayerLatencies?: PlayerLatencyList;
    /**
     * Set of information on each player to create a player session for.
     */
    DesiredPlayerSessions?: DesiredPlayerSessionList;
    /**
     * Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the GameSession object with a request to start a new game session (see Start a Game Session).
     */
    GameSessionData?: GameSessionData;
  }
  export interface StartGameSessionPlacementOutput {
    /**
     * Object that describes the newly created game session placement. This object includes all the information provided in the request, as well as start/end time stamps and placement status. 
     */
    GameSessionPlacement?: GameSessionPlacement;
  }
  export interface StartMatchBackfillInput {
    /**
     * A unique identifier for a matchmaking ticket. If no ticket ID is specified here, Amazon GameLift will generate one in the form of a UUID. Use this identifier to track the match backfill ticket status and retrieve match results.
     */
    TicketId?: MatchmakingIdStringModel;
    /**
     * Name of the matchmaker to use for this request. You can use either the configuration name or ARN value. The ARN of the matchmaker that was used with the original game session is listed in the GameSession object, MatchmakerData property.
     */
    ConfigurationName: MatchmakingConfigurationName;
    /**
     * Amazon Resource Name (ARN) that is assigned to a game session and uniquely identifies it. This is the same as the game session ID.
     */
    GameSessionArn: ArnStringModel;
    /**
     * Match information on all players that are currently assigned to the game session. This information is used by the matchmaker to find new players and add them to the existing game.   PlayerID, PlayerAttributes, Team -\\- This information is maintained in the GameSession object, MatchmakerData property, for all players who are currently assigned to the game session. The matchmaker data is in JSON syntax, formatted as a string. For more details, see  Match Data.    LatencyInMs -\\- If the matchmaker uses player latency, include a latency value, in milliseconds, for the Region that the game session is currently in. Do not include latency values for any other Region.  
     */
    Players: PlayerList;
  }
  export interface StartMatchBackfillOutput {
    /**
     * Ticket representing the backfill matchmaking request. This object includes the information in the request, ticket status, and match results as generated during the matchmaking process.
     */
    MatchmakingTicket?: MatchmakingTicket;
  }
  export interface StartMatchmakingInput {
    /**
     * A unique identifier for a matchmaking ticket. If no ticket ID is specified here, Amazon GameLift will generate one in the form of a UUID. Use this identifier to track the matchmaking ticket status and retrieve match results.
     */
    TicketId?: MatchmakingIdStringModel;
    /**
     * Name of the matchmaking configuration to use for this request. Matchmaking configurations must exist in the same Region as this request. You can use either the configuration name or ARN value.
     */
    ConfigurationName: MatchmakingConfigurationName;
    /**
     * Information on each player to be matched. This information must include a player ID, and may contain player attributes and latency data to be used in the matchmaking process. After a successful match, Player objects contain the name of the team the player is assigned to.
     */
    Players: PlayerList;
  }
  export interface StartMatchmakingOutput {
    /**
     * Ticket representing the matchmaking request. This object include the information included in the request, ticket status, and match results as generated during the matchmaking process.
     */
    MatchmakingTicket?: MatchmakingTicket;
  }
  export interface StopFleetActionsInput {
    /**
     * A unique identifier for a fleet to stop actions on. You can use either the fleet ID or ARN value.
     */
    FleetId: FleetIdOrArn;
    /**
     * List of actions to suspend on the fleet. 
     */
    Actions: FleetActionList;
  }
  export interface StopFleetActionsOutput {
  }
  export interface StopGameSessionPlacementInput {
    /**
     * A unique identifier for a game session placement to cancel.
     */
    PlacementId: IdStringModel;
  }
  export interface StopGameSessionPlacementOutput {
    /**
     * Object that describes the canceled game session placement, with CANCELLED status and an end time stamp. 
     */
    GameSessionPlacement?: GameSessionPlacement;
  }
  export interface StopMatchmakingInput {
    /**
     * A unique identifier for a matchmaking ticket.
     */
    TicketId: MatchmakingIdStringModel;
  }
  export interface StopMatchmakingOutput {
  }
  export type StringDoubleMap = {[key: string]: DoubleObject};
  export type StringList = NonZeroAndMaxString[];
  export type StringModel = string;
  export interface SuspendGameServerGroupInput {
    /**
     * A unique identifier for the game server group. Use either the GameServerGroup name or ARN value.
     */
    GameServerGroupName: GameServerGroupNameOrArn;
    /**
     * The activity to suspend for this game server group.
     */
    SuspendActions: GameServerGroupActions;
  }
  export interface SuspendGameServerGroupOutput {
    /**
     * An object that describes the game server group resource, with the SuspendedActions property updated to reflect the suspended activity.
     */
    GameServerGroup?: GameServerGroup;
  }
  export interface Tag {
    /**
     *  The key for a developer-defined key:value pair for tagging an AWS resource. 
     */
    Key: TagKey;
    /**
     *  The value for a developer-defined key:value pair for tagging an AWS resource. 
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     *  The Amazon Resource Name (ARN) that is assigned to and uniquely identifies the GameLift resource that you want to assign tags to. GameLift resource ARNs are included in the data object for the resource, which can be retrieved by calling a List or Describe operation for the resource type. 
     */
    ResourceARN: AmazonResourceName;
    /**
     * A list of one or more tags to assign to the specified GameLift resource. Tags are developer-defined and structured as key-value pairs. The maximum tag limit may be lower than stated. See  Tagging AWS Resources for actual tagging limits.
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export interface TargetConfiguration {
    /**
     * Desired value to use with a target-based scaling policy. The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions).
     */
    TargetValue: Double;
  }
  export interface TargetTrackingConfiguration {
    /**
     * Desired value to use with a game server group target-based scaling policy. 
     */
    TargetValue: NonNegativeDouble;
  }
  export type Timestamp = Date;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) that is assigned to and uniquely identifies the GameLift resource that you want to remove tags from. GameLift resource ARNs are included in the data object for the resource, which can be retrieved by calling a List or Describe operation for the resource type. 
     */
    ResourceARN: AmazonResourceName;
    /**
     * A list of one or more tag keys to remove from the specified GameLift resource. An AWS resource can have only one tag with a specific tag key, so specifying the tag key identifies which tag to remove. 
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateAliasInput {
    /**
     * A unique identifier for the alias that you want to update. You can use either the alias ID or ARN value.
     */
    AliasId: AliasIdOrArn;
    /**
     * A descriptive label that is associated with an alias. Alias names do not need to be unique.
     */
    Name?: NonBlankAndLengthConstraintString;
    /**
     * A human-readable description of the alias.
     */
    Description?: NonZeroAndMaxString;
    /**
     * The routing configuration, including routing type and fleet target, for the alias.
     */
    RoutingStrategy?: RoutingStrategy;
  }
  export interface UpdateAliasOutput {
    /**
     * The updated alias resource.
     */
    Alias?: Alias;
  }
  export interface UpdateBuildInput {
    /**
     * A unique identifier for a build to update. You can use either the build ID or ARN value. 
     */
    BuildId: BuildIdOrArn;
    /**
     * A descriptive label that is associated with a build. Build names do not need to be unique. 
     */
    Name?: NonZeroAndMaxString;
    /**
     * Version information that is associated with a build or script. Version strings do not need to be unique.
     */
    Version?: NonZeroAndMaxString;
  }
  export interface UpdateBuildOutput {
    /**
     * The updated build resource.
     */
    Build?: Build;
  }
  export interface UpdateFleetAttributesInput {
    /**
     * A unique identifier for a fleet to update attribute metadata for. You can use either the fleet ID or ARN value.
     */
    FleetId: FleetIdOrArn;
    /**
     * A descriptive label that is associated with a fleet. Fleet names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
    /**
     * Human-readable description of a fleet.
     */
    Description?: NonZeroAndMaxString;
    /**
     * Game session protection policy to apply to all new instances created in this fleet. Instances that already exist are not affected. You can set protection for individual instances using UpdateGameSession.    NoProtection -- The game session can be terminated during a scale-down event.    FullProtection -- If the game session is in an ACTIVE status, it cannot be terminated during a scale-down event.  
     */
    NewGameSessionProtectionPolicy?: ProtectionPolicy;
    /**
     * Policy that limits the number of game sessions an individual player can create over a span of time. 
     */
    ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
    /**
     * Names of metric groups to include this fleet in. Amazon CloudWatch uses a fleet metric group is to aggregate metrics from multiple fleets. Use an existing metric group name to add this fleet to the group. Or use a new name to create a new metric group. A fleet can only be included in one metric group at a time.
     */
    MetricGroups?: MetricGroupList;
  }
  export interface UpdateFleetAttributesOutput {
    /**
     * A unique identifier for a fleet that was updated. Use either the fleet ID or ARN value.
     */
    FleetId?: FleetId;
  }
  export interface UpdateFleetCapacityInput {
    /**
     * A unique identifier for a fleet to update capacity for. You can use either the fleet ID or ARN value.
     */
    FleetId: FleetIdOrArn;
    /**
     * Number of EC2 instances you want this fleet to host.
     */
    DesiredInstances?: WholeNumber;
    /**
     * The minimum value allowed for the fleet's instance count. Default if not set is 0.
     */
    MinSize?: WholeNumber;
    /**
     * The maximum value allowed for the fleet's instance count. Default if not set is 1.
     */
    MaxSize?: WholeNumber;
  }
  export interface UpdateFleetCapacityOutput {
    /**
     * A unique identifier for a fleet that was updated.
     */
    FleetId?: FleetId;
  }
  export interface UpdateFleetPortSettingsInput {
    /**
     * A unique identifier for a fleet to update port settings for. You can use either the fleet ID or ARN value.
     */
    FleetId: FleetIdOrArn;
    /**
     * A collection of port settings to be added to the fleet resource.
     */
    InboundPermissionAuthorizations?: IpPermissionsList;
    /**
     * A collection of port settings to be removed from the fleet resource.
     */
    InboundPermissionRevocations?: IpPermissionsList;
  }
  export interface UpdateFleetPortSettingsOutput {
    /**
     * A unique identifier for a fleet that was updated.
     */
    FleetId?: FleetId;
  }
  export interface UpdateGameServerGroupInput {
    /**
     * A unique identifier for the game server group. Use either the GameServerGroup name or ARN value.
     */
    GameServerGroupName: GameServerGroupNameOrArn;
    /**
     * The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access your EC2 Auto Scaling groups.
     */
    RoleArn?: IamRoleArn;
    /**
     * An updated list of EC2 instance types to use in the Auto Scaling group. The instance definitions must specify at least two different instance types that are supported by GameLift FleetIQ. This updated list replaces the entire current list of instance definitions for the game server group. For more information on instance types, see EC2 Instance Types in the Amazon EC2 User Guide. You can optionally specify capacity weighting for each instance type. If no weight value is specified for an instance type, it is set to the default value "1". For more information about capacity weighting, see  Instance Weighting for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.
     */
    InstanceDefinitions?: InstanceDefinitions;
    /**
     * A flag that indicates whether instances in the game server group are protected from early termination. Unprotected instances that have active game servers running might be terminated during a scale-down event, causing players to be dropped from the game. Protected instances cannot be terminated while there are active game servers running except in the event of a forced game server group deletion (see ). An exception to this is with Spot Instances, which can be terminated by AWS regardless of protection status. This property is set to NO_PROTECTION by default.
     */
    GameServerProtectionPolicy?: GameServerProtectionPolicy;
    /**
     * Indicates how GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances in the game server group. Method options include the following:    SPOT_ONLY - Only Spot Instances are used in the game server group. If Spot Instances are unavailable or not viable for game hosting, the game server group provides no hosting capacity until Spot Instances can again be used. Until then, no new instances are started, and the existing nonviable Spot Instances are terminated (after current gameplay ends) and are not replaced.    SPOT_PREFERRED - (default value) Spot Instances are used whenever available in the game server group. If Spot Instances are unavailable, the game server group continues to provide hosting capacity by falling back to On-Demand Instances. Existing nonviable Spot Instances are terminated (after current gameplay ends) and are replaced with new On-Demand Instances.    ON_DEMAND_ONLY - Only On-Demand Instances are used in the game server group. No Spot Instances are used, even when available, while this balancing strategy is in force.  
     */
    BalancingStrategy?: BalancingStrategy;
  }
  export interface UpdateGameServerGroupOutput {
    /**
     * An object that describes the game server group resource with updated properties. 
     */
    GameServerGroup?: GameServerGroup;
  }
  export interface UpdateGameServerInput {
    /**
     * A unique identifier for the game server group where the game server is running. Use either the GameServerGroup name or ARN value.
     */
    GameServerGroupName: GameServerGroupNameOrArn;
    /**
     * A custom string that uniquely identifies the game server to update.
     */
    GameServerId: GameServerId;
    /**
     * A set of custom game server properties, formatted as a single string value. This data is passed to a game client or service when it requests information on game servers using ListGameServers or ClaimGameServer. 
     */
    GameServerData?: GameServerData;
    /**
     * Indicates whether the game server is available or is currently hosting gameplay.
     */
    UtilizationStatus?: GameServerUtilizationStatus;
    /**
     * Indicates health status of the game server. A request that includes this parameter updates the game server's LastHealthCheckTime timestamp. 
     */
    HealthCheck?: GameServerHealthCheck;
  }
  export interface UpdateGameServerOutput {
    /**
     * Object that describes the newly updated game server.
     */
    GameServer?: GameServer;
  }
  export interface UpdateGameSessionInput {
    /**
     * A unique identifier for the game session to update. 
     */
    GameSessionId: ArnStringModel;
    /**
     * The maximum number of players that can be connected simultaneously to the game session.
     */
    MaximumPlayerSessionCount?: WholeNumber;
    /**
     * A descriptive label that is associated with a game session. Session names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
    /**
     * Policy determining whether or not the game session accepts new players.
     */
    PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy;
    /**
     * Game session protection policy to apply to this game session only.    NoProtection -- The game session can be terminated during a scale-down event.    FullProtection -- If the game session is in an ACTIVE status, it cannot be terminated during a scale-down event.  
     */
    ProtectionPolicy?: ProtectionPolicy;
  }
  export interface UpdateGameSessionOutput {
    /**
     * The updated game session metadata.
     */
    GameSession?: GameSession;
  }
  export interface UpdateGameSessionQueueInput {
    /**
     * A descriptive label that is associated with game session queue. Queue names must be unique within each Region. You can use either the queue ID or ARN value. 
     */
    Name: GameSessionQueueNameOrArn;
    /**
     * The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a TIMED_OUT status.
     */
    TimeoutInSeconds?: WholeNumber;
    /**
     * A collection of latency policies to apply when processing game sessions placement requests with player latency information. Multiple policies are evaluated in order of the maximum latency value, starting with the lowest latency values. With just one policy, the policy is enforced at the start of the game session placement for the duration period. With multiple policies, each policy is enforced consecutively for its duration period. For example, a queue might enforce a 60-second policy followed by a 120-second policy, and then no policy for the remainder of the placement. When updating policies, provide a complete collection of policies.
     */
    PlayerLatencyPolicies?: PlayerLatencyPolicyList;
    /**
     * A list of fleets that can be used to fulfill game session placement requests in the queue. Fleets are identified by either a fleet ARN or a fleet alias ARN. Destinations are listed in default preference order. When updating this list, provide a complete list of destinations.
     */
    Destinations?: GameSessionQueueDestinationList;
  }
  export interface UpdateGameSessionQueueOutput {
    /**
     * An object that describes the newly updated game session queue.
     */
    GameSessionQueue?: GameSessionQueue;
  }
  export interface UpdateMatchmakingConfigurationInput {
    /**
     * A unique identifier for a matchmaking configuration to update. You can use either the configuration name or ARN value. 
     */
    Name: MatchmakingConfigurationName;
    /**
     * A descriptive label that is associated with matchmaking configuration.
     */
    Description?: NonZeroAndMaxString;
    /**
     * Amazon Resource Name (ARN) that is assigned to a GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. These queues are used when placing game sessions for matches that are created with this matchmaking configuration. Queues can be located in any Region.
     */
    GameSessionQueueArns?: QueueArnsList;
    /**
     * The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out. Requests that fail due to timing out can be resubmitted as needed.
     */
    RequestTimeoutSeconds?: MatchmakingRequestTimeoutInteger;
    /**
     * The length of time (in seconds) to wait for players to accept a proposed match. If any player rejects the match or fails to accept before the timeout, the ticket continues to look for an acceptable match.
     */
    AcceptanceTimeoutSeconds?: MatchmakingAcceptanceTimeoutInteger;
    /**
     * A flag that indicates whether a match that was created with this configuration must be accepted by the matched players. To require acceptance, set to TRUE.
     */
    AcceptanceRequired?: BooleanModel;
    /**
     * A unique identifier for a matchmaking rule set to use with this configuration. You can use either the rule set name or ARN value. A matchmaking configuration can only use rule sets that are defined in the same Region.
     */
    RuleSetName?: MatchmakingRuleSetName;
    /**
     * An SNS topic ARN that is set up to receive matchmaking notifications. See  Setting up Notifications for Matchmaking for more information.
     */
    NotificationTarget?: SnsArnStringModel;
    /**
     * The number of player slots in a match to keep open for future players. For example, assume that the configuration's rule set specifies a match for a single 12-person team. If the additional player count is set to 2, only 10 players are initially selected for the match.
     */
    AdditionalPlayerCount?: WholeNumber;
    /**
     * Information to add to all events related to the matchmaking configuration. 
     */
    CustomEventData?: CustomEventData;
    /**
     * A set of custom properties for a game session, formatted as key-value pairs. These properties are passed to a game server process in the GameSession object with a request to start a new game session (see Start a Game Session). This information is added to the new GameSession object that is created for a successful match. 
     */
    GameProperties?: GamePropertyList;
    /**
     * A set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the GameSession object with a request to start a new game session (see Start a Game Session). This information is added to the new GameSession object that is created for a successful match. 
     */
    GameSessionData?: GameSessionData;
    /**
     * The method that is used to backfill game sessions created with this matchmaking configuration. Specify MANUAL when your game manages backfill requests manually or does not use the match backfill feature. Specify AUTOMATIC to have GameLift create a StartMatchBackfill request whenever a game session has one or more open slots. Learn more about manual and automatic backfill in Backfill Existing Games with FlexMatch.
     */
    BackfillMode?: BackfillMode;
  }
  export interface UpdateMatchmakingConfigurationOutput {
    /**
     * The updated matchmaking configuration.
     */
    Configuration?: MatchmakingConfiguration;
  }
  export interface UpdateRuntimeConfigurationInput {
    /**
     * A unique identifier for a fleet to update runtime configuration for. You can use either the fleet ID or ARN value.
     */
    FleetId: FleetIdOrArn;
    /**
     * Instructions for launching server processes on each instance in the fleet. Server processes run either a custom game build executable or a Realtime Servers script. The runtime configuration lists the types of server processes to run on an instance and includes the following configuration settings: the server executable or launch script file, launch parameters, and the number of processes to run concurrently on each instance. A CreateFleet request must include a runtime configuration with at least one server process configuration.
     */
    RuntimeConfiguration: RuntimeConfiguration;
  }
  export interface UpdateRuntimeConfigurationOutput {
    /**
     * The runtime configuration currently in force. If the update was successful, this object matches the one in the request.
     */
    RuntimeConfiguration?: RuntimeConfiguration;
  }
  export interface UpdateScriptInput {
    /**
     * A unique identifier for a Realtime script to update. You can use either the script ID or ARN value.
     */
    ScriptId: ScriptIdOrArn;
    /**
     * A descriptive label that is associated with a script. Script names do not need to be unique.
     */
    Name?: NonZeroAndMaxString;
    /**
     * The version that is associated with a build or script. Version strings do not need to be unique.
     */
    Version?: NonZeroAndMaxString;
    /**
     * The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is stored. The storage location must specify the Amazon S3 bucket name, the zip file name (the "key"), and a role ARN that allows Amazon GameLift to access the Amazon S3 storage location. The S3 bucket must be in the same Region where you want to create a new script. By default, Amazon GameLift uploads the latest version of the zip file; if you have S3 object versioning turned on, you can use the ObjectVersion parameter to specify an earlier version. 
     */
    StorageLocation?: S3Location;
    /**
     * A data object containing your Realtime scripts and dependencies as a zip file. The zip file can have one or multiple files. Maximum size of a zip file is 5 MB. When using the AWS CLI tool to create a script, this parameter is set to the zip file name. It must be prepended with the string "fileb://" to indicate that the file data is a binary object. For example: --zip-file fileb://myRealtimeScript.zip.
     */
    ZipFile?: ZipBlob;
  }
  export interface UpdateScriptOutput {
    /**
     * The newly created script record with a unique script ID. The new script's storage location reflects an Amazon S3 location: (1) If the script was uploaded from an S3 bucket under your account, the storage location reflects the information that was provided in the CreateScript request; (2) If the script file was uploaded from a local zip file, the storage location reflects an S3 location controls by the Amazon GameLift service.
     */
    Script?: Script;
  }
  export interface ValidateMatchmakingRuleSetInput {
    /**
     * A collection of matchmaking rules to validate, formatted as a JSON string.
     */
    RuleSetBody: RuleSetBody;
  }
  export interface ValidateMatchmakingRuleSetOutput {
    /**
     * A response indicating whether the rule set is valid.
     */
    Valid?: BooleanModel;
  }
  export interface VpcPeeringAuthorization {
    /**
     * A unique identifier for the AWS account that you use to manage your Amazon GameLift fleet. You can find your Account ID in the AWS Management Console under account settings.
     */
    GameLiftAwsAccountId?: NonZeroAndMaxString;
    /**
     * 
     */
    PeerVpcAwsAccountId?: NonZeroAndMaxString;
    /**
     * A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region where your fleet is deployed. Look up a VPC ID using the VPC Dashboard in the AWS Management Console. Learn more about VPC peering in VPC Peering with Amazon GameLift Fleets.
     */
    PeerVpcId?: NonZeroAndMaxString;
    /**
     * Time stamp indicating when this authorization was issued. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    CreationTime?: Timestamp;
    /**
     * Time stamp indicating when this authorization expires (24 hours after issuance). Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     */
    ExpirationTime?: Timestamp;
  }
  export type VpcPeeringAuthorizationList = VpcPeeringAuthorization[];
  export interface VpcPeeringConnection {
    /**
     * A unique identifier for a fleet. This ID determines the ID of the Amazon GameLift VPC for your fleet.
     */
    FleetId?: FleetId;
    /**
     *  The Amazon Resource Name (ARN) associated with the GameLift fleet resource for this connection. 
     */
    FleetArn?: FleetArn;
    /**
     * CIDR block of IPv4 addresses assigned to the VPC peering connection for the GameLift VPC. The peered VPC also has an IPv4 CIDR block associated with it; these blocks cannot overlap or the peering connection cannot be created. 
     */
    IpV4CidrBlock?: NonZeroAndMaxString;
    /**
     * A unique identifier that is automatically assigned to the connection record. This ID is referenced in VPC peering connection events, and is used when deleting a connection with DeleteVpcPeeringConnection. 
     */
    VpcPeeringConnectionId?: NonZeroAndMaxString;
    /**
     * The status information about the connection. Status indicates if a connection is pending, successful, or failed.
     */
    Status?: VpcPeeringConnectionStatus;
    /**
     * A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region where your fleet is deployed. Look up a VPC ID using the VPC Dashboard in the AWS Management Console. Learn more about VPC peering in VPC Peering with Amazon GameLift Fleets.
     */
    PeerVpcId?: NonZeroAndMaxString;
    /**
     * A unique identifier for the VPC that contains the Amazon GameLift fleet for this connection. This VPC is managed by Amazon GameLift and does not appear in your AWS account. 
     */
    GameLiftVpcId?: NonZeroAndMaxString;
  }
  export type VpcPeeringConnectionList = VpcPeeringConnection[];
  export interface VpcPeeringConnectionStatus {
    /**
     * Code indicating the status of a VPC peering connection.
     */
    Code?: NonZeroAndMaxString;
    /**
     * Additional messaging associated with the connection status. 
     */
    Message?: NonZeroAndMaxString;
  }
  export type VpcSubnet = string;
  export type VpcSubnets = VpcSubnet[];
  export type WeightedCapacity = string;
  export type WholeNumber = number;
  export type ZipBlob = Buffer|Uint8Array|Blob|string;
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
