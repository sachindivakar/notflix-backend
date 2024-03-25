/* eslint-disable no-undef */
jest.mock("@google-cloud/storage", () => {
  return {
    Storage: jest.fn().mockImplementation(() => {
      return {
        bucket: jest.fn().mockReturnThis(),
        file: jest.fn().mockReturnThis(),
        getSignedUrl: jest.fn().mockResolvedValue(["http://mockedurl.com"]),
      };
    }),
  };
});
