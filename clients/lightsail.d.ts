import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Lightsail extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Lightsail.Types.ClientConfiguration)
  config: Config & Lightsail.Types.ClientConfiguration;
  /**
   * Allocates a static IP address.
   */
  allocateStaticIp(params: Lightsail.Types.AllocateStaticIpRequest, callback?: (err: AWSError, data: Lightsail.Types.AllocateStaticIpResult) => void): Request<Lightsail.Types.AllocateStaticIpResult, AWSError>;
  /**
   * Allocates a static IP address.
   */
  allocateStaticIp(callback?: (err: AWSError, data: Lightsail.Types.AllocateStaticIpResult) => void): Request<Lightsail.Types.AllocateStaticIpResult, AWSError>;
  /**
   * Attaches a block storage disk to a running or stopped Lightsail instance and exposes it to the instance with the specified disk name.
   */
  attachDisk(params: Lightsail.Types.AttachDiskRequest, callback?: (err: AWSError, data: Lightsail.Types.AttachDiskResult) => void): Request<Lightsail.Types.AttachDiskResult, AWSError>;
  /**
   * Attaches a block storage disk to a running or stopped Lightsail instance and exposes it to the instance with the specified disk name.
   */
  attachDisk(callback?: (err: AWSError, data: Lightsail.Types.AttachDiskResult) => void): Request<Lightsail.Types.AttachDiskResult, AWSError>;
  /**
   * Attaches one or more Lightsail instances to a load balancer. After some time, the instances are attached to the load balancer and the health check status is available.
   */
  attachInstancesToLoadBalancer(params: Lightsail.Types.AttachInstancesToLoadBalancerRequest, callback?: (err: AWSError, data: Lightsail.Types.AttachInstancesToLoadBalancerResult) => void): Request<Lightsail.Types.AttachInstancesToLoadBalancerResult, AWSError>;
  /**
   * Attaches one or more Lightsail instances to a load balancer. After some time, the instances are attached to the load balancer and the health check status is available.
   */
  attachInstancesToLoadBalancer(callback?: (err: AWSError, data: Lightsail.Types.AttachInstancesToLoadBalancerResult) => void): Request<Lightsail.Types.AttachInstancesToLoadBalancerResult, AWSError>;
  /**
   * Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL). Once you create and validate your certificate, you can attach it to your load balancer. You can also use this API to rotate the certificates on your account. Use the AttachLoadBalancerTlsCertificate operation with the non-attached certificate, and it will replace the existing one and become the attached certificate.
   */
  attachLoadBalancerTlsCertificate(params: Lightsail.Types.AttachLoadBalancerTlsCertificateRequest, callback?: (err: AWSError, data: Lightsail.Types.AttachLoadBalancerTlsCertificateResult) => void): Request<Lightsail.Types.AttachLoadBalancerTlsCertificateResult, AWSError>;
  /**
   * Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL). Once you create and validate your certificate, you can attach it to your load balancer. You can also use this API to rotate the certificates on your account. Use the AttachLoadBalancerTlsCertificate operation with the non-attached certificate, and it will replace the existing one and become the attached certificate.
   */
  attachLoadBalancerTlsCertificate(callback?: (err: AWSError, data: Lightsail.Types.AttachLoadBalancerTlsCertificateResult) => void): Request<Lightsail.Types.AttachLoadBalancerTlsCertificateResult, AWSError>;
  /**
   * Attaches a static IP address to a specific Amazon Lightsail instance.
   */
  attachStaticIp(params: Lightsail.Types.AttachStaticIpRequest, callback?: (err: AWSError, data: Lightsail.Types.AttachStaticIpResult) => void): Request<Lightsail.Types.AttachStaticIpResult, AWSError>;
  /**
   * Attaches a static IP address to a specific Amazon Lightsail instance.
   */
  attachStaticIp(callback?: (err: AWSError, data: Lightsail.Types.AttachStaticIpResult) => void): Request<Lightsail.Types.AttachStaticIpResult, AWSError>;
  /**
   * Closes the public ports on a specific Amazon Lightsail instance.
   */
  closeInstancePublicPorts(params: Lightsail.Types.CloseInstancePublicPortsRequest, callback?: (err: AWSError, data: Lightsail.Types.CloseInstancePublicPortsResult) => void): Request<Lightsail.Types.CloseInstancePublicPortsResult, AWSError>;
  /**
   * Closes the public ports on a specific Amazon Lightsail instance.
   */
  closeInstancePublicPorts(callback?: (err: AWSError, data: Lightsail.Types.CloseInstancePublicPortsResult) => void): Request<Lightsail.Types.CloseInstancePublicPortsResult, AWSError>;
  /**
   * Creates a block storage disk that can be attached to a Lightsail instance in the same Availability Zone (e.g., us-east-2a). The disk is created in the regional endpoint that you send the HTTP request to. For more information, see Regions and Availability Zones in Lightsail.
   */
  createDisk(params: Lightsail.Types.CreateDiskRequest, callback?: (err: AWSError, data: Lightsail.Types.CreateDiskResult) => void): Request<Lightsail.Types.CreateDiskResult, AWSError>;
  /**
   * Creates a block storage disk that can be attached to a Lightsail instance in the same Availability Zone (e.g., us-east-2a). The disk is created in the regional endpoint that you send the HTTP request to. For more information, see Regions and Availability Zones in Lightsail.
   */
  createDisk(callback?: (err: AWSError, data: Lightsail.Types.CreateDiskResult) => void): Request<Lightsail.Types.CreateDiskResult, AWSError>;
  /**
   * Creates a block storage disk from a disk snapshot that can be attached to a Lightsail instance in the same Availability Zone (e.g., us-east-2a). The disk is created in the regional endpoint that you send the HTTP request to. For more information, see Regions and Availability Zones in Lightsail.
   */
  createDiskFromSnapshot(params: Lightsail.Types.CreateDiskFromSnapshotRequest, callback?: (err: AWSError, data: Lightsail.Types.CreateDiskFromSnapshotResult) => void): Request<Lightsail.Types.CreateDiskFromSnapshotResult, AWSError>;
  /**
   * Creates a block storage disk from a disk snapshot that can be attached to a Lightsail instance in the same Availability Zone (e.g., us-east-2a). The disk is created in the regional endpoint that you send the HTTP request to. For more information, see Regions and Availability Zones in Lightsail.
   */
  createDiskFromSnapshot(callback?: (err: AWSError, data: Lightsail.Types.CreateDiskFromSnapshotResult) => void): Request<Lightsail.Types.CreateDiskFromSnapshotResult, AWSError>;
  /**
   * Creates a snapshot of a block storage disk. You can use snapshots for backups, to make copies of disks, and to save data before shutting down a Lightsail instance. You can take a snapshot of an attached disk that is in use; however, snapshots only capture data that has been written to your disk at the time the snapshot command is issued. This may exclude any data that has been cached by any applications or the operating system. If you can pause any file systems on the disk long enough to take a snapshot, your snapshot should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should unmount the disk from within the Lightsail instance, issue the create disk snapshot command, and then remount the disk to ensure a consistent and complete snapshot. You may remount and use your disk while the snapshot status is pending.
   */
  createDiskSnapshot(params: Lightsail.Types.CreateDiskSnapshotRequest, callback?: (err: AWSError, data: Lightsail.Types.CreateDiskSnapshotResult) => void): Request<Lightsail.Types.CreateDiskSnapshotResult, AWSError>;
  /**
   * Creates a snapshot of a block storage disk. You can use snapshots for backups, to make copies of disks, and to save data before shutting down a Lightsail instance. You can take a snapshot of an attached disk that is in use; however, snapshots only capture data that has been written to your disk at the time the snapshot command is issued. This may exclude any data that has been cached by any applications or the operating system. If you can pause any file systems on the disk long enough to take a snapshot, your snapshot should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should unmount the disk from within the Lightsail instance, issue the create disk snapshot command, and then remount the disk to ensure a consistent and complete snapshot. You may remount and use your disk while the snapshot status is pending.
   */
  createDiskSnapshot(callback?: (err: AWSError, data: Lightsail.Types.CreateDiskSnapshotResult) => void): Request<Lightsail.Types.CreateDiskSnapshotResult, AWSError>;
  /**
   * Creates a domain resource for the specified domain (e.g., example.com).
   */
  createDomain(params: Lightsail.Types.CreateDomainRequest, callback?: (err: AWSError, data: Lightsail.Types.CreateDomainResult) => void): Request<Lightsail.Types.CreateDomainResult, AWSError>;
  /**
   * Creates a domain resource for the specified domain (e.g., example.com).
   */
  createDomain(callback?: (err: AWSError, data: Lightsail.Types.CreateDomainResult) => void): Request<Lightsail.Types.CreateDomainResult, AWSError>;
  /**
   * Creates one of the following entry records associated with the domain: A record, CNAME record, TXT record, or MX record.
   */
  createDomainEntry(params: Lightsail.Types.CreateDomainEntryRequest, callback?: (err: AWSError, data: Lightsail.Types.CreateDomainEntryResult) => void): Request<Lightsail.Types.CreateDomainEntryResult, AWSError>;
  /**
   * Creates one of the following entry records associated with the domain: A record, CNAME record, TXT record, or MX record.
   */
  createDomainEntry(callback?: (err: AWSError, data: Lightsail.Types.CreateDomainEntryResult) => void): Request<Lightsail.Types.CreateDomainEntryResult, AWSError>;
  /**
   * Creates a snapshot of a specific virtual private server, or instance. You can use a snapshot to create a new instance that is based on that snapshot.
   */
  createInstanceSnapshot(params: Lightsail.Types.CreateInstanceSnapshotRequest, callback?: (err: AWSError, data: Lightsail.Types.CreateInstanceSnapshotResult) => void): Request<Lightsail.Types.CreateInstanceSnapshotResult, AWSError>;
  /**
   * Creates a snapshot of a specific virtual private server, or instance. You can use a snapshot to create a new instance that is based on that snapshot.
   */
  createInstanceSnapshot(callback?: (err: AWSError, data: Lightsail.Types.CreateInstanceSnapshotResult) => void): Request<Lightsail.Types.CreateInstanceSnapshotResult, AWSError>;
  /**
   * Creates one or more Amazon Lightsail virtual private servers, or instances. Create instances using active blueprints. Inactive blueprints are listed to support customers with existing instances but are not necessarily available for launch of new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases. Use the get blueprints operation to return a list of available blueprints.
   */
  createInstances(params: Lightsail.Types.CreateInstancesRequest, callback?: (err: AWSError, data: Lightsail.Types.CreateInstancesResult) => void): Request<Lightsail.Types.CreateInstancesResult, AWSError>;
  /**
   * Creates one or more Amazon Lightsail virtual private servers, or instances. Create instances using active blueprints. Inactive blueprints are listed to support customers with existing instances but are not necessarily available for launch of new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases. Use the get blueprints operation to return a list of available blueprints.
   */
  createInstances(callback?: (err: AWSError, data: Lightsail.Types.CreateInstancesResult) => void): Request<Lightsail.Types.CreateInstancesResult, AWSError>;
  /**
   * Uses a specific snapshot as a blueprint for creating one or more new instances that are based on that identical configuration.
   */
  createInstancesFromSnapshot(params: Lightsail.Types.CreateInstancesFromSnapshotRequest, callback?: (err: AWSError, data: Lightsail.Types.CreateInstancesFromSnapshotResult) => void): Request<Lightsail.Types.CreateInstancesFromSnapshotResult, AWSError>;
  /**
   * Uses a specific snapshot as a blueprint for creating one or more new instances that are based on that identical configuration.
   */
  createInstancesFromSnapshot(callback?: (err: AWSError, data: Lightsail.Types.CreateInstancesFromSnapshotResult) => void): Request<Lightsail.Types.CreateInstancesFromSnapshotResult, AWSError>;
  /**
   * Creates an SSH key pair.
   */
  createKeyPair(params: Lightsail.Types.CreateKeyPairRequest, callback?: (err: AWSError, data: Lightsail.Types.CreateKeyPairResult) => void): Request<Lightsail.Types.CreateKeyPairResult, AWSError>;
  /**
   * Creates an SSH key pair.
   */
  createKeyPair(callback?: (err: AWSError, data: Lightsail.Types.CreateKeyPairResult) => void): Request<Lightsail.Types.CreateKeyPairResult, AWSError>;
  /**
   * Creates a Lightsail load balancer. To learn more about deciding whether to load balance your application, see Configure your Lightsail instances for load balancing. You can create up to 5 load balancers per AWS Region in your account. When you create a load balancer, you can specify a unique name and port settings. To change additional load balancer settings, use the UpdateLoadBalancerAttribute operation.
   */
  createLoadBalancer(params: Lightsail.Types.CreateLoadBalancerRequest, callback?: (err: AWSError, data: Lightsail.Types.CreateLoadBalancerResult) => void): Request<Lightsail.Types.CreateLoadBalancerResult, AWSError>;
  /**
   * Creates a Lightsail load balancer. To learn more about deciding whether to load balance your application, see Configure your Lightsail instances for load balancing. You can create up to 5 load balancers per AWS Region in your account. When you create a load balancer, you can specify a unique name and port settings. To change additional load balancer settings, use the UpdateLoadBalancerAttribute operation.
   */
  createLoadBalancer(callback?: (err: AWSError, data: Lightsail.Types.CreateLoadBalancerResult) => void): Request<Lightsail.Types.CreateLoadBalancerResult, AWSError>;
  /**
   * Creates a Lightsail load balancer TLS certificate. TLS is just an updated, more secure version of Secure Socket Layer (SSL).
   */
  createLoadBalancerTlsCertificate(params: Lightsail.Types.CreateLoadBalancerTlsCertificateRequest, callback?: (err: AWSError, data: Lightsail.Types.CreateLoadBalancerTlsCertificateResult) => void): Request<Lightsail.Types.CreateLoadBalancerTlsCertificateResult, AWSError>;
  /**
   * Creates a Lightsail load balancer TLS certificate. TLS is just an updated, more secure version of Secure Socket Layer (SSL).
   */
  createLoadBalancerTlsCertificate(callback?: (err: AWSError, data: Lightsail.Types.CreateLoadBalancerTlsCertificateResult) => void): Request<Lightsail.Types.CreateLoadBalancerTlsCertificateResult, AWSError>;
  /**
   * Creates a new database in Amazon Lightsail.
   */
  createRelationalDatabase(params: Lightsail.Types.CreateRelationalDatabaseRequest, callback?: (err: AWSError, data: Lightsail.Types.CreateRelationalDatabaseResult) => void): Request<Lightsail.Types.CreateRelationalDatabaseResult, AWSError>;
  /**
   * Creates a new database in Amazon Lightsail.
   */
  createRelationalDatabase(callback?: (err: AWSError, data: Lightsail.Types.CreateRelationalDatabaseResult) => void): Request<Lightsail.Types.CreateRelationalDatabaseResult, AWSError>;
  /**
   * Creates a new database from an existing database snapshot in Amazon Lightsail. You can create a new database from a snapshot in if something goes wrong with your original database, or to change it to a different plan, such as a high availability or standard plan.
   */
  createRelationalDatabaseFromSnapshot(params: Lightsail.Types.CreateRelationalDatabaseFromSnapshotRequest, callback?: (err: AWSError, data: Lightsail.Types.CreateRelationalDatabaseFromSnapshotResult) => void): Request<Lightsail.Types.CreateRelationalDatabaseFromSnapshotResult, AWSError>;
  /**
   * Creates a new database from an existing database snapshot in Amazon Lightsail. You can create a new database from a snapshot in if something goes wrong with your original database, or to change it to a different plan, such as a high availability or standard plan.
   */
  createRelationalDatabaseFromSnapshot(callback?: (err: AWSError, data: Lightsail.Types.CreateRelationalDatabaseFromSnapshotResult) => void): Request<Lightsail.Types.CreateRelationalDatabaseFromSnapshotResult, AWSError>;
  /**
   * Creates a snapshot of your database in Amazon Lightsail. You can use snapshots for backups, to make copies of a database, and to save data before deleting a database.
   */
  createRelationalDatabaseSnapshot(params: Lightsail.Types.CreateRelationalDatabaseSnapshotRequest, callback?: (err: AWSError, data: Lightsail.Types.CreateRelationalDatabaseSnapshotResult) => void): Request<Lightsail.Types.CreateRelationalDatabaseSnapshotResult, AWSError>;
  /**
   * Creates a snapshot of your database in Amazon Lightsail. You can use snapshots for backups, to make copies of a database, and to save data before deleting a database.
   */
  createRelationalDatabaseSnapshot(callback?: (err: AWSError, data: Lightsail.Types.CreateRelationalDatabaseSnapshotResult) => void): Request<Lightsail.Types.CreateRelationalDatabaseSnapshotResult, AWSError>;
  /**
   * Deletes the specified block storage disk. The disk must be in the available state (not attached to a Lightsail instance).  The disk may remain in the deleting state for several minutes. 
   */
  deleteDisk(params: Lightsail.Types.DeleteDiskRequest, callback?: (err: AWSError, data: Lightsail.Types.DeleteDiskResult) => void): Request<Lightsail.Types.DeleteDiskResult, AWSError>;
  /**
   * Deletes the specified block storage disk. The disk must be in the available state (not attached to a Lightsail instance).  The disk may remain in the deleting state for several minutes. 
   */
  deleteDisk(callback?: (err: AWSError, data: Lightsail.Types.DeleteDiskResult) => void): Request<Lightsail.Types.DeleteDiskResult, AWSError>;
  /**
   * Deletes the specified disk snapshot. When you make periodic snapshots of a disk, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the disk.
   */
  deleteDiskSnapshot(params: Lightsail.Types.DeleteDiskSnapshotRequest, callback?: (err: AWSError, data: Lightsail.Types.DeleteDiskSnapshotResult) => void): Request<Lightsail.Types.DeleteDiskSnapshotResult, AWSError>;
  /**
   * Deletes the specified disk snapshot. When you make periodic snapshots of a disk, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the disk.
   */
  deleteDiskSnapshot(callback?: (err: AWSError, data: Lightsail.Types.DeleteDiskSnapshotResult) => void): Request<Lightsail.Types.DeleteDiskSnapshotResult, AWSError>;
  /**
   * Deletes the specified domain recordset and all of its domain records.
   */
  deleteDomain(params: Lightsail.Types.DeleteDomainRequest, callback?: (err: AWSError, data: Lightsail.Types.DeleteDomainResult) => void): Request<Lightsail.Types.DeleteDomainResult, AWSError>;
  /**
   * Deletes the specified domain recordset and all of its domain records.
   */
  deleteDomain(callback?: (err: AWSError, data: Lightsail.Types.DeleteDomainResult) => void): Request<Lightsail.Types.DeleteDomainResult, AWSError>;
  /**
   * Deletes a specific domain entry.
   */
  deleteDomainEntry(params: Lightsail.Types.DeleteDomainEntryRequest, callback?: (err: AWSError, data: Lightsail.Types.DeleteDomainEntryResult) => void): Request<Lightsail.Types.DeleteDomainEntryResult, AWSError>;
  /**
   * Deletes a specific domain entry.
   */
  deleteDomainEntry(callback?: (err: AWSError, data: Lightsail.Types.DeleteDomainEntryResult) => void): Request<Lightsail.Types.DeleteDomainEntryResult, AWSError>;
  /**
   * Deletes a specific Amazon Lightsail virtual private server, or instance.
   */
  deleteInstance(params: Lightsail.Types.DeleteInstanceRequest, callback?: (err: AWSError, data: Lightsail.Types.DeleteInstanceResult) => void): Request<Lightsail.Types.DeleteInstanceResult, AWSError>;
  /**
   * Deletes a specific Amazon Lightsail virtual private server, or instance.
   */
  deleteInstance(callback?: (err: AWSError, data: Lightsail.Types.DeleteInstanceResult) => void): Request<Lightsail.Types.DeleteInstanceResult, AWSError>;
  /**
   * Deletes a specific snapshot of a virtual private server (or instance).
   */
  deleteInstanceSnapshot(params: Lightsail.Types.DeleteInstanceSnapshotRequest, callback?: (err: AWSError, data: Lightsail.Types.DeleteInstanceSnapshotResult) => void): Request<Lightsail.Types.DeleteInstanceSnapshotResult, AWSError>;
  /**
   * Deletes a specific snapshot of a virtual private server (or instance).
   */
  deleteInstanceSnapshot(callback?: (err: AWSError, data: Lightsail.Types.DeleteInstanceSnapshotResult) => void): Request<Lightsail.Types.DeleteInstanceSnapshotResult, AWSError>;
  /**
   * Deletes a specific SSH key pair.
   */
  deleteKeyPair(params: Lightsail.Types.DeleteKeyPairRequest, callback?: (err: AWSError, data: Lightsail.Types.DeleteKeyPairResult) => void): Request<Lightsail.Types.DeleteKeyPairResult, AWSError>;
  /**
   * Deletes a specific SSH key pair.
   */
  deleteKeyPair(callback?: (err: AWSError, data: Lightsail.Types.DeleteKeyPairResult) => void): Request<Lightsail.Types.DeleteKeyPairResult, AWSError>;
  /**
   * Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the load balancer is deleted, you will need to create a new load balancer, create a new certificate, and verify domain ownership again.
   */
  deleteLoadBalancer(params: Lightsail.Types.DeleteLoadBalancerRequest, callback?: (err: AWSError, data: Lightsail.Types.DeleteLoadBalancerResult) => void): Request<Lightsail.Types.DeleteLoadBalancerResult, AWSError>;
  /**
   * Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the load balancer is deleted, you will need to create a new load balancer, create a new certificate, and verify domain ownership again.
   */
  deleteLoadBalancer(callback?: (err: AWSError, data: Lightsail.Types.DeleteLoadBalancerResult) => void): Request<Lightsail.Types.DeleteLoadBalancerResult, AWSError>;
  /**
   * Deletes an SSL/TLS certificate associated with a Lightsail load balancer.
   */
  deleteLoadBalancerTlsCertificate(params: Lightsail.Types.DeleteLoadBalancerTlsCertificateRequest, callback?: (err: AWSError, data: Lightsail.Types.DeleteLoadBalancerTlsCertificateResult) => void): Request<Lightsail.Types.DeleteLoadBalancerTlsCertificateResult, AWSError>;
  /**
   * Deletes an SSL/TLS certificate associated with a Lightsail load balancer.
   */
  deleteLoadBalancerTlsCertificate(callback?: (err: AWSError, data: Lightsail.Types.DeleteLoadBalancerTlsCertificateResult) => void): Request<Lightsail.Types.DeleteLoadBalancerTlsCertificateResult, AWSError>;
  /**
   * Deletes a database in Amazon Lightsail.
   */
  deleteRelationalDatabase(params: Lightsail.Types.DeleteRelationalDatabaseRequest, callback?: (err: AWSError, data: Lightsail.Types.DeleteRelationalDatabaseResult) => void): Request<Lightsail.Types.DeleteRelationalDatabaseResult, AWSError>;
  /**
   * Deletes a database in Amazon Lightsail.
   */
  deleteRelationalDatabase(callback?: (err: AWSError, data: Lightsail.Types.DeleteRelationalDatabaseResult) => void): Request<Lightsail.Types.DeleteRelationalDatabaseResult, AWSError>;
  /**
   * Deletes a database snapshot in Amazon Lightsail.
   */
  deleteRelationalDatabaseSnapshot(params: Lightsail.Types.DeleteRelationalDatabaseSnapshotRequest, callback?: (err: AWSError, data: Lightsail.Types.DeleteRelationalDatabaseSnapshotResult) => void): Request<Lightsail.Types.DeleteRelationalDatabaseSnapshotResult, AWSError>;
  /**
   * Deletes a database snapshot in Amazon Lightsail.
   */
  deleteRelationalDatabaseSnapshot(callback?: (err: AWSError, data: Lightsail.Types.DeleteRelationalDatabaseSnapshotResult) => void): Request<Lightsail.Types.DeleteRelationalDatabaseSnapshotResult, AWSError>;
  /**
   * Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount any file systems on the device within your operating system before stopping the instance and detaching the disk.
   */
  detachDisk(params: Lightsail.Types.DetachDiskRequest, callback?: (err: AWSError, data: Lightsail.Types.DetachDiskResult) => void): Request<Lightsail.Types.DetachDiskResult, AWSError>;
  /**
   * Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount any file systems on the device within your operating system before stopping the instance and detaching the disk.
   */
  detachDisk(callback?: (err: AWSError, data: Lightsail.Types.DetachDiskResult) => void): Request<Lightsail.Types.DetachDiskResult, AWSError>;
  /**
   * Detaches the specified instances from a Lightsail load balancer. This operation waits until the instances are no longer needed before they are detached from the load balancer.
   */
  detachInstancesFromLoadBalancer(params: Lightsail.Types.DetachInstancesFromLoadBalancerRequest, callback?: (err: AWSError, data: Lightsail.Types.DetachInstancesFromLoadBalancerResult) => void): Request<Lightsail.Types.DetachInstancesFromLoadBalancerResult, AWSError>;
  /**
   * Detaches the specified instances from a Lightsail load balancer. This operation waits until the instances are no longer needed before they are detached from the load balancer.
   */
  detachInstancesFromLoadBalancer(callback?: (err: AWSError, data: Lightsail.Types.DetachInstancesFromLoadBalancerResult) => void): Request<Lightsail.Types.DetachInstancesFromLoadBalancerResult, AWSError>;
  /**
   * Detaches a static IP from the Amazon Lightsail instance to which it is attached.
   */
  detachStaticIp(params: Lightsail.Types.DetachStaticIpRequest, callback?: (err: AWSError, data: Lightsail.Types.DetachStaticIpResult) => void): Request<Lightsail.Types.DetachStaticIpResult, AWSError>;
  /**
   * Detaches a static IP from the Amazon Lightsail instance to which it is attached.
   */
  detachStaticIp(callback?: (err: AWSError, data: Lightsail.Types.DetachStaticIpResult) => void): Request<Lightsail.Types.DetachStaticIpResult, AWSError>;
  /**
   * Downloads the default SSH key pair from the user's account.
   */
  downloadDefaultKeyPair(params: Lightsail.Types.DownloadDefaultKeyPairRequest, callback?: (err: AWSError, data: Lightsail.Types.DownloadDefaultKeyPairResult) => void): Request<Lightsail.Types.DownloadDefaultKeyPairResult, AWSError>;
  /**
   * Downloads the default SSH key pair from the user's account.
   */
  downloadDefaultKeyPair(callback?: (err: AWSError, data: Lightsail.Types.DownloadDefaultKeyPairResult) => void): Request<Lightsail.Types.DownloadDefaultKeyPairResult, AWSError>;
  /**
   * Returns the names of all active (not deleted) resources.
   */
  getActiveNames(params: Lightsail.Types.GetActiveNamesRequest, callback?: (err: AWSError, data: Lightsail.Types.GetActiveNamesResult) => void): Request<Lightsail.Types.GetActiveNamesResult, AWSError>;
  /**
   * Returns the names of all active (not deleted) resources.
   */
  getActiveNames(callback?: (err: AWSError, data: Lightsail.Types.GetActiveNamesResult) => void): Request<Lightsail.Types.GetActiveNamesResult, AWSError>;
  /**
   * Returns the list of available instance images, or blueprints. You can use a blueprint to create a new virtual private server already running a specific operating system, as well as a preinstalled app or development stack. The software each instance is running depends on the blueprint image you choose.
   */
  getBlueprints(params: Lightsail.Types.GetBlueprintsRequest, callback?: (err: AWSError, data: Lightsail.Types.GetBlueprintsResult) => void): Request<Lightsail.Types.GetBlueprintsResult, AWSError>;
  /**
   * Returns the list of available instance images, or blueprints. You can use a blueprint to create a new virtual private server already running a specific operating system, as well as a preinstalled app or development stack. The software each instance is running depends on the blueprint image you choose.
   */
  getBlueprints(callback?: (err: AWSError, data: Lightsail.Types.GetBlueprintsResult) => void): Request<Lightsail.Types.GetBlueprintsResult, AWSError>;
  /**
   * Returns the list of bundles that are available for purchase. A bundle describes the specs for your virtual private server (or instance).
   */
  getBundles(params: Lightsail.Types.GetBundlesRequest, callback?: (err: AWSError, data: Lightsail.Types.GetBundlesResult) => void): Request<Lightsail.Types.GetBundlesResult, AWSError>;
  /**
   * Returns the list of bundles that are available for purchase. A bundle describes the specs for your virtual private server (or instance).
   */
  getBundles(callback?: (err: AWSError, data: Lightsail.Types.GetBundlesResult) => void): Request<Lightsail.Types.GetBundlesResult, AWSError>;
  /**
   * Returns information about a specific block storage disk.
   */
  getDisk(params: Lightsail.Types.GetDiskRequest, callback?: (err: AWSError, data: Lightsail.Types.GetDiskResult) => void): Request<Lightsail.Types.GetDiskResult, AWSError>;
  /**
   * Returns information about a specific block storage disk.
   */
  getDisk(callback?: (err: AWSError, data: Lightsail.Types.GetDiskResult) => void): Request<Lightsail.Types.GetDiskResult, AWSError>;
  /**
   * Returns information about a specific block storage disk snapshot.
   */
  getDiskSnapshot(params: Lightsail.Types.GetDiskSnapshotRequest, callback?: (err: AWSError, data: Lightsail.Types.GetDiskSnapshotResult) => void): Request<Lightsail.Types.GetDiskSnapshotResult, AWSError>;
  /**
   * Returns information about a specific block storage disk snapshot.
   */
  getDiskSnapshot(callback?: (err: AWSError, data: Lightsail.Types.GetDiskSnapshotResult) => void): Request<Lightsail.Types.GetDiskSnapshotResult, AWSError>;
  /**
   * Returns information about all block storage disk snapshots in your AWS account and region. If you are describing a long list of disk snapshots, you can paginate the output to make the list more manageable. You can use the pageToken and nextPageToken values to retrieve the next items in the list.
   */
  getDiskSnapshots(params: Lightsail.Types.GetDiskSnapshotsRequest, callback?: (err: AWSError, data: Lightsail.Types.GetDiskSnapshotsResult) => void): Request<Lightsail.Types.GetDiskSnapshotsResult, AWSError>;
  /**
   * Returns information about all block storage disk snapshots in your AWS account and region. If you are describing a long list of disk snapshots, you can paginate the output to make the list more manageable. You can use the pageToken and nextPageToken values to retrieve the next items in the list.
   */
  getDiskSnapshots(callback?: (err: AWSError, data: Lightsail.Types.GetDiskSnapshotsResult) => void): Request<Lightsail.Types.GetDiskSnapshotsResult, AWSError>;
  /**
   * Returns information about all block storage disks in your AWS account and region. If you are describing a long list of disks, you can paginate the output to make the list more manageable. You can use the pageToken and nextPageToken values to retrieve the next items in the list.
   */
  getDisks(params: Lightsail.Types.GetDisksRequest, callback?: (err: AWSError, data: Lightsail.Types.GetDisksResult) => void): Request<Lightsail.Types.GetDisksResult, AWSError>;
  /**
   * Returns information about all block storage disks in your AWS account and region. If you are describing a long list of disks, you can paginate the output to make the list more manageable. You can use the pageToken and nextPageToken values to retrieve the next items in the list.
   */
  getDisks(callback?: (err: AWSError, data: Lightsail.Types.GetDisksResult) => void): Request<Lightsail.Types.GetDisksResult, AWSError>;
  /**
   * Returns information about a specific domain recordset.
   */
  getDomain(params: Lightsail.Types.GetDomainRequest, callback?: (err: AWSError, data: Lightsail.Types.GetDomainResult) => void): Request<Lightsail.Types.GetDomainResult, AWSError>;
  /**
   * Returns information about a specific domain recordset.
   */
  getDomain(callback?: (err: AWSError, data: Lightsail.Types.GetDomainResult) => void): Request<Lightsail.Types.GetDomainResult, AWSError>;
  /**
   * Returns a list of all domains in the user's account.
   */
  getDomains(params: Lightsail.Types.GetDomainsRequest, callback?: (err: AWSError, data: Lightsail.Types.GetDomainsResult) => void): Request<Lightsail.Types.GetDomainsResult, AWSError>;
  /**
   * Returns a list of all domains in the user's account.
   */
  getDomains(callback?: (err: AWSError, data: Lightsail.Types.GetDomainsResult) => void): Request<Lightsail.Types.GetDomainsResult, AWSError>;
  /**
   * Returns information about a specific Amazon Lightsail instance, which is a virtual private server.
   */
  getInstance(params: Lightsail.Types.GetInstanceRequest, callback?: (err: AWSError, data: Lightsail.Types.GetInstanceResult) => void): Request<Lightsail.Types.GetInstanceResult, AWSError>;
  /**
   * Returns information about a specific Amazon Lightsail instance, which is a virtual private server.
   */
  getInstance(callback?: (err: AWSError, data: Lightsail.Types.GetInstanceResult) => void): Request<Lightsail.Types.GetInstanceResult, AWSError>;
  /**
   * Returns temporary SSH keys you can use to connect to a specific virtual private server, or instance.
   */
  getInstanceAccessDetails(params: Lightsail.Types.GetInstanceAccessDetailsRequest, callback?: (err: AWSError, data: Lightsail.Types.GetInstanceAccessDetailsResult) => void): Request<Lightsail.Types.GetInstanceAccessDetailsResult, AWSError>;
  /**
   * Returns temporary SSH keys you can use to connect to a specific virtual private server, or instance.
   */
  getInstanceAccessDetails(callback?: (err: AWSError, data: Lightsail.Types.GetInstanceAccessDetailsResult) => void): Request<Lightsail.Types.GetInstanceAccessDetailsResult, AWSError>;
  /**
   * Returns the data points for the specified Amazon Lightsail instance metric, given an instance name.
   */
  getInstanceMetricData(params: Lightsail.Types.GetInstanceMetricDataRequest, callback?: (err: AWSError, data: Lightsail.Types.GetInstanceMetricDataResult) => void): Request<Lightsail.Types.GetInstanceMetricDataResult, AWSError>;
  /**
   * Returns the data points for the specified Amazon Lightsail instance metric, given an instance name.
   */
  getInstanceMetricData(callback?: (err: AWSError, data: Lightsail.Types.GetInstanceMetricDataResult) => void): Request<Lightsail.Types.GetInstanceMetricDataResult, AWSError>;
  /**
   * Returns the port states for a specific virtual private server, or instance.
   */
  getInstancePortStates(params: Lightsail.Types.GetInstancePortStatesRequest, callback?: (err: AWSError, data: Lightsail.Types.GetInstancePortStatesResult) => void): Request<Lightsail.Types.GetInstancePortStatesResult, AWSError>;
  /**
   * Returns the port states for a specific virtual private server, or instance.
   */
  getInstancePortStates(callback?: (err: AWSError, data: Lightsail.Types.GetInstancePortStatesResult) => void): Request<Lightsail.Types.GetInstancePortStatesResult, AWSError>;
  /**
   * Returns information about a specific instance snapshot.
   */
  getInstanceSnapshot(params: Lightsail.Types.GetInstanceSnapshotRequest, callback?: (err: AWSError, data: Lightsail.Types.GetInstanceSnapshotResult) => void): Request<Lightsail.Types.GetInstanceSnapshotResult, AWSError>;
  /**
   * Returns information about a specific instance snapshot.
   */
  getInstanceSnapshot(callback?: (err: AWSError, data: Lightsail.Types.GetInstanceSnapshotResult) => void): Request<Lightsail.Types.GetInstanceSnapshotResult, AWSError>;
  /**
   * Returns all instance snapshots for the user's account.
   */
  getInstanceSnapshots(params: Lightsail.Types.GetInstanceSnapshotsRequest, callback?: (err: AWSError, data: Lightsail.Types.GetInstanceSnapshotsResult) => void): Request<Lightsail.Types.GetInstanceSnapshotsResult, AWSError>;
  /**
   * Returns all instance snapshots for the user's account.
   */
  getInstanceSnapshots(callback?: (err: AWSError, data: Lightsail.Types.GetInstanceSnapshotsResult) => void): Request<Lightsail.Types.GetInstanceSnapshotsResult, AWSError>;
  /**
   * Returns the state of a specific instance. Works on one instance at a time.
   */
  getInstanceState(params: Lightsail.Types.GetInstanceStateRequest, callback?: (err: AWSError, data: Lightsail.Types.GetInstanceStateResult) => void): Request<Lightsail.Types.GetInstanceStateResult, AWSError>;
  /**
   * Returns the state of a specific instance. Works on one instance at a time.
   */
  getInstanceState(callback?: (err: AWSError, data: Lightsail.Types.GetInstanceStateResult) => void): Request<Lightsail.Types.GetInstanceStateResult, AWSError>;
  /**
   * Returns information about all Amazon Lightsail virtual private servers, or instances.
   */
  getInstances(params: Lightsail.Types.GetInstancesRequest, callback?: (err: AWSError, data: Lightsail.Types.GetInstancesResult) => void): Request<Lightsail.Types.GetInstancesResult, AWSError>;
  /**
   * Returns information about all Amazon Lightsail virtual private servers, or instances.
   */
  getInstances(callback?: (err: AWSError, data: Lightsail.Types.GetInstancesResult) => void): Request<Lightsail.Types.GetInstancesResult, AWSError>;
  /**
   * Returns information about a specific key pair.
   */
  getKeyPair(params: Lightsail.Types.GetKeyPairRequest, callback?: (err: AWSError, data: Lightsail.Types.GetKeyPairResult) => void): Request<Lightsail.Types.GetKeyPairResult, AWSError>;
  /**
   * Returns information about a specific key pair.
   */
  getKeyPair(callback?: (err: AWSError, data: Lightsail.Types.GetKeyPairResult) => void): Request<Lightsail.Types.GetKeyPairResult, AWSError>;
  /**
   * Returns information about all key pairs in the user's account.
   */
  getKeyPairs(params: Lightsail.Types.GetKeyPairsRequest, callback?: (err: AWSError, data: Lightsail.Types.GetKeyPairsResult) => void): Request<Lightsail.Types.GetKeyPairsResult, AWSError>;
  /**
   * Returns information about all key pairs in the user's account.
   */
  getKeyPairs(callback?: (err: AWSError, data: Lightsail.Types.GetKeyPairsResult) => void): Request<Lightsail.Types.GetKeyPairsResult, AWSError>;
  /**
   * Returns information about the specified Lightsail load balancer.
   */
  getLoadBalancer(params: Lightsail.Types.GetLoadBalancerRequest, callback?: (err: AWSError, data: Lightsail.Types.GetLoadBalancerResult) => void): Request<Lightsail.Types.GetLoadBalancerResult, AWSError>;
  /**
   * Returns information about the specified Lightsail load balancer.
   */
  getLoadBalancer(callback?: (err: AWSError, data: Lightsail.Types.GetLoadBalancerResult) => void): Request<Lightsail.Types.GetLoadBalancerResult, AWSError>;
  /**
   * Returns information about health metrics for your Lightsail load balancer.
   */
  getLoadBalancerMetricData(params: Lightsail.Types.GetLoadBalancerMetricDataRequest, callback?: (err: AWSError, data: Lightsail.Types.GetLoadBalancerMetricDataResult) => void): Request<Lightsail.Types.GetLoadBalancerMetricDataResult, AWSError>;
  /**
   * Returns information about health metrics for your Lightsail load balancer.
   */
  getLoadBalancerMetricData(callback?: (err: AWSError, data: Lightsail.Types.GetLoadBalancerMetricDataResult) => void): Request<Lightsail.Types.GetLoadBalancerMetricDataResult, AWSError>;
  /**
   * Returns information about the TLS certificates that are associated with the specified Lightsail load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL). You can have a maximum of 2 certificates associated with a Lightsail load balancer. One is active and the other is inactive.
   */
  getLoadBalancerTlsCertificates(params: Lightsail.Types.GetLoadBalancerTlsCertificatesRequest, callback?: (err: AWSError, data: Lightsail.Types.GetLoadBalancerTlsCertificatesResult) => void): Request<Lightsail.Types.GetLoadBalancerTlsCertificatesResult, AWSError>;
  /**
   * Returns information about the TLS certificates that are associated with the specified Lightsail load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL). You can have a maximum of 2 certificates associated with a Lightsail load balancer. One is active and the other is inactive.
   */
  getLoadBalancerTlsCertificates(callback?: (err: AWSError, data: Lightsail.Types.GetLoadBalancerTlsCertificatesResult) => void): Request<Lightsail.Types.GetLoadBalancerTlsCertificatesResult, AWSError>;
  /**
   * Returns information about all load balancers in an account. If you are describing a long list of load balancers, you can paginate the output to make the list more manageable. You can use the pageToken and nextPageToken values to retrieve the next items in the list.
   */
  getLoadBalancers(params: Lightsail.Types.GetLoadBalancersRequest, callback?: (err: AWSError, data: Lightsail.Types.GetLoadBalancersResult) => void): Request<Lightsail.Types.GetLoadBalancersResult, AWSError>;
  /**
   * Returns information about all load balancers in an account. If you are describing a long list of load balancers, you can paginate the output to make the list more manageable. You can use the pageToken and nextPageToken values to retrieve the next items in the list.
   */
  getLoadBalancers(callback?: (err: AWSError, data: Lightsail.Types.GetLoadBalancersResult) => void): Request<Lightsail.Types.GetLoadBalancersResult, AWSError>;
  /**
   * Returns information about a specific operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.
   */
  getOperation(params: Lightsail.Types.GetOperationRequest, callback?: (err: AWSError, data: Lightsail.Types.GetOperationResult) => void): Request<Lightsail.Types.GetOperationResult, AWSError>;
  /**
   * Returns information about a specific operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.
   */
  getOperation(callback?: (err: AWSError, data: Lightsail.Types.GetOperationResult) => void): Request<Lightsail.Types.GetOperationResult, AWSError>;
  /**
   * Returns information about all operations. Results are returned from oldest to newest, up to a maximum of 200. Results can be paged by making each subsequent call to GetOperations use the maximum (last) statusChangedAt value from the previous request.
   */
  getOperations(params: Lightsail.Types.GetOperationsRequest, callback?: (err: AWSError, data: Lightsail.Types.GetOperationsResult) => void): Request<Lightsail.Types.GetOperationsResult, AWSError>;
  /**
   * Returns information about all operations. Results are returned from oldest to newest, up to a maximum of 200. Results can be paged by making each subsequent call to GetOperations use the maximum (last) statusChangedAt value from the previous request.
   */
  getOperations(callback?: (err: AWSError, data: Lightsail.Types.GetOperationsResult) => void): Request<Lightsail.Types.GetOperationsResult, AWSError>;
  /**
   * Gets operations for a specific resource (e.g., an instance or a static IP).
   */
  getOperationsForResource(params: Lightsail.Types.GetOperationsForResourceRequest, callback?: (err: AWSError, data: Lightsail.Types.GetOperationsForResourceResult) => void): Request<Lightsail.Types.GetOperationsForResourceResult, AWSError>;
  /**
   * Gets operations for a specific resource (e.g., an instance or a static IP).
   */
  getOperationsForResource(callback?: (err: AWSError, data: Lightsail.Types.GetOperationsForResourceResult) => void): Request<Lightsail.Types.GetOperationsForResourceResult, AWSError>;
  /**
   * Returns a list of all valid regions for Amazon Lightsail. Use the include availability zones parameter to also return the Availability Zones in a region.
   */
  getRegions(params: Lightsail.Types.GetRegionsRequest, callback?: (err: AWSError, data: Lightsail.Types.GetRegionsResult) => void): Request<Lightsail.Types.GetRegionsResult, AWSError>;
  /**
   * Returns a list of all valid regions for Amazon Lightsail. Use the include availability zones parameter to also return the Availability Zones in a region.
   */
  getRegions(callback?: (err: AWSError, data: Lightsail.Types.GetRegionsResult) => void): Request<Lightsail.Types.GetRegionsResult, AWSError>;
  /**
   * Returns information about a specific database in Amazon Lightsail.
   */
  getRelationalDatabase(params: Lightsail.Types.GetRelationalDatabaseRequest, callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabaseResult) => void): Request<Lightsail.Types.GetRelationalDatabaseResult, AWSError>;
  /**
   * Returns information about a specific database in Amazon Lightsail.
   */
  getRelationalDatabase(callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabaseResult) => void): Request<Lightsail.Types.GetRelationalDatabaseResult, AWSError>;
  /**
   * Returns a list of available database blueprints in Amazon Lightsail. A blueprint describes the major engine version of a database. You can use a blueprint ID to create a new database that runs a specific database engine.
   */
  getRelationalDatabaseBlueprints(params: Lightsail.Types.GetRelationalDatabaseBlueprintsRequest, callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabaseBlueprintsResult) => void): Request<Lightsail.Types.GetRelationalDatabaseBlueprintsResult, AWSError>;
  /**
   * Returns a list of available database blueprints in Amazon Lightsail. A blueprint describes the major engine version of a database. You can use a blueprint ID to create a new database that runs a specific database engine.
   */
  getRelationalDatabaseBlueprints(callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabaseBlueprintsResult) => void): Request<Lightsail.Types.GetRelationalDatabaseBlueprintsResult, AWSError>;
  /**
   * Returns the list of bundles that are available in Amazon Lightsail. A bundle describes the performance specifications for a database. You can use a bundle ID to create a new database with explicit performance specifications.
   */
  getRelationalDatabaseBundles(params: Lightsail.Types.GetRelationalDatabaseBundlesRequest, callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabaseBundlesResult) => void): Request<Lightsail.Types.GetRelationalDatabaseBundlesResult, AWSError>;
  /**
   * Returns the list of bundles that are available in Amazon Lightsail. A bundle describes the performance specifications for a database. You can use a bundle ID to create a new database with explicit performance specifications.
   */
  getRelationalDatabaseBundles(callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabaseBundlesResult) => void): Request<Lightsail.Types.GetRelationalDatabaseBundlesResult, AWSError>;
  /**
   * Returns a list of events for a specific database in Amazon Lightsail.
   */
  getRelationalDatabaseEvents(params: Lightsail.Types.GetRelationalDatabaseEventsRequest, callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabaseEventsResult) => void): Request<Lightsail.Types.GetRelationalDatabaseEventsResult, AWSError>;
  /**
   * Returns a list of events for a specific database in Amazon Lightsail.
   */
  getRelationalDatabaseEvents(callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabaseEventsResult) => void): Request<Lightsail.Types.GetRelationalDatabaseEventsResult, AWSError>;
  /**
   * Returns a list of log events for a database in Amazon Lightsail.
   */
  getRelationalDatabaseLogEvents(params: Lightsail.Types.GetRelationalDatabaseLogEventsRequest, callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabaseLogEventsResult) => void): Request<Lightsail.Types.GetRelationalDatabaseLogEventsResult, AWSError>;
  /**
   * Returns a list of log events for a database in Amazon Lightsail.
   */
  getRelationalDatabaseLogEvents(callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabaseLogEventsResult) => void): Request<Lightsail.Types.GetRelationalDatabaseLogEventsResult, AWSError>;
  /**
   * Returns a list of available log streams for a specific database in Amazon Lightsail.
   */
  getRelationalDatabaseLogStreams(params: Lightsail.Types.GetRelationalDatabaseLogStreamsRequest, callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabaseLogStreamsResult) => void): Request<Lightsail.Types.GetRelationalDatabaseLogStreamsResult, AWSError>;
  /**
   * Returns a list of available log streams for a specific database in Amazon Lightsail.
   */
  getRelationalDatabaseLogStreams(callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabaseLogStreamsResult) => void): Request<Lightsail.Types.GetRelationalDatabaseLogStreamsResult, AWSError>;
  /**
   * Returns the current, previous, or pending versions of the master user password for a Lightsail database.
   */
  getRelationalDatabaseMasterUserPassword(params: Lightsail.Types.GetRelationalDatabaseMasterUserPasswordRequest, callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabaseMasterUserPasswordResult) => void): Request<Lightsail.Types.GetRelationalDatabaseMasterUserPasswordResult, AWSError>;
  /**
   * Returns the current, previous, or pending versions of the master user password for a Lightsail database.
   */
  getRelationalDatabaseMasterUserPassword(callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabaseMasterUserPasswordResult) => void): Request<Lightsail.Types.GetRelationalDatabaseMasterUserPasswordResult, AWSError>;
  /**
   * Returns the data points of the specified metric for a database in Amazon Lightsail.
   */
  getRelationalDatabaseMetricData(params: Lightsail.Types.GetRelationalDatabaseMetricDataRequest, callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabaseMetricDataResult) => void): Request<Lightsail.Types.GetRelationalDatabaseMetricDataResult, AWSError>;
  /**
   * Returns the data points of the specified metric for a database in Amazon Lightsail.
   */
  getRelationalDatabaseMetricData(callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabaseMetricDataResult) => void): Request<Lightsail.Types.GetRelationalDatabaseMetricDataResult, AWSError>;
  /**
   * Returns all of the runtime parameters offered by the underlying database software, or engine, for a specific database in Amazon Lightsail. In addition to the parameter names and values, this operation returns other information about each parameter. This information includes whether changes require a reboot, whether the parameter is modifiable, the allowed values, and the data types.
   */
  getRelationalDatabaseParameters(params: Lightsail.Types.GetRelationalDatabaseParametersRequest, callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabaseParametersResult) => void): Request<Lightsail.Types.GetRelationalDatabaseParametersResult, AWSError>;
  /**
   * Returns all of the runtime parameters offered by the underlying database software, or engine, for a specific database in Amazon Lightsail. In addition to the parameter names and values, this operation returns other information about each parameter. This information includes whether changes require a reboot, whether the parameter is modifiable, the allowed values, and the data types.
   */
  getRelationalDatabaseParameters(callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabaseParametersResult) => void): Request<Lightsail.Types.GetRelationalDatabaseParametersResult, AWSError>;
  /**
   * Returns information about a specific database snapshot in Amazon Lightsail.
   */
  getRelationalDatabaseSnapshot(params: Lightsail.Types.GetRelationalDatabaseSnapshotRequest, callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabaseSnapshotResult) => void): Request<Lightsail.Types.GetRelationalDatabaseSnapshotResult, AWSError>;
  /**
   * Returns information about a specific database snapshot in Amazon Lightsail.
   */
  getRelationalDatabaseSnapshot(callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabaseSnapshotResult) => void): Request<Lightsail.Types.GetRelationalDatabaseSnapshotResult, AWSError>;
  /**
   * Returns information about all of your database snapshots in Amazon Lightsail.
   */
  getRelationalDatabaseSnapshots(params: Lightsail.Types.GetRelationalDatabaseSnapshotsRequest, callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabaseSnapshotsResult) => void): Request<Lightsail.Types.GetRelationalDatabaseSnapshotsResult, AWSError>;
  /**
   * Returns information about all of your database snapshots in Amazon Lightsail.
   */
  getRelationalDatabaseSnapshots(callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabaseSnapshotsResult) => void): Request<Lightsail.Types.GetRelationalDatabaseSnapshotsResult, AWSError>;
  /**
   * Returns information about all of your databases in Amazon Lightsail.
   */
  getRelationalDatabases(params: Lightsail.Types.GetRelationalDatabasesRequest, callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabasesResult) => void): Request<Lightsail.Types.GetRelationalDatabasesResult, AWSError>;
  /**
   * Returns information about all of your databases in Amazon Lightsail.
   */
  getRelationalDatabases(callback?: (err: AWSError, data: Lightsail.Types.GetRelationalDatabasesResult) => void): Request<Lightsail.Types.GetRelationalDatabasesResult, AWSError>;
  /**
   * Returns information about a specific static IP.
   */
  getStaticIp(params: Lightsail.Types.GetStaticIpRequest, callback?: (err: AWSError, data: Lightsail.Types.GetStaticIpResult) => void): Request<Lightsail.Types.GetStaticIpResult, AWSError>;
  /**
   * Returns information about a specific static IP.
   */
  getStaticIp(callback?: (err: AWSError, data: Lightsail.Types.GetStaticIpResult) => void): Request<Lightsail.Types.GetStaticIpResult, AWSError>;
  /**
   * Returns information about all static IPs in the user's account.
   */
  getStaticIps(params: Lightsail.Types.GetStaticIpsRequest, callback?: (err: AWSError, data: Lightsail.Types.GetStaticIpsResult) => void): Request<Lightsail.Types.GetStaticIpsResult, AWSError>;
  /**
   * Returns information about all static IPs in the user's account.
   */
  getStaticIps(callback?: (err: AWSError, data: Lightsail.Types.GetStaticIpsResult) => void): Request<Lightsail.Types.GetStaticIpsResult, AWSError>;
  /**
   * Imports a public SSH key from a specific key pair.
   */
  importKeyPair(params: Lightsail.Types.ImportKeyPairRequest, callback?: (err: AWSError, data: Lightsail.Types.ImportKeyPairResult) => void): Request<Lightsail.Types.ImportKeyPairResult, AWSError>;
  /**
   * Imports a public SSH key from a specific key pair.
   */
  importKeyPair(callback?: (err: AWSError, data: Lightsail.Types.ImportKeyPairResult) => void): Request<Lightsail.Types.ImportKeyPairResult, AWSError>;
  /**
   * Returns a Boolean value indicating whether your Lightsail VPC is peered.
   */
  isVpcPeered(params: Lightsail.Types.IsVpcPeeredRequest, callback?: (err: AWSError, data: Lightsail.Types.IsVpcPeeredResult) => void): Request<Lightsail.Types.IsVpcPeeredResult, AWSError>;
  /**
   * Returns a Boolean value indicating whether your Lightsail VPC is peered.
   */
  isVpcPeered(callback?: (err: AWSError, data: Lightsail.Types.IsVpcPeeredResult) => void): Request<Lightsail.Types.IsVpcPeeredResult, AWSError>;
  /**
   * Adds public ports to an Amazon Lightsail instance.
   */
  openInstancePublicPorts(params: Lightsail.Types.OpenInstancePublicPortsRequest, callback?: (err: AWSError, data: Lightsail.Types.OpenInstancePublicPortsResult) => void): Request<Lightsail.Types.OpenInstancePublicPortsResult, AWSError>;
  /**
   * Adds public ports to an Amazon Lightsail instance.
   */
  openInstancePublicPorts(callback?: (err: AWSError, data: Lightsail.Types.OpenInstancePublicPortsResult) => void): Request<Lightsail.Types.OpenInstancePublicPortsResult, AWSError>;
  /**
   * Tries to peer the Lightsail VPC with the user's default VPC.
   */
  peerVpc(params: Lightsail.Types.PeerVpcRequest, callback?: (err: AWSError, data: Lightsail.Types.PeerVpcResult) => void): Request<Lightsail.Types.PeerVpcResult, AWSError>;
  /**
   * Tries to peer the Lightsail VPC with the user's default VPC.
   */
  peerVpc(callback?: (err: AWSError, data: Lightsail.Types.PeerVpcResult) => void): Request<Lightsail.Types.PeerVpcResult, AWSError>;
  /**
   * Sets the specified open ports for an Amazon Lightsail instance, and closes all ports for every protocol not included in the current request.
   */
  putInstancePublicPorts(params: Lightsail.Types.PutInstancePublicPortsRequest, callback?: (err: AWSError, data: Lightsail.Types.PutInstancePublicPortsResult) => void): Request<Lightsail.Types.PutInstancePublicPortsResult, AWSError>;
  /**
   * Sets the specified open ports for an Amazon Lightsail instance, and closes all ports for every protocol not included in the current request.
   */
  putInstancePublicPorts(callback?: (err: AWSError, data: Lightsail.Types.PutInstancePublicPortsResult) => void): Request<Lightsail.Types.PutInstancePublicPortsResult, AWSError>;
  /**
   * Restarts a specific instance. When your Amazon Lightsail instance is finished rebooting, Lightsail assigns a new public IP address. To use the same IP address after restarting, create a static IP address and attach it to the instance.
   */
  rebootInstance(params: Lightsail.Types.RebootInstanceRequest, callback?: (err: AWSError, data: Lightsail.Types.RebootInstanceResult) => void): Request<Lightsail.Types.RebootInstanceResult, AWSError>;
  /**
   * Restarts a specific instance. When your Amazon Lightsail instance is finished rebooting, Lightsail assigns a new public IP address. To use the same IP address after restarting, create a static IP address and attach it to the instance.
   */
  rebootInstance(callback?: (err: AWSError, data: Lightsail.Types.RebootInstanceResult) => void): Request<Lightsail.Types.RebootInstanceResult, AWSError>;
  /**
   * Restarts a specific database in Amazon Lightsail.
   */
  rebootRelationalDatabase(params: Lightsail.Types.RebootRelationalDatabaseRequest, callback?: (err: AWSError, data: Lightsail.Types.RebootRelationalDatabaseResult) => void): Request<Lightsail.Types.RebootRelationalDatabaseResult, AWSError>;
  /**
   * Restarts a specific database in Amazon Lightsail.
   */
  rebootRelationalDatabase(callback?: (err: AWSError, data: Lightsail.Types.RebootRelationalDatabaseResult) => void): Request<Lightsail.Types.RebootRelationalDatabaseResult, AWSError>;
  /**
   * Deletes a specific static IP from your account.
   */
  releaseStaticIp(params: Lightsail.Types.ReleaseStaticIpRequest, callback?: (err: AWSError, data: Lightsail.Types.ReleaseStaticIpResult) => void): Request<Lightsail.Types.ReleaseStaticIpResult, AWSError>;
  /**
   * Deletes a specific static IP from your account.
   */
  releaseStaticIp(callback?: (err: AWSError, data: Lightsail.Types.ReleaseStaticIpResult) => void): Request<Lightsail.Types.ReleaseStaticIpResult, AWSError>;
  /**
   * Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance, use the reboot instance operation.
   */
  startInstance(params: Lightsail.Types.StartInstanceRequest, callback?: (err: AWSError, data: Lightsail.Types.StartInstanceResult) => void): Request<Lightsail.Types.StartInstanceResult, AWSError>;
  /**
   * Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance, use the reboot instance operation.
   */
  startInstance(callback?: (err: AWSError, data: Lightsail.Types.StartInstanceResult) => void): Request<Lightsail.Types.StartInstanceResult, AWSError>;
  /**
   * Starts a specific database from a stopped state in Amazon Lightsail. To restart a database, use the reboot relational database operation.
   */
  startRelationalDatabase(params: Lightsail.Types.StartRelationalDatabaseRequest, callback?: (err: AWSError, data: Lightsail.Types.StartRelationalDatabaseResult) => void): Request<Lightsail.Types.StartRelationalDatabaseResult, AWSError>;
  /**
   * Starts a specific database from a stopped state in Amazon Lightsail. To restart a database, use the reboot relational database operation.
   */
  startRelationalDatabase(callback?: (err: AWSError, data: Lightsail.Types.StartRelationalDatabaseResult) => void): Request<Lightsail.Types.StartRelationalDatabaseResult, AWSError>;
  /**
   * Stops a specific Amazon Lightsail instance that is currently running.
   */
  stopInstance(params: Lightsail.Types.StopInstanceRequest, callback?: (err: AWSError, data: Lightsail.Types.StopInstanceResult) => void): Request<Lightsail.Types.StopInstanceResult, AWSError>;
  /**
   * Stops a specific Amazon Lightsail instance that is currently running.
   */
  stopInstance(callback?: (err: AWSError, data: Lightsail.Types.StopInstanceResult) => void): Request<Lightsail.Types.StopInstanceResult, AWSError>;
  /**
   * Stops a specific database that is currently running in Amazon Lightsail.
   */
  stopRelationalDatabase(params: Lightsail.Types.StopRelationalDatabaseRequest, callback?: (err: AWSError, data: Lightsail.Types.StopRelationalDatabaseResult) => void): Request<Lightsail.Types.StopRelationalDatabaseResult, AWSError>;
  /**
   * Stops a specific database that is currently running in Amazon Lightsail.
   */
  stopRelationalDatabase(callback?: (err: AWSError, data: Lightsail.Types.StopRelationalDatabaseResult) => void): Request<Lightsail.Types.StopRelationalDatabaseResult, AWSError>;
  /**
   * Attempts to unpeer the Lightsail VPC from the user's default VPC.
   */
  unpeerVpc(params: Lightsail.Types.UnpeerVpcRequest, callback?: (err: AWSError, data: Lightsail.Types.UnpeerVpcResult) => void): Request<Lightsail.Types.UnpeerVpcResult, AWSError>;
  /**
   * Attempts to unpeer the Lightsail VPC from the user's default VPC.
   */
  unpeerVpc(callback?: (err: AWSError, data: Lightsail.Types.UnpeerVpcResult) => void): Request<Lightsail.Types.UnpeerVpcResult, AWSError>;
  /**
   * Updates a domain recordset after it is created.
   */
  updateDomainEntry(params: Lightsail.Types.UpdateDomainEntryRequest, callback?: (err: AWSError, data: Lightsail.Types.UpdateDomainEntryResult) => void): Request<Lightsail.Types.UpdateDomainEntryResult, AWSError>;
  /**
   * Updates a domain recordset after it is created.
   */
  updateDomainEntry(callback?: (err: AWSError, data: Lightsail.Types.UpdateDomainEntryResult) => void): Request<Lightsail.Types.UpdateDomainEntryResult, AWSError>;
  /**
   * Updates the specified attribute for a load balancer. You can only update one attribute at a time.
   */
  updateLoadBalancerAttribute(params: Lightsail.Types.UpdateLoadBalancerAttributeRequest, callback?: (err: AWSError, data: Lightsail.Types.UpdateLoadBalancerAttributeResult) => void): Request<Lightsail.Types.UpdateLoadBalancerAttributeResult, AWSError>;
  /**
   * Updates the specified attribute for a load balancer. You can only update one attribute at a time.
   */
  updateLoadBalancerAttribute(callback?: (err: AWSError, data: Lightsail.Types.UpdateLoadBalancerAttributeResult) => void): Request<Lightsail.Types.UpdateLoadBalancerAttributeResult, AWSError>;
  /**
   * Allows the update of one or more attributes of a database in Amazon Lightsail. Updates are applied immediately, or in cases where the updates could result in an outage, are applied during the database's predefined maintenance window.
   */
  updateRelationalDatabase(params: Lightsail.Types.UpdateRelationalDatabaseRequest, callback?: (err: AWSError, data: Lightsail.Types.UpdateRelationalDatabaseResult) => void): Request<Lightsail.Types.UpdateRelationalDatabaseResult, AWSError>;
  /**
   * Allows the update of one or more attributes of a database in Amazon Lightsail. Updates are applied immediately, or in cases where the updates could result in an outage, are applied during the database's predefined maintenance window.
   */
  updateRelationalDatabase(callback?: (err: AWSError, data: Lightsail.Types.UpdateRelationalDatabaseResult) => void): Request<Lightsail.Types.UpdateRelationalDatabaseResult, AWSError>;
  /**
   * Allows the update of one or more parameters of a database in Amazon Lightsail. Parameter updates don't cause outages; therefore, their application is not subject to the preferred maintenance window. However, there are two ways in which paramater updates are applied: dynamic or pending-reboot. Parameters marked with a dynamic apply type are applied immediately. Parameters marked with a pending-reboot apply type are applied only after the database is rebooted using the reboot relational database operation.
   */
  updateRelationalDatabaseParameters(params: Lightsail.Types.UpdateRelationalDatabaseParametersRequest, callback?: (err: AWSError, data: Lightsail.Types.UpdateRelationalDatabaseParametersResult) => void): Request<Lightsail.Types.UpdateRelationalDatabaseParametersResult, AWSError>;
  /**
   * Allows the update of one or more parameters of a database in Amazon Lightsail. Parameter updates don't cause outages; therefore, their application is not subject to the preferred maintenance window. However, there are two ways in which paramater updates are applied: dynamic or pending-reboot. Parameters marked with a dynamic apply type are applied immediately. Parameters marked with a pending-reboot apply type are applied only after the database is rebooted using the reboot relational database operation.
   */
  updateRelationalDatabaseParameters(callback?: (err: AWSError, data: Lightsail.Types.UpdateRelationalDatabaseParametersResult) => void): Request<Lightsail.Types.UpdateRelationalDatabaseParametersResult, AWSError>;
}
declare namespace Lightsail {
  export type AccessDirection = "inbound"|"outbound"|string;
  export interface AllocateStaticIpRequest {
    /**
     * The name of the static IP address.
     */
    staticIpName: ResourceName;
  }
  export interface AllocateStaticIpResult {
    /**
     * An array of key-value pairs containing information about the static IP address you allocated.
     */
    operations?: OperationList;
  }
  export interface AttachDiskRequest {
    /**
     * The unique Lightsail disk name (e.g., my-disk).
     */
    diskName: ResourceName;
    /**
     * The name of the Lightsail instance where you want to utilize the storage disk.
     */
    instanceName: ResourceName;
    /**
     * The disk path to expose to the instance (e.g., /dev/xvdf).
     */
    diskPath: NonEmptyString;
  }
  export interface AttachDiskResult {
    /**
     * An object describing the API operations.
     */
    operations?: OperationList;
  }
  export interface AttachInstancesToLoadBalancerRequest {
    /**
     * The name of the load balancer.
     */
    loadBalancerName: ResourceName;
    /**
     * An array of strings representing the instance name(s) you want to attach to your load balancer. An instance must be running before you can attach it to your load balancer. There are no additional limits on the number of instances you can attach to your load balancer, aside from the limit of Lightsail instances you can create in your account (20).
     */
    instanceNames: ResourceNameList;
  }
  export interface AttachInstancesToLoadBalancerResult {
    /**
     * An object representing the API operations.
     */
    operations?: OperationList;
  }
  export interface AttachLoadBalancerTlsCertificateRequest {
    /**
     * The name of the load balancer to which you want to associate the SSL/TLS certificate.
     */
    loadBalancerName: ResourceName;
    /**
     * The name of your SSL/TLS certificate.
     */
    certificateName: ResourceName;
  }
  export interface AttachLoadBalancerTlsCertificateResult {
    /**
     * An object representing the API operations. These SSL/TLS certificates are only usable by Lightsail load balancers. You can't get the certificate and use it for another purpose.
     */
    operations?: OperationList;
  }
  export interface AttachStaticIpRequest {
    /**
     * The name of the static IP.
     */
    staticIpName: ResourceName;
    /**
     * The instance name to which you want to attach the static IP address.
     */
    instanceName: ResourceName;
  }
  export interface AttachStaticIpResult {
    /**
     * An array of key-value pairs containing information about your API operations.
     */
    operations?: OperationList;
  }
  export type AttachedDiskMap = {[key: string]: DiskMapList};
  export interface AvailabilityZone {
    /**
     * The name of the Availability Zone. The format is us-east-2a (case-sensitive).
     */
    zoneName?: NonEmptyString;
    /**
     * The state of the Availability Zone.
     */
    state?: NonEmptyString;
  }
  export type AvailabilityZoneList = AvailabilityZone[];
  export type Base64 = string;
  export interface Blueprint {
    /**
     * The ID for the virtual private server image (e.g., app_wordpress_4_4 or app_lamp_7_0).
     */
    blueprintId?: NonEmptyString;
    /**
     * The friendly name of the blueprint (e.g., Amazon Linux).
     */
    name?: ResourceName;
    /**
     * The group name of the blueprint (e.g., amazon-linux).
     */
    group?: NonEmptyString;
    /**
     * The type of the blueprint (e.g., os or app).
     */
    type?: BlueprintType;
    /**
     * The description of the blueprint.
     */
    description?: string;
    /**
     * A Boolean value indicating whether the blueprint is active. Inactive blueprints are listed to support customers with existing instances but are not necessarily available for launch of new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases.
     */
    isActive?: boolean;
    /**
     * The minimum bundle power required to run this blueprint. For example, you need a bundle with a power value of 500 or more to create an instance that uses a blueprint with a minimum power value of 500. 0 indicates that the blueprint runs on all instance sizes. 
     */
    minPower?: integer;
    /**
     * The version number of the operating system, application, or stack (e.g., 2016.03.0).
     */
    version?: string;
    /**
     * The version code.
     */
    versionCode?: string;
    /**
     * The product URL to learn more about the image or blueprint.
     */
    productUrl?: string;
    /**
     * The end-user license agreement URL for the image or blueprint.
     */
    licenseUrl?: string;
    /**
     * The operating system platform (either Linux/Unix-based or Windows Server-based) of the blueprint.
     */
    platform?: InstancePlatform;
  }
  export type BlueprintList = Blueprint[];
  export type BlueprintType = "os"|"app"|string;
  export interface Bundle {
    /**
     * The price in US dollars (e.g., 5.0).
     */
    price?: float;
    /**
     * The number of vCPUs included in the bundle (e.g., 2).
     */
    cpuCount?: integer;
    /**
     * The size of the SSD (e.g., 30).
     */
    diskSizeInGb?: integer;
    /**
     * The bundle ID (e.g., micro_1_0).
     */
    bundleId?: NonEmptyString;
    /**
     * The Amazon EC2 instance type (e.g., t2.micro).
     */
    instanceType?: string;
    /**
     * A Boolean value indicating whether the bundle is active.
     */
    isActive?: boolean;
    /**
     * A friendly name for the bundle (e.g., Micro).
     */
    name?: string;
    /**
     * A numeric value that represents the power of the bundle (e.g., 500). You can use the bundle's power value in conjunction with a blueprint's minimum power value to determine whether the blueprint will run on the bundle. For example, you need a bundle with a power value of 500 or more to create an instance that uses a blueprint with a minimum power value of 500.
     */
    power?: integer;
    /**
     * The amount of RAM in GB (e.g., 2.0).
     */
    ramSizeInGb?: float;
    /**
     * The data transfer rate per month in GB (e.g., 2000).
     */
    transferPerMonthInGb?: integer;
    /**
     * The operating system platform (Linux/Unix-based or Windows Server-based) that the bundle supports. You can only launch a WINDOWS bundle on a blueprint that supports the WINDOWS platform. LINUX_UNIX blueprints require a LINUX_UNIX bundle.
     */
    supportedPlatforms?: InstancePlatformList;
  }
  export type BundleList = Bundle[];
  export interface CloseInstancePublicPortsRequest {
    /**
     * Information about the public port you are trying to close.
     */
    portInfo: PortInfo;
    /**
     * The name of the instance on which you're attempting to close the public ports.
     */
    instanceName: ResourceName;
  }
  export interface CloseInstancePublicPortsResult {
    /**
     * An array of key-value pairs that contains information about the operation.
     */
    operation?: Operation;
  }
  export interface CreateDiskFromSnapshotRequest {
    /**
     * The unique Lightsail disk name (e.g., my-disk).
     */
    diskName: ResourceName;
    /**
     * The name of the disk snapshot (e.g., my-snapshot) from which to create the new storage disk.
     */
    diskSnapshotName: ResourceName;
    /**
     * The Availability Zone where you want to create the disk (e.g., us-east-2a). Choose the same Availability Zone as the Lightsail instance where you want to create the disk. Use the GetRegions operation to list the Availability Zones where Lightsail is currently available.
     */
    availabilityZone: NonEmptyString;
    /**
     * The size of the disk in GB (e.g., 32).
     */
    sizeInGb: integer;
  }
  export interface CreateDiskFromSnapshotResult {
    /**
     * An object describing the API operations.
     */
    operations?: OperationList;
  }
  export interface CreateDiskRequest {
    /**
     * The unique Lightsail disk name (e.g., my-disk).
     */
    diskName: ResourceName;
    /**
     * The Availability Zone where you want to create the disk (e.g., us-east-2a). Choose the same Availability Zone as the Lightsail instance where you want to create the disk. Use the GetRegions operation to list the Availability Zones where Lightsail is currently available.
     */
    availabilityZone: NonEmptyString;
    /**
     * The size of the disk in GB (e.g., 32).
     */
    sizeInGb: integer;
  }
  export interface CreateDiskResult {
    /**
     * An object describing the API operations.
     */
    operations?: OperationList;
  }
  export interface CreateDiskSnapshotRequest {
    /**
     * The unique name of the source disk (e.g., my-source-disk).
     */
    diskName: ResourceName;
    /**
     * The name of the destination disk snapshot (e.g., my-disk-snapshot) based on the source disk.
     */
    diskSnapshotName: ResourceName;
  }
  export interface CreateDiskSnapshotResult {
    /**
     * An object describing the API operations.
     */
    operations?: OperationList;
  }
  export interface CreateDomainEntryRequest {
    /**
     * The domain name (e.g., example.com) for which you want to create the domain entry.
     */
    domainName: DomainName;
    /**
     * An array of key-value pairs containing information about the domain entry request.
     */
    domainEntry: DomainEntry;
  }
  export interface CreateDomainEntryResult {
    /**
     * An array of key-value pairs containing information about the operation.
     */
    operation?: Operation;
  }
  export interface CreateDomainRequest {
    /**
     * The domain name to manage (e.g., example.com).  You cannot register a new domain name using Lightsail. You must register a domain name using Amazon Route 53 or another domain name registrar. If you have already registered your domain, you can enter its name in this parameter to manage the DNS records for that domain. 
     */
    domainName: DomainName;
  }
  export interface CreateDomainResult {
    /**
     * An array of key-value pairs containing information about the domain resource you created.
     */
    operation?: Operation;
  }
  export interface CreateInstanceSnapshotRequest {
    /**
     * The name for your new snapshot.
     */
    instanceSnapshotName: ResourceName;
    /**
     * The Lightsail instance on which to base your snapshot.
     */
    instanceName: ResourceName;
  }
  export interface CreateInstanceSnapshotResult {
    /**
     * An array of key-value pairs containing information about the results of your create instances snapshot request.
     */
    operations?: OperationList;
  }
  export interface CreateInstancesFromSnapshotRequest {
    /**
     * The names for your new instances.
     */
    instanceNames: StringList;
    /**
     * An object containing information about one or more disk mappings.
     */
    attachedDiskMapping?: AttachedDiskMap;
    /**
     * The Availability Zone where you want to create your instances. Use the following formatting: us-east-2a (case sensitive). You can get a list of Availability Zones by using the get regions operation. Be sure to add the include Availability Zones parameter to your request.
     */
    availabilityZone: string;
    /**
     * The name of the instance snapshot on which you are basing your new instances. Use the get instance snapshots operation to return information about your existing snapshots.
     */
    instanceSnapshotName: ResourceName;
    /**
     * The bundle of specification information for your virtual private server (or instance), including the pricing plan (e.g., micro_1_0).
     */
    bundleId: NonEmptyString;
    /**
     * You can create a launch script that configures a server with additional user data. For example, apt-get -y update.  Depending on the machine image you choose, the command to get software on your instance varies. Amazon Linux and CentOS use yum, Debian and Ubuntu use apt-get, and FreeBSD uses pkg. For a complete list, see the Dev Guide. 
     */
    userData?: string;
    /**
     * The name for your key pair.
     */
    keyPairName?: ResourceName;
  }
  export interface CreateInstancesFromSnapshotResult {
    /**
     * An array of key-value pairs containing information about the results of your create instances from snapshot request.
     */
    operations?: OperationList;
  }
  export interface CreateInstancesRequest {
    /**
     * The names to use for your new Lightsail instances. Separate multiple values using quotation marks and commas, for example: ["MyFirstInstance","MySecondInstance"] 
     */
    instanceNames: StringList;
    /**
     * The Availability Zone in which to create your instance. Use the following format: us-east-2a (case sensitive). You can get a list of Availability Zones by using the get regions operation. Be sure to add the include Availability Zones parameter to your request.
     */
    availabilityZone: string;
    /**
     * (Deprecated) The name for your custom image.  In releases prior to June 12, 2017, this parameter was ignored by the API. It is now deprecated. 
     */
    customImageName?: ResourceName;
    /**
     * The ID for a virtual private server image (e.g., app_wordpress_4_4 or app_lamp_7_0). Use the get blueprints operation to return a list of available images (or blueprints).
     */
    blueprintId: NonEmptyString;
    /**
     * The bundle of specification information for your virtual private server (or instance), including the pricing plan (e.g., micro_1_0).
     */
    bundleId: NonEmptyString;
    /**
     * A launch script you can create that configures a server with additional user data. For example, you might want to run apt-get -y update.  Depending on the machine image you choose, the command to get software on your instance varies. Amazon Linux and CentOS use yum, Debian and Ubuntu use apt-get, and FreeBSD uses pkg. For a complete list, see the Dev Guide. 
     */
    userData?: string;
    /**
     * The name of your key pair.
     */
    keyPairName?: ResourceName;
  }
  export interface CreateInstancesResult {
    /**
     * An array of key-value pairs containing information about the results of your create instances request.
     */
    operations?: OperationList;
  }
  export interface CreateKeyPairRequest {
    /**
     * The name for your new key pair.
     */
    keyPairName: ResourceName;
  }
  export interface CreateKeyPairResult {
    /**
     * An array of key-value pairs containing information about the new key pair you just created.
     */
    keyPair?: KeyPair;
    /**
     * A base64-encoded public key of the ssh-rsa type.
     */
    publicKeyBase64?: Base64;
    /**
     * A base64-encoded RSA private key.
     */
    privateKeyBase64?: Base64;
    /**
     * An array of key-value pairs containing information about the results of your create key pair request.
     */
    operation?: Operation;
  }
  export interface CreateLoadBalancerRequest {
    /**
     * The name of your load balancer.
     */
    loadBalancerName: ResourceName;
    /**
     * The instance port where you're creating your load balancer.
     */
    instancePort: Port;
    /**
     * The path you provided to perform the load balancer health check. If you didn't specify a health check path, Lightsail uses the root path of your website (e.g., "/"). You may want to specify a custom health check path other than the root of your application if your home page loads slowly or has a lot of media or scripting on it.
     */
    healthCheckPath?: string;
    /**
     * The name of the SSL/TLS certificate. If you specify certificateName, then certificateDomainName is required (and vice-versa).
     */
    certificateName?: ResourceName;
    /**
     * The domain name with which your certificate is associated (e.g., example.com). If you specify certificateDomainName, then certificateName is required (and vice-versa).
     */
    certificateDomainName?: DomainName;
    /**
     * The optional alternative domains and subdomains to use with your SSL/TLS certificate (e.g., www.example.com, example.com, m.example.com, blog.example.com).
     */
    certificateAlternativeNames?: DomainNameList;
  }
  export interface CreateLoadBalancerResult {
    /**
     * An object containing information about the API operations.
     */
    operations?: OperationList;
  }
  export interface CreateLoadBalancerTlsCertificateRequest {
    /**
     * The load balancer name where you want to create the SSL/TLS certificate.
     */
    loadBalancerName: ResourceName;
    /**
     * The SSL/TLS certificate name. You can have up to 10 certificates in your account at one time. Each Lightsail load balancer can have up to 2 certificates associated with it at one time. There is also an overall limit to the number of certificates that can be issue in a 365-day period. For more information, see Limits.
     */
    certificateName: ResourceName;
    /**
     * The domain name (e.g., example.com) for your SSL/TLS certificate.
     */
    certificateDomainName: DomainName;
    /**
     * An array of strings listing alternative domains and subdomains for your SSL/TLS certificate. Lightsail will de-dupe the names for you. You can have a maximum of 9 alternative names (in addition to the 1 primary domain). We do not support wildcards (e.g., *.example.com).
     */
    certificateAlternativeNames?: DomainNameList;
  }
  export interface CreateLoadBalancerTlsCertificateResult {
    /**
     * An object containing information about the API operations.
     */
    operations?: OperationList;
  }
  export interface CreateRelationalDatabaseFromSnapshotRequest {
    /**
     * The name to use for your new database. Constraints:   Must contain from 2 to 255 alphanumeric characters, or hyphens.   The first and last character must be a letter or number.  
     */
    relationalDatabaseName: ResourceName;
    /**
     * The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format. You can get a list of Availability Zones by using the get regions operation. Be sure to add the include relational database Availability Zones parameter to your request.
     */
    availabilityZone?: string;
    /**
     * Specifies the accessibility options for your new database. A value of true specifies a database that is available to resources outside of your Lightsail account. A value of false specifies a database that is available only to your Lightsail resources in the same region as your database.
     */
    publiclyAccessible?: boolean;
    /**
     * The name of the database snapshot from which to create your new database.
     */
    relationalDatabaseSnapshotName?: ResourceName;
    /**
     * The bundle ID for your new database. A bundle describes the performance specifications for your database. You can get a list of database bundle IDs by using the get relational database bundles operation. When creating a new database from a snapshot, you cannot choose a bundle that is smaller than the bundle of the source database.
     */
    relationalDatabaseBundleId?: string;
    /**
     * The name of the source database.
     */
    sourceRelationalDatabaseName?: ResourceName;
    /**
     * The date and time to restore your database from. Constraints:   Must be before the latest restorable time for the database.   Cannot be specified if the use latest restorable time parameter is true.   Specified in Universal Coordinated Time (UTC).   Specified in the Unix time format. For example, if you wish to use a restore time of October 1, 2018, at 8 PM UTC, then you input 1538424000 as the restore time.  
     */
    restoreTime?: IsoDate;
    /**
     * Specifies whether your database is restored from the latest backup time. A value of true restores from the latest backup time.  Default: false  Constraints: Cannot be specified if the restore time parameter is provided.
     */
    useLatestRestorableTime?: boolean;
  }
  export interface CreateRelationalDatabaseFromSnapshotResult {
    /**
     * An object describing the result of your create relational database from snapshot request.
     */
    operations?: OperationList;
  }
  export interface CreateRelationalDatabaseRequest {
    /**
     * The name to use for your new database. Constraints:   Must contain from 2 to 255 alphanumeric characters, or hyphens.   The first and last character must be a letter or number.  
     */
    relationalDatabaseName: ResourceName;
    /**
     * The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format. You can get a list of Availability Zones by using the get regions operation. Be sure to add the include relational database Availability Zones parameter to your request.
     */
    availabilityZone?: string;
    /**
     * The blueprint ID for your new database. A blueprint describes the major engine version of a database. You can get a list of database blueprints IDs by using the get relational database blueprints operation.
     */
    relationalDatabaseBlueprintId: string;
    /**
     * The bundle ID for your new database. A bundle describes the performance specifications for your database. You can get a list of database bundle IDs by using the get relational database bundles operation.
     */
    relationalDatabaseBundleId: string;
    /**
     * The name of the master database created when the Lightsail database resource is created. Constraints:   Must contain from 1 to 64 alphanumeric characters.   Cannot be a word reserved by the specified database engine  
     */
    masterDatabaseName: string;
    /**
     * The master user name for your new database. Constraints:   Master user name is required.   Must contain from 1 to 16 alphanumeric characters.   The first character must be a letter.   Cannot be a reserved word for the database engine you choose. For more information about reserved words in MySQL 5.6 or 5.7, see the Keywords and Reserved Words articles for MySQL 5.6 or MySQL 5.7 respectively.  
     */
    masterUsername: string;
    /**
     * The password for the master user of your new database. The password can include any printable ASCII character except "/", """, or "@". Constraints: Must contain 8 to 41 characters.
     */
    masterUserPassword?: SensitiveString;
    /**
     * The daily time range during which automated backups are created for your new database if automated backups are enabled. The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. For more information about the preferred backup window time blocks for each region, see the Working With Backups guide in the Amazon Relational Database Service (Amazon RDS) documentation. Constraints:   Must be in the hh24:mi-hh24:mi format. Example: 16:00-16:30    Specified in Universal Coordinated Time (UTC).   Must not conflict with the preferred maintenance window.   Must be at least 30 minutes.  
     */
    preferredBackupWindow?: string;
    /**
     * The weekly time range during which system maintenance can occur on your new database. The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. Constraints:   Must be in the ddd:hh24:mi-ddd:hh24:mi format.   Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.   Must be at least 30 minutes.   Specified in Universal Coordinated Time (UTC).   Example: Tue:17:00-Tue:17:30   
     */
    preferredMaintenanceWindow?: string;
    /**
     * Specifies the accessibility options for your new database. A value of true specifies a database that is available to resources outside of your Lightsail account. A value of false specifies a database that is available only to your Lightsail resources in the same region as your database.
     */
    publiclyAccessible?: boolean;
  }
  export interface CreateRelationalDatabaseResult {
    /**
     * An object describing the result of your create relational database request.
     */
    operations?: OperationList;
  }
  export interface CreateRelationalDatabaseSnapshotRequest {
    /**
     * The name of the database on which to base your new snapshot.
     */
    relationalDatabaseName: ResourceName;
    /**
     * The name for your new database snapshot. Constraints:   Must contain from 2 to 255 alphanumeric characters, or hyphens.   The first and last character must be a letter or number.  
     */
    relationalDatabaseSnapshotName: ResourceName;
  }
  export interface CreateRelationalDatabaseSnapshotResult {
    /**
     * An object describing the result of your create relational database snapshot request.
     */
    operations?: OperationList;
  }
  export interface DeleteDiskRequest {
    /**
     * The unique name of the disk you want to delete (e.g., my-disk).
     */
    diskName: ResourceName;
  }
  export interface DeleteDiskResult {
    /**
     * An object describing the API operations.
     */
    operations?: OperationList;
  }
  export interface DeleteDiskSnapshotRequest {
    /**
     * The name of the disk snapshot you want to delete (e.g., my-disk-snapshot).
     */
    diskSnapshotName: ResourceName;
  }
  export interface DeleteDiskSnapshotResult {
    /**
     * An object describing the API operations.
     */
    operations?: OperationList;
  }
  export interface DeleteDomainEntryRequest {
    /**
     * The name of the domain entry to delete.
     */
    domainName: DomainName;
    /**
     * An array of key-value pairs containing information about your domain entries.
     */
    domainEntry: DomainEntry;
  }
  export interface DeleteDomainEntryResult {
    /**
     * An array of key-value pairs containing information about the results of your delete domain entry request.
     */
    operation?: Operation;
  }
  export interface DeleteDomainRequest {
    /**
     * The specific domain name to delete.
     */
    domainName: DomainName;
  }
  export interface DeleteDomainResult {
    /**
     * An array of key-value pairs containing information about the results of your delete domain request.
     */
    operation?: Operation;
  }
  export interface DeleteInstanceRequest {
    /**
     * The name of the instance to delete.
     */
    instanceName: ResourceName;
  }
  export interface DeleteInstanceResult {
    /**
     * An array of key-value pairs containing information about the results of your delete instance request.
     */
    operations?: OperationList;
  }
  export interface DeleteInstanceSnapshotRequest {
    /**
     * The name of the snapshot to delete.
     */
    instanceSnapshotName: ResourceName;
  }
  export interface DeleteInstanceSnapshotResult {
    /**
     * An array of key-value pairs containing information about the results of your delete instance snapshot request.
     */
    operations?: OperationList;
  }
  export interface DeleteKeyPairRequest {
    /**
     * The name of the key pair to delete.
     */
    keyPairName: ResourceName;
  }
  export interface DeleteKeyPairResult {
    /**
     * An array of key-value pairs containing information about the results of your delete key pair request.
     */
    operation?: Operation;
  }
  export interface DeleteLoadBalancerRequest {
    /**
     * The name of the load balancer you want to delete.
     */
    loadBalancerName: ResourceName;
  }
  export interface DeleteLoadBalancerResult {
    /**
     * An object describing the API operations.
     */
    operations?: OperationList;
  }
  export interface DeleteLoadBalancerTlsCertificateRequest {
    /**
     * The load balancer name.
     */
    loadBalancerName: ResourceName;
    /**
     * The SSL/TLS certificate name.
     */
    certificateName: ResourceName;
    /**
     * When true, forces the deletion of an SSL/TLS certificate. There can be two certificates associated with a Lightsail load balancer: the primary and the backup. The force parameter is required when the primary SSL/TLS certificate is in use by an instance attached to the load balancer.
     */
    force?: boolean;
  }
  export interface DeleteLoadBalancerTlsCertificateResult {
    /**
     * An object describing the API operations.
     */
    operations?: OperationList;
  }
  export interface DeleteRelationalDatabaseRequest {
    /**
     * The name of the database that you are deleting.
     */
    relationalDatabaseName: ResourceName;
    /**
     * Determines whether a final database snapshot is created before your database is deleted. If true is specified, no database snapshot is created. If false is specified, a database snapshot is created before your database is deleted. You must specify the final relational database snapshot name parameter if the skip final snapshot parameter is false. Default: false 
     */
    skipFinalSnapshot?: boolean;
    /**
     * The name of the database snapshot created if skip final snapshot is false, which is the default value for that parameter.  Specifying this parameter and also specifying the skip final snapshot parameter to true results in an error.  Constraints:   Must contain from 2 to 255 alphanumeric characters, or hyphens.   The first and last character must be a letter or number.  
     */
    finalRelationalDatabaseSnapshotName?: ResourceName;
  }
  export interface DeleteRelationalDatabaseResult {
    /**
     * An object describing the result of your delete relational database request.
     */
    operations?: OperationList;
  }
  export interface DeleteRelationalDatabaseSnapshotRequest {
    /**
     * The name of the database snapshot that you are deleting.
     */
    relationalDatabaseSnapshotName: ResourceName;
  }
  export interface DeleteRelationalDatabaseSnapshotResult {
    /**
     * An object describing the result of your delete relational database snapshot request.
     */
    operations?: OperationList;
  }
  export interface DetachDiskRequest {
    /**
     * The unique name of the disk you want to detach from your instance (e.g., my-disk).
     */
    diskName: ResourceName;
  }
  export interface DetachDiskResult {
    /**
     * An object describing the API operations.
     */
    operations?: OperationList;
  }
  export interface DetachInstancesFromLoadBalancerRequest {
    /**
     * The name of the Lightsail load balancer.
     */
    loadBalancerName: ResourceName;
    /**
     * An array of strings containing the names of the instances you want to detach from the load balancer.
     */
    instanceNames: ResourceNameList;
  }
  export interface DetachInstancesFromLoadBalancerResult {
    /**
     * An object describing the API operations.
     */
    operations?: OperationList;
  }
  export interface DetachStaticIpRequest {
    /**
     * The name of the static IP to detach from the instance.
     */
    staticIpName: ResourceName;
  }
  export interface DetachStaticIpResult {
    /**
     * An array of key-value pairs containing information about the results of your detach static IP request.
     */
    operations?: OperationList;
  }
  export interface Disk {
    /**
     * The unique name of the disk.
     */
    name?: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the disk.
     */
    arn?: NonEmptyString;
    /**
     * The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.
     */
    supportCode?: string;
    /**
     * The date when the disk was created.
     */
    createdAt?: IsoDate;
    /**
     * The AWS Region and Availability Zone where the disk is located.
     */
    location?: ResourceLocation;
    /**
     * The Lightsail resource type (e.g., Disk).
     */
    resourceType?: ResourceType;
    /**
     * The size of the disk in GB.
     */
    sizeInGb?: integer;
    /**
     * A Boolean value indicating whether this disk is a system disk (has an operating system loaded on it).
     */
    isSystemDisk?: boolean;
    /**
     * The input/output operations per second (IOPS) of the disk.
     */
    iops?: integer;
    /**
     * The disk path.
     */
    path?: string;
    /**
     * Describes the status of the disk.
     */
    state?: DiskState;
    /**
     * The resources to which the disk is attached.
     */
    attachedTo?: ResourceName;
    /**
     * A Boolean value indicating whether the disk is attached.
     */
    isAttached?: boolean;
    /**
     * (Deprecated) The attachment state of the disk.  In releases prior to November 14, 2017, this parameter returned attached for system disks in the API response. It is now deprecated, but still included in the response. Use isAttached instead. 
     */
    attachmentState?: string;
    /**
     * (Deprecated) The number of GB in use by the disk.  In releases prior to November 14, 2017, this parameter was not included in the API response. It is now deprecated. 
     */
    gbInUse?: integer;
  }
  export type DiskList = Disk[];
  export interface DiskMap {
    /**
     * The original disk path exposed to the instance (for example, /dev/sdh).
     */
    originalDiskPath?: NonEmptyString;
    /**
     * The new disk name (e.g., my-new-disk).
     */
    newDiskName?: ResourceName;
  }
  export type DiskMapList = DiskMap[];
  export interface DiskSnapshot {
    /**
     * The name of the disk snapshot (e.g., my-disk-snapshot).
     */
    name?: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the disk snapshot.
     */
    arn?: NonEmptyString;
    /**
     * The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.
     */
    supportCode?: string;
    /**
     * The date when the disk snapshot was created.
     */
    createdAt?: IsoDate;
    /**
     * The AWS Region and Availability Zone where the disk snapshot was created.
     */
    location?: ResourceLocation;
    /**
     * The Lightsail resource type (e.g., DiskSnapshot).
     */
    resourceType?: ResourceType;
    /**
     * The size of the disk in GB.
     */
    sizeInGb?: integer;
    /**
     * The status of the disk snapshot operation.
     */
    state?: DiskSnapshotState;
    /**
     * The progress of the disk snapshot operation.
     */
    progress?: string;
    /**
     * The unique name of the source disk from which you are creating the disk snapshot.
     */
    fromDiskName?: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the source disk from which you are creating the disk snapshot.
     */
    fromDiskArn?: NonEmptyString;
  }
  export type DiskSnapshotList = DiskSnapshot[];
  export type DiskSnapshotState = "pending"|"completed"|"error"|"unknown"|string;
  export type DiskState = "pending"|"error"|"available"|"in-use"|"unknown"|string;
  export interface Domain {
    /**
     * The name of the domain.
     */
    name?: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the domain recordset (e.g., arn:aws:lightsail:global:123456789101:Domain/824cede0-abc7-4f84-8dbc-12345EXAMPLE).
     */
    arn?: NonEmptyString;
    /**
     * The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.
     */
    supportCode?: string;
    /**
     * The date when the domain recordset was created.
     */
    createdAt?: IsoDate;
    /**
     * The AWS Region and Availability Zones where the domain recordset was created.
     */
    location?: ResourceLocation;
    /**
     * The resource type. 
     */
    resourceType?: ResourceType;
    /**
     * An array of key-value pairs containing information about the domain entries.
     */
    domainEntries?: DomainEntryList;
  }
  export interface DomainEntry {
    /**
     * The ID of the domain recordset entry.
     */
    id?: NonEmptyString;
    /**
     * The name of the domain.
     */
    name?: DomainName;
    /**
     * The target AWS name server (e.g., ns-111.awsdns-22.com.). For Lightsail load balancers, the value looks like ab1234c56789c6b86aba6fb203d443bc-123456789.us-east-2.elb.amazonaws.com. Be sure to also set isAlias to true when setting up an A record for a load balancer.
     */
    target?: string;
    /**
     * When true, specifies whether the domain entry is an alias used by the Lightsail load balancer. You can include an alias (A type) record in your request, which points to a load balancer DNS name and routes traffic to your load balancer
     */
    isAlias?: boolean;
    /**
     * The type of domain entry (e.g., SOA or NS).
     */
    type?: DomainEntryType;
    /**
     * (Deprecated) The options for the domain entry.  In releases prior to November 29, 2017, this parameter was not included in the API response. It is now deprecated. 
     */
    options?: DomainEntryOptions;
  }
  export type DomainEntryList = DomainEntry[];
  export type DomainEntryOptions = {[key: string]: string};
  export type DomainEntryOptionsKeys = string;
  export type DomainEntryType = string;
  export type DomainList = Domain[];
  export type DomainName = string;
  export type DomainNameList = DomainName[];
  export interface DownloadDefaultKeyPairRequest {
  }
  export interface DownloadDefaultKeyPairResult {
    /**
     * A base64-encoded public key of the ssh-rsa type.
     */
    publicKeyBase64?: Base64;
    /**
     * A base64-encoded RSA private key.
     */
    privateKeyBase64?: Base64;
  }
  export interface GetActiveNamesRequest {
    /**
     * A token used for paginating results from your get active names request.
     */
    pageToken?: string;
  }
  export interface GetActiveNamesResult {
    /**
     * The list of active names returned by the get active names request.
     */
    activeNames?: StringList;
    /**
     * A token used for advancing to the next page of results from your get active names request.
     */
    nextPageToken?: string;
  }
  export interface GetBlueprintsRequest {
    /**
     * A Boolean value indicating whether to include inactive results in your request.
     */
    includeInactive?: boolean;
    /**
     * A token used for advancing to the next page of results from your get blueprints request.
     */
    pageToken?: string;
  }
  export interface GetBlueprintsResult {
    /**
     * An array of key-value pairs that contains information about the available blueprints.
     */
    blueprints?: BlueprintList;
    /**
     * A token used for advancing to the next page of results from your get blueprints request.
     */
    nextPageToken?: string;
  }
  export interface GetBundlesRequest {
    /**
     * A Boolean value that indicates whether to include inactive bundle results in your request.
     */
    includeInactive?: boolean;
    /**
     * A token used for advancing to the next page of results from your get bundles request.
     */
    pageToken?: string;
  }
  export interface GetBundlesResult {
    /**
     * An array of key-value pairs that contains information about the available bundles.
     */
    bundles?: BundleList;
    /**
     * A token used for advancing to the next page of results from your get active names request.
     */
    nextPageToken?: string;
  }
  export interface GetDiskRequest {
    /**
     * The name of the disk (e.g., my-disk).
     */
    diskName: ResourceName;
  }
  export interface GetDiskResult {
    /**
     * An object containing information about the disk.
     */
    disk?: Disk;
  }
  export interface GetDiskSnapshotRequest {
    /**
     * The name of the disk snapshot (e.g., my-disk-snapshot).
     */
    diskSnapshotName: ResourceName;
  }
  export interface GetDiskSnapshotResult {
    /**
     * An object containing information about the disk snapshot.
     */
    diskSnapshot?: DiskSnapshot;
  }
  export interface GetDiskSnapshotsRequest {
    /**
     * A token used for advancing to the next page of results from your GetDiskSnapshots request.
     */
    pageToken?: string;
  }
  export interface GetDiskSnapshotsResult {
    /**
     * An array of objects containing information about all block storage disk snapshots.
     */
    diskSnapshots?: DiskSnapshotList;
    /**
     * A token used for advancing to the next page of results from your GetDiskSnapshots request.
     */
    nextPageToken?: string;
  }
  export interface GetDisksRequest {
    /**
     * A token used for advancing to the next page of results from your GetDisks request.
     */
    pageToken?: string;
  }
  export interface GetDisksResult {
    /**
     * An array of objects containing information about all block storage disks.
     */
    disks?: DiskList;
    /**
     * A token used for advancing to the next page of results from your GetDisks request.
     */
    nextPageToken?: string;
  }
  export interface GetDomainRequest {
    /**
     * The domain name for which your want to return information about.
     */
    domainName: DomainName;
  }
  export interface GetDomainResult {
    /**
     * An array of key-value pairs containing information about your get domain request.
     */
    domain?: Domain;
  }
  export interface GetDomainsRequest {
    /**
     * A token used for advancing to the next page of results from your get domains request.
     */
    pageToken?: string;
  }
  export interface GetDomainsResult {
    /**
     * An array of key-value pairs containing information about each of the domain entries in the user's account.
     */
    domains?: DomainList;
    /**
     * A token used for advancing to the next page of results from your get active names request.
     */
    nextPageToken?: string;
  }
  export interface GetInstanceAccessDetailsRequest {
    /**
     * The name of the instance to access.
     */
    instanceName: ResourceName;
    /**
     * The protocol to use to connect to your instance. Defaults to ssh.
     */
    protocol?: InstanceAccessProtocol;
  }
  export interface GetInstanceAccessDetailsResult {
    /**
     * An array of key-value pairs containing information about a get instance access request.
     */
    accessDetails?: InstanceAccessDetails;
  }
  export interface GetInstanceMetricDataRequest {
    /**
     * The name of the instance for which you want to get metrics data.
     */
    instanceName: ResourceName;
    /**
     * The metric name to get data about. 
     */
    metricName: InstanceMetricName;
    /**
     * The granularity, in seconds, of the returned data points.
     */
    period: MetricPeriod;
    /**
     * The start time of the time period.
     */
    startTime: timestamp;
    /**
     * The end time of the time period.
     */
    endTime: timestamp;
    /**
     * The unit. The list of valid values is below.
     */
    unit: MetricUnit;
    /**
     * The instance statistics. 
     */
    statistics: MetricStatisticList;
  }
  export interface GetInstanceMetricDataResult {
    /**
     * The metric name to return data for.
     */
    metricName?: InstanceMetricName;
    /**
     * An array of key-value pairs containing information about the results of your get instance metric data request.
     */
    metricData?: MetricDatapointList;
  }
  export interface GetInstancePortStatesRequest {
    /**
     * The name of the instance.
     */
    instanceName: ResourceName;
  }
  export interface GetInstancePortStatesResult {
    /**
     * Information about the port states resulting from your request.
     */
    portStates?: InstancePortStateList;
  }
  export interface GetInstanceRequest {
    /**
     * The name of the instance.
     */
    instanceName: ResourceName;
  }
  export interface GetInstanceResult {
    /**
     * An array of key-value pairs containing information about the specified instance.
     */
    instance?: Instance;
  }
  export interface GetInstanceSnapshotRequest {
    /**
     * The name of the snapshot for which you are requesting information.
     */
    instanceSnapshotName: ResourceName;
  }
  export interface GetInstanceSnapshotResult {
    /**
     * An array of key-value pairs containing information about the results of your get instance snapshot request.
     */
    instanceSnapshot?: InstanceSnapshot;
  }
  export interface GetInstanceSnapshotsRequest {
    /**
     * A token used for advancing to the next page of results from your get instance snapshots request.
     */
    pageToken?: string;
  }
  export interface GetInstanceSnapshotsResult {
    /**
     * An array of key-value pairs containing information about the results of your get instance snapshots request.
     */
    instanceSnapshots?: InstanceSnapshotList;
    /**
     * A token used for advancing to the next page of results from your get instance snapshots request.
     */
    nextPageToken?: string;
  }
  export interface GetInstanceStateRequest {
    /**
     * The name of the instance to get state information about.
     */
    instanceName: ResourceName;
  }
  export interface GetInstanceStateResult {
    /**
     * The state of the instance.
     */
    state?: InstanceState;
  }
  export interface GetInstancesRequest {
    /**
     * A token used for advancing to the next page of results from your get instances request.
     */
    pageToken?: string;
  }
  export interface GetInstancesResult {
    /**
     * An array of key-value pairs containing information about your instances.
     */
    instances?: InstanceList;
    /**
     * A token used for advancing to the next page of results from your get instances request.
     */
    nextPageToken?: string;
  }
  export interface GetKeyPairRequest {
    /**
     * The name of the key pair for which you are requesting information.
     */
    keyPairName: ResourceName;
  }
  export interface GetKeyPairResult {
    /**
     * An array of key-value pairs containing information about the key pair.
     */
    keyPair?: KeyPair;
  }
  export interface GetKeyPairsRequest {
    /**
     * A token used for advancing to the next page of results from your get key pairs request.
     */
    pageToken?: string;
  }
  export interface GetKeyPairsResult {
    /**
     * An array of key-value pairs containing information about the key pairs.
     */
    keyPairs?: KeyPairList;
    /**
     * A token used for advancing to the next page of results from your get key pairs request.
     */
    nextPageToken?: string;
  }
  export interface GetLoadBalancerMetricDataRequest {
    /**
     * The name of the load balancer.
     */
    loadBalancerName: ResourceName;
    /**
     * The metric about which you want to return information. Valid values are listed below, along with the most useful statistics to include in your request.     ClientTLSNegotiationErrorCount  - The number of TLS connections initiated by the client that did not establish a session with the load balancer. Possible causes include a mismatch of ciphers or protocols.  Statistics: The most useful statistic is Sum.     HealthyHostCount  - The number of target instances that are considered healthy.  Statistics: The most useful statistic are Average, Minimum, and Maximum.     UnhealthyHostCount  - The number of target instances that are considered unhealthy.  Statistics: The most useful statistic are Average, Minimum, and Maximum.     HTTPCode_LB_4XX_Count  - The number of HTTP 4XX client error codes that originate from the load balancer. Client errors are generated when requests are malformed or incomplete. These requests have not been received by the target instance. This count does not include any response codes generated by the target instances.  Statistics: The most useful statistic is Sum. Note that Minimum, Maximum, and Average all return 1.     HTTPCode_LB_5XX_Count  - The number of HTTP 5XX server error codes that originate from the load balancer. This count does not include any response codes generated by the target instances.  Statistics: The most useful statistic is Sum. Note that Minimum, Maximum, and Average all return 1. Note that Minimum, Maximum, and Average all return 1.     HTTPCode_Instance_2XX_Count  - The number of HTTP response codes generated by the target instances. This does not include any response codes generated by the load balancer.  Statistics: The most useful statistic is Sum. Note that Minimum, Maximum, and Average all return 1.     HTTPCode_Instance_3XX_Count  - The number of HTTP response codes generated by the target instances. This does not include any response codes generated by the load balancer.   Statistics: The most useful statistic is Sum. Note that Minimum, Maximum, and Average all return 1.     HTTPCode_Instance_4XX_Count  - The number of HTTP response codes generated by the target instances. This does not include any response codes generated by the load balancer.  Statistics: The most useful statistic is Sum. Note that Minimum, Maximum, and Average all return 1.     HTTPCode_Instance_5XX_Count  - The number of HTTP response codes generated by the target instances. This does not include any response codes generated by the load balancer.  Statistics: The most useful statistic is Sum. Note that Minimum, Maximum, and Average all return 1.     InstanceResponseTime  - The time elapsed, in seconds, after the request leaves the load balancer until a response from the target instance is received.  Statistics: The most useful statistic is Average.     RejectedConnectionCount  - The number of connections that were rejected because the load balancer had reached its maximum number of connections.  Statistics: The most useful statistic is Sum.     RequestCount  - The number of requests processed over IPv4. This count includes only the requests with a response generated by a target instance of the load balancer.  Statistics: The most useful statistic is Sum. Note that Minimum, Maximum, and Average all return 1.  
     */
    metricName: LoadBalancerMetricName;
    /**
     * The granularity, in seconds, of the returned data points.
     */
    period: MetricPeriod;
    /**
     * The start time of the period.
     */
    startTime: timestamp;
    /**
     * The end time of the period.
     */
    endTime: timestamp;
    /**
     * The unit for the time period request. Valid values are listed below.
     */
    unit: MetricUnit;
    /**
     * An array of statistics that you want to request metrics for. Valid values are listed below.     SampleCount  - The count (number) of data points used for the statistical calculation.     Average  - The value of Sum / SampleCount during the specified period. By comparing this statistic with the Minimum and Maximum, you can determine the full scope of a metric and how close the average use is to the Minimum and Maximum. This comparison helps you to know when to increase or decrease your resources as needed.     Sum  - All values submitted for the matching metric added together. This statistic can be useful for determining the total volume of a metric.     Minimum  - The lowest value observed during the specified period. You can use this value to determine low volumes of activity for your application.     Maximum  - The highest value observed during the specified period. You can use this value to determine high volumes of activity for your application.  
     */
    statistics: MetricStatisticList;
  }
  export interface GetLoadBalancerMetricDataResult {
    /**
     * The metric about which you are receiving information. Valid values are listed below, along with the most useful statistics to include in your request.     ClientTLSNegotiationErrorCount  - The number of TLS connections initiated by the client that did not establish a session with the load balancer. Possible causes include a mismatch of ciphers or protocols.  Statistics: The most useful statistic is Sum.     HealthyHostCount  - The number of target instances that are considered healthy.  Statistics: The most useful statistic are Average, Minimum, and Maximum.     UnhealthyHostCount  - The number of target instances that are considered unhealthy.  Statistics: The most useful statistic are Average, Minimum, and Maximum.     HTTPCode_LB_4XX_Count  - The number of HTTP 4XX client error codes that originate from the load balancer. Client errors are generated when requests are malformed or incomplete. These requests have not been received by the target instance. This count does not include any response codes generated by the target instances.  Statistics: The most useful statistic is Sum. Note that Minimum, Maximum, and Average all return 1.     HTTPCode_LB_5XX_Count  - The number of HTTP 5XX server error codes that originate from the load balancer. This count does not include any response codes generated by the target instances.  Statistics: The most useful statistic is Sum. Note that Minimum, Maximum, and Average all return 1. Note that Minimum, Maximum, and Average all return 1.     HTTPCode_Instance_2XX_Count  - The number of HTTP response codes generated by the target instances. This does not include any response codes generated by the load balancer.  Statistics: The most useful statistic is Sum. Note that Minimum, Maximum, and Average all return 1.     HTTPCode_Instance_3XX_Count  - The number of HTTP response codes generated by the target instances. This does not include any response codes generated by the load balancer.   Statistics: The most useful statistic is Sum. Note that Minimum, Maximum, and Average all return 1.     HTTPCode_Instance_4XX_Count  - The number of HTTP response codes generated by the target instances. This does not include any response codes generated by the load balancer.  Statistics: The most useful statistic is Sum. Note that Minimum, Maximum, and Average all return 1.     HTTPCode_Instance_5XX_Count  - The number of HTTP response codes generated by the target instances. This does not include any response codes generated by the load balancer.  Statistics: The most useful statistic is Sum. Note that Minimum, Maximum, and Average all return 1.     InstanceResponseTime  - The time elapsed, in seconds, after the request leaves the load balancer until a response from the target instance is received.  Statistics: The most useful statistic is Average.     RejectedConnectionCount  - The number of connections that were rejected because the load balancer had reached its maximum number of connections.  Statistics: The most useful statistic is Sum.     RequestCount  - The number of requests processed over IPv4. This count includes only the requests with a response generated by a target instance of the load balancer.  Statistics: The most useful statistic is Sum. Note that Minimum, Maximum, and Average all return 1.  
     */
    metricName?: LoadBalancerMetricName;
    /**
     * An array of metric datapoint objects.
     */
    metricData?: MetricDatapointList;
  }
  export interface GetLoadBalancerRequest {
    /**
     * The name of the load balancer.
     */
    loadBalancerName: ResourceName;
  }
  export interface GetLoadBalancerResult {
    /**
     * An object containing information about your load balancer.
     */
    loadBalancer?: LoadBalancer;
  }
  export interface GetLoadBalancerTlsCertificatesRequest {
    /**
     * The name of the load balancer you associated with your SSL/TLS certificate.
     */
    loadBalancerName: ResourceName;
  }
  export interface GetLoadBalancerTlsCertificatesResult {
    /**
     * An array of LoadBalancerTlsCertificate objects describing your SSL/TLS certificates.
     */
    tlsCertificates?: LoadBalancerTlsCertificateList;
  }
  export interface GetLoadBalancersRequest {
    /**
     * A token used for paginating the results from your GetLoadBalancers request.
     */
    pageToken?: string;
  }
  export interface GetLoadBalancersResult {
    /**
     * An array of LoadBalancer objects describing your load balancers.
     */
    loadBalancers?: LoadBalancerList;
    /**
     * A token used for advancing to the next page of results from your GetLoadBalancers request.
     */
    nextPageToken?: string;
  }
  export interface GetOperationRequest {
    /**
     * A GUID used to identify the operation.
     */
    operationId: NonEmptyString;
  }
  export interface GetOperationResult {
    /**
     * An array of key-value pairs containing information about the results of your get operation request.
     */
    operation?: Operation;
  }
  export interface GetOperationsForResourceRequest {
    /**
     * The name of the resource for which you are requesting information.
     */
    resourceName: ResourceName;
    /**
     * A token used for advancing to the next page of results from your get operations for resource request.
     */
    pageToken?: string;
  }
  export interface GetOperationsForResourceResult {
    /**
     * An array of key-value pairs containing information about the results of your get operations for resource request.
     */
    operations?: OperationList;
    /**
     * (Deprecated) Returns the number of pages of results that remain.  In releases prior to June 12, 2017, this parameter returned null by the API. It is now deprecated, and the API returns the next page token parameter instead. 
     */
    nextPageCount?: string;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextPageToken?: string;
  }
  export interface GetOperationsRequest {
    /**
     * A token used for advancing to the next page of results from your get operations request.
     */
    pageToken?: string;
  }
  export interface GetOperationsResult {
    /**
     * An array of key-value pairs containing information about the results of your get operations request.
     */
    operations?: OperationList;
    /**
     * A token used for advancing to the next page of results from your get operations request.
     */
    nextPageToken?: string;
  }
  export interface GetRegionsRequest {
    /**
     * A Boolean value indicating whether to also include Availability Zones in your get regions request. Availability Zones are indicated with a letter: e.g., us-east-2a.
     */
    includeAvailabilityZones?: boolean;
    /**
     * &gt;A Boolean value indicating whether to also include Availability Zones for databases in your get regions request. Availability Zones are indicated with a letter (e.g., us-east-2a).
     */
    includeRelationalDatabaseAvailabilityZones?: boolean;
  }
  export interface GetRegionsResult {
    /**
     * An array of key-value pairs containing information about your get regions request.
     */
    regions?: RegionList;
  }
  export interface GetRelationalDatabaseBlueprintsRequest {
    /**
     * A token used for advancing to a specific page of results for your get relational database blueprints request.
     */
    pageToken?: string;
  }
  export interface GetRelationalDatabaseBlueprintsResult {
    /**
     * An object describing the result of your get relational database blueprints request.
     */
    blueprints?: RelationalDatabaseBlueprintList;
    /**
     * A token used for advancing to the next page of results of your get relational database blueprints request.
     */
    nextPageToken?: string;
  }
  export interface GetRelationalDatabaseBundlesRequest {
    /**
     * A token used for advancing to a specific page of results for your get relational database bundles request.
     */
    pageToken?: string;
  }
  export interface GetRelationalDatabaseBundlesResult {
    /**
     * An object describing the result of your get relational database bundles request.
     */
    bundles?: RelationalDatabaseBundleList;
    /**
     * A token used for advancing to the next page of results of your get relational database bundles request.
     */
    nextPageToken?: string;
  }
  export interface GetRelationalDatabaseEventsRequest {
    /**
     * The name of the database from which to get events.
     */
    relationalDatabaseName: ResourceName;
    /**
     * The number of minutes in the past from which to retrieve events. For example, to get all events from the past 2 hours, enter 120. Default: 60  The minimum is 1 and the maximum is 14 days (20160 minutes).
     */
    durationInMinutes?: integer;
    /**
     * A token used for advancing to a specific page of results from for get relational database events request.
     */
    pageToken?: string;
  }
  export interface GetRelationalDatabaseEventsResult {
    /**
     * An object describing the result of your get relational database events request.
     */
    relationalDatabaseEvents?: RelationalDatabaseEventList;
    /**
     * A token used for advancing to the next page of results from your get relational database events request.
     */
    nextPageToken?: string;
  }
  export interface GetRelationalDatabaseLogEventsRequest {
    /**
     * The name of your database for which to get log events.
     */
    relationalDatabaseName: ResourceName;
    /**
     * The name of the log stream. Use the get relational database log streams operation to get a list of available log streams.
     */
    logStreamName: string;
    /**
     * The start of the time interval from which to get log events. Constraints:   Specified in Universal Coordinated Time (UTC).   Specified in the Unix time format. For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, then you input 1538424000 as the start time.  
     */
    startTime?: IsoDate;
    /**
     * The end of the time interval from which to get log events. Constraints:   Specified in Universal Coordinated Time (UTC).   Specified in the Unix time format. For example, if you wish to use an end time of October 1, 2018, at 8 PM UTC, then you input 1538424000 as the end time.  
     */
    endTime?: IsoDate;
    /**
     * Parameter to specify if the log should start from head or tail. If true is specified, the log event starts from the head of the log. If false is specified, the log event starts from the tail of the log. Default: false 
     */
    startFromHead?: boolean;
    /**
     * A token used for advancing to a specific page of results for your get relational database log events request.
     */
    pageToken?: string;
  }
  export interface GetRelationalDatabaseLogEventsResult {
    /**
     * An object describing the result of your get relational database log events request.
     */
    resourceLogEvents?: LogEventList;
    /**
     * A token used for advancing to the previous page of results from your get relational database log events request.
     */
    nextBackwardToken?: string;
    /**
     * A token used for advancing to the next page of results from your get relational database log events request.
     */
    nextForwardToken?: string;
  }
  export interface GetRelationalDatabaseLogStreamsRequest {
    /**
     * The name of your database for which to get log streams.
     */
    relationalDatabaseName: ResourceName;
  }
  export interface GetRelationalDatabaseLogStreamsResult {
    /**
     * An object describing the result of your get relational database log streams request.
     */
    logStreams?: StringList;
  }
  export interface GetRelationalDatabaseMasterUserPasswordRequest {
    /**
     * The name of your database for which to get the master user password.
     */
    relationalDatabaseName: ResourceName;
    /**
     * The password version to return. Specifying CURRENT or PREVIOUS returns the current or previous passwords respectively. Specifying PENDING returns the newest version of the password that will rotate to CURRENT. After the PENDING password rotates to CURRENT, the PENDING password is no longer available. Default: CURRENT 
     */
    passwordVersion?: RelationalDatabasePasswordVersion;
  }
  export interface GetRelationalDatabaseMasterUserPasswordResult {
    /**
     * The master user password for the password version specified.
     */
    masterUserPassword?: SensitiveString;
    /**
     * The timestamp when the specified version of the master user password was created.
     */
    createdAt?: IsoDate;
  }
  export interface GetRelationalDatabaseMetricDataRequest {
    /**
     * The name of your database from which to get metric data.
     */
    relationalDatabaseName: ResourceName;
    /**
     * The name of the metric data to return.
     */
    metricName: RelationalDatabaseMetricName;
    /**
     * The granularity, in seconds, of the returned data points.
     */
    period: MetricPeriod;
    /**
     * The start of the time interval from which to get metric data. Constraints:   Specified in Universal Coordinated Time (UTC).   Specified in the Unix time format. For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, then you input 1538424000 as the start time.  
     */
    startTime: IsoDate;
    /**
     * The end of the time interval from which to get metric data. Constraints:   Specified in Universal Coordinated Time (UTC).   Specified in the Unix time format. For example, if you wish to use an end time of October 1, 2018, at 8 PM UTC, then you input 1538424000 as the end time.  
     */
    endTime: IsoDate;
    /**
     * The unit for the metric data request.
     */
    unit: MetricUnit;
    /**
     * The array of statistics for your metric data request.
     */
    statistics: MetricStatisticList;
  }
  export interface GetRelationalDatabaseMetricDataResult {
    /**
     * The name of the metric.
     */
    metricName?: RelationalDatabaseMetricName;
    /**
     * An object describing the result of your get relational database metric data request.
     */
    metricData?: MetricDatapointList;
  }
  export interface GetRelationalDatabaseParametersRequest {
    /**
     * The name of your database for which to get parameters.
     */
    relationalDatabaseName: ResourceName;
    /**
     * A token used for advancing to a specific page of results for your get relational database parameters request.
     */
    pageToken?: string;
  }
  export interface GetRelationalDatabaseParametersResult {
    /**
     * An object describing the result of your get relational database parameters request.
     */
    parameters?: RelationalDatabaseParameterList;
    /**
     * A token used for advancing to the next page of results from your get static IPs request.
     */
    nextPageToken?: string;
  }
  export interface GetRelationalDatabaseRequest {
    /**
     * The name of the database that you are looking up.
     */
    relationalDatabaseName: ResourceName;
  }
  export interface GetRelationalDatabaseResult {
    /**
     * An object describing the specified database.
     */
    relationalDatabase?: RelationalDatabase;
  }
  export interface GetRelationalDatabaseSnapshotRequest {
    /**
     * The name of the database snapshot for which to get information.
     */
    relationalDatabaseSnapshotName: ResourceName;
  }
  export interface GetRelationalDatabaseSnapshotResult {
    /**
     * An object describing the specified database snapshot.
     */
    relationalDatabaseSnapshot?: RelationalDatabaseSnapshot;
  }
  export interface GetRelationalDatabaseSnapshotsRequest {
    /**
     * A token used for advancing to a specific page of results for your get relational database snapshots request.
     */
    pageToken?: string;
  }
  export interface GetRelationalDatabaseSnapshotsResult {
    /**
     * An object describing the result of your get relational database snapshots request.
     */
    relationalDatabaseSnapshots?: RelationalDatabaseSnapshotList;
    /**
     * A token used for advancing to the next page of results from your get relational database snapshots request.
     */
    nextPageToken?: string;
  }
  export interface GetRelationalDatabasesRequest {
    /**
     * A token used for advancing to a specific page of results for your get relational database request.
     */
    pageToken?: string;
  }
  export interface GetRelationalDatabasesResult {
    /**
     * An object describing the result of your get relational databases request.
     */
    relationalDatabases?: RelationalDatabaseList;
    /**
     * A token used for advancing to the next page of results from your get relational databases request.
     */
    nextPageToken?: string;
  }
  export interface GetStaticIpRequest {
    /**
     * The name of the static IP in Lightsail.
     */
    staticIpName: ResourceName;
  }
  export interface GetStaticIpResult {
    /**
     * An array of key-value pairs containing information about the requested static IP.
     */
    staticIp?: StaticIp;
  }
  export interface GetStaticIpsRequest {
    /**
     * A token used for advancing to the next page of results from your get static IPs request.
     */
    pageToken?: string;
  }
  export interface GetStaticIpsResult {
    /**
     * An array of key-value pairs containing information about your get static IPs request.
     */
    staticIps?: StaticIpList;
    /**
     * A token used for advancing to the next page of results from your get static IPs request.
     */
    nextPageToken?: string;
  }
  export interface ImportKeyPairRequest {
    /**
     * The name of the key pair for which you want to import the public key.
     */
    keyPairName: ResourceName;
    /**
     * A base64-encoded public key of the ssh-rsa type.
     */
    publicKeyBase64: Base64;
  }
  export interface ImportKeyPairResult {
    /**
     * An array of key-value pairs containing information about the request operation.
     */
    operation?: Operation;
  }
  export interface Instance {
    /**
     * The name the user gave the instance (e.g., Amazon_Linux-1GB-Ohio-1).
     */
    name?: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the instance (e.g., arn:aws:lightsail:us-east-2:123456789101:Instance/244ad76f-8aad-4741-809f-12345EXAMPLE).
     */
    arn?: NonEmptyString;
    /**
     * The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.
     */
    supportCode?: string;
    /**
     * The timestamp when the instance was created (e.g., 1479734909.17).
     */
    createdAt?: IsoDate;
    /**
     * The region name and Availability Zone where the instance is located.
     */
    location?: ResourceLocation;
    /**
     * The type of resource (usually Instance).
     */
    resourceType?: ResourceType;
    /**
     * The blueprint ID (e.g., os_amlinux_2016_03).
     */
    blueprintId?: NonEmptyString;
    /**
     * The friendly name of the blueprint (e.g., Amazon Linux).
     */
    blueprintName?: NonEmptyString;
    /**
     * The bundle for the instance (e.g., micro_1_0).
     */
    bundleId?: NonEmptyString;
    /**
     * A Boolean value indicating whether this instance has a static IP assigned to it.
     */
    isStaticIp?: boolean;
    /**
     * The private IP address of the instance.
     */
    privateIpAddress?: IpAddress;
    /**
     * The public IP address of the instance.
     */
    publicIpAddress?: IpAddress;
    /**
     * The IPv6 address of the instance.
     */
    ipv6Address?: IpV6Address;
    /**
     * The size of the vCPU and the amount of RAM for the instance.
     */
    hardware?: InstanceHardware;
    /**
     * Information about the public ports and monthly data transfer rates for the instance.
     */
    networking?: InstanceNetworking;
    /**
     * The status code and the state (e.g., running) for the instance.
     */
    state?: InstanceState;
    /**
     * The user name for connecting to the instance (e.g., ec2-user).
     */
    username?: NonEmptyString;
    /**
     * The name of the SSH key being used to connect to the instance (e.g., LightsailDefaultKeyPair).
     */
    sshKeyName?: ResourceName;
  }
  export interface InstanceAccessDetails {
    /**
     * For SSH access, the public key to use when accessing your instance For OpenSSH clients (e.g., command line SSH), you should save this value to tempkey-cert.pub.
     */
    certKey?: string;
    /**
     * For SSH access, the date on which the temporary keys expire.
     */
    expiresAt?: IsoDate;
    /**
     * The public IP address of the Amazon Lightsail instance.
     */
    ipAddress?: IpAddress;
    /**
     * For RDP access, the password for your Amazon Lightsail instance. Password will be an empty string if the password for your new instance is not ready yet. When you create an instance, it can take up to 15 minutes for the instance to be ready.  If you create an instance using any key pair other than the default (LightsailDefaultKeyPair), password will always be an empty string. If you change the Administrator password on the instance, Lightsail will continue to return the original password value. When accessing the instance using RDP, you need to manually enter the Administrator password after changing it from the default. 
     */
    password?: string;
    /**
     * For a Windows Server-based instance, an object with the data you can use to retrieve your password. This is only needed if password is empty and the instance is not new (and therefore the password is not ready yet). When you create an instance, it can take up to 15 minutes for the instance to be ready.
     */
    passwordData?: PasswordData;
    /**
     * For SSH access, the temporary private key. For OpenSSH clients (e.g., command line SSH), you should save this value to tempkey).
     */
    privateKey?: string;
    /**
     * The protocol for these Amazon Lightsail instance access details.
     */
    protocol?: InstanceAccessProtocol;
    /**
     * The name of this Amazon Lightsail instance.
     */
    instanceName?: ResourceName;
    /**
     * The user name to use when logging in to the Amazon Lightsail instance.
     */
    username?: string;
  }
  export type InstanceAccessProtocol = "ssh"|"rdp"|string;
  export interface InstanceHardware {
    /**
     * The number of vCPUs the instance has.
     */
    cpuCount?: integer;
    /**
     * The disks attached to the instance.
     */
    disks?: DiskList;
    /**
     * The amount of RAM in GB on the instance (e.g., 1.0).
     */
    ramSizeInGb?: float;
  }
  export type InstanceHealthReason = "Lb.RegistrationInProgress"|"Lb.InitialHealthChecking"|"Lb.InternalError"|"Instance.ResponseCodeMismatch"|"Instance.Timeout"|"Instance.FailedHealthChecks"|"Instance.NotRegistered"|"Instance.NotInUse"|"Instance.DeregistrationInProgress"|"Instance.InvalidState"|"Instance.IpUnusable"|string;
  export type InstanceHealthState = "initial"|"healthy"|"unhealthy"|"unused"|"draining"|"unavailable"|string;
  export interface InstanceHealthSummary {
    /**
     * The name of the Lightsail instance for which you are requesting health check data.
     */
    instanceName?: ResourceName;
    /**
     * Describes the overall instance health. Valid values are below.
     */
    instanceHealth?: InstanceHealthState;
    /**
     * More information about the instance health. If the instanceHealth is healthy, then an instanceHealthReason value is not provided. If  instanceHealth  is initial, the  instanceHealthReason  value can be one of the following:     Lb.RegistrationInProgress  - The target instance is in the process of being registered with the load balancer.     Lb.InitialHealthChecking  - The Lightsail load balancer is still sending the target instance the minimum number of health checks required to determine its health status.   If  instanceHealth  is unhealthy, the  instanceHealthReason  value can be one of the following:     Instance.ResponseCodeMismatch  - The health checks did not return an expected HTTP code.     Instance.Timeout  - The health check requests timed out.     Instance.FailedHealthChecks  - The health checks failed because the connection to the target instance timed out, the target instance response was malformed, or the target instance failed the health check for an unknown reason.     Lb.InternalError  - The health checks failed due to an internal error.   If  instanceHealth  is unused, the  instanceHealthReason  value can be one of the following:     Instance.NotRegistered  - The target instance is not registered with the target group.     Instance.NotInUse  - The target group is not used by any load balancer, or the target instance is in an Availability Zone that is not enabled for its load balancer.     Instance.IpUnusable  - The target IP address is reserved for use by a Lightsail load balancer.     Instance.InvalidState  - The target is in the stopped or terminated state.   If  instanceHealth  is draining, the  instanceHealthReason  value can be one of the following:     Instance.DeregistrationInProgress  - The target instance is in the process of being deregistered and the deregistration delay period has not expired.  
     */
    instanceHealthReason?: InstanceHealthReason;
  }
  export type InstanceHealthSummaryList = InstanceHealthSummary[];
  export type InstanceList = Instance[];
  export type InstanceMetricName = "CPUUtilization"|"NetworkIn"|"NetworkOut"|"StatusCheckFailed"|"StatusCheckFailed_Instance"|"StatusCheckFailed_System"|string;
  export interface InstanceNetworking {
    /**
     * The amount of data in GB allocated for monthly data transfers.
     */
    monthlyTransfer?: MonthlyTransfer;
    /**
     * An array of key-value pairs containing information about the ports on the instance.
     */
    ports?: InstancePortInfoList;
  }
  export type InstancePlatform = "LINUX_UNIX"|"WINDOWS"|string;
  export type InstancePlatformList = InstancePlatform[];
  export interface InstancePortInfo {
    /**
     * The first port in the range.
     */
    fromPort?: Port;
    /**
     * The last port in the range.
     */
    toPort?: Port;
    /**
     * The protocol being used. Can be one of the following.    tcp - Transmission Control Protocol (TCP) provides reliable, ordered, and error-checked delivery of streamed data between applications running on hosts communicating by an IP network. If you have an application that doesn't require reliable data stream service, use UDP instead.    all - All transport layer protocol types. For more general information, see Transport layer on Wikipedia.    udp - With User Datagram Protocol (UDP), computer applications can send messages (or datagrams) to other hosts on an Internet Protocol (IP) network. Prior communications are not required to set up transmission channels or data paths. Applications that don't require reliable data stream service can use UDP, which provides a connectionless datagram service that emphasizes reduced latency over reliability. If you do require reliable data stream service, use TCP instead.  
     */
    protocol?: NetworkProtocol;
    /**
     * The location from which access is allowed (e.g., Anywhere (0.0.0.0/0)).
     */
    accessFrom?: string;
    /**
     * The type of access (Public or Private).
     */
    accessType?: PortAccessType;
    /**
     * The common name.
     */
    commonName?: string;
    /**
     * The access direction (inbound or outbound).
     */
    accessDirection?: AccessDirection;
  }
  export type InstancePortInfoList = InstancePortInfo[];
  export interface InstancePortState {
    /**
     * The first port in the range.
     */
    fromPort?: Port;
    /**
     * The last port in the range.
     */
    toPort?: Port;
    /**
     * The protocol being used. Can be one of the following.    tcp - Transmission Control Protocol (TCP) provides reliable, ordered, and error-checked delivery of streamed data between applications running on hosts communicating by an IP network. If you have an application that doesn't require reliable data stream service, use UDP instead.    all - All transport layer protocol types. For more general information, see Transport layer on Wikipedia.    udp - With User Datagram Protocol (UDP), computer applications can send messages (or datagrams) to other hosts on an Internet Protocol (IP) network. Prior communications are not required to set up transmission channels or data paths. Applications that don't require reliable data stream service can use UDP, which provides a connectionless datagram service that emphasizes reduced latency over reliability. If you do require reliable data stream service, use TCP instead.  
     */
    protocol?: NetworkProtocol;
    /**
     * Specifies whether the instance port is open or closed.
     */
    state?: PortState;
  }
  export type InstancePortStateList = InstancePortState[];
  export interface InstanceSnapshot {
    /**
     * The name of the snapshot.
     */
    name?: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the snapshot (e.g., arn:aws:lightsail:us-east-2:123456789101:InstanceSnapshot/d23b5706-3322-4d83-81e5-12345EXAMPLE).
     */
    arn?: NonEmptyString;
    /**
     * The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.
     */
    supportCode?: string;
    /**
     * The timestamp when the snapshot was created (e.g., 1479907467.024).
     */
    createdAt?: IsoDate;
    /**
     * The region name and Availability Zone where you created the snapshot.
     */
    location?: ResourceLocation;
    /**
     * The type of resource (usually InstanceSnapshot).
     */
    resourceType?: ResourceType;
    /**
     * The state the snapshot is in.
     */
    state?: InstanceSnapshotState;
    /**
     * The progress of the snapshot.
     */
    progress?: string;
    /**
     * An array of disk objects containing information about all block storage disks.
     */
    fromAttachedDisks?: DiskList;
    /**
     * The instance from which the snapshot was created.
     */
    fromInstanceName?: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the instance from which the snapshot was created (e.g., arn:aws:lightsail:us-east-2:123456789101:Instance/64b8404c-ccb1-430b-8daf-12345EXAMPLE).
     */
    fromInstanceArn?: NonEmptyString;
    /**
     * The blueprint ID from which you created the snapshot (e.g., os_debian_8_3). A blueprint is a virtual private server (or instance) image used to create instances quickly.
     */
    fromBlueprintId?: string;
    /**
     * The bundle ID from which you created the snapshot (e.g., micro_1_0).
     */
    fromBundleId?: string;
    /**
     * The size in GB of the SSD.
     */
    sizeInGb?: integer;
  }
  export type InstanceSnapshotList = InstanceSnapshot[];
  export type InstanceSnapshotState = "pending"|"error"|"available"|string;
  export interface InstanceState {
    /**
     * The status code for the instance.
     */
    code?: integer;
    /**
     * The state of the instance (e.g., running or pending).
     */
    name?: string;
  }
  export type IpAddress = string;
  export type IpV6Address = string;
  export interface IsVpcPeeredRequest {
  }
  export interface IsVpcPeeredResult {
    /**
     * Returns true if the Lightsail VPC is peered; otherwise, false.
     */
    isPeered?: boolean;
  }
  export type IsoDate = Date;
  export interface KeyPair {
    /**
     * The friendly name of the SSH key pair.
     */
    name?: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the key pair (e.g., arn:aws:lightsail:us-east-2:123456789101:KeyPair/05859e3d-331d-48ba-9034-12345EXAMPLE).
     */
    arn?: NonEmptyString;
    /**
     * The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.
     */
    supportCode?: string;
    /**
     * The timestamp when the key pair was created (e.g., 1479816991.349).
     */
    createdAt?: IsoDate;
    /**
     * The region name and Availability Zone where the key pair was created.
     */
    location?: ResourceLocation;
    /**
     * The resource type (usually KeyPair).
     */
    resourceType?: ResourceType;
    /**
     * The RSA fingerprint of the key pair.
     */
    fingerprint?: Base64;
  }
  export type KeyPairList = KeyPair[];
  export interface LoadBalancer {
    /**
     * The name of the load balancer (e.g., my-load-balancer).
     */
    name?: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    arn?: NonEmptyString;
    /**
     * The support code. Include this code in your email to support when you have questions about your Lightsail load balancer. This code enables our support team to look up your Lightsail information more easily.
     */
    supportCode?: string;
    /**
     * The date when your load balancer was created.
     */
    createdAt?: IsoDate;
    /**
     * The AWS Region where your load balancer was created (e.g., us-east-2a). Lightsail automatically creates your load balancer across Availability Zones.
     */
    location?: ResourceLocation;
    /**
     * The resource type (e.g., LoadBalancer.
     */
    resourceType?: ResourceType;
    /**
     * The DNS name of your Lightsail load balancer.
     */
    dnsName?: NonEmptyString;
    /**
     * The status of your load balancer. Valid values are below.
     */
    state?: LoadBalancerState;
    /**
     * The protocol you have enabled for your load balancer. Valid values are below. You can't just have HTTP_HTTPS, but you can have just HTTP.
     */
    protocol?: LoadBalancerProtocol;
    /**
     * An array of public port settings for your load balancer. For HTTP, use port 80. For HTTPS, use port 443.
     */
    publicPorts?: PortList;
    /**
     * The path you specified to perform your health checks. If no path is specified, the load balancer tries to make a request to the default (root) page.
     */
    healthCheckPath?: NonEmptyString;
    /**
     * The port where the load balancer will direct traffic to your Lightsail instances. For HTTP traffic, it's port 80. For HTTPS traffic, it's port 443.
     */
    instancePort?: integer;
    /**
     * An array of InstanceHealthSummary objects describing the health of the load balancer.
     */
    instanceHealthSummary?: InstanceHealthSummaryList;
    /**
     * An array of LoadBalancerTlsCertificateSummary objects that provide additional information about the SSL/TLS certificates. For example, if true, the certificate is attached to the load balancer.
     */
    tlsCertificateSummaries?: LoadBalancerTlsCertificateSummaryList;
    /**
     * A string to string map of the configuration options for your load balancer. Valid values are listed below.
     */
    configurationOptions?: LoadBalancerConfigurationOptions;
  }
  export type LoadBalancerAttributeName = "HealthCheckPath"|"SessionStickinessEnabled"|"SessionStickiness_LB_CookieDurationSeconds"|string;
  export type LoadBalancerConfigurationOptions = {[key: string]: string};
  export type LoadBalancerList = LoadBalancer[];
  export type LoadBalancerMetricName = "ClientTLSNegotiationErrorCount"|"HealthyHostCount"|"UnhealthyHostCount"|"HTTPCode_LB_4XX_Count"|"HTTPCode_LB_5XX_Count"|"HTTPCode_Instance_2XX_Count"|"HTTPCode_Instance_3XX_Count"|"HTTPCode_Instance_4XX_Count"|"HTTPCode_Instance_5XX_Count"|"InstanceResponseTime"|"RejectedConnectionCount"|"RequestCount"|string;
  export type LoadBalancerProtocol = "HTTP_HTTPS"|"HTTP"|string;
  export type LoadBalancerState = "active"|"provisioning"|"active_impaired"|"failed"|"unknown"|string;
  export interface LoadBalancerTlsCertificate {
    /**
     * The name of the SSL/TLS certificate (e.g., my-certificate).
     */
    name?: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the SSL/TLS certificate.
     */
    arn?: NonEmptyString;
    /**
     * The support code. Include this code in your email to support when you have questions about your Lightsail load balancer or SSL/TLS certificate. This code enables our support team to look up your Lightsail information more easily.
     */
    supportCode?: string;
    /**
     * The time when you created your SSL/TLS certificate.
     */
    createdAt?: IsoDate;
    /**
     * The AWS Region and Availability Zone where you created your certificate.
     */
    location?: ResourceLocation;
    /**
     * The resource type (e.g., LoadBalancerTlsCertificate).     Instance  - A Lightsail instance (a virtual private server)     StaticIp  - A static IP address     KeyPair  - The key pair used to connect to a Lightsail instance     InstanceSnapshot  - A Lightsail instance snapshot     Domain  - A DNS zone     PeeredVpc  - A peered VPC     LoadBalancer  - A Lightsail load balancer     LoadBalancerTlsCertificate  - An SSL/TLS certificate associated with a Lightsail load balancer     Disk  - A Lightsail block storage disk     DiskSnapshot  - A block storage disk snapshot  
     */
    resourceType?: ResourceType;
    /**
     * The load balancer name where your SSL/TLS certificate is attached.
     */
    loadBalancerName?: ResourceName;
    /**
     * When true, the SSL/TLS certificate is attached to the Lightsail load balancer.
     */
    isAttached?: boolean;
    /**
     * The status of the SSL/TLS certificate. Valid values are below.
     */
    status?: LoadBalancerTlsCertificateStatus;
    /**
     * The domain name for your SSL/TLS certificate.
     */
    domainName?: DomainName;
    /**
     * An array of LoadBalancerTlsCertificateDomainValidationRecord objects describing the records.
     */
    domainValidationRecords?: LoadBalancerTlsCertificateDomainValidationRecordList;
    /**
     * The reason for the SSL/TLS certificate validation failure.
     */
    failureReason?: LoadBalancerTlsCertificateFailureReason;
    /**
     * The time when the SSL/TLS certificate was issued.
     */
    issuedAt?: IsoDate;
    /**
     * The issuer of the certificate.
     */
    issuer?: NonEmptyString;
    /**
     * The algorithm that was used to generate the key pair (the public and private key).
     */
    keyAlgorithm?: NonEmptyString;
    /**
     * The timestamp when the SSL/TLS certificate expires.
     */
    notAfter?: IsoDate;
    /**
     * The timestamp when the SSL/TLS certificate is first valid.
     */
    notBefore?: IsoDate;
    /**
     * An object containing information about the status of Lightsail's managed renewal for the certificate.
     */
    renewalSummary?: LoadBalancerTlsCertificateRenewalSummary;
    /**
     * The reason the certificate was revoked. Valid values are below.
     */
    revocationReason?: LoadBalancerTlsCertificateRevocationReason;
    /**
     * The timestamp when the SSL/TLS certificate was revoked.
     */
    revokedAt?: IsoDate;
    /**
     * The serial number of the certificate.
     */
    serial?: NonEmptyString;
    /**
     * The algorithm that was used to sign the certificate.
     */
    signatureAlgorithm?: NonEmptyString;
    /**
     * The name of the entity that is associated with the public key contained in the certificate.
     */
    subject?: NonEmptyString;
    /**
     * One or more domains or subdomains included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CNAME) of the certificate and additional domain names that can be used to connect to the website, such as example.com, www.example.com, or m.example.com.
     */
    subjectAlternativeNames?: StringList;
  }
  export type LoadBalancerTlsCertificateDomainStatus = "PENDING_VALIDATION"|"FAILED"|"SUCCESS"|string;
  export interface LoadBalancerTlsCertificateDomainValidationOption {
    /**
     * The fully qualified domain name in the certificate request.
     */
    domainName?: DomainName;
    /**
     * The status of the domain validation. Valid values are listed below.
     */
    validationStatus?: LoadBalancerTlsCertificateDomainStatus;
  }
  export type LoadBalancerTlsCertificateDomainValidationOptionList = LoadBalancerTlsCertificateDomainValidationOption[];
  export interface LoadBalancerTlsCertificateDomainValidationRecord {
    /**
     * A fully qualified domain name in the certificate. For example, example.com.
     */
    name?: NonEmptyString;
    /**
     * The type of validation record. For example, CNAME for domain validation.
     */
    type?: NonEmptyString;
    /**
     * The value for that type.
     */
    value?: NonEmptyString;
    /**
     * The validation status. Valid values are listed below.
     */
    validationStatus?: LoadBalancerTlsCertificateDomainStatus;
    /**
     * The domain name against which your SSL/TLS certificate was validated.
     */
    domainName?: DomainName;
  }
  export type LoadBalancerTlsCertificateDomainValidationRecordList = LoadBalancerTlsCertificateDomainValidationRecord[];
  export type LoadBalancerTlsCertificateFailureReason = "NO_AVAILABLE_CONTACTS"|"ADDITIONAL_VERIFICATION_REQUIRED"|"DOMAIN_NOT_ALLOWED"|"INVALID_PUBLIC_DOMAIN"|"OTHER"|string;
  export type LoadBalancerTlsCertificateList = LoadBalancerTlsCertificate[];
  export type LoadBalancerTlsCertificateRenewalStatus = "PENDING_AUTO_RENEWAL"|"PENDING_VALIDATION"|"SUCCESS"|"FAILED"|string;
  export interface LoadBalancerTlsCertificateRenewalSummary {
    /**
     * The status of Lightsail's managed renewal of the certificate. Valid values are listed below.
     */
    renewalStatus?: LoadBalancerTlsCertificateRenewalStatus;
    /**
     * Contains information about the validation of each domain name in the certificate, as it pertains to Lightsail's managed renewal. This is different from the initial validation that occurs as a result of the RequestCertificate request.
     */
    domainValidationOptions?: LoadBalancerTlsCertificateDomainValidationOptionList;
  }
  export type LoadBalancerTlsCertificateRevocationReason = "UNSPECIFIED"|"KEY_COMPROMISE"|"CA_COMPROMISE"|"AFFILIATION_CHANGED"|"SUPERCEDED"|"CESSATION_OF_OPERATION"|"CERTIFICATE_HOLD"|"REMOVE_FROM_CRL"|"PRIVILEGE_WITHDRAWN"|"A_A_COMPROMISE"|string;
  export type LoadBalancerTlsCertificateStatus = "PENDING_VALIDATION"|"ISSUED"|"INACTIVE"|"EXPIRED"|"VALIDATION_TIMED_OUT"|"REVOKED"|"FAILED"|"UNKNOWN"|string;
  export interface LoadBalancerTlsCertificateSummary {
    /**
     * The name of the SSL/TLS certificate.
     */
    name?: ResourceName;
    /**
     * When true, the SSL/TLS certificate is attached to the Lightsail load balancer.
     */
    isAttached?: boolean;
  }
  export type LoadBalancerTlsCertificateSummaryList = LoadBalancerTlsCertificateSummary[];
  export interface LogEvent {
    /**
     * The timestamp when the database log event was created.
     */
    createdAt?: IsoDate;
    /**
     * The message of the database log event.
     */
    message?: string;
  }
  export type LogEventList = LogEvent[];
  export interface MetricDatapoint {
    /**
     * The average.
     */
    average?: double;
    /**
     * The maximum.
     */
    maximum?: double;
    /**
     * The minimum.
     */
    minimum?: double;
    /**
     * The sample count.
     */
    sampleCount?: double;
    /**
     * The sum.
     */
    sum?: double;
    /**
     * The timestamp (e.g., 1479816991.349).
     */
    timestamp?: timestamp;
    /**
     * The unit. 
     */
    unit?: MetricUnit;
  }
  export type MetricDatapointList = MetricDatapoint[];
  export type MetricPeriod = number;
  export type MetricStatistic = "Minimum"|"Maximum"|"Sum"|"Average"|"SampleCount"|string;
  export type MetricStatisticList = MetricStatistic[];
  export type MetricUnit = "Seconds"|"Microseconds"|"Milliseconds"|"Bytes"|"Kilobytes"|"Megabytes"|"Gigabytes"|"Terabytes"|"Bits"|"Kilobits"|"Megabits"|"Gigabits"|"Terabits"|"Percent"|"Count"|"Bytes/Second"|"Kilobytes/Second"|"Megabytes/Second"|"Gigabytes/Second"|"Terabytes/Second"|"Bits/Second"|"Kilobits/Second"|"Megabits/Second"|"Gigabits/Second"|"Terabits/Second"|"Count/Second"|"None"|string;
  export interface MonthlyTransfer {
    /**
     * The amount allocated per month (in GB).
     */
    gbPerMonthAllocated?: integer;
  }
  export type NetworkProtocol = "tcp"|"all"|"udp"|string;
  export type NonEmptyString = string;
  export interface OpenInstancePublicPortsRequest {
    /**
     * An array of key-value pairs containing information about the port mappings.
     */
    portInfo: PortInfo;
    /**
     * The name of the instance for which you want to open the public ports.
     */
    instanceName: ResourceName;
  }
  export interface OpenInstancePublicPortsResult {
    /**
     * An array of key-value pairs containing information about the request operation.
     */
    operation?: Operation;
  }
  export interface Operation {
    /**
     * The ID of the operation.
     */
    id?: NonEmptyString;
    /**
     * The resource name.
     */
    resourceName?: ResourceName;
    /**
     * The resource type. 
     */
    resourceType?: ResourceType;
    /**
     * The timestamp when the operation was initialized (e.g., 1479816991.349).
     */
    createdAt?: IsoDate;
    /**
     * The region and Availability Zone.
     */
    location?: ResourceLocation;
    /**
     * A Boolean value indicating whether the operation is terminal.
     */
    isTerminal?: boolean;
    /**
     * Details about the operation (e.g., Debian-1GB-Ohio-1).
     */
    operationDetails?: string;
    /**
     * The type of operation. 
     */
    operationType?: OperationType;
    /**
     * The status of the operation. 
     */
    status?: OperationStatus;
    /**
     * The timestamp when the status was changed (e.g., 1479816991.349).
     */
    statusChangedAt?: IsoDate;
    /**
     * The error code.
     */
    errorCode?: string;
    /**
     * The error details.
     */
    errorDetails?: string;
  }
  export type OperationList = Operation[];
  export type OperationStatus = "NotStarted"|"Started"|"Failed"|"Completed"|"Succeeded"|string;
  export type OperationType = "DeleteInstance"|"CreateInstance"|"StopInstance"|"StartInstance"|"RebootInstance"|"OpenInstancePublicPorts"|"PutInstancePublicPorts"|"CloseInstancePublicPorts"|"AllocateStaticIp"|"ReleaseStaticIp"|"AttachStaticIp"|"DetachStaticIp"|"UpdateDomainEntry"|"DeleteDomainEntry"|"CreateDomain"|"DeleteDomain"|"CreateInstanceSnapshot"|"DeleteInstanceSnapshot"|"CreateInstancesFromSnapshot"|"CreateLoadBalancer"|"DeleteLoadBalancer"|"AttachInstancesToLoadBalancer"|"DetachInstancesFromLoadBalancer"|"UpdateLoadBalancerAttribute"|"CreateLoadBalancerTlsCertificate"|"DeleteLoadBalancerTlsCertificate"|"AttachLoadBalancerTlsCertificate"|"CreateDisk"|"DeleteDisk"|"AttachDisk"|"DetachDisk"|"CreateDiskSnapshot"|"DeleteDiskSnapshot"|"CreateDiskFromSnapshot"|string;
  export interface PasswordData {
    /**
     * The encrypted password. Ciphertext will be an empty string if access to your new instance is not ready yet. When you create an instance, it can take up to 15 minutes for the instance to be ready.  If you use the default key pair (LightsailDefaultKeyPair), the decrypted password will be available in the password field. If you are using a custom key pair, you need to use your own means of decryption. If you change the Administrator password on the instance, Lightsail will continue to return the original ciphertext value. When accessing the instance using RDP, you need to manually enter the Administrator password after changing it from the default. 
     */
    ciphertext?: string;
    /**
     * The name of the key pair that you used when creating your instance. If no key pair name was specified when creating the instance, Lightsail uses the default key pair (LightsailDefaultKeyPair). If you are using a custom key pair, you need to use your own means of decrypting your password using the ciphertext. Lightsail creates the ciphertext by encrypting your password with the public key part of this key pair.
     */
    keyPairName?: ResourceName;
  }
  export interface PeerVpcRequest {
  }
  export interface PeerVpcResult {
    /**
     * An array of key-value pairs containing information about the request operation.
     */
    operation?: Operation;
  }
  export interface PendingMaintenanceAction {
    /**
     * The type of pending database maintenance action.
     */
    action?: NonEmptyString;
    /**
     * Additional detail about the pending database maintenance action.
     */
    description?: NonEmptyString;
    /**
     * The effective date of the pending database maintenance action.
     */
    currentApplyDate?: IsoDate;
  }
  export type PendingMaintenanceActionList = PendingMaintenanceAction[];
  export interface PendingModifiedRelationalDatabaseValues {
    /**
     * The password for the master user of the database.
     */
    masterUserPassword?: string;
    /**
     * The database engine version.
     */
    engineVersion?: string;
    /**
     * A Boolean value indicating whether automated backup retention is enabled.
     */
    backupRetentionEnabled?: boolean;
  }
  export type Port = number;
  export type PortAccessType = "Public"|"Private"|string;
  export interface PortInfo {
    /**
     * The first port in the range.
     */
    fromPort?: Port;
    /**
     * The last port in the range.
     */
    toPort?: Port;
    /**
     * The protocol. 
     */
    protocol?: NetworkProtocol;
  }
  export type PortInfoList = PortInfo[];
  export type PortList = Port[];
  export type PortState = "open"|"closed"|string;
  export interface PutInstancePublicPortsRequest {
    /**
     * Specifies information about the public port(s).
     */
    portInfos: PortInfoList;
    /**
     * The Lightsail instance name of the public port(s) you are setting.
     */
    instanceName: ResourceName;
  }
  export interface PutInstancePublicPortsResult {
    /**
     * Describes metadata about the operation you just executed.
     */
    operation?: Operation;
  }
  export interface RebootInstanceRequest {
    /**
     * The name of the instance to reboot.
     */
    instanceName: ResourceName;
  }
  export interface RebootInstanceResult {
    /**
     * An array of key-value pairs containing information about the request operations.
     */
    operations?: OperationList;
  }
  export interface RebootRelationalDatabaseRequest {
    /**
     * The name of your database to reboot.
     */
    relationalDatabaseName: ResourceName;
  }
  export interface RebootRelationalDatabaseResult {
    /**
     * An object describing the result of your reboot relational database request.
     */
    operations?: OperationList;
  }
  export interface Region {
    /**
     * The continent code (e.g., NA, meaning North America).
     */
    continentCode?: string;
    /**
     * The description of the AWS Region (e.g., This region is recommended to serve users in the eastern United States and eastern Canada).
     */
    description?: string;
    /**
     * The display name (e.g., Ohio).
     */
    displayName?: string;
    /**
     * The region name (e.g., us-east-2).
     */
    name?: RegionName;
    /**
     * The Availability Zones. Follows the format us-east-2a (case-sensitive).
     */
    availabilityZones?: AvailabilityZoneList;
    /**
     * The Availability Zones for databases. Follows the format us-east-2a (case-sensitive).
     */
    relationalDatabaseAvailabilityZones?: AvailabilityZoneList;
  }
  export type RegionList = Region[];
  export type RegionName = "us-east-1"|"us-east-2"|"us-west-1"|"us-west-2"|"eu-west-1"|"eu-west-2"|"eu-west-3"|"eu-central-1"|"ca-central-1"|"ap-south-1"|"ap-southeast-1"|"ap-southeast-2"|"ap-northeast-1"|"ap-northeast-2"|string;
  export interface RelationalDatabase {
    /**
     * The unique name of the database resource in Lightsail.
     */
    name?: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the database.
     */
    arn?: NonEmptyString;
    /**
     * The support code for the database. Include this code in your email to support when you have questions about a database in Lightsail. This code enables our support team to look up your Lightsail information more easily.
     */
    supportCode?: string;
    /**
     * The timestamp when the database was created. Formatted in Unix time.
     */
    createdAt?: IsoDate;
    /**
     * The Region name and Availability Zone where the database is located.
     */
    location?: ResourceLocation;
    /**
     * The Lightsail resource type for the database (for example, RelationalDatabase).
     */
    resourceType?: ResourceType;
    /**
     * The blueprint ID for the database. A blueprint describes the major engine version of a database.
     */
    relationalDatabaseBlueprintId?: NonEmptyString;
    /**
     * The bundle ID for the database. A bundle describes the performance specifications for your database.
     */
    relationalDatabaseBundleId?: NonEmptyString;
    /**
     * The name of the master database created when the Lightsail database resource is created.
     */
    masterDatabaseName?: string;
    /**
     * Describes the hardware of the database.
     */
    hardware?: RelationalDatabaseHardware;
    /**
     * Describes the current state of the database.
     */
    state?: NonEmptyString;
    /**
     * Describes the secondary Availability Zone of a high availability database. The secondary database is used for failover support of a high availability database.
     */
    secondaryAvailabilityZone?: string;
    /**
     * A Boolean value indicating whether automated backup retention is enabled for the database.
     */
    backupRetentionEnabled?: boolean;
    /**
     * Describes pending database value modifications.
     */
    pendingModifiedValues?: PendingModifiedRelationalDatabaseValues;
    /**
     * The database software (for example, MySQL).
     */
    engine?: NonEmptyString;
    /**
     * The database engine version (for example, 5.7.23).
     */
    engineVersion?: NonEmptyString;
    /**
     * The latest point in time to which the database can be restored. Formatted in Unix time.
     */
    latestRestorableTime?: IsoDate;
    /**
     * The master user name of the database.
     */
    masterUsername?: NonEmptyString;
    /**
     * The status of parameter updates for the database.
     */
    parameterApplyStatus?: NonEmptyString;
    /**
     * The daily time range during which automated backups are created for the database (for example, 16:00-16:30).
     */
    preferredBackupWindow?: NonEmptyString;
    /**
     * The weekly time range during which system maintenance can occur on the database. In the format ddd:hh24:mi-ddd:hh24:mi. For example, Tue:17:00-Tue:17:30.
     */
    preferredMaintenanceWindow?: NonEmptyString;
    /**
     * A Boolean value indicating whether the database is publicly accessible.
     */
    publiclyAccessible?: boolean;
    /**
     * The master endpoint for the database.
     */
    masterEndpoint?: RelationalDatabaseEndpoint;
    /**
     * Describes the pending maintenance actions for the database.
     */
    pendingMaintenanceActions?: PendingMaintenanceActionList;
  }
  export interface RelationalDatabaseBlueprint {
    /**
     * The ID for the database blueprint.
     */
    blueprintId?: string;
    /**
     * The database software of the database blueprint (for example, MySQL).
     */
    engine?: RelationalDatabaseEngine;
    /**
     * The database engine version for the database blueprint (for example, 5.7.23).
     */
    engineVersion?: string;
    /**
     * The description of the database engine for the database blueprint.
     */
    engineDescription?: string;
    /**
     * The description of the database engine version for the database blueprint.
     */
    engineVersionDescription?: string;
    /**
     * A Boolean value indicating whether the engine version is the default for the database blueprint.
     */
    isEngineDefault?: boolean;
  }
  export type RelationalDatabaseBlueprintList = RelationalDatabaseBlueprint[];
  export interface RelationalDatabaseBundle {
    /**
     * The ID for the database bundle.
     */
    bundleId?: string;
    /**
     * The name for the database bundle.
     */
    name?: string;
    /**
     * The cost of the database bundle in US currency.
     */
    price?: float;
    /**
     * The amount of RAM in GB (for example, 2.0) for the database bundle.
     */
    ramSizeInGb?: float;
    /**
     * The size of the disk for the database bundle.
     */
    diskSizeInGb?: integer;
    /**
     * The data transfer rate per month in GB for the database bundle.
     */
    transferPerMonthInGb?: integer;
    /**
     * The number of virtual CPUs (vCPUs) for the database bundle.
     */
    cpuCount?: integer;
    /**
     * A Boolean value indicating whether the database bundle is encrypted.
     */
    isEncrypted?: boolean;
    /**
     * A Boolean value indicating whether the database bundle is active.
     */
    isActive?: boolean;
  }
  export type RelationalDatabaseBundleList = RelationalDatabaseBundle[];
  export interface RelationalDatabaseEndpoint {
    /**
     * Specifies the port that the database is listening on.
     */
    port?: integer;
    /**
     * Specifies the DNS address of the database.
     */
    address?: NonEmptyString;
  }
  export type RelationalDatabaseEngine = "mysql"|string;
  export interface RelationalDatabaseEvent {
    /**
     * The database that the database event relates to.
     */
    resource?: ResourceName;
    /**
     * The timestamp when the database event was created.
     */
    createdAt?: IsoDate;
    /**
     * The message of the database event.
     */
    message?: string;
    /**
     * The category that the database event belongs to.
     */
    eventCategories?: StringList;
  }
  export type RelationalDatabaseEventList = RelationalDatabaseEvent[];
  export interface RelationalDatabaseHardware {
    /**
     * The number of vCPUs for the database.
     */
    cpuCount?: integer;
    /**
     * The size of the disk for the database.
     */
    diskSizeInGb?: integer;
    /**
     * The amount of RAM in GB for the database.
     */
    ramSizeInGb?: float;
  }
  export type RelationalDatabaseList = RelationalDatabase[];
  export type RelationalDatabaseMetricName = "CPUUtilization"|"DatabaseConnections"|"DiskQueueDepth"|"FreeStorageSpace"|"NetworkReceiveThroughput"|"NetworkTransmitThroughput"|string;
  export interface RelationalDatabaseParameter {
    /**
     * Specifies the valid range of values for the parameter.
     */
    allowedValues?: string;
    /**
     * Indicates when parameter updates are applied. Can be immediate or pending-reboot.
     */
    applyMethod?: string;
    /**
     * Specifies the engine-specific parameter type.
     */
    applyType?: string;
    /**
     * Specifies the valid data type for the parameter.
     */
    dataType?: string;
    /**
     * Provides a description of the parameter.
     */
    description?: string;
    /**
     * A Boolean value indicating whether the parameter can be modified.
     */
    isModifiable?: boolean;
    /**
     * Specifies the name of the parameter.
     */
    parameterName?: string;
    /**
     * Specifies the value of the parameter.
     */
    parameterValue?: string;
  }
  export type RelationalDatabaseParameterList = RelationalDatabaseParameter[];
  export type RelationalDatabasePasswordVersion = "CURRENT"|"PREVIOUS"|"PENDING"|string;
  export interface RelationalDatabaseSnapshot {
    /**
     * The name of the database snapshot.
     */
    name?: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the database snapshot.
     */
    arn?: NonEmptyString;
    /**
     * The support code for the database snapshot. Include this code in your email to support when you have questions about a database snapshot in Lightsail. This code enables our support team to look up your Lightsail information more easily.
     */
    supportCode?: string;
    /**
     * The timestamp when the database snapshot was created.
     */
    createdAt?: IsoDate;
    /**
     * The Region name and Availability Zone where the database snapshot is located.
     */
    location?: ResourceLocation;
    /**
     * The Lightsail resource type.
     */
    resourceType?: ResourceType;
    /**
     * The software of the database snapshot (for example, MySQL)
     */
    engine?: NonEmptyString;
    /**
     * The database engine version for the database snapshot (for example, 5.7.23).
     */
    engineVersion?: NonEmptyString;
    /**
     * The size of the disk in GB (for example, 32) for the database snapshot.
     */
    sizeInGb?: integer;
    /**
     * The state of the database snapshot.
     */
    state?: NonEmptyString;
    /**
     * The name of the source database from which the database snapshot was created.
     */
    fromRelationalDatabaseName?: NonEmptyString;
    /**
     * The Amazon Resource Name (ARN) of the database from which the database snapshot was created.
     */
    fromRelationalDatabaseArn?: NonEmptyString;
    /**
     * The bundle ID of the database from which the database snapshot was created.
     */
    fromRelationalDatabaseBundleId?: string;
    /**
     * The blueprint ID of the database from which the database snapshot was created. A blueprint describes the major engine version of a database.
     */
    fromRelationalDatabaseBlueprintId?: string;
  }
  export type RelationalDatabaseSnapshotList = RelationalDatabaseSnapshot[];
  export interface ReleaseStaticIpRequest {
    /**
     * The name of the static IP to delete.
     */
    staticIpName: ResourceName;
  }
  export interface ReleaseStaticIpResult {
    /**
     * An array of key-value pairs containing information about the request operation.
     */
    operations?: OperationList;
  }
  export interface ResourceLocation {
    /**
     * The Availability Zone. Follows the format us-east-2a (case-sensitive).
     */
    availabilityZone?: string;
    /**
     * The AWS Region name.
     */
    regionName?: RegionName;
  }
  export type ResourceName = string;
  export type ResourceNameList = ResourceName[];
  export type ResourceType = "Instance"|"StaticIp"|"KeyPair"|"InstanceSnapshot"|"Domain"|"PeeredVpc"|"LoadBalancer"|"LoadBalancerTlsCertificate"|"Disk"|"DiskSnapshot"|"RelationalDatabase"|"RelationalDatabaseSnapshot"|string;
  export type SensitiveString = string;
  export interface StartInstanceRequest {
    /**
     * The name of the instance (a virtual private server) to start.
     */
    instanceName: ResourceName;
  }
  export interface StartInstanceResult {
    /**
     * An array of key-value pairs containing information about the request operation.
     */
    operations?: OperationList;
  }
  export interface StartRelationalDatabaseRequest {
    /**
     * The name of your database to start.
     */
    relationalDatabaseName: ResourceName;
  }
  export interface StartRelationalDatabaseResult {
    /**
     * An object describing the result of your start relational database request.
     */
    operations?: OperationList;
  }
  export interface StaticIp {
    /**
     * The name of the static IP (e.g., StaticIP-Ohio-EXAMPLE).
     */
    name?: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the static IP (e.g., arn:aws:lightsail:us-east-2:123456789101:StaticIp/9cbb4a9e-f8e3-4dfe-b57e-12345EXAMPLE).
     */
    arn?: NonEmptyString;
    /**
     * The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.
     */
    supportCode?: string;
    /**
     * The timestamp when the static IP was created (e.g., 1479735304.222).
     */
    createdAt?: IsoDate;
    /**
     * The region and Availability Zone where the static IP was created.
     */
    location?: ResourceLocation;
    /**
     * The resource type (usually StaticIp).
     */
    resourceType?: ResourceType;
    /**
     * The static IP address.
     */
    ipAddress?: IpAddress;
    /**
     * The instance where the static IP is attached (e.g., Amazon_Linux-1GB-Ohio-1).
     */
    attachedTo?: ResourceName;
    /**
     * A Boolean value indicating whether the static IP is attached.
     */
    isAttached?: boolean;
  }
  export type StaticIpList = StaticIp[];
  export interface StopInstanceRequest {
    /**
     * The name of the instance (a virtual private server) to stop.
     */
    instanceName: ResourceName;
    /**
     * When set to True, forces a Lightsail instance that is stuck in a stopping state to stop.  Only use the force parameter if your instance is stuck in the stopping state. In any other state, your instance should stop normally without adding this parameter to your API request. 
     */
    force?: boolean;
  }
  export interface StopInstanceResult {
    /**
     * An array of key-value pairs containing information about the request operation.
     */
    operations?: OperationList;
  }
  export interface StopRelationalDatabaseRequest {
    /**
     * The name of your database to stop.
     */
    relationalDatabaseName: ResourceName;
    /**
     * The name of your new database snapshot to be created before stopping your database.
     */
    relationalDatabaseSnapshotName?: ResourceName;
  }
  export interface StopRelationalDatabaseResult {
    /**
     * An object describing the result of your stop relational database request.
     */
    operations?: OperationList;
  }
  export type StringList = string[];
  export type StringMax256 = string;
  export interface UnpeerVpcRequest {
  }
  export interface UnpeerVpcResult {
    /**
     * An array of key-value pairs containing information about the request operation.
     */
    operation?: Operation;
  }
  export interface UpdateDomainEntryRequest {
    /**
     * The name of the domain recordset to update.
     */
    domainName: DomainName;
    /**
     * An array of key-value pairs containing information about the domain entry.
     */
    domainEntry: DomainEntry;
  }
  export interface UpdateDomainEntryResult {
    /**
     * An array of key-value pairs containing information about the request operation.
     */
    operations?: OperationList;
  }
  export interface UpdateLoadBalancerAttributeRequest {
    /**
     * The name of the load balancer that you want to modify (e.g., my-load-balancer.
     */
    loadBalancerName: ResourceName;
    /**
     * The name of the attribute you want to update. Valid values are below.
     */
    attributeName: LoadBalancerAttributeName;
    /**
     * The value that you want to specify for the attribute name.
     */
    attributeValue: StringMax256;
  }
  export interface UpdateLoadBalancerAttributeResult {
    /**
     * An object describing the API operations.
     */
    operations?: OperationList;
  }
  export interface UpdateRelationalDatabaseParametersRequest {
    /**
     * The name of your database for which to update parameters.
     */
    relationalDatabaseName: ResourceName;
    /**
     * The database parameters to update.
     */
    parameters: RelationalDatabaseParameterList;
  }
  export interface UpdateRelationalDatabaseParametersResult {
    /**
     * An object describing the result of your update relational database parameters request.
     */
    operations?: OperationList;
  }
  export interface UpdateRelationalDatabaseRequest {
    /**
     * The name of your database to update.
     */
    relationalDatabaseName: ResourceName;
    /**
     * The password for the master user of your database. The password can include any printable ASCII character except "/", """, or "@". Constraints: Must contain 8 to 41 characters.
     */
    masterUserPassword?: SensitiveString;
    /**
     * When true, the master user password is changed to a new strong password generated by Lightsail. Use the get relational database master user password operation to get the new password.
     */
    rotateMasterUserPassword?: boolean;
    /**
     * The daily time range during which automated backups are created for your database if automated backups are enabled. Constraints:   Must be in the hh24:mi-hh24:mi format. Example: 16:00-16:30    Specified in Universal Coordinated Time (UTC).   Must not conflict with the preferred maintenance window.   Must be at least 30 minutes.  
     */
    preferredBackupWindow?: string;
    /**
     * The weekly time range during which system maintenance can occur on your database. The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. Constraints:   Must be in the ddd:hh24:mi-ddd:hh24:mi format.   Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.   Must be at least 30 minutes.   Specified in Universal Coordinated Time (UTC).   Example: Tue:17:00-Tue:17:30   
     */
    preferredMaintenanceWindow?: string;
    /**
     * When true, enables automated backup retention for your database. Updates are applied during the next maintenance window because this can result in an outage.
     */
    enableBackupRetention?: boolean;
    /**
     * When true, disables automated backup retention for your database. Disabling backup retention deletes all automated database backups. Before disabling this, you may want to create a snapshot of your database using the create relational database snapshot operation. Updates are applied during the next maintenance window because this can result in an outage.
     */
    disableBackupRetention?: boolean;
    /**
     * Specifies the accessibility options for your database. A value of true specifies a database that is available to resources outside of your Lightsail account. A value of false specifies a database that is available only to your Lightsail resources in the same region as your database.
     */
    publiclyAccessible?: boolean;
    /**
     * When true, applies changes immediately. When false, applies changes during the preferred maintenance window. Some changes may cause an outage. Default: false 
     */
    applyImmediately?: boolean;
  }
  export interface UpdateRelationalDatabaseResult {
    /**
     * An object describing the result of your update relational database request.
     */
    operations?: OperationList;
  }
  export type double = number;
  export type float = number;
  export type integer = number;
  export type timestamp = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-11-28"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Lightsail client.
   */
  export import Types = Lightsail;
}
export = Lightsail;
