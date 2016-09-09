AWS.CloudFront.Signer = inherit({
    /**
     * A signer object can be used to generate signed URLs and cookies for granting
     * access to content on restricted CloudFront distributions.
     *
     * @see http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html
     *
     * @param keyPairId [String]    (Required) The ID of the CloudFront key pair
     *                              being used.
     * @param privateKey [String]   (Required) A private key in RSA format.
     */
    constructor: function Signer(keyPairId, privateKey) {},

    /**
     * Create a signed Amazon CloudFront Cookie.
     *
     * @param options [Object]            The options to create a signed cookie.
     * @option options url [String]     The URL to which the signature will grant
     *                                  access. Required unless you pass in a full
     *                                  policy.
     * @option options expires [Number] A Unix UTC timestamp indicating when the
     *                                  signature should expire. Required unless you
     *                                  pass in a full policy.
     * @option options policy [String]  A CloudFront JSON policy. Required unless
     *                                  you pass in a url and an expiry time.
     *
     * @param cb [Function] if a callback is provided, this function will
     *   pass the hash as the second parameter (after the error parameter) to
     *   the callback function.
     *
     * @return [Object] if called synchronously (with no callback), returns the
     *   signed cookie parameters.
     * @return [null] nothing is returned if a callback is provided.
     */
    getSignedCookie: function (options, cb) {},

    /**
     * Create a signed Amazon CloudFront URL.
     *
     * Keep in mind that URLs meant for use in media/flash players may have
     * different requirements for URL formats (e.g. some require that the
     * extension be removed, some require the file name to be prefixed
     * - mp4:<path>, some require you to add "/cfx/st" into your URL).
     *
     * @param options [Object]          The options to create a signed URL.
     * @option options url [String]     The URL to which the signature will grant
     *                                  access. Required.
     * @option options expires [Number] A Unix UTC timestamp indicating when the
     *                                  signature should expire. Required unless you
     *                                  pass in a full policy.
     * @option options policy [String]  A CloudFront JSON policy. Required unless
     *                                  you pass in a url and an expiry time.
     *
     * @param cb [Function] if a callback is provided, this function will
     *   pass the URL as the second parameter (after the error parameter) to
     *   the callback function.
     *
     * @return [String] if called synchronously (with no callback), returns the
     *   signed URL.
     * @return [null] nothing is returned if a callback is provided.
     */
    getSignedUrl: function (options, cb) {}
  });