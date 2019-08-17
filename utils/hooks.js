import { useState, useEffect } from 'react';

export const MenuToggle = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(state => !state);

  return children({ open, handleToggle });
};

export const PortalNode = ({ children }) => {
  const [node, setNode] = useState(null);

  useEffect(() => {
    if (document) setNode(document.querySelector('#portal'));
  }, []);

  return children({ node });
};

export const ContactRedirect = ({ children }) => {
  const [tooltip, setTooltip] = useState(null);

  const handleTooltip = name => {
    setTooltip(name);
  };

  const openTab = url => {
    window.open(url, '_blank').focus();
  };

  return children({ tooltip, handleTooltip, openTab });
};

export const Switch = ({ children, switches }) => {
  const [activeSwitch, setActiveSwitch] = useState(switches[0]);

  const handleChange = switchIndex => {
    setActiveSwitch(switches[switchIndex]);
  };

  return children({ activeSwitch, handleChange });
};

export const TextSwap = ({ children }) => {
  const [mounted, setMounted] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setMounted(1);
    }, 4000);

    setTimeout(() => {
      setMounted(2);
    }, 8000);

    setTimeout(() => {
      setMounted(3);
    }, 12200);
  }, []);

  return children({ mounted });
};
