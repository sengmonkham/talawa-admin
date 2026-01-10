/**
 * Interface for TableLoader props.
 */
export interface InterfaceTableLoader {
  /** The number of rows to render in the table body. */
  noOfRows: number;
  /**
   * An array of strings representing the titles for the table headers.
   * If provided, the number of columns will be determined by the length of this array.
   */
  headerTitles?: string[];
  /**
   * The number of columns to render in the table.
   * This is required if `headerTitles` is not provided.
   */
  noOfCols?: number;
  /** A custom `data-testid` attribute for testing purposes. */
  'data-testid'?: string;
}
