export interface Track {
  id: string;
  title: string;
  /** minutes, for display only */
  duration: string;
  description: string;
  /** frequency ratio used to render this track's oscillator motif — purely visual */
  ratio: [number, number];
  /** point this at a hosted mp3/wav once tracks are mastered, or a streaming embed URL */
  audioSrc?: string;
  streamingUrl?: string;
  /** YouTube video ID (the part after ?v= in the URL) for an embedded thumbnail/player */
  youtubeId?: string;
}

/**
 * PLACEHOLDER DATA. Swap in your actual catalogue. Once tracks are hosted
 * (S3, Bandcamp, SoundCloud, etc.), set audioSrc or streamingUrl and the
 * Music page's <audio> element / embed will pick them up automatically.
 */
export const tracks: Track[] = [
  {
    id: "track-1",
    title: "Slow Variable",
    duration: "8:12",
    description:
      "A single sustained drone that shifts by quarter-tones roughly once a minute.",
    ratio: [2, 3],
    youtubeId: "_L0BEHC9az8",
  },
  {
    id: "track-2",
    title: "Steady State",
    duration: "11:40",
    description:
      "Built for deep work: a stable low pad with no percussive transients.",
    ratio: [1, 2],
  },
  {
    id: "track-3",
    title: "Damped Oscillation",
    duration: "6:05",
    description:
      "Opens with more motion, settles gradually — written for winding down before sleep.",
    ratio: [3, 4],
  },
];
