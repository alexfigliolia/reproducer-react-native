1. `git clone git@github.com:alexfigliolia/reproducer-react-native.git demo`
2. `git clone git@github.com:alexfigliolia/react-native-counter-animation.git`
3. `cd` into `react-native-counter-animation` and add the following to the `AnimatedNumber.tsx` module:

```typescript
public override shouldComponentUpdate(
    { style }: IAnimatedNumber,
    nextState: State
  ) {
    if (style !== this.props.style) {
      return true;
    }
    return this.state !== nextState;
  }
```

4. While in react-native-counter-animation, add the following to the `Token.tsx` module:

```typescript
  public override shouldComponentUpdate({ value, style }: Props) {
    if (value !== this.props.value) return true;
    return style !== this.props.style;
  }
```

The above lines will allow a parent component to update the style of animating nodes while an animation is running.

5. In `react-native-counter-animation` run `yarn install && yarn build`

6. Add `react-native-counter-animation` to the demo application's package.json:

```json
{
  "dependencies": {
    "react-native-counter-animation": "file:../react-native-counter-animation"
  }
}
```
 
7. `cd` into the demo application and run 

```bash
yarn install && cd ios && bundle install && bundle exec pod install && cd .. && yarn start
```

8. Open xcode and turn off user script sandboxing for pods and demo build target
9. Run the app in debug mode

The app is going to open into a screen with a little graph and counter animation. The corresponding module can be located by searching for `<RepairProgress />`. It'll send text updates to the counter component on a timer (which will throw the error) as long as renders are not being blocked. There is also a ` {fontSize !== null && ...}` conditional that you can turn off which will allow the component to calculate it's font-size at runtime. Turning this off will also recreate the error as long as the font size is initialized in some reactive way (theres a useState that can be initialized to ~20 instead of `null` at the top of the component). I'm available to help debug :)