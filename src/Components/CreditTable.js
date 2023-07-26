import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { GRAY } from '../Colors';

const CreditTable = () => {
  const [tableData, setTableData] = useState([
    ['공통교양', '0', '18'],
    ['학문기초교양', '0', '18'],
    ['전공', '0', '18'],
    ['채플이수횟수', '0', '18'],
    ['공통교양', '0', '18'],
    ['학문기초교양', '0', '18'],
    ['전공', '0', '18'],
    ['채플이수횟수', '0', '18'],
  ]);

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 0.8, borderColor: GRAY.LIGHT }}>
        <TableWrapper>
          <Rows
            data={tableData}
            flexArr={[2.8, 1, 1]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp('70%'),
    paddingBottom: hp('2%'),
  },
  rowWrapper: {
    flexDirection: 'row',
  },
  row: {
    height: hp('6%'),
    width: wp('80%'),
  },
  text: {
    textAlign: 'center',
  },
});

export default CreditTable;

// import React, { Component } from 'react';
// import { StyleSheet, View } from 'react-native';
// import { Table, TableWrapper, Rows, Col } from 'react-native-reanimated-table';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

// export default class CreditTable extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tableTitle: ['Title', 'Title2', 'Title3', 'Title4'],
//       tableData: [
//         ['1', '2', '3'],
//         ['a', 'b', 'c'],
//         ['1', '2', '3'],
//         ['a', 'b', 'c'],
//       ],
//     };
//   }

//   render() {
//     const state = this.state;
//     return (
//       <View style={styles.container}>
//         <Table borderStyle={{ borderWidth: 1 }}>
//           <TableWrapper style={styles.rowWrapper}>
//             <Col
//               data={state.tableTitle}
//               style={styles.title}
//               heightArr={[hp('5%'), hp('5%'), hp('5%'), hp('5%')]}
//               widthArr={[wp('5%'), wp('5%'), wp('5%'), wp('5%')]}
//               // flexArr={[1, 1, 1, 1]}
//               textStyle={styles.text}
//             />
//             <Rows
//               data={state.tableData}
//               flexArr={[1, 1, 1]}
//               style={styles.row}
//               textStyle={styles.text}
//             />
//           </TableWrapper>
//         </Table>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: wp('5%'),
//     paddingTop: hp('5%'),
//     backgroundColor: '#fff',
//   },
//   rowWrapper: {
//     flexDirection: 'row',
//   },
//   title: {
//     flex: 1,
//     backgroundColor: '#f6f8fa',
//     height: hp('5%'),
//     width: wp('40%'),
//   },
//   row: {
//     height: hp('5%'),
//     width: wp('40%'),
//   },
//   text: {
//     textAlign: 'center',
//   },
// });

// import React, { Component } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

// export default class CreditTable extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tableTitle: ['Title', 'Title2', 'Title3', 'Title4'],
//       tableData: [
//         ['1', '2', '3'],
//         ['a', 'b', 'c'],
//         ['1', '2', '3'],
//         ['a', 'b', 'c'],
//       ],
//     };
//   }

//   render() {
//     const { tableTitle, tableData } = this.state;
//     return (
//       <View style={styles.container}>
//         {/* Table Header */}
//         <View style={styles.rowWrapper}>
//           {tableTitle.map((title, index) => (
//             <View key={index} style={styles.title}>
//               <Text style={styles.text}>{title}</Text>
//             </View>
//           ))}
//         </View>
//         {/* Table Data */}
//         {tableData.map((rowData, rowIndex) => (
//           <View key={rowIndex} style={styles.rowWrapper}>
//             {rowData.map((data, colIndex) => (
//               <View key={colIndex} style={styles.row}>
//                 <Text style={styles.text}>{data}</Text>
//               </View>
//             ))}
//           </View>
//         ))}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: wp('5%'),
//     paddingTop: hp('5%'),
//     backgroundColor: '#fff',
//   },
//   rowWrapper: {
//     flexDirection: 'row',
//     flexWrap: 'wrap', // 행이 너무 길 경우, 자동으로 줄 바꿈 처리
//   },
//   title: {
//     flex: 1,
//     backgroundColor: '#f6f8fa',
//     minWidth: wp('25%'), // 최소 너비 설정
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   row: {
//     flex: 1,
//     minWidth: wp('25%'), // 최소 너비 설정
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   text: {
//     textAlign: 'center',
//   },
// });
