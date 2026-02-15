import { Library } from '../../src/endpoints/Library';
import { joinUrisArrayToString, generateQueryParametersString } from '../../src/utils';

jest.mock('../../src/client/ReadWriteBaseClient');
jest.mock('../../src/utils');

describe('Library', () => {
  let library: Library;

  beforeEach(() => {
    library = new Library({} as any);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('saveItemsToLibrary', () => {
    it('should call put method with correct params', async () => {
      const mockUris = ['spotify:track:1234', 'spotify:album:5678'];
      (generateQueryParametersString as jest.Mock).mockReturnValue('?uris=spotify:track:1234,spotify:album:5678');
      (library['put'] as jest.Mock).mockResolvedValue({});

      await library.saveItemsToLibrary(mockUris);

      expect(library['put']).toHaveBeenCalledWith('/me/library?uris=spotify:track:1234,spotify:album:5678');
    });
  });

  describe('removeItemsFromLibrary', () => {
    it('should call delete method with correct params', async () => {
      const mockUris = ['spotify:track:1234', 'spotify:album:5678'];
      (generateQueryParametersString as jest.Mock).mockReturnValue('?uris=spotify:track:1234,spotify:album:5678');
      (library['delete'] as jest.Mock).mockResolvedValue({});

      await library.removeItemsFromLibrary(mockUris);

      expect(library['delete']).toHaveBeenCalledWith('/me/library?uris=spotify:track:1234,spotify:album:5678');
    });
  });

  describe('checkSavedLibraryItems', () => {
    it('should call get method with correct params and return expected result', async () => {
      const mockUris = ['spotify:track:1234', 'spotify:album:5678'];
      const mockResponse = [true, false];
      (joinUrisArrayToString as jest.Mock).mockReturnValue('spotify:track:1234,spotify:album:5678');
      (library['get'] as jest.Mock).mockResolvedValue(mockResponse);

      const result = await library.checkSavedLibraryItems(mockUris);

      expect(joinUrisArrayToString).toHaveBeenCalledWith(mockUris);
      expect(library['get']).toHaveBeenCalledWith('/me/library/contains', {
        uris: 'spotify:track:1234,spotify:album:5678',
      });
      expect(result).toEqual(mockResponse);
    });
  });
});
