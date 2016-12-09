package com.deeperience;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.burnweb.rnsimplealertdialog.RNSimpleAlertDialogPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.magus.fblogin.FacebookLoginPackage;
import com.oblador.vectoricons.VectorIconsPackage;

import java.util.Arrays;
import java.util.List;

import com.burnweb.rnsimplealertdialog.RNSimpleAlertDialogPackage;
import com.i18n.reactnativei18n.ReactNativeI18n;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
                                         new MainReactPackage(),
                                         new RNSimpleAlertDialogPackage(),
                                         new VectorIconsPackage(),
                                         new ReactNativeI18n(),
                                         new FacebookLoginPackage()
                                         );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
