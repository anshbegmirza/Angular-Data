import { Component, OnInit } from "@angular/core";
import { ServersService } from "../servers.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { ICanComponentDeactivate } from "./can-deactivate-guard.service"; // Adjust the import path as needed

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent implements OnInit, ICanComponentDeactivate {
  server: { id: number; name: string; status: string } | undefined;
  serverName = "";
  serverStatus = "";
  allowEdit: boolean = false;
  changesSaved: boolean = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams["allowEdit"] === "1" ? true : false;
    });
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params["id"];

    this.server = this.serversService.getServer(id);
    //subscribe to route params to update the id if params changed.
    if (this.server) {
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    }
  }

  onUpdateServer() {
    if (this.server) {
      this.serversService.updateServer(this.server.id, {
        name: this.serverName,
        status: this.serverStatus,
      });
      this.changesSaved = true;
      this.router.navigate(["../"], { relativeTo: this.route });
    }
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.serverName !== this.server?.name ||
        this.serverStatus !== this.server?.status) &&
      !this.changesSaved
    ) {
      return confirm("Do you want to discard the changes?");
    }
    return true;
  }
}
