declare namespace MusicKit {
  /**
   * The Queue represents an ordered list of MediaItems to play, and a pointer to the currently playing item, when applicable.
   */
  interface Queue {
    /**
     * The item at the queue.position index within the queue.items array.
     * This is the nowPlayingItem when the Queue is the current queue for the MusicKit Instance.
     */
    currentItem: MediaItem;
    /**
     * If the length of the queue is 0.
     */
    isEmpty: boolean;
    /**
     * An array of all the MediaItems in the queue.
     */
    items: Array<MediaItem>;
    /**
     * The number of items in the queue.
     */
    length: number;
    /**
     * This is the next item after the currentItem within the queue.
     */
    nextPlayableItem: MediaItem;
    /**
     * The index position of the nowPlayingItem in the Queue.items Array.
     */
    position: number;
    /**
     * This is the previous item before the currentItem within the queue.
     */
    previousPlayableItem: MediaItem;
  }

  /**
   * Queue Options are used to instruct MusicKit to generate or ammend a queue,
   * for example using the MusicKitInstance.setQueue() method.
   */
  interface QueueOptions {
    /**
     * The catalog album used to set a music player's playback queue.
     */
    album?: string | undefined;
    /**
     * The catalog albums used to set a music player's playback queue.
     */
    albums?: string[] | undefined;
    /**
     * The music video used to set a music player's playback queue.
     */
    musicVideo?: string | undefined;
    /**
     * The music videos used to set a music player's playback queue.
     */
    musicVideos?: string[] | undefined;
    /**
     * The playlist used to set a music player's playback queue.
     */
    playlist?: string | undefined;
    /**
     * The playlists used to set a music player's playback queue.
     */
    playlists?: string[] | undefined;
    /**
     * Updates the repeatMode on the MusicKit Instance when setting the new queue.
     * If not set, repeatMode on the MusicKit Instance will not be changed.
     */
    repeatMode?: PlayerRepeatMode | undefined;
    /**
     * The song used to set a music player's playback queue.
     */
    song?: string | undefined;
    /**
     * The songs used to set a music player's playback queue.
     */
    songs?: string[] | undefined;
    /**
     * Whether or not to also start playback when the queue is updated.
     * If not set to true when MusicKitInstance.setQueue() is called, current playback will stop, if applicable.
     */
    startPlaying?: boolean | undefined;
    /**
     * The number of seconds to seek to in the current queue item after it is created.
     */
    startTime?: number | undefined;
    /**
     * A content URL used to set a music player's playback queue.
     */
    url?: string | undefined;
  }
}
