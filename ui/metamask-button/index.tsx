import React, { useEffect, useState } from "react";
import { IConnectWalletButton } from "./wallet-button.types";
import styles from "./wallet-button.module.scss";
import { ethers } from "ethers";
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

  const accountChangeHandler = (newAccount: any) => {
    console.log(newAccount);
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount.toString());
  };

  const getAccountBalance = (account: any) => {
    console.log(account);
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [account, "latest"],
      })
      .then((balance: string) =>
        setUserBalance(ethers.utils.formatEther(balance))
      )
      .catch((error: Error) => {
        setErrorMessage(error.message);
      });
  };

  const chainChangeHandler = () => {
    window.location.reload();
  };

  if (typeof window !== "undefined") {
    window.ethereum.on("accountsChanged", accountChangeHandler);
    window.ethereum.on("chainChanged", chainChangeHandler);
  }

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
