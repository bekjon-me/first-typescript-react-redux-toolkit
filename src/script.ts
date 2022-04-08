import { User } from "./User";
import { Company } from "./Company";
import { customMap } from "./customMap";

const user = new User();
const company = new Company();
const customer = new customMap("map");
customer.userMarker(user);
customer.userMarker(company);

// AIzaSyApBNmPiRUlPAtsCzT7CM0pJga4YfGTojY
