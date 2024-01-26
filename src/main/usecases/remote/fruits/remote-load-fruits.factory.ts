import { RemoteLoadFruits } from "@/data/usecases/remote/fruits";
import { LoadFruits } from "@/domain/usecases/fruits";
import { makeApiUrl, makeHttpClient } from "@/main/http";

export const makeRemoteLoadFruits = (): LoadFruits =>
  new RemoteLoadFruits(makeApiUrl("/all"), makeHttpClient());
