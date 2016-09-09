AWS.util.update(AWS.STS.prototype, {
    /**
     * @overload credentialsFrom(data, credentials = null)
     *   Creates a credentials object from STS response data containing
     *   credentials information. Useful for quickly setting AWS credentials.
     *
     *   @note This is a low-level utility function. If you want to load temporary
     *     credentials into your process for subsequent requests to AWS resources,
     *     you should use {AWS.TemporaryCredentials} instead.
     *   @param data [map] data retrieved from a call to {getFederatedToken},
     *     {getSessionToken}, {assumeRole}, or {assumeRoleWithWebIdentity}.
     *   @param credentials [AWS.Credentials] an optional credentials object to
     *     fill instead of creating a new object. Useful when modifying an
     *     existing credentials object from a refresh call.
     *   @return [AWS.TemporaryCredentials] the set of temporary credentials
     *     loaded from a raw STS operation response.
     *   @example Using credentialsFrom to load global AWS credentials
     *     var sts = new AWS.STS();
     *     sts.getSessionToken(function (err, data) {
     *       if (err) console.log("Error getting credentials");
     *       else {
     *         AWS.config.credentials = sts.credentialsFrom(data);
     *       }
     *     });
     *   @see AWS.TemporaryCredentials
     */
    credentialsFrom: function credentialsFrom(data, credentials) {}
});