import { Service } from '@angular/core';

@Service()
export class BusyService {
    loading = false;
    busyRequestCount = 0;

    busy() {
        this.busyRequestCount++;
        this.loading = true;
    }

    idle() {
        this.busyRequestCount--;
        this.loading = false;
        if (this.busyRequestCount <= 0){
            this.busyRequestCount = 0;
            this.loading = false;
        }
    }
}
