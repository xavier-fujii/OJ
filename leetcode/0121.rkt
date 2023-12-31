; https://leetcode.com/problems/best-time-to-buy-and-sell-stock
#lang racket

(define/contract (max-profit prices)
  (-> (listof exact-integer?) exact-integer?)
  (for/fold
   ([min-num (first prices)][max-profit 0] #:result max-profit)
   ([num prices])
    (values (min min-num num) (max max-profit (- num min-num))))
  )