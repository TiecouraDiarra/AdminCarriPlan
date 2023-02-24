import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { UserService } from 'src/app/_services/user/user.service';
import { ParcoursService } from 'src/app/_services/parcours/parcours.service';
import { MetierService } from 'src/app/_services/metier/metier.service';
import { AutoevaluationService } from 'src/app/_services/autoevaluation/autoevaluation.service';
import { environment } from 'src/environments/environment';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

interface AutoE {
  nomcomplet: string,
  dateauto: string,
  avatar: string,
  status: string
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private chartsData: DashboardChartsData,
    private serviceUser: UserService,
    private serviceParcours: ParcoursService,
    private serviceMetier: MetierService,
    private serviceAuto: AutoevaluationService
  ) {
  }

  nombretotaluser: number = 0
  nombretotalparcours: number = 0
  nombretotalmetier: number = 0
  autoevaluationrecente: any
  image: string = environment.imageUrl
  status: 'success' | undefined

  months = ['Jan', 'Fev', 'Mars', 'Avril', 'May', 'Juin', 'Juil', 'Aou', 'Sept', 'Oct', 'Nov', 'Dec'];

  chartBarData = {
    labels: [...this.months].slice(0, 12),
    datasets: [
      {
        label: 'Utilisateurs',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 17, 42, 79, 25, 10, 12, 49, 20]
      }
    ]
  };


  // chartBarOptions = {
  //   maintainAspectRatio: false,
  // };

  chartLineData = {
    labels: [...this.months].slice(0, 7),
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: 'rgba(151, 187, 205, 1)',
        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
        pointBorderColor: '#fff',
        data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
      }
    ]
  };

  // public AutoRe: AutoE[] = {
  //   nomcomplet: '',
  //   dateauto: '',
  //   avatar: '',
  //   status: ''
  // }

  public users: IUser[] = [
    {
      name: 'Yiorgos Avraamu',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Us',
      usage: 50,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Mastercard',
      activity: '10 sec ago',
      avatar: './assets/img/avatars/1.jpg',
      status: 'success',
      color: 'success'
    },
    {
      name: 'Avram Tarasios',
      state: 'Recurring ',
      registered: 'Jan 1, 2021',
      country: 'Br',
      usage: 10,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Visa',
      activity: '5 minutes ago',
      avatar: './assets/img/avatars/2.jpg',
      status: 'danger',
      color: 'info'
    },
    {
      name: 'Quintin Ed',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'In',
      usage: 74,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Stripe',
      activity: '1 hour ago',
      avatar: './assets/img/avatars/3.jpg',
      status: 'warning',
      color: 'warning'
    },
    {
      name: 'Enéas Kwadwo',
      state: 'Sleep',
      registered: 'Jan 1, 2021',
      country: 'Fr',
      usage: 98,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Paypal',
      activity: 'Last month',
      avatar: './assets/img/avatars/4.jpg',
      status: 'secondary',
      color: 'danger'
    },
    {
      name: 'Agapetus Tadeáš',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Es',
      usage: 22,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'ApplePay',
      activity: 'Last week',
      avatar: './assets/img/avatars/5.jpg',
      status: 'success',
      color: 'primary'
    },
    {
      name: 'Friderik Dávid',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Pl',
      usage: 43,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Amex',
      activity: 'Yesterday',
      avatar: './assets/img/avatars/6.jpg',
      status: 'info',
      color: 'dark'
    }
  ];
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });


  ngOnInit(): void {
    this.initCharts();

    this.serviceUser.AfficherNombreTotalUser().subscribe(data => {
      this.nombretotaluser = data;
      console.log(this.nombretotaluser);
    })

    this.serviceParcours.AfficherNombreTotalParcours().subscribe(data => {
      this.nombretotalparcours = data;
      console.log(this.nombretotalparcours);
    })

    this.serviceMetier.AfficherNombreTotalMetier().subscribe(data => {
      this.nombretotalmetier = data;
      console.log(this.nombretotalmetier);
    })

    //AFFICHER LA LISTE DES AUTOEVALUATIONS
    this.serviceAuto.AfficherLaListeQuatreAutoevaluationRecente().subscribe(data => {
      this.autoevaluationrecente = data;
      console.log(this.autoevaluationrecente);
    })
  }


  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }

  get randomData() {
    return Math.round(Math.random() * 100);
  }
}


