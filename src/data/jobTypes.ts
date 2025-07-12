export interface JobParameter {
  name: string,
  dataType: string,
  range?: number[]
};

export default [
  {
    name: "Greyscale"
  },
  {
    name: "Kuwahara",
    parameters: [
      {
        name: "Size",
        dataType: "number",
        range: [2, 32]
      }
    ]
  }
];