AWS.util.update(AWS.Glacier.prototype, {
    /**
     * @!group Computing Checksums
     */

    /**
     * Computes the SHA-256 linear and tree hash checksums for a given
     * block of Buffer data. Pass the tree hash of the computed checksums
     * as the checksum input to the {completeMultipartUpload} when performing
     * a multi-part upload.
     *
     * @example Calculate checksum of 5.5MB data chunk
     *   var glacier = new AWS.Glacier();
     *   var data = new Buffer(5.5 * 1024 * 1024);
     *   data.fill('0'); // fill with zeros
     *   var results = glacier.computeChecksums(data);
     *   // Result: { linearHash: '68aff0c5a9...', treeHash: '154e26c78f...' }
     * @param data [Buffer, String] data to calculate the checksum for
     * @return [map<linearHash:String,treeHash:String>] a map containing
     *   the linearHash and treeHash properties representing hex based digests
     *   of the respective checksums.
     * @see completeMultipartUpload
     */
    computeChecksums: function computeChecksums(data) {}
});