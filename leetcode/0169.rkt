#lang racket
; https://leetcode.com/problems/majority-element


(define/contract (majority-element nums)
  (-> (listof exact-integer?) exact-integer?)

  (define rec (for/fold ([r (hash)])
                        ([num nums])
                (cond [(hash-has-key? r num) (values (hash-set r num (+ 1 (hash-ref r num))))]
                      [else (values (hash-set r num 1))]
                      )))

  (define majority (car (first (sort (hash->list rec) (λ (x y) (< (cdr y) (cdr x)))))))
  majority)

(majority-element (list 2 2 1 1 1 2 2))