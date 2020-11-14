interface Device {
  [index:string]: string;
}

const device: Device = {
  s: `only screen and (min-width: 576px)`,
  m: `only screen and (min-width: 768px)`,
  l: `only screen and (min-width: 992px)`,
  xl: `only screen and (min-width: 1200px)`
};

export default device;