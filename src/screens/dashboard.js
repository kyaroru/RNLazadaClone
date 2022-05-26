import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Colors} from 'themes';
import {Label, Space} from 'components';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {normalize} from 'utils/size';

class Dashboard extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <Space vertical={normalize(10)} />
        <Label size="xxl" variant="bold" text="Dashboard" align="center" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
});

Dashboard.defaultProps = {};

const mapStateToProps = store => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
