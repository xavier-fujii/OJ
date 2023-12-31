; https://leetcode.com/problems/largest-substring-between-two-equal-characters
#lang racket
(define/contract (max-length-between-equal-characters s)
  (-> string? exact-integer?)

  (define max-offset-r
    (for/fold
     ([max-offset 0]
      [r (hash)]
      #:result max-offset)
     ([cur (in-list (string->list s))]
      [i (range 0 (string-length s))])
      (cond
        [(hash-has-key? r cur)
         (let ([offset (- i (hash-ref r cur))])
           (values (max max-offset offset) r))]
        [else (values max-offset (hash-set r cur i))])))

  (- max-offset-r 1))

(display (max-length-between-equal-characters "cbzxy"))
