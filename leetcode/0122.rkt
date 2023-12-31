;  https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
#lang racket

(define/contract (max-profit prices)
  (-> (listof exact-integer?) exact-integer?)
  (define result (foldl
                  (λ (price result)
                    (cons (+ (car result) (max 0 (- price (cdr result)))) price))
                  (cons 0 (first prices))
                  prices))
  (car result)
  )