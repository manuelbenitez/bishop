import React, { useEffect, useState } from "react";
import { IConnectWalletButton } from "./wallet-button.types";
import styles from "./wallet-button.module.scss";
import { ethers } from "ethers";
import { setGlobalProvider } from "@metamask/providers";
import { Result } from "ethers/lib/utils";
import { HeaderOne } from "../typography/common";
import { davysGray } from "../typography/common/colors";

function ConnectWalletButton({}: IConnectWalletButton) {
  const [errorMessage, setErrorMessage] = useState<string>();
  const [userBalance, setUserBalance] = useState<string>();
  const [defaultAccount, setDefaultAccount] = useState();
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const connectWalletHandler = () => {
    if (window.ethereum && defaultAccount == null) {
      setProvider(new ethers.providers.Web3Provider(window.ethereum));
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result: Result) => {
          setDefaultAccount(result[0]);
        })
        .catch((error: Error) => setErrorMessage(error.message));
    } else if (!window.ethereum) {
      console.log("Need to install Metamask");
      setErrorMessage("Please install Metamask browser extension to interact");
    }
  };

  useEffect(() => {
    if (defaultAccount) {
      provider?.getBalance(defaultAccount).then((balanceResult) => {
        setUserBalance(ethers.utils.formatEther(balanceResult));
      });
    }
  }, [defaultAccount]);

  return (
    <>
      <div
        className={styles["connect-wallet-button"]}
        onClick={connectWalletHandler}
      >
        Connect Wallet
      </div>
      {defaultAccount && <HeaderOne color={davysGray} label={defaultAccount} />}
      <br />
      {userBalance && (
        <HeaderOne color={davysGray} label={userBalance.toString()} />
      )}
    </>
  );
}

export default ConnectWalletButton;
