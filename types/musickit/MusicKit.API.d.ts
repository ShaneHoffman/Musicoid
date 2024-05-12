declare namespace MusicKit {
  type QueryParameters = Record<string, any>;

  /**
   * This class represents the Apple Music API.
   */
  interface API {
    /**
     * A passthrough API method signature.
     *
     * @param path The path to the Apple Music API endpoint, without a hostname, and including a leading slash /.
     * @param queryParameters An object with query parameters which will be appended to the request URL.
     * @param options An object with additional options to control how requests are made.
     */
    music(
      path: string,
      queryParameters?: QueryParameters,
      options?: { fetchOptions?: Object }
    ): Promise<Object>;
  }
}
