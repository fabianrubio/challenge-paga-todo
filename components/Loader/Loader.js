import React from 'react';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';

const Loader = props => (
  <ContentLoader
    speed={2}
    width={480}
    height={620}
    viewBox="0 0 480 620"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <Rect x="84" y="54" rx="3" ry="3" width="88" height="6" />
    <Rect x="323" y="37" rx="3" ry="3" width="28" height="6" />
    <Rect x="83" y="34" rx="3" ry="3" width="178" height="6" />
    <Circle cx="52" cy="44" r="20" />
    <Rect x="85" y="133" rx="3" ry="3" width="88" height="6" />
    <Rect x="324" y="116" rx="3" ry="3" width="28" height="6" />
    <Rect x="84" y="113" rx="3" ry="3" width="178" height="6" />
    <Circle cx="53" cy="123" r="20" />
    <Rect x="84" y="213" rx="3" ry="3" width="88" height="6" />
    <Rect x="323" y="196" rx="3" ry="3" width="28" height="6" />
    <Rect x="83" y="193" rx="3" ry="3" width="178" height="6" />
    <Circle cx="52" cy="203" r="20" />
    <Rect x="85" y="292" rx="3" ry="3" width="88" height="6" />
    <Rect x="324" y="275" rx="3" ry="3" width="28" height="6" />
    <Rect x="84" y="272" rx="3" ry="3" width="178" height="6" />
    <Circle cx="53" cy="282" r="20" />
    <Rect x="85" y="372" rx="3" ry="3" width="88" height="6" />
    <Rect x="324" y="355" rx="3" ry="3" width="28" height="6" />
    <Rect x="84" y="352" rx="3" ry="3" width="178" height="6" />
    <Circle cx="53" cy="362" r="20" />
    <Rect x="85" y="453" rx="3" ry="3" width="88" height="6" />
    <Rect x="324" y="436" rx="3" ry="3" width="28" height="6" />
    <Rect x="84" y="433" rx="3" ry="3" width="178" height="6" />
    <Circle cx="53" cy="443" r="20" />
  </ContentLoader>
);

export default Loader;
