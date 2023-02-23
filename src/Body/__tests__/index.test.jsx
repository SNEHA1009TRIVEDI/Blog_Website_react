import {render,  screen , waitFor} from '@testing-library/react';
import React from 'react';
import Body from '../Body.jsx';
import makeRequest from '../../Utils/makeRequest';

jest.mock('../../Utils/makeRequest');

const mockBlogPostData = [
    {
        id: 1,
        date: "6/29/2021 4:52:48 PM UTC",
        readingTime: "2 mins",
        title: "mock title 1",
        description: "mock description 1",
        claps: 10,
        liked: false,
        image: "abstract.png",
      },
      {
        id: 2,
        date: "6/29/2022 4:52:48 PM UTC",
        readingTime: "4 mins",
        title: "mock title 2",
        description: "mock description 2",
        claps: 12,
        liked: true,
        image: "abstract.png",
      },
];
describe('Body', () => {
    it("should show loading text when data is still loading",  () => {
        makeRequest.mockResolvedValue(mockBlogPostData);
        render(<Body/>);
        expect(screen.getByText("Loading!!!")).toBeTruthy();
         waitFor(() => {
          expect(screen.getByText("mock title 1")).toBeTruthy();
        });
      });
      it("should show the blog posts when data is loaded",  () => {
        makeRequest.mockResolvedValue(mockBlogPostData);
        render(<Body />)
        waitFor(() => {
          expect(screen.getAllByTestId("blog-post")).toHaveLength(2);
        });
      });
      //why not usingn await here?
      it("should show error message when there is error in data fetch",  () => {
        const mockMakeRequest = makeRequest;
          
        mockMakeRequest.mockRejectedValue({ message: "Error!!!!" });
        render(<Body />);
         waitFor(() => {
          expect(screen.getByText("Error!!!!")).toBeTruthy();
        });
      });
});