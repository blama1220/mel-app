//Refactored with useReducer hook
import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const reducer = (state, action) => {
  //state === {count: number}
  //action === {type: 'increment' || 'decrement', payload: 1 }

  switch (action.type) {
    case "increment":
      // action.payload can be change to action+1 because in this case we are not going to change the payload in the future
      return { ...state, count: state.count + action.payload };

    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increment", payload: 1 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrement", payload: 1 })}
      />
      <Text>Current count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;

//-----//

// Hook useState
// import React, { useState } from "react";
// import { Text, StyleSheet, View, Button } from "react-native";

// const CounterScreen = () => {
//   const [counter, setCounter] = useState(0);

//   return (
//     <View>
//       <Button
//         title="Increase"
//         onPress={() => {
//           setCounter(counter + 1);
//         }}
//       />
//       <Button
//         title="Decrease"
//         onPress={() => {
//           setCounter(counter - 1);
//         }}
//       />
//       <Text>{counter}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default CounterScreen;
