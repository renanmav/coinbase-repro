import {
  BottomSheet,
  BottomSheetRef,
  Button,
  Transaction,
  ActionButton,
} from "@coinbase/components";

import { Header, HeaderBackButton } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  Dimensions,
  PixelRatio,
  StyleSheet,
  Text,
  Vibration,
  View,
} from "react-native";

import { StackParamList } from "./Navigation";

type OrderSize = number;
type Price = number;
type TransactionTuple = [OrderSize, Price];

export default function GetStarted() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamList, "GetStarted">>();

  const bottomSheetRef = useRef<BottomSheetRef>(null);
  const snapPoints = useMemo(() => [PixelRatio.roundToNearestPixel(220)], []);

  const onGoBack = useCallback(() => {
    const DURATION = 300;
    bottomSheetRef.current?.close({
      duration: DURATION,
    });
    Vibration.vibrate(100);
    setTimeout(() => navigation.goBack(), DURATION);
  }, []);

  const onGoBackCancel = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const onConfirmationGoBack = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const BottomSheetContent = () => (
    <View style={styles.bsContainer}>
      <View style={styles.bsTextContainer}>
        <Text style={styles.bsTextTitle}>
          Tem certeza de que não deseja criar uma nova conta?
        </Text>
        <Text>Você pode tentar mais tarde se desejar.</Text>
      </View>
      <View style={styles.bsButtonContainer}>
        <Button
          text="Sim, tenho certeza"
          onPress={onGoBack}
          backgroundColor="transparent"
          backgroundPressedColor="transparent"
          viewStyle={styles.bsButtonClose}
          textStyle={styles.bsButtonCloseText}
        />
        <Button
          text="Cancelar"
          onPress={onGoBackCancel}
          backgroundColor="transparent"
          backgroundPressedColor="transparent"
          viewStyle={styles.bsButtonCancel}
        />
      </View>
    </View>
  );

  const [boughtTransactions, setBoughtTransactions] = useState<
    TransactionTuple[]
  >([]);
  const [soldTransactions, setSoldTransactions] = useState<TransactionTuple[]>(
    []
  );

  const onBuy = () => {
    setBoughtTransactions((prevState) => {
      const newTransaction: TransactionTuple = [Math.random(), Math.random()];
      const sortedState = [...prevState, newTransaction];
      return sortedState.sort((a, b) => {
        const aPrice = a[1];
        const bPrice = b[1];
        return bPrice - aPrice;
      });
    });
  };

  const onSell = () => {
    setSoldTransactions((prevState) => {
      const newTransaction: TransactionTuple = [Math.random(), Math.random()];
      const sortedState = [...prevState, newTransaction];
      return sortedState.sort((a, b) => {
        const aPrice = a[1];
        const bPrice = b[1];
        return bPrice - aPrice;
      });
    });
  };

  const SoldTransactions = () => {
    return (
      <>
        {soldTransactions.map((transaction, index) => {
          return (
            <Transaction
              index={index}
              transaction={transaction}
              valueBackground="red"
            />
          );
        })}
      </>
    );
  };

  const BoughtTransactions = () => {
    return (
      <>
        {boughtTransactions.map((transaction, index) => {
          return (
            <Transaction
              index={index}
              transaction={transaction}
              valueBackground="green"
            />
          );
        })}
      </>
    );
  };

  const Content = () => (
    <View style={styles.content}>
      <View style={styles.row}>
        <ActionButton text="Buy" onPress={onBuy} style={styles.buyButton} />
        <ActionButton text="Sell" onPress={onSell} />
      </View>
      <View style={styles.transactionContainer}>
        <SoldTransactions />
        <View style={styles.horizontalDivider} />
        <BoughtTransactions />
      </View>
    </View>
  );

  return (
    <>
      <StatusBar style="dark" />
      <Header
        title=""
        headerLeft={() => <HeaderBackButton onPress={onConfirmationGoBack} />}
      />
      <Content />
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} index={-1}>
        <BottomSheetContent />
      </BottomSheet>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "black",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  bsContainer: {
    flex: 1,
  },
  bsButtonContainer: {
    flexDirection: "row",
  },
  bsTextContainer: {
    marginBottom: PixelRatio.roundToNearestPixel(20),
  },
  bsTextTitle: {
    fontWeight: "bold",
    fontSize: PixelRatio.roundToNearestPixel(20),
    marginBottom: PixelRatio.roundToNearestPixel(10),
  },
  bsButtonClose: {
    flex: 2,
    marginRight: PixelRatio.roundToNearestPixel(20),
    backgroundColor: "transparent",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "gray",
  },
  bsButtonCloseText: {
    color: "red",
  },
  bsButtonCancel: {
    flex: 1,
    backgroundColor: "transparent",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "gray",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buyButton: {
    marginRight: PixelRatio.roundToNearestPixel(10),
    backgroundColor: "green",
  },
  transactionContainer: {
    padding: PixelRatio.roundToNearestPixel(10),
  },
  horizontalDivider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "white",
    width: Dimensions.get("screen").width,
    marginVertical: PixelRatio.roundToNearestPixel(10),
  },
});
