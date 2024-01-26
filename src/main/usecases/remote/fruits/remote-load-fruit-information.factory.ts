import { RemoteLoadFruitInformation } from "@/data/usecases/remote/fruits";
import { LoadFruitInformation } from "@/domain/usecases/fruits";
import { makeApiUrl, makeHttpClient } from "@/main/http";

export const makeRemoteLoadFruitsInformation = (): LoadFruitInformation =>
  new RemoteLoadFruitInformation(makeApiUrl("/fruit"), makeHttpClient());
