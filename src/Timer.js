import React from "react";
import { Button, View, Text } from "react-native";
import prettyMs from "pretty-ms";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      start: 0,
      isOn: false
    };
  }

  startTimer = () => {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start
        }),
      1
    );
  };

  stopTimer = () => {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({ time: 0 });
  };

  render() {
    let start =
      this.state.time == 0 ? (
        <Button onPress={this.startTimer} title="start" />
      ) : null;

    let stop = this.state.isOn ? (
      <Button onPress={this.stopTimer} title="stop" />
    ) : null;

    let reset =
      this.state.time != 0 && !this.state.isOn ? (
        <Button onPress={this.resetTimer} title="reset" />
      ) : null;

    let resume =
      this.state.time != 0 && !this.state.isOn ? (
        <Button onPress={this.startTimer} title="resume" />
      ) : null;

    return (
      <View>
        <View>
          <Text h3>Timer: {prettyMs(this.state.time)}</Text>
        </View>
        <View>
          {start}
          {resume}
          {stop}
          {reset}
        </View>
      </View>
    );
  }
}

export default Timer;
