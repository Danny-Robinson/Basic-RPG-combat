import { connect, ConnectedProps } from "react-redux";
import classNames from "classnames";

import { StoreState } from "../redux-common/store";

export type FeedProps = ConnectedProps<typeof connector>;

const Feed = ({ feed }: FeedProps) => (
  <div className="feed m-2">
    {feed?.map((message, index) => {
      if (index > feed.length - 4)
        return (
          <div
            className={classNames("feed-item", {
              "font-weight-bold": index === feed.length - 1,
              [message.colour as string]: message.colour,
            })}
          >
            {message.message}
          </div>
        );
    })}
  </div>
);

const mapState = (state: StoreState) => ({
  feed: state?.feed,
});

const connector = connect(mapState, {});

export default connector(Feed);
