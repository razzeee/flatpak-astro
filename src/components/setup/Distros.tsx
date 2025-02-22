export const distroMap = new Map<string, JSX.Element>();
import { Trans, useTranslation } from "react-i18next";
import type { JSX } from "react";
import CodeCopy from "../ui/CodeCopy";
export const Ubuntu = () => {
  return (
    <>
      <h1>{"Ubuntu"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:ubuntu.step-1.name">Install Flatpak</Trans>
          </h2>
          <Trans i18nKey="distros:ubuntu.step-1.text">
            <p>
              To install Flatpak on{" "}
              <strong>Ubuntu 18.10 (Cosmic Cuttlefish) or later</strong>, open
              the Terminal app and run:
            </p>{" "}
            <CodeCopy text={`sudo apt install flatpak`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:ubuntu.step-2.name">
              Install GNOME Software Flatpak plugin
            </Trans>
          </h2>
          <Trans i18nKey="distros:ubuntu.step-2.text">
            <p>
              The GNOME Software plugin makes it possible to install apps
              without needing the command line. To install, run:
            </p>{" "}
            <CodeCopy text={`sudo apt install gnome-software-plugin-flatpak`} />{" "}
            <p>
              <strong>Note:</strong> Ubuntu distributes GNOME Software as a Snap
              in versions 20.04 to 23.04, and replaced it with App Center in
              23.10 and newer—neither of which support installing Flatpak apps.
              Installing the Flatpak plugin will also install a deb version of
              GNOME Software, resulting in two "Software" apps being installed
              at the same time on Ubuntu 20.04 to 23.04, and a single new
              "Software" app on Ubuntu 23.10 and newer.
            </p>
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:ubuntu.step-3.name">
              Add the Flathub repository
            </Trans>
          </h2>
          <Trans i18nKey="distros:ubuntu.step-3.text">
            <p>
              Flathub is the best place to get Flatpak apps. To enable it, run:
            </p>{" "}
            <CodeCopy
              text={`flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:ubuntu.step-4.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:ubuntu.step-4.text">
            <p>
              To complete setup, restart your system. Now all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("Ubuntu", <Ubuntu />);

export const Fedora = () => {
  return (
    <>
      <h1>{"fedora"}</h1>
      <ol className="distrotut">
        <Trans i18nKey="distros:fedora.introduction">
          <p>
            Flatpak is installed by default on Fedora Workstation, Fedora
            Silverblue, and Fedora Kinoite. To get started, all you need to do
            is enable Flathub, which is the best way to get Flatpak apps.
            Flathub is pre-configured as a part of the{" "}
            <a href="https://docs.fedoraproject.org/en-US/workstation-working-group/third-party-repos/">
              Third-Party Repositories
            </a>
            . Alternatively, you can download and install the{" "}
            <a
              className="btn btn-default"
              href="https://dl.flathub.org/repo/flathub.flatpakrepo"
            >
              Flathub repository file
            </a>
            .
          </p>{" "}
          <p>
            Now all you have to do is{" "}
            <a href="https://flathub.org/">install apps</a>!
          </p>{" "}
          <p>
            The above links should work on the default GNOME and KDE Fedora
            installations, but if they fail for some reason you can manually add
            the Flathub remote by running:
          </p>{" "}
          <CodeCopy
            text={`flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
          />
        </Trans>
      </ol>
    </>
  );
};
distroMap.set("Fedora", <Fedora />);

export const Manjaro = () => {
  return (
    <>
      <h1>{"manjaro"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:manjaro.step-1.name">
              Enable Flatpak through the Software Manager
            </Trans>
          </h2>
          <Trans i18nKey="distros:manjaro.step-1.text">
            <p>Flatpak is installed by default on Manjaro 20 or higher.</p>{" "}
            <p>
              To enable its support, navigate to the{" "}
              <strong>Software Manager</strong> (Add/Remove Programs)
            </p>{" "}
            <p>
              Click on the triple line menu [or dots depending on the Desktop
              Environment] on the right, in the drop down menu select
              "Preferences"
            </p>{" "}
            <p>
              Navigate to the "Flatpak" tab and slide the toggle to Enable
              Flatpak support (it is also possible to enable checking for
              updates, which is recommended).
            </p>
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:manjaro.step-2.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:manjaro.step-2.text">
            <p>
              To complete setup, restart your system. Now all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("Manjaro", <Manjaro />);

export const Endless_OS = () => {
  return (
    <>
      <h1>{"endless_os"}</h1>
      <ol className="distrotut">
        <Trans i18nKey="distros:endless_os.introduction">
          <h2>
            Flatpak support is built into Endless OS 3.0.0 and newer—no setup
            required!
          </h2>
        </Trans>
      </ol>
    </>
  );
};
distroMap.set("Endless OS", <Endless_OS />);

export const ALT_Linux = () => {
  return (
    <>
      <h1>{"alt_linux"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:alt_linux.step-1.name">
              Install Flatpak
            </Trans>
          </h2>
          <Trans i18nKey="distros:alt_linux.step-1.text">
            <p>
              To install Flatpak on operating systems of the Alt family, open
              the Terminal app and run:
            </p>{" "}
            <CodeCopy
              text={` su -
 apt-get update
 apt-get install flatpak
 `}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:alt_linux.step-2.name">
              Add the Flathub repository
            </Trans>
          </h2>
          <Trans i18nKey="distros:alt_linux.step-2.text">
            <p>
              Flathub is a great place to get Flatpak apps. To enable it on your
              Alt system, run:
            </p>{" "}
            <CodeCopy
              text={` su -
 apt-get update
 apt-get install flatpak-repo-flathub
 `}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:alt_linux.step-3.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:alt_linux.step-3.text">
            <p>
              Restart your device to complete the Flatpak installation. Now you
              can <a href="https://flathub.org/">install apps</a>!
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("ALT Linux", <ALT_Linux />);

export const Chrome_OS = () => {
  return (
    <>
      <h1>{"chrome_os"}</h1>
      <ol className="distrotut">
        <Trans i18nKey="distros:chrome_os.introduction">
          <p>
            Flatpak applications can be installed on ChromeOS with the Crostini
            Linux compatibility layer. This is not available for all ChromeOS
            devices, so you should ensure your device is compatible before
            proceeding. A list of compatible devices is maintained{" "}
            <a href="https://www.reddit.com/r/Crostini/wiki/getstarted/crostini-enabled-devices">
              here
            </a>
            .
          </p>
        </Trans>

        <li>
          <h2>
            <Trans i18nKey="distros:chrome_os.step-1.name">
              Enable Linux support
            </Trans>
          </h2>
          <Trans i18nKey="distros:chrome_os.step-1.text">
            <p>
              Navigate to{" "}
              <a href="chrome://os-settings">chrome://os-settings</a>, and
              scroll down to <strong>Developers</strong> and turn on{" "}
              <i>Linux development environment</i>. ChromeOS will take some time
              downloading and installing Linux.
            </p>
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:chrome_os.step-2.name">
              Start a Linux terminal
            </Trans>
          </h2>
          <Trans i18nKey="distros:chrome_os.step-2.text">
            <p>
              Press the Search/Launcher key, type "Terminal", and launch the
              Terminal app.
            </p>
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:chrome_os.step-3.name">
              Install Flatpak
            </Trans>
          </h2>
          <Trans i18nKey="distros:chrome_os.step-3.text">
            <p>To install Flatpak, run the following in the terminal:</p>{" "}
            <CodeCopy text={`sudo apt install flatpak`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:chrome_os.step-4.name">
              Add the Flathub repository
            </Trans>
          </h2>
          <Trans i18nKey="distros:chrome_os.step-4.text">
            <p>
              Flathub is the best place to get Flatpak apps. To enable it, run:
            </p>{" "}
            <CodeCopy
              text={`flatpak --user remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:chrome_os.step-5.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:chrome_os.step-5.text">
            <p>
              To complete setup, restart Linux. You can do this by
              right-clicking terminal, and then clicking "Shut down Linux". Now
              all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("Chrome OS", <Chrome_OS />);

export const Red_Hat_Enterprise_Linux = () => {
  return (
    <>
      <h1>{"red_hat_enterprise_linux"}</h1>
      <ol className="distrotut">
        <Trans i18nKey="distros:red_hat_enterprise_linux.introduction">
          <p>
            Flatpak is installed by default on Red Hat Enterprise Linux
            Workstation 9 and newer. To get started, all you need to do is
            enable Flathub, which is the best way to get Flatpak apps. Just
            download and install the{" "}
            <a
              className="btn btn-default"
              href="https://dl.flathub.org/repo/flathub.flatpakrepo"
            >
              Flathub repository file
            </a>
            .
          </p>{" "}
          <p>
            To install Flatpak on Red Hat Enterprise Linux Workstation 8 or
            older, run the following in a terminal:
          </p>{" "}
          {/*  Apparently the GNOME Software Flatpak plugin is shipped as part of the GNOME Software package, so there’s no need to separately install it  */}{" "}
          <CodeCopy text={`sudo yum install flatpak`} />{" "}
          <p>
            Now all you have to do is{" "}
            <a href="https://flathub.org/">install apps</a>!
          </p>{" "}
          <p>
            The above links should work on the default Red Hat Enterprise Linux
            Workstation 9 installation, but if they fail for some reason you can
            manually add the Flathub remote by running:
          </p>{" "}
          <CodeCopy
            text={`flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
          />
        </Trans>
      </ol>
    </>
  );
};
distroMap.set("Red Hat Enterprise Linux", <Red_Hat_Enterprise_Linux />);

export const Linux_Mint = () => {
  return (
    <>
      <h1>{"linux_mint"}</h1>
      <ol className="distrotut">
        <Trans i18nKey="distros:linux_mint.introduction">
          <h2>
            Flatpak support is built into Linux Mint 18.3 and newer—no setup
            required!
          </h2>
        </Trans>
      </ol>
    </>
  );
};
distroMap.set("Linux Mint", <Linux_Mint />);

export const OpenSUSE = () => {
  return (
    <>
      <h1>{"opensuse"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:opensuse.step-1.name">
              Install Flatpak
            </Trans>
          </h2>
          <Trans i18nKey="distros:opensuse.step-1.text">
            <p>
              Flatpak is available in the default repositories of all currently
              maintained openSUSE Leap and openSUSE Tumbleweed versions.
            </p>{" "}
            <p>
              If you prefer a graphical installation, you can install Flatpak
              using a "1-click installer" from{" "}
              <a href="https://software.opensuse.org/package/flatpak">
                software.opensuse.org
              </a>
              . If your distribution version is not shown by default, click{" "}
              <em>Show</em> under Unsupported distributions category and then
              select from the list.
            </p>{" "}
            <p>
              Alternatively, install Flatpak from the command line using Zypper:
            </p>{" "}
            <CodeCopy text={`sudo zypper install flatpak`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:opensuse.step-2.name">
              Add the Flathub repository
            </Trans>
          </h2>
          <Trans i18nKey="distros:opensuse.step-2.text">
            <p>
              Flathub is the best place to get Flatpak apps. To enable it, run:
            </p>{" "}
            <CodeCopy
              text={`flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:opensuse.step-3.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:opensuse.step-3.text">
            <p>
              To complete setup, restart your system. Now all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("openSUSE", <OpenSUSE />);

export const Arch = () => {
  return (
    <>
      <h1>{"arch"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:arch.step-1.name">Install Flatpak</Trans>
          </h2>
          <Trans i18nKey="distros:arch.step-1.text">
            <p>To install Flatpak on Arch, open the Terminal app and run:</p>{" "}
            <CodeCopy text={`sudo pacman -S flatpak`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:arch.step-2.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:arch.step-2.text">
            <p>
              To complete setup, restart your system. Now all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("Arch", <Arch />);

export const Debian = () => {
  return (
    <>
      <h1>{"debian"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:debian.step-1.name">Install Flatpak</Trans>
          </h2>
          <Trans i18nKey="distros:debian.step-1.text">
            <p>
              A flatpak package is available in Debian 10 (Buster) and newer. To
              install it, run the following as root:
            </p>{" "}
            <CodeCopy text={`sudo apt install flatpak`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:debian.step-2.name">
              Install the Software Flatpak plugin
            </Trans>
          </h2>
          <Trans i18nKey="distros:debian.step-2.text">
            <p>
              If you are running GNOME, it is also a good idea to install the
              Flatpak plugin for GNOME Software. To do this, run:
            </p>{" "}
            <CodeCopy text={`sudo apt install gnome-software-plugin-flatpak`} />{" "}
            <p>
              If you are running KDE, you should instead install the Plasma
              Discover Flatpak backend:
            </p>{" "}
            <CodeCopy
              text={`sudo apt install plasma-discover-backend-flatpak`}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:debian.step-3.name">
              Add the Flathub repository
            </Trans>
          </h2>
          <Trans i18nKey="distros:debian.step-3.text">
            <p>
              Flathub is the best place to get Flatpak apps. To enable it,
              download and install the{" "}
              <a
                className="btn btn-default"
                href="https://dl.flathub.org/repo/flathub.flatpakrepo"
              >
                Flathub repository file
              </a>{" "}
              or run the following in a terminal:
            </p>{" "}
            <CodeCopy
              text={`flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:debian.step-4.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:debian.step-4.text">
            <p>
              To complete setup, restart your system. Now all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("Debian", <Debian />);

export const Rocky_Linux = () => {
  return (
    <>
      <h1>{"rocky_linux"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:rocky_linux.step-1.name">
              Install Flatpak
            </Trans>
          </h2>
          <Trans i18nKey="distros:rocky_linux.step-1.text">
            <p>
              Flatpak is installed by default on Rocky Linux 8 and newer, when
              installed with a software selection that includes GNOME (Server
              with GUI, Workstation). If you are using such a system, you may
              skip this step. To install Flatpak on Rocky Linux, run the
              following in a terminal:
            </p>{" "}
            <CodeCopy text={`sudo dnf install flatpak`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:rocky_linux.step-2.name">
              Add the Flathub repository
            </Trans>
          </h2>
          <Trans i18nKey="distros:rocky_linux.step-2.text">
            <p>
              Flathub is the best place to get Flatpak apps. To enable it,
              download and install the{" "}
              <a
                className="btn btn-default"
                href="https://dl.flathub.org/repo/flathub.flatpakrepo"
              >
                Flathub repository file
              </a>{" "}
              or run the following in a terminal:
            </p>{" "}
            <CodeCopy
              text={`flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:rocky_linux.step-3.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:rocky_linux.step-3.text">
            <p>
              To complete setup, restart your system. Now all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("Rocky Linux", <Rocky_Linux />);

export const CentOS = () => {
  return (
    <>
      <h1>{"centos"}</h1>
      <ol className="distrotut">
        <Trans i18nKey="distros:centos.introduction">
          <p>
            Flatpak is installed by default on CentOS 7 and newer, when using
            GNOME. To get started, all you need to do is enable Flathub, which
            is the best way to get Flatpak apps. Just download and install the{" "}
            <a
              className="btn btn-default"
              href="https://dl.flathub.org/repo/flathub.flatpakrepo"
            >
              Flathub repository file
            </a>
            .
          </p>{" "}
          <p>
            Now all you have to do is{" "}
            <a href="https://flathub.org/">install apps</a>!
          </p>
        </Trans>
      </ol>
    </>
  );
};
distroMap.set("CentOS", <CentOS />);

export const EuroLinux = () => {
  return (
    <>
      <h1>{"eurolinux"}</h1>
      <ol className="distrotut">
        <Trans i18nKey="distros:eurolinux.introduction">
          <p>
            Flatpak is installed by default on EuroLinux 8 and newer, when using
            GNOME. To get started, all you need to do is enable Flathub, which
            is the best way to get Flatpak apps. Just download and install the{" "}
            <a
              className="btn btn-default"
              href="https://dl.flathub.org/repo/flathub.flatpakrepo"
            >
              Flathub repository file
            </a>
            .
          </p>{" "}
          <p>
            Now all you have to do is{" "}
            <a href="https://flathub.org/">install apps</a>!
          </p>
        </Trans>
      </ol>
    </>
  );
};
distroMap.set("EuroLinux", <EuroLinux />);

export const AlmaLinux = () => {
  return (
    <>
      <h1>{"almalinux"}</h1>
      <ol className="distrotut">
        <Trans i18nKey="distros:almalinux.introduction">
          <p>
            Flatpak is installed by default on AlmaLinux 8 and newer, when using
            GNOME. To get started, all you need to do is enable Flathub, which
            is the best way to get Flatpak apps. Just download and install the{" "}
            <a
              className="btn btn-default"
              href="https://dl.flathub.org/repo/flathub.flatpakrepo"
            >
              Flathub repository file
            </a>
            .
          </p>{" "}
          <p>
            Now all you have to do is{" "}
            <a href="https://flathub.org/">install apps</a>!
          </p>
        </Trans>
      </ol>
    </>
  );
};
distroMap.set("AlmaLinux", <AlmaLinux />);

export const Gentoo = () => {
  return (
    <>
      <h1>{"gentoo"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:gentoo.step-1.name">Install Flatpak</Trans>
          </h2>
          <Trans i18nKey="distros:gentoo.step-1.text">
            <p>To install Flatpak on Gentoo, open the Terminal app and run:</p>{" "}
            <CodeCopy text={`emerge --ask --verbose sys-apps/flatpak`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:gentoo.step-2.name">
              Add the Flathub repository
            </Trans>
          </h2>
          <Trans i18nKey="distros:gentoo.step-2.text">
            <p>
              Flathub is the best place to get Flatpak apps. To enable it, run:
            </p>{" "}
            <CodeCopy
              text={`flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:gentoo.step-3.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:gentoo.step-3.text">
            <p>
              To complete setup, restart your system. Now all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>{" "}
            <p>
              Note: graphical installation of Flatpak apps may not be possible
              with Gentoo.
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("Gentoo", <Gentoo />);

export const Kubuntu = () => {
  return (
    <>
      <h1>{"kubuntu"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:kubuntu.step-1.name">Install Flatpak</Trans>
          </h2>
          <Trans i18nKey="distros:kubuntu.step-1.text">
            <p>
              To install Flatpak on Kubuntu, open Discover, go to Settings,
              install the Flatpak backend and restart Discover.
            </p>
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:kubuntu.step-2.name">
              Install the Flatpak system settings add-on
            </Trans>
          </h2>
          <Trans i18nKey="distros:kubuntu.step-2.text">
            <p>
              To integrate Flatpak support into the Plasma System Settings, open
              the Terminal app and run:
            </p>{" "}
            <CodeCopy text={`sudo apt install kde-config-flatpak`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:kubuntu.step-3.name">
              Add the Flathub repository
            </Trans>
          </h2>
          <Trans i18nKey="distros:kubuntu.step-3.text">
            <p>
              Flathub is the best place to get Flatpak apps. To enable it, open
              Discover, go to Settings and add the Flathub repository.
            </p>
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:kubuntu.step-4.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:kubuntu.step-4.text">
            <p>
              To complete setup, restart your system. Now all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("Kubuntu", <Kubuntu />);

export const Solus = () => {
  return (
    <>
      <h1>{"solus"}</h1>
      <ol className="distrotut">
        <Trans i18nKey="distros:solus.introduction">
          <p>
            Flatpak support is built into Solus 4.7 and newer—no setup required!
            Flatpak apps can be installed using GNOME Software and/or KDE
            Discover.
          </p>{" "}
          <p>
            If Flatpak is not installed, follow the instructions below to get
            started.
          </p>
        </Trans>

        <li>
          <h2>
            <Trans i18nKey="distros:solus.step-1.name">Install Flatpak</Trans>
          </h2>
          <Trans i18nKey="distros:solus.step-1.text">
            <p>To install Flatpak on Solus, open the Terminal app and run:</p>{" "}
            <CodeCopy text={`sudo eopkg install flatpak`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:solus.step-2.name">
              Add the Flathub repository
            </Trans>
          </h2>
          <Trans i18nKey="distros:solus.step-2.text">
            <p>
              Flathub is the best place to get Flatpak apps. To enable it,
              download and install the{" "}
              <a
                className="btn btn-default"
                href="https://dl.flathub.org/repo/flathub.flatpakrepo"
              >
                Flathub repository file
              </a>{" "}
              or run the following in a terminal:
            </p>{" "}
            <CodeCopy
              text={`flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:solus.step-3.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:solus.step-3.text">
            <p>
              To complete setup, restart your system. Now all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>{" "}
            <p>
              Note: graphical installation of Flatpak apps is available only
              through GNOME Software and/or KDE Discover.
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("Solus", <Solus />);

export const Alpine = () => {
  return (
    <>
      <h1>{"alpine"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:alpine.step-1.name">Install Flatpak</Trans>
          </h2>
          <Trans i18nKey="distros:alpine.step-1.text">
            <p>
              Flatpak can be installed from the community repository. Run the
              following in a terminal:
            </p>{" "}
            <CodeCopy text={`doas apk add flatpak`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:alpine.step-2.name">
              Install the Software Flatpak plugin
            </Trans>
          </h2>
          <Trans i18nKey="distros:alpine.step-2.text">
            <p>
              You can install the Flatpak plugin for either the GNOME Software
              (since v3.13) or KDE Discover (since v3.11), making it possible to
              install apps without needing the command line. To install, for
              GNOME Software run:
            </p>{" "}
            <CodeCopy text={`doas apk add gnome-software-plugin-flatpak`} />{" "}
            <p>For KDE Discover run:</p>{" "}
            <CodeCopy text={`doas apk add discover-backend-flatpak`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:alpine.step-3.name">
              Add the Flathub repository
            </Trans>
          </h2>
          <Trans i18nKey="distros:alpine.step-3.text">
            <p>
              Flathub is the best place to get Flatpak apps. To enable it,
              download and install the{" "}
              <a
                className="btn btn-default"
                href="https://dl.flathub.org/repo/flathub.flatpakrepo"
              >
                Flathub repository file
              </a>{" "}
              or run the following in a terminal:
            </p>{" "}
            <CodeCopy
              text={`flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:alpine.step-4.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:alpine.step-4.text">
            <p>
              To complete the setup, restart your system. Now all you have to do
              is <a href="https://flathub.org/">install apps</a>!
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("Alpine", <Alpine />);

export const Mageia = () => {
  return (
    <>
      <h1>{"mageia"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:mageia.step-1.name">Install Flatpak</Trans>
          </h2>
          <Trans i18nKey="distros:mageia.step-1.text">
            <p>
              A flatpak package is available for Mageia 6 and newer. To install
              with DNF, run the following as root:
            </p>{" "}
            <CodeCopy text={`dnf install flatpak`} />{" "}
            <p>
              Or, to install with <code>urpmi</code>, run:
            </p>{" "}
            <CodeCopy text={`urpmi flatpak`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:mageia.step-2.name">
              Add the Flathub repository
            </Trans>
          </h2>
          <Trans i18nKey="distros:mageia.step-2.text">
            <p>
              Flathub is the best place to get Flatpak apps. To enable it,
              download and install the{" "}
              <a
                className="btn btn-default"
                href="https://dl.flathub.org/repo/flathub.flatpakrepo"
              >
                Flathub repository file
              </a>{" "}
              or run the following in a terminal:
            </p>{" "}
            <CodeCopy
              text={`flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:mageia.step-3.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:mageia.step-3.text">
            <p>
              To complete setup, restart your system. Now all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>{" "}
            <p>
              Note: graphical installation of Flatpak apps may not be possible
              with Mageia.
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("Mageia", <Mageia />);

export const OpenMandriva_Lx = () => {
  return (
    <>
      <h1>{"openmandriva_lx"}</h1>
      <ol className="distrotut">
        <Trans i18nKey="distros:openmandriva_lx.introduction">
          <h2>
            Flatpak support is built into OpenMandriva for all actively
            supported versions, starting from the stable/fixed release 'Rock
            5.0', through the development release 'Cooker', and ending with the
            rolling release 'ROME'.
          </h2>{" "}
          <p>Flatpak comes with the pre-configured Flathub repository.</p>
        </Trans>
      </ol>
    </>
  );
};
distroMap.set("OpenMandriva Lx", <OpenMandriva_Lx />);

export const Pop_OS = () => {
  return (
    <>
      <h1>{"pop_os"}</h1>
      <ol className="distrotut">
        <Trans i18nKey="distros:pop_os.introduction">
          <h2>
            Flatpak support is built into Pop!_OS 20.04 and newer—no setup
            required!
          </h2>
        </Trans>
      </ol>
    </>
  );
};
distroMap.set("Pop!_OS", <Pop_OS />);

export const Elementary_OS = () => {
  return (
    <>
      <h1>{"elementary_os"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:elementary_os.step-1.name">
              Install Apps
            </Trans>
          </h2>
          <Trans i18nKey="distros:elementary_os.step-1.text">
            <p>
              elementary OS 5.1 and newer comes with Flatpak support out of the
              box. For non-curated apps, head to{" "}
              <a href="https://flathub.org/">Flathub</a> to install any app
              using the big "Install" button, and open the downloaded
              `.flatpakref` file with Sideload.
            </p>{" "}
            <p>
              Note: After installing one app from a remote like Flathub, all
              other apps from that remote will also automatically show up in
              AppCenter.
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("elementary OS", <Elementary_OS />);

export const Raspberry_Pi_OS = () => {
  return (
    <>
      <h1>{"raspberry_pi_os"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:raspberry_pi_os.step-1.name">
              Install Flatpak
            </Trans>
          </h2>
          <Trans i18nKey="distros:raspberry_pi_os.step-1.text">
            <p>
              A flatpak package is available in Raspberry Pi OS (previously
              called Raspbian) Stretch and newer. To install it, run the
              following as root:
            </p>{" "}
            <CodeCopy text={`sudo apt install flatpak`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:raspberry_pi_os.step-2.name">
              Add the Flathub repository
            </Trans>
          </h2>
          <Trans i18nKey="distros:raspberry_pi_os.step-2.text">
            <p>
              Flathub is the best place to get Flatpak apps. To enable it, run:
            </p>{" "}
            <CodeCopy
              text={`flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
            />{" "}
            <p>
              <b>Important note:</b> It is recommended to use Raspberry Pi OS
              64-bit as newer applications are more likely to be available for
              that platform only.
            </p>
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:raspberry_pi_os.step-3.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:raspberry_pi_os.step-3.text">
            <p>
              To complete setup, restart your system. Now all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>{" "}
            <p>
              Note: graphical installation of Flatpak apps may not be possible
              with Raspberry Pi OS.
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("Raspberry Pi OS", <Raspberry_Pi_OS />);

export const Clear_Linux = () => {
  return (
    <>
      <h1>{"clear_linux"}</h1>
      <ol className="distrotut">
        <Trans i18nKey="distros:clear_linux.introduction">
          <p>
            Flatpak is installed and Flathub repository is pre-configured by
            default on Clear Linux when installing the desktop bundle.
          </p>{" "}
          <CodeCopy text={`sudo swupd bundle-add desktop`} />{" "}
          <p>
            Now all you have to do is{" "}
            <a href="https://flathub.org/">install apps</a>!
          </p>
        </Trans>
      </ol>
    </>
  );
};
distroMap.set("Clear Linux", <Clear_Linux />);

export const Void_Linux = () => {
  return (
    <>
      <h1>{"void_linux"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:void_linux.step-1.name">
              Install Flatpak
            </Trans>
          </h2>
          <Trans i18nKey="distros:void_linux.step-1.text">
            <p>
              To install Flatpak on Void Linux, run the following in a terminal:
            </p>{" "}
            <CodeCopy text={`sudo xbps-install -S flatpak`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:void_linux.step-2.name">
              Add the Flathub repository
            </Trans>
          </h2>
          <Trans i18nKey="distros:void_linux.step-2.text">
            <p>
              Flathub is the best place to get Flatpak apps. To enable it, run:
            </p>{" "}
            <CodeCopy
              text={`flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:void_linux.step-3.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:void_linux.step-3.text">
            <p>
              To complete setup, restart your system. Now all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("Void Linux", <Void_Linux />);

export const NixOS = () => {
  return (
    <>
      <h1>{"nixos"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:nixos.step-1.name">Install Flatpak</Trans>
          </h2>
          <Trans i18nKey="distros:nixos.step-1.text">
            <p>
              To install Flatpak, set NixOS option{" "}
              <code>services.flatpak.enable</code> to <code>true</code> by
              putting the following into your{" "}
              <code>/etc/nixos/configuration.nix</code>:
            </p>{" "}
            <CodeCopy text={`services.flatpak.enable = true;`} />{" "}
            <p>Then, rebuild and switch to the new configuration with:</p>{" "}
            <CodeCopy text={`sudo nixos-rebuild switch`} />{" "}
            <p>
              For more details see the{" "}
              <a href="https://nixos.org/manual/nixos/stable/index.html#module-services-flatpak">
                NixOS documentation
              </a>
              .
            </p>
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:nixos.step-2.name">
              Add the Flathub repository
            </Trans>
          </h2>
          <Trans i18nKey="distros:nixos.step-2.text">
            <p>
              Flathub is the best place to get Flatpak apps. To enable it, run:
            </p>{" "}
            <CodeCopy
              text={`flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:nixos.step-3.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:nixos.step-3.text">
            <p>
              To complete setup, restart your system. Now all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("NixOS", <NixOS />);

export const PureOS = () => {
  return (
    <>
      <h1>{"pureos"}</h1>
      <ol className="distrotut">
        <Trans i18nKey="distros:pureos.introduction">
          <p>
            Flatpak is installed by default on PureOS. To get started, all you
            need to do is enable Flathub, which is the best way to get Flatpak
            apps. Just download and install the{" "}
            <a
              className="btn btn-default"
              href="https://dl.flathub.org/repo/flathub.flatpakrepo"
            >
              Flathub repository file
            </a>
            .
          </p>{" "}
          <p>
            Now all you have to do is{" "}
            <a href="https://flathub.org/">install apps</a>!
          </p>
        </Trans>
      </ol>
    </>
  );
};
distroMap.set("PureOS", <PureOS />);

export const Turkman_Linux = () => {
  return (
    <>
      <h1>{"turkman_linux"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:turkman_linux.step-1.name">
              Install Flatpak
            </Trans>
          </h2>
          <Trans i18nKey="distros:turkman_linux.step-1.text">
            <p>
              To install Flatpak on Turkman Linux, run the following in a
              terminal:
            </p>{" "}
            <p>Emerge way</p>{" "}
            <CodeCopy
              text={` ymp install build-base --no-emerge\n ymp install flatpak\n `}
            />{" "}
            <p>No emerge way</p>{" "}
            <CodeCopy text={`ymp install flatpak --no-emerge`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:turkman_linux.step-2.name">
              Enable services
            </Trans>
          </h2>
          <Trans i18nKey="distros:turkman_linux.step-2.text">
            <p>
              To enable services on Turkman Linux, run the following in a
              terminal:
            </p>{" "}
            <CodeCopy
              text={` rc-update add devfs\n rc-update add fuse\n rc-update add hostname\n `}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:turkman_linux.step-3.name">
              Add the Flathub repository
            </Trans>
          </h2>
          <Trans i18nKey="distros:turkman_linux.step-3.text">
            <p>
              Flathub is the best place to get Flatpak apps. To enable it, run:
            </p>{" "}
            <CodeCopy
              text={`flatpak --user remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:turkman_linux.step-4.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:turkman_linux.step-4.text">
            <p>
              To complete setup, restart your system. Now all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>{" "}
            <p>
              Note: graphical installation of Flatpak apps may not be possible
              with Turkman Linux.
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("Turkman Linux", <Turkman_Linux />);

export const Ataraxia_Linux = () => {
  return (
    <>
      <h1>{"ataraxia_linux"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:ataraxia_linux.step-1.name">
              Install Flatpak
            </Trans>
          </h2>
          <Trans i18nKey="distros:ataraxia_linux.step-1.text">
            <p>
              To install Flatpak on Ataraxia Linux, run the following in a
              terminal:
            </p>{" "}
            <CodeCopy text={`sudo neko em flatpak`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:ataraxia_linux.step-2.name">
              Add the Flathub repository
            </Trans>
          </h2>
          <Trans i18nKey="distros:ataraxia_linux.step-2.text">
            <p>
              Flathub is the best place to get Flatpak apps. To enable it, run:
            </p>{" "}
            <CodeCopy
              text={`flatpak --user remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:ataraxia_linux.step-3.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:ataraxia_linux.step-3.text">
            <p>
              To complete setup, restart your system. Now all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("Ataraxia Linux", <Ataraxia_Linux />);

export const Zorin_OS = () => {
  return (
    <>
      <h1>{"zorin_os"}</h1>
      <ol className="distrotut">
        <Trans i18nKey="distros:zorin_os.introduction">
          <h2>Flatpak support is built into Zorin OS</h2>{" "}
          <p>You can use the Software Store app to download flatpak apps.</p>
        </Trans>
      </ol>
    </>
  );
};
distroMap.set("Zorin OS", <Zorin_OS />);

export const Deepin = () => {
  return (
    <>
      <h1>{"deepin"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:deepin.step-1.name">Install Flatpak</Trans>
          </h2>
          <Trans i18nKey="distros:deepin.step-1.text">
            <p>
              To install Flatpak on Deepin, run the following in a terminal:
            </p>{" "}
            <CodeCopy text={`sudo apt install flatpak`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:deepin.step-2.name">
              Add the Flathub repository
            </Trans>
          </h2>
          <Trans i18nKey="distros:deepin.step-2.text">
            <p>
              Flathub is the best place to get Flatpak apps. To enable it, run:
            </p>{" "}
            <CodeCopy
              text={`flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:deepin.step-3.name">
              Install the Deepin themes
            </Trans>
          </h2>
          <Trans i18nKey="distros:deepin.step-3.text">
            <p>To install light and dark themes, run:</p>{" "}
            <CodeCopy
              text={` flatpak install flathub org.gtk.Gtk3theme.deepin\n flatpak install flathub org.gtk.Gtk3theme.deepin-dark\n `}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:deepin.step-4.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:deepin.step-4.text">
            <p>
              To complete setup, restart your system. Now all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("Deepin", <Deepin />);

export const Pardus = () => {
  return (
    <>
      <h1>{"pardus"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:pardus.step-1.name">Install Flatpak</Trans>
          </h2>
          <Trans i18nKey="distros:pardus.step-1.text">
            <p>
              A flatpak package is available in Pardus 2019 and newer. To
              install it, run the following as root:
            </p>{" "}
            <CodeCopy text={`sudo apt install flatpak`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:pardus.step-2.name">
              Install the Software Flatpak plugin
            </Trans>
          </h2>
          <Trans i18nKey="distros:pardus.step-2.text">
            <p>
              If you are running GNOME, it is also a good idea to install the
              Flatpak plugin for GNOME Software. To do this, run:
            </p>{" "}
            <CodeCopy text={`sudo apt install gnome-software-plugin-flatpak`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:pardus.step-3.name">
              Add the Flathub repository
            </Trans>
          </h2>
          <Trans i18nKey="distros:pardus.step-3.text">
            <p>
              Flathub is the best place to get Flatpak apps. To enable it, run:
            </p>{" "}
            <CodeCopy
              text={`flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:pardus.step-4.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:pardus.step-4.text">
            <p>
              To complete setup, restart your system. Now all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("Pardus", <Pardus />);

export const MX_Linux = () => {
  return (
    <>
      <h1>{"mx_linux"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:mx_linux.step-1.name">
              Enable Flatpak through the Software Manager
            </Trans>
          </h2>
          <Trans i18nKey="distros:mx_linux.step-1.text">
            <p>
              Flatpak support is built in from MX 18 and later. It is only
              required to activate the Flathub repository following these
              instructions:
            </p>{" "}
            <p>
              Open <strong>MX Package Installer</strong> (open the menu and look
              in MX Tools), select the "Flatpaks" tab, to activate the
              repository you will need to enter the root password.
            </p>
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:mx_linux.step-2.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:mx_linux.step-2.text">
            <p>
              To complete setup, restart your system. Now all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("MX Linux", <MX_Linux />);

export const Pisi_GNULinux = () => {
  return (
    <>
      <h1>{"pisi_gnulinux"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:pisi_gnulinux.step-1.name">
              Install Flatpak
            </Trans>
          </h2>
          <Trans i18nKey="distros:pisi_gnulinux.step-1.text">
            <p>
              A flatpak package is available in Pisi 2.1 and newer. To install
              it, run the following as root:
            </p>{" "}
            <CodeCopy text={`sudo pisi it flatpak`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:pisi_gnulinux.step-2.name">
              Add the Flathub repository
            </Trans>
          </h2>
          <Trans i18nKey="distros:pisi_gnulinux.step-2.text">
            <p>
              Flathub is the best place to get Flatpak apps. To enable it, run:
            </p>{" "}
            <CodeCopy
              text={`flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:pisi_gnulinux.step-3.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:pisi_gnulinux.step-3.text">
            <p>
              To complete setup, restart your system. Now all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>{" "}
            <p>
              Note: graphical installation of Flatpak apps may not be possible
              with Pisi GNU/Linux.
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("Pisi GNULinux", <Pisi_GNULinux />);

export const EndeavourOS = () => {
  return (
    <>
      <h1>{"endeavouros"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:endeavouros.step-1.name">
              Install Flatpak
            </Trans>
          </h2>
          <Trans i18nKey="distros:endeavouros.step-1.text">
            <p>
              To install Flatpak on EndeavorOS, you must first make sure your
              installation is up to date, run the following in a terminal:
            </p>{" "}
            <CodeCopy text={`sudo pacman -Syu`} /> <p>Then install Flatpak:</p>{" "}
            <CodeCopy text={`sudo pacman -S flatpak`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:endeavouros.step-2.name">
              Add the Flathub repository
            </Trans>
          </h2>
          <Trans i18nKey="distros:endeavouros.step-2.text">
            <p>
              Flathub is the best place to get Flatpak apps. To enable it, run:
            </p>{" "}
            <CodeCopy
              text={`flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:endeavouros.step-3.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:endeavouros.step-3.text">
            <p>
              To complete setup, restart your system. Now all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>{" "}
            <p>
              Note: graphical installation of Flatpak apps may not be possible
              with EndeavourOS.
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("EndeavourOS", <EndeavourOS />);

export const KDE_neon = () => {
  return (
    <>
      <h1>{"kde_neon"}</h1>
      <ol className="distrotut">
        <Trans i18nKey="distros:kde_neon.introduction">
          <h2>
            Flatpak support is built into KDE neon 19 and newer—no setup
            required!
          </h2>
        </Trans>
      </ol>
    </>
  );
};
distroMap.set("KDE neon", <KDE_neon />);

export const GNU_Guix = () => {
  return (
    <>
      <h1>{"gnu_guix"}</h1>
      <ol className="distrotut">
        <li>
          <h2>
            <Trans i18nKey="distros:gnu_guix.step-1.name">
              Install Flatpak
            </Trans>
          </h2>
          <Trans i18nKey="distros:gnu_guix.step-1.text">
            <p>
              To install Flatpak on GNU Guix, run the following in a terminal:
            </p>{" "}
            <CodeCopy text={`guix install flatpak`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:gnu_guix.step-2.name">
              Add the Flathub repository
            </Trans>
          </h2>
          <Trans i18nKey="distros:gnu_guix.step-2.text">
            <p>
              Flathub is the best place to get Flatpak apps. To enable it, run:
            </p>{" "}
            <CodeCopy
              text={`flatpak --user remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:gnu_guix.step-3.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:gnu_guix.step-3.text">
            <p>
              To complete setup, restart your system. Now all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>{" "}
            <p>
              Note: graphical installation of Flatpak apps may not be possible
              with GNU Guix.
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("GNU Guix", <GNU_Guix />);

export const Crystal_Linux = () => {
  return (
    <>
      <h1>{"crystal_linux"}</h1>
      <ol className="distrotut">
        <Trans i18nKey="distros:crystal_linux.introduction">
          <h2>Flatpak is installed by default on Crystal Linux.</h2>{" "}
          <p>
            If you didn't use jade_gui to install crystal or selected not to
            install it, you can set Flatpak up by using the following steps.
          </p>
        </Trans>

        <li>
          <h2>
            <Trans i18nKey="distros:crystal_linux.step-1.name">
              Install Flatpak
            </Trans>
          </h2>
          <Trans i18nKey="distros:crystal_linux.step-1.text">
            <p>
              To install Flatpak in Crystal Linux, you must first make sure your
              packages are up to date. Run the following in a terminal:
            </p>{" "}
            <CodeCopy text={`ame upg`} /> <p>Then install Flatpak:</p>{" "}
            <CodeCopy text={`ame ins flatpak`} />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:crystal_linux.step-2.name">
              Add the Flathub repository
            </Trans>
          </h2>
          <Trans i18nKey="distros:crystal_linux.step-2.text">
            <p>
              Flathub is the best place to get Flatpak apps. To enable it, run:
            </p>{" "}
            <CodeCopy
              text={`flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
            />
          </Trans>
        </li>

        <li>
          <h2>
            <Trans i18nKey="distros:crystal_linux.step-3.name">Restart</Trans>
          </h2>
          <Trans i18nKey="distros:crystal_linux.step-3.text">
            <p>
              To complete setup, restart your system. Now all you have to do is{" "}
              <a href="https://flathub.org/">install apps</a>!
            </p>
          </Trans>
        </li>
      </ol>
    </>
  );
};
distroMap.set("Crystal Linux", <Crystal_Linux />);

export const Vanilla_OS = () => {
  return (
    <>
      <h1>{"vanilla_os"}</h1>
      <ol className="distrotut">
        <Trans i18nKey="distros:vanilla_os.introduction">
          <h2>Flatpak is installed by default on Vanilla OS.</h2>{" "}
          <p>
            You can use the Software app or browse{" "}
            <a href="https://flathub.org/">Flathub</a> to install apps.
          </p>{" "}
          <p>
            If for some reason Flathub is not available, you can configure it
            manually using the following command:
          </p>{" "}
          <CodeCopy
            text={`host-shell flatpak remote-add --user --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo`}
          />
        </Trans>
      </ol>
    </>
  );
};
distroMap.set("Vanilla OS", <Vanilla_OS />);

export const Salix = () => {
  return (
    <>
      <h1>{"salix"}</h1>
      <ol className="distrotut">
        <Trans i18nKey="distros:salix.introduction">
          <h2>
            Flatpak is installed by default on Salix since version 15.0—no setup
            required!
          </h2>{" "}
          <p>
            Flatpak comes preconfigured with the Flathub repository and desktop
            integration tools are included to allow 1-click install from
            Flathub.
          </p>{" "}
          <p>
            All you have to do is{" "}
            <a href="https://flathub.org/">install apps</a>!
          </p>
        </Trans>
      </ol>
    </>
  );
};
distroMap.set("Salix", <Salix />);
