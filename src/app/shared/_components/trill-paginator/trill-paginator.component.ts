import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'trill-paginator',
  templateUrl: './trill-paginator.component.html',
  styleUrls: ['./trill-paginator.component.css']
})
export class TrillPaginatorComponent implements OnInit {

  @Input() page = 0;
  @Input() pageSize = 10;
  @Input() total = 0;
  @Input() itemEnd: number;
  @Input() itemStart: number;
  @Input() pagesCount: number;
  @Input() pageSizeOptions: Array<number>;
  @Input() steps = 6;
  @Output() onPageChanged = new EventEmitter<any>();
  @Input() textFirst = '<<';
  @Input() textLast = '>>';
  @Input() textNext = '>';
  @Input() textPrev = '<';
  @Input() textTitlePage = 'Page {page} of {pagesCount}';
  @Input() textTitleFirst = 'Goto First Page';
  @Input() textTitleLast = 'Goto Last Page';
  @Input() textTitleNext = 'Next Page';
  @Input() textTitlePrev = 'Previous Page';

  @Input() hideIfEmpty = false;
  @Input() showPrevNext = true;
  @Input() showFirstLast = true;
  @Input() showMorePrevNext = true;
  @Input() responsive = true;

  private regex = /\{page\}/g;
  private regex2 = /\{pagesCount\}/g;

  private differ: any;
  private stepInfo = [];
  private pages = [];
  private index = 0;
  private isMobile = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  private getLinkTitle(page) {
    return this.textTitlePage.replace(this.regex, page.toString()).replace(this.regex2, this.pagesCount.toString());
  }

  private gotoPrev(page) {
    if (page < 1) return;
    if (page === this.index) {
      this.gotoMorePrev();
    } else
      this.goto(page - 1);
  }
  private gotoNext(page) {
    if (page >= this.pagesCount) return;
    if ((page % this.steps) === 0) {
      this.gotoMoreNext();
    } else
      this.goto(page);
  }

  private goto(index) {
    if (!this.isMobile) // on mobile (index + 1) will equals page since steps is 1 so we skip next check
      if (((index + 1) === this.page) || index < 0) return;
    this.page = this.pages[index];
    this.triggerPaging();
  };

  private gotoMorePrev() {
    if (!this.isMobile) // on mobile gotoMorePrev will not be access directly that's why we skip next check
      if ((this.index - 1) < 1) return;
    this.page = this.index;
    this.index -= this.steps;
    this.triggerPaging();
  };

  private gotoMoreNext() {
    if ((this.index + this.steps) > this.pagesCount) return;
    this.index += this.steps;
    this.page = this.index + 1;
    this.triggerPaging();
  };

  private gotoFirst() {
    if (this.page - 1 <= 0) return;
    this.index = 0;
    this.page = 1;
    this.triggerPaging();
  };

  private gotoLast() {
    if (this.page >= this.pagesCount) return;
    this.index = parseInt((this.pagesCount / this.steps).toString()) * this.steps;
    this.index === this.pagesCount ? this.index = this.index - this.steps : '';
    this.page = this.pagesCount;
    this.triggerPaging();
  };

  private setMobilePage(page) {
    page = +page;
    if (this.pages[page - 1]) {// pages is zero based
      this.page = page;
      this.index = this.page - 1;
      this.triggerPaging();
    }
  }

  private triggerPaging() {
    this.onPageChanged.emit(this.page);
  }

  private pageSizeChange(evt) {
    this.pageSize = +evt;
    this.page = 1;
    this.index = 0;
    this.init();
    this.triggerPaging();
  }

  private init() {
    if (!this.isMobile && this.steps < 2)
      this.steps = 2;
    var _this = this;
    this.stepInfo = (function () {
      var result = [];
      for (var i = 0; i < _this.steps; i++) {
        result.push(i)
      }
      return result;
    })();

    this.pages = (function () {
      var result = [];
      for (var i = 1; i <= _this.pagesCount; i++) {
        result.push(i);
      }
      return result;
    })();

  };

  ngOnChanges(changes: SimpleChanges): void {
    // this occur on page click or when loaded initially
    if (changes['page']) {
      this.init();
    }
    // this occur on pageSize change or when loaded initially
    if (changes['pageSize']) {
      this.page = 1;
      this.index = 0;
      this.init();
    }
    // this occur on maybe record filtering or when loaded initially
    if (changes['total']) {
      this.page = 1;
      this.index = 0;
      this.init();
    }
  }

  ngOnInit() {
    this.pageSizeOptions = this.pageSizeOptions || [10, 20, 50, 100];
    this.breakpointObserver.
      observe([Breakpoints.Small, Breakpoints.Handset])
      .subscribe((state: BreakpointState) => {
        if (this.responsive)
          if (state.matches) {
            this.steps = 1;
            this.showMorePrevNext = false;
            this.isMobile = true;
            this.init();
          } else {
            this.isMobile = false;
            this.init();
          }
      })
  }

}
