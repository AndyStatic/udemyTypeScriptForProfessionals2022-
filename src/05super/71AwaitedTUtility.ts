main71();
async function main71() {
  const single: Promise<string> = new Promise((res) => res("l4d135"));

  const triple: Promise<Promise<Promise<string>>> = new Promise<
    Promise<Promise<string>>
  >((res) =>
    res(
      new Promise<Promise<string>>((res) =>
        res(
          new Promise<string>((res) => {
            res("Vin Diesel");
          })
        )
      )
    )
  );

  const singleResult711 = await single;
  console.log(singleResult711); //l4d135

  const tripleResult711 = await triple;
  console.log(tripleResult711); //Vin Diesel
}

type WrappedInDeep71 = Promise<Promise<Promise<Promise<Promise<string>>>>>;
type AwaitedResult71 = Awaited<WrappedInDeep71>;

async function example71<T>(input: T) {
  const output: Awaited<T> = await input;
}
