// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      6: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1],
      8: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Francis(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Francis expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Francis expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v245 = stdlib.protect(ctc0, interact.timeFrame, 'for Francis\'s interact field timeFrame');
  const v246 = stdlib.protect(ctc0, interact.wager, 'for Francis\'s interact field wager');
  
  const v249 = stdlib.protect(ctc0, await interact.getRandomNum(), {
    at: './index.rsh:48:63:application',
    fs: ['at ./index.rsh:46:17:application call to [unknown function] (defined at: ./index.rsh:46:20:function exp)'],
    msg: 'getRandomNum',
    who: 'Francis'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v246, v249, v245],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:52:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [v246, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v251, v252, v253], secs: v255, time: v254, didSend: v33, from: v250 } = txn1;
      
      sim_r.txns.push({
        amt: v251,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v264 = stdlib.add(v254, v253);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v251, v252, v253], secs: v255, time: v254, didSend: v33, from: v250 } = txn1;
  ;
  const v264 = stdlib.add(v254, v253);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: ['time', v264],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v250, v251, v252, v253, v264],
      evt_cnt: 0,
      funcNum: 2,
      lct: v254,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v408, time: v407, didSend: v211, from: v406 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v250,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v408, time: v407, didSend: v211, from: v406 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:42:33:application',
      fs: ['at ./index.rsh:41:13:application call to [unknown function] (defined at: ./index.rsh:41:35:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:59:89:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Francis'
      });
    
    return;
    
    }
  else {
    const {data: [v270], secs: v272, time: v271, didSend: v44, from: v269 } = txn2;
    const v274 = stdlib.add(v251, v251);
    ;
    const v275 = stdlib.mul(v252, stdlib.checkedBigNumberify('./index.rsh:61:34:decimal', stdlib.UInt_max, '2'));
    const v276 = stdlib.mul(v270, stdlib.checkedBigNumberify('./index.rsh:61:50:decimal', stdlib.UInt_max, '2'));
    const v277 = stdlib.add(v275, v276);
    const v278 = stdlib.div(v277, stdlib.checkedBigNumberify('./index.rsh:61:53:decimal', stdlib.UInt_max, '4'));
    let v279 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v280 = v271;
    let v287 = v274;
    
    while (await (async () => {
      const v295 = stdlib.eq(v279, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v295;})()) {
      const v298 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:69:52:application',
        fs: ['at ./index.rsh:68:21:application call to [unknown function] (defined at: ./index.rsh:68:25:function exp)'],
        msg: 'getGuess',
        who: 'Francis'
        });
      const v299 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:70:66:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:68:21:application call to [unknown function] (defined at: ./index.rsh:68:25:function exp)'],
        msg: 'random',
        who: 'Francis'
        });
      const v300 = stdlib.digest(ctc1, [v299, v298]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v250, v251, v253, v269, v278, v287, v300],
        evt_cnt: 1,
        funcNum: 4,
        lct: v280,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:73:17:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v303], secs: v305, time: v304, didSend: v74, from: v302 } = txn3;
          
          ;
          const v313 = stdlib.add(v304, v253);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [v303], secs: v305, time: v304, didSend: v74, from: v302 } = txn3;
      ;
      const v306 = stdlib.addressEq(v250, v302);
      stdlib.assert(v306, {
        at: './index.rsh:73:17:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Francis'
        });
      const v313 = stdlib.add(v304, v253);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc0],
        timeoutAt: ['time', v313],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v250, v251, v253, v269, v278, v287, v303, v313],
          evt_cnt: 0,
          funcNum: 6,
          lct: v304,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v365, time: v364, didSend: v155, from: v363 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v250,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v365, time: v364, didSend: v155, from: v363 } = txn5;
        ;
        const v366 = stdlib.addressEq(v250, v363);
        const v367 = stdlib.addressEq(v269, v363);
        const v368 = v366 ? true : v367;
        stdlib.assert(v368, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:80:81:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Francis'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:42:33:application',
          fs: ['at ./index.rsh:41:13:application call to [unknown function] (defined at: ./index.rsh:41:35:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:80:81:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Francis'
          });
        
        return;
        
        }
      else {
        const {data: [v319], secs: v321, time: v320, didSend: v84, from: v318 } = txn4;
        ;
        const v322 = stdlib.addressEq(v269, v318);
        stdlib.assert(v322, {
          at: './index.rsh:80:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Francis'
          });
        const v329 = stdlib.add(v320, v253);
        const txn5 = await (ctc.sendrecv({
          args: [v250, v251, v253, v269, v278, v287, v303, v319, v329, v299, v298],
          evt_cnt: 2,
          funcNum: 7,
          lct: v320,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:86:19:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v334, v335], secs: v337, time: v336, didSend: v94, from: v333 } = txn5;
            
            ;
            let v341;
            const v342 = stdlib.eq(v335, v278);
            if (v342) {
              v341 = stdlib.checkedBigNumberify('./index.rsh:7:16:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v343 = stdlib.eq(v319, v278);
              if (v343) {
                v341 = stdlib.checkedBigNumberify('./index.rsh:11:12:decimal', stdlib.UInt_max, '2');
                }
              else {
                v341 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
                }
              }
            const cv279 = v341;
            const cv280 = v336;
            const cv287 = v287;
            
            await (async () => {
              const v279 = cv279;
              const v280 = cv280;
              const v287 = cv287;
              
              if (await (async () => {
                const v295 = stdlib.eq(v279, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                
                return v295;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v381 = stdlib.eq(v279, stdlib.checkedBigNumberify('./index.rsh:92:18:decimal', stdlib.UInt_max, '0'));
                const v382 = stdlib.eq(v279, stdlib.checkedBigNumberify('./index.rsh:93:18:decimal', stdlib.UInt_max, '2'));
                const v383 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                const v384 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
                const v385 = v382 ? v383 : v384;
                const v386 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
                const v387 = v381 ? v386 : v385;
                const v388 = v387[stdlib.checkedBigNumberify('./index.rsh:91:24:array', stdlib.UInt_max, '0')];
                const v389 = v387[stdlib.checkedBigNumberify('./index.rsh:91:24:array', stdlib.UInt_max, '1')];
                const v390 = stdlib.mul(v388, v251);
                sim_r.txns.push({
                  kind: 'from',
                  to: v250,
                  tok: undefined /* Nothing */
                  });
                const v395 = stdlib.mul(v389, v251);
                sim_r.txns.push({
                  kind: 'from',
                  to: v269,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v329],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v250, v251, v253, v269, v278, v287, v303, v319, v329],
            evt_cnt: 0,
            funcNum: 8,
            lct: v320,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v347, time: v346, didSend: v121, from: v345 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v269,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v347, time: v346, didSend: v121, from: v345 } = txn6;
          ;
          const v348 = stdlib.addressEq(v250, v345);
          const v349 = stdlib.addressEq(v269, v345);
          const v350 = v348 ? true : v349;
          stdlib.assert(v350, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:86:100:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Francis'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:42:33:application',
            fs: ['at ./index.rsh:41:13:application call to [unknown function] (defined at: ./index.rsh:41:35:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:86:100:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Francis'
            });
          
          return;
          
          }
        else {
          const {data: [v334, v335], secs: v337, time: v336, didSend: v94, from: v333 } = txn5;
          ;
          const v338 = stdlib.addressEq(v250, v333);
          stdlib.assert(v338, {
            at: './index.rsh:86:19:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Francis'
            });
          const v339 = stdlib.digest(ctc1, [v334, v335]);
          const v340 = stdlib.digestEq(v303, v339);
          stdlib.assert(v340, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:87:26:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Francis'
            });
          let v341;
          const v342 = stdlib.eq(v335, v278);
          if (v342) {
            v341 = stdlib.checkedBigNumberify('./index.rsh:7:16:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v343 = stdlib.eq(v319, v278);
            if (v343) {
              v341 = stdlib.checkedBigNumberify('./index.rsh:11:12:decimal', stdlib.UInt_max, '2');
              }
            else {
              v341 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
              }
            }
          const cv279 = v341;
          const cv280 = v336;
          const cv287 = v287;
          
          v279 = cv279;
          v280 = cv280;
          v287 = cv287;
          
          continue;}
        
        }
      
      
      
      }
    const v381 = stdlib.eq(v279, stdlib.checkedBigNumberify('./index.rsh:92:18:decimal', stdlib.UInt_max, '0'));
    const v382 = stdlib.eq(v279, stdlib.checkedBigNumberify('./index.rsh:93:18:decimal', stdlib.UInt_max, '2'));
    const v383 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v384 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
    const v385 = v382 ? v383 : v384;
    const v386 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v387 = v381 ? v386 : v385;
    const v388 = v387[stdlib.checkedBigNumberify('./index.rsh:91:24:array', stdlib.UInt_max, '0')];
    const v389 = v387[stdlib.checkedBigNumberify('./index.rsh:91:24:array', stdlib.UInt_max, '1')];
    const v390 = stdlib.mul(v388, v251);
    ;
    const v395 = stdlib.mul(v389, v251);
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v279, v278), {
      at: './index.rsh:99:28:application',
      fs: ['at ./index.rsh:98:11:application call to [unknown function] (defined at: ./index.rsh:98:33:function exp)'],
      msg: 'seeOutcome',
      who: 'Francis'
      });
    
    return;
    }
  
  
  
  };
export async function Weddy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Weddy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Weddy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v251, v252, v253], secs: v255, time: v254, didSend: v33, from: v250 } = txn1;
  ;
  const v264 = stdlib.add(v254, v253);
  stdlib.protect(ctc1, await interact.acceptWager(v251), {
    at: './index.rsh:56:29:application',
    fs: ['at ./index.rsh:55:15:application call to [unknown function] (defined at: ./index.rsh:55:19:function exp)'],
    msg: 'acceptWager',
    who: 'Weddy'
    });
  const v268 = stdlib.protect(ctc0, await interact.getRandomNum(), {
    at: './index.rsh:57:60:application',
    fs: ['at ./index.rsh:55:15:application call to [unknown function] (defined at: ./index.rsh:55:19:function exp)'],
    msg: 'getRandomNum',
    who: 'Weddy'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v250, v251, v252, v253, v264, v268],
    evt_cnt: 1,
    funcNum: 1,
    lct: v254,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v251, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v270], secs: v272, time: v271, didSend: v44, from: v269 } = txn2;
      
      const v274 = stdlib.add(v251, v251);
      sim_r.txns.push({
        amt: v251,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v275 = stdlib.mul(v252, stdlib.checkedBigNumberify('./index.rsh:61:34:decimal', stdlib.UInt_max, '2'));
      const v276 = stdlib.mul(v270, stdlib.checkedBigNumberify('./index.rsh:61:50:decimal', stdlib.UInt_max, '2'));
      const v277 = stdlib.add(v275, v276);
      const v278 = stdlib.div(v277, stdlib.checkedBigNumberify('./index.rsh:61:53:decimal', stdlib.UInt_max, '4'));
      const v279 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v280 = v271;
      const v287 = v274;
      
      if (await (async () => {
        const v295 = stdlib.eq(v279, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v295;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v381 = stdlib.eq(v279, stdlib.checkedBigNumberify('./index.rsh:92:18:decimal', stdlib.UInt_max, '0'));
        const v382 = stdlib.eq(v279, stdlib.checkedBigNumberify('./index.rsh:93:18:decimal', stdlib.UInt_max, '2'));
        const v383 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v384 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v385 = v382 ? v383 : v384;
        const v386 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v387 = v381 ? v386 : v385;
        const v388 = v387[stdlib.checkedBigNumberify('./index.rsh:91:24:array', stdlib.UInt_max, '0')];
        const v389 = v387[stdlib.checkedBigNumberify('./index.rsh:91:24:array', stdlib.UInt_max, '1')];
        const v390 = stdlib.mul(v388, v251);
        sim_r.txns.push({
          kind: 'from',
          to: v250,
          tok: undefined /* Nothing */
          });
        const v395 = stdlib.mul(v389, v251);
        sim_r.txns.push({
          kind: 'from',
          to: v269,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v264],
    tys: [ctc4, ctc0, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v250, v251, v252, v253, v264],
      evt_cnt: 0,
      funcNum: 2,
      lct: v254,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v408, time: v407, didSend: v211, from: v406 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v250,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v408, time: v407, didSend: v211, from: v406 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:42:33:application',
      fs: ['at ./index.rsh:41:13:application call to [unknown function] (defined at: ./index.rsh:41:35:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:59:89:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Weddy'
      });
    
    return;
    
    }
  else {
    const {data: [v270], secs: v272, time: v271, didSend: v44, from: v269 } = txn2;
    const v274 = stdlib.add(v251, v251);
    ;
    const v275 = stdlib.mul(v252, stdlib.checkedBigNumberify('./index.rsh:61:34:decimal', stdlib.UInt_max, '2'));
    const v276 = stdlib.mul(v270, stdlib.checkedBigNumberify('./index.rsh:61:50:decimal', stdlib.UInt_max, '2'));
    const v277 = stdlib.add(v275, v276);
    const v278 = stdlib.div(v277, stdlib.checkedBigNumberify('./index.rsh:61:53:decimal', stdlib.UInt_max, '4'));
    let v279 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v280 = v271;
    let v287 = v274;
    
    while (await (async () => {
      const v295 = stdlib.eq(v279, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v295;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v303], secs: v305, time: v304, didSend: v74, from: v302 } = txn3;
      ;
      const v306 = stdlib.addressEq(v250, v302);
      stdlib.assert(v306, {
        at: './index.rsh:73:17:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Weddy'
        });
      const v313 = stdlib.add(v304, v253);
      const v317 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:78:60:application',
        fs: ['at ./index.rsh:77:19:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)'],
        msg: 'getGuess',
        who: 'Weddy'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v250, v251, v253, v269, v278, v287, v303, v313, v317],
        evt_cnt: 1,
        funcNum: 5,
        lct: v304,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:80:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v319], secs: v321, time: v320, didSend: v84, from: v318 } = txn4;
          
          ;
          const v329 = stdlib.add(v320, v253);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v313],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v250, v251, v253, v269, v278, v287, v303, v313],
          evt_cnt: 0,
          funcNum: 6,
          lct: v304,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v365, time: v364, didSend: v155, from: v363 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v250,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v365, time: v364, didSend: v155, from: v363 } = txn5;
        ;
        const v366 = stdlib.addressEq(v250, v363);
        const v367 = stdlib.addressEq(v269, v363);
        const v368 = v366 ? true : v367;
        stdlib.assert(v368, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:80:81:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Weddy'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:42:33:application',
          fs: ['at ./index.rsh:41:13:application call to [unknown function] (defined at: ./index.rsh:41:35:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:80:81:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Weddy'
          });
        
        return;
        
        }
      else {
        const {data: [v319], secs: v321, time: v320, didSend: v84, from: v318 } = txn4;
        ;
        const v322 = stdlib.addressEq(v269, v318);
        stdlib.assert(v322, {
          at: './index.rsh:80:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Weddy'
          });
        const v329 = stdlib.add(v320, v253);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 7,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v329],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v250, v251, v253, v269, v278, v287, v303, v319, v329],
            evt_cnt: 0,
            funcNum: 8,
            lct: v320,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v347, time: v346, didSend: v121, from: v345 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v269,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v347, time: v346, didSend: v121, from: v345 } = txn6;
          ;
          const v348 = stdlib.addressEq(v250, v345);
          const v349 = stdlib.addressEq(v269, v345);
          const v350 = v348 ? true : v349;
          stdlib.assert(v350, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:86:100:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Weddy'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:42:33:application',
            fs: ['at ./index.rsh:41:13:application call to [unknown function] (defined at: ./index.rsh:41:35:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:86:100:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Weddy'
            });
          
          return;
          
          }
        else {
          const {data: [v334, v335], secs: v337, time: v336, didSend: v94, from: v333 } = txn5;
          ;
          const v338 = stdlib.addressEq(v250, v333);
          stdlib.assert(v338, {
            at: './index.rsh:86:19:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Weddy'
            });
          const v339 = stdlib.digest(ctc3, [v334, v335]);
          const v340 = stdlib.digestEq(v303, v339);
          stdlib.assert(v340, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:87:26:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Weddy'
            });
          let v341;
          const v342 = stdlib.eq(v335, v278);
          if (v342) {
            v341 = stdlib.checkedBigNumberify('./index.rsh:7:16:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v343 = stdlib.eq(v319, v278);
            if (v343) {
              v341 = stdlib.checkedBigNumberify('./index.rsh:11:12:decimal', stdlib.UInt_max, '2');
              }
            else {
              v341 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
              }
            }
          const cv279 = v341;
          const cv280 = v336;
          const cv287 = v287;
          
          v279 = cv279;
          v280 = cv280;
          v287 = cv287;
          
          continue;}
        
        }
      
      
      
      }
    const v381 = stdlib.eq(v279, stdlib.checkedBigNumberify('./index.rsh:92:18:decimal', stdlib.UInt_max, '0'));
    const v382 = stdlib.eq(v279, stdlib.checkedBigNumberify('./index.rsh:93:18:decimal', stdlib.UInt_max, '2'));
    const v383 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v384 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
    const v385 = v382 ? v383 : v384;
    const v386 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v387 = v381 ? v386 : v385;
    const v388 = v387[stdlib.checkedBigNumberify('./index.rsh:91:24:array', stdlib.UInt_max, '0')];
    const v389 = v387[stdlib.checkedBigNumberify('./index.rsh:91:24:array', stdlib.UInt_max, '1')];
    const v390 = stdlib.mul(v388, v251);
    ;
    const v395 = stdlib.mul(v389, v251);
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v279, v278), {
      at: './index.rsh:99:28:application',
      fs: ['at ./index.rsh:98:11:application call to [unknown function] (defined at: ./index.rsh:98:33:function exp)'],
      msg: 'seeOutcome',
      who: 'Weddy'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAOAAEIAlggBSgGUIABiAEEOCYDAQABAQAiNQAxGEEE0ypkSSJbNQEkWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBgxAAfxJgQcMQAD5SSQMQABVJBJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABBf82y6wMgY0AyELWw9ENANXACAxABI0/zEAEhFEsSKyATQDIQRbsggjshA0/7IHs0ID80gkNAESRDQESSISTDQCEhFEKGQpZFBJNQNJVwAgNf8hCVs1/kk1BUkiWzX9JFs1/IAEgmt7djT9FlA0/BZQsDIGNAMhC1sMRDT/MQASRDQDV2AgNP0WNPwWUAESRDT8NP4SQQAGIjX7QgAUNAMhCls0/hJBAAYlNftCAAMjNfs0/zQDIQVbNAMhB1s0A1cwIDT+NPsyBjQDIQRbQgKnSSEIDEAAVEghCDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABGG0rAywMgY0AyEKWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDIQRbsggjshA0/7IHs0IC+kghCDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/IQVbNf4hB1s1/VcwIDX8IQlbNfshBFs1+ldgIDX5STUFFzX4gASBqprPNPgWULAyBjQDIQpbDEQ0/DEAEkQyBjT9CDX3NP80/hZQNP0WUDT8UDT7FlA0+hZQNPlQNPgWUDT3FlAoSwFXAH9nKUsBV38RZ0gkNQEyBjUCQgJ1SSUMQADRSSEMDEAAikghBjQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKVwAgNf8hBVs1/iEHWzX9VzAgNfwhCVs1+yEEWzX6STUFNfmABDiwIy00+VCwNP8xABJEMgY0/Qg1+DT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5UDT4FlAoSwFXAH9nKUsBV38JZ0ghCDUBMgY1AkIB3iUSRCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhDVsPRLEisgE0AyEFW7III7IQNANXACCyB7NCAYJJIwxAAGFIIzQBEkQ0BEkiEkw0AhIRRChkSTUDIQVbNf9JNQUXNf6ABNUVGRQ0/hZQsDIGNAMhDVsMRDT/iAGwNANXACA0/zQDgTBbMQA0AyEHWyULNP4lCwghDAojMgY0/0kIQgBtSIGgjQaIAYEiNAESRDQESSISTDQCEhFESTUFSUkiWzX/JFs1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsDT/iAFHMgY0/Qg1/DEANP8WUDT+FlA0/RZQNPwWUChLAVcAQGdIIzUBMgY1AkIAyjX/Nf41/TX8Nfs1+jX5Nfg0/SMSQQAoNPg0+RZQNPoWUDT7UDT8FlA0/xZQKEsBVwBgZ0ghBjUBMgY1AkIAi4AQAAAAAAAAAAEAAAAAAAAAAYAQAAAAAAAAAAIAAAAAAAAAADT9JRJNgBAAAAAAAAAAAAAAAAAAAAACNP0iEk0197EisgE09yJbNPkLsggjshA0+LIHs7EisgE09yRbNPkLsggjshA0+7IHs0IAADEZIQYSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 144,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v251",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v252",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v253",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v251",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v252",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v253",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v270",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v303",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v319",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v334",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v335",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v270",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v303",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v319",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v334",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v335",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001c2d38038062001c2d83398101604081905262000026916200026c565b600080805543600355604080516020808201835292815281513381528451818501528484015180518285015293840151606082015292909101516080830152907fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69060a00160405180910390a1602082015151620000a8903414600762000165565b602082015160400151620000bd904362000303565b81526040805160a08082018352600060208084018281528486018381526060808701858152608080890187815233808b528d8801805151885280518901518752518c015184528c518252600198899055439098558a51808801989098529451878b0152925191860191909152519084015251828401528451808303909301835260c0909101909352805191926200015b92600292909101906200018f565b5050505062000367565b816200018b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200019d906200032a565b90600052602060002090601f016020900481019282620001c157600085556200020c565b82601f10620001dc57805160ff19168380011785556200020c565b828001600101855582156200020c579182015b828111156200020c578251825591602001919060010190620001ef565b506200021a9291506200021e565b5090565b5b808211156200021a57600081556001016200021f565b604051606081016001600160401b03811182821017156200026657634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200028057600080fd5b604080519081016001600160401b0381118282101715620002b157634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002cb57600080fd5b620002d562000235565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600082198211156200032557634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200033f57607f821691505b602082108114156200036157634e487b7160e01b600052602260045260246000fd5b50919050565b6118b680620003776000396000f3fe60806040526004361061008f5760003560e01c8063873779a111610056578063873779a11461010a578063a209ad4e1461011d578063ab53f2c614610130578063c798003714610153578063e533a29d1461016657005b80631e93b0f114610098578063422eb85c146100bc578063552d7b8e146100cf5780637eea518c146100e257806383230757146100f557005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca36600461142e565b610179565b6100966100dd366004611458565b6103df565b6100966100f0366004611458565b61069b565b34801561010157600080fd5b506001546100a9565b610096610118366004611458565b610819565b61009661012b366004611458565b6109eb565b34801561013c57600080fd5b50610145610c4d565b6040516100b392919061147b565b610096610161366004611458565b610cea565b610096610174366004611458565b610e81565b610189600860005414602161101d565b6101a38135158061019c57506001548235145b602261101d565b6000808055600280546101b5906114d8565b80601f01602080910402602001604051908101604052809291908181526020018280546101e1906114d8565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b50505050508060200190518101906102469190611561565b905061025e6040518060200160405280600081525090565b6102708261010001514310602361101d565b604080513381528435602080830191909152850135818301529084013560608201527f443eedfa7cb93bcf21ba813a200d6756eee22aa1d3e6f8f9e753ebc0faaa84aa9060800160405180910390a16102cb3415601e61101d565b81516102e3906001600160a01b03163314601f61101d565b6040805161032f9161030991602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360c0015114602061101d565b6080820151604084013514156103485760008152610366565b81608001518260e0015114156103615760028152610366565b600181525b61036e611274565b825181516001600160a01b0391821690526020808501518351820152604080860151845182015260608087015185519416930192909252608080860151845190910152835181840180519190915280514392019190915260a08501519051909101526103d981611042565b50505050565b6103ef600660005414601661101d565b6104098135158061040257506001548235145b601761101d565b60008080556002805461041b906114d8565b80601f0160208091040260200160405190810160405280929190818152602001828054610447906114d8565b80156104945780601f1061046957610100808354040283529160200191610494565b820191906000526020600020905b81548152906001019060200180831161047757829003601f168201915b50505050508060200190518101906104ac91906115ea565b90506104c46040518060200160405280600081525090565b6104d58260e001514310601861101d565b7f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d33384604051610506929190611696565b60405180910390a161051a3415601461101d565b6060820151610535906001600160a01b03163314601561101d565b604082015161054490436116d3565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e0840152835161010084015260086000554360015590516106709183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b604051602081830303815290604052600290805190602001906106949291906112d4565b5050505050565b6106ab600160005414600d61101d565b6106c5813515806106be57506001548235145b600e61101d565b6000808055600280546106d7906114d8565b80601f0160208091040260200160405190810160405280929190818152602001828054610703906114d8565b80156107505780601f1061072557610100808354040283529160200191610750565b820191906000526020600020905b81548152906001019060200180831161073357829003601f168201915b505050505080602001905181019061076891906116eb565b905061077c8160800151431015600f61101d565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516107ad92919061176e565b60405180910390a16107c13415600c61101d565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156107fe573d6000803e3d6000fd5b506000808055600181905561081590600290611358565b5050565b610829600160005414600961101d565b6108438135158061083c57506001548235145b600a61101d565b600080805560028054610855906114d8565b80601f0160208091040260200160405190810160405280929190818152602001828054610881906114d8565b80156108ce5780601f106108a3576101008083540402835291602001916108ce565b820191906000526020600020905b8154815290600101906020018083116108b157829003601f168201915b50505050508060200190518101906108e691906116eb565b90506108f981608001514310600b61101d565b7f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225338360405161092a929190611696565b60405180910390a161094381602001513414600861101d565b61094b611274565b815181516001600160a01b039091169052602080830151825182015260608084015183516040015282513391015260049061098b906002908601356117ab565b6002846040015161099c91906117ab565b6109a691906116d3565b6109b091906117ca565b81516080015260208082018051600190525143908201528201516109d490806116d3565b6020820151604001526109e681611042565b505050565b6109fb600560005414601261101d565b610a1581351580610a0e57506001548235145b601361101d565b600080805560028054610a27906114d8565b80601f0160208091040260200160405190810160405280929190818152602001828054610a53906114d8565b8015610aa05780601f10610a7557610100808354040283529160200191610aa0565b820191906000526020600020905b815481529060010190602001808311610a8357829003601f168201915b5050505050806020019051810190610ab891906117ec565b9050610ad06040518060200160405280600081525090565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03384604051610b01929190611696565b60405180910390a1610b153415601061101d565b8151610b2d906001600160a01b03163314601161101d565b6040820151610b3c90436116d3565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c0840152835160e084015260066000554360015590516106709183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b600060606000546002808054610c62906114d8565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8e906114d8565b8015610cdb5780601f10610cb057610100808354040283529160200191610cdb565b820191906000526020600020905b815481529060010190602001808311610cbe57829003601f168201915b50505050509050915091509091565b610cfa600660005414601b61101d565b610d1481351580610d0d57506001548235145b601c61101d565b600080805560028054610d26906114d8565b80601f0160208091040260200160405190810160405280929190818152602001828054610d52906114d8565b8015610d9f5780601f10610d7457610100808354040283529160200191610d9f565b820191906000526020600020905b815481529060010190602001808311610d8257829003601f168201915b5050505050806020019051810190610db791906115ea565b9050610dcb8160e00151431015601d61101d565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3383604051610dfc92919061176e565b60405180910390a1610e103415601961101d565b8051610e44906001600160a01b03163314610e3a5760608201516001600160a01b03163314610e3d565b60015b601a61101d565b805160a08201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156107fe573d6000803e3d6000fd5b610e91600860005414602661101d565b610eab81351580610ea457506001548235145b602761101d565b600080805560028054610ebd906114d8565b80601f0160208091040260200160405190810160405280929190818152602001828054610ee9906114d8565b8015610f365780601f10610f0b57610100808354040283529160200191610f36565b820191906000526020600020905b815481529060010190602001808311610f1957829003601f168201915b5050505050806020019051810190610f4e9190611561565b9050610f63816101000151431015602861101d565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb607763383604051610f9492919061176e565b60405180910390a1610fa83415602461101d565b8051610fdc906001600160a01b03163314610fd25760608201516001600160a01b03163314610fd5565b60015b602561101d565b80606001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f193505050501580156107fe573d6000803e3d6000fd5b816108155760405163100960cb60e01b81526004810182905260240160405180910390fd5b61104a611395565b60208201515160011415611163576110a36040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8251516001600160a01b0390811680835284516020908101518185019081528651604090810151818701908152885160609081015187168189019081528a51608090810151818b01908152878d015186015160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951694830194909452925191810191909152905160c082015260e001604051602081830303815290604052600290805190602001906103d99291906112d4565b805160029081905281516000602091820181905281840180516001908190529051830152604084018051919091525181019190915282015151156111bf576020820151516002146111b85780602001516111c5565b80516111c5565b80604001515b606082018190528251805160209091015191516001600160a01b03909116916108fc916111f291906117ab565b6040518115909202916000818181858888f1935050505015801561121a573d6000803e3d6000fd5b508160000151606001516001600160a01b03166108fc83600001516020015183606001516020015161124c91906117ab565b6040518115909202916000818181858888f193505050501580156107fe573d6000803e3d6000fd5b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c082019290925290819081526020016112cf60405180606001604052806000815260200160008152602001600081525090565b905290565b8280546112e0906114d8565b90600052602060002090601f0160209004810192826113025760008555611348565b82601f1061131b57805160ff1916838001178555611348565b82800160010185558215611348579182015b8281111561134857825182559160200191906001019061132d565b50611354929150611419565b5090565b508054611364906114d8565b6000825580601f10611374575050565b601f0160209004906000526020600020908101906113929190611419565b50565b6040805160c0810190915260006080820181815260a0830191909152819081526020016113d5604051806040016040528060008152602001600081525090565b81526020016113f7604051806040016040528060008152602001600081525090565b81526020016112cf604051806040016040528060008152602001600081525090565b5b80821115611354576000815560010161141a565b60006060828403121561144057600080fd5b50919050565b60006040828403121561144057600080fd5b60006040828403121561146a57600080fd5b6114748383611446565b9392505050565b82815260006020604081840152835180604085015260005b818110156114af57858101830151858201606001528201611493565b818111156114c1576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806114ec57607f821691505b6020821081141561144057634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff8111828210171561153f57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461155c57600080fd5b919050565b6000610120828403121561157457600080fd5b61157c61150d565b61158583611545565b815260208301516020820152604083015160408201526115a760608401611545565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b60006101008083850312156115fe57600080fd5b6040519081019067ffffffffffffffff8211818310171561162f57634e487b7160e01b600052604160045260246000fd5b8160405261163c84611545565b8152602084015160208201526040840151604082015261165e60608501611545565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b038316815260608101611474602083018480358252602090810135910152565b634e487b7160e01b600052601160045260246000fd5b600082198211156116e6576116e66116bd565b500190565b600060a082840312156116fd57600080fd5b60405160a0810181811067ffffffffffffffff8211171561172e57634e487b7160e01b600052604160045260246000fd5b60405261173a83611545565b8152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461179c57600080fd5b80604085015250509392505050565b60008160001904831182151516156117c5576117c56116bd565b500290565b6000826117e757634e487b7160e01b600052601260045260246000fd5b500490565b600060c082840312156117fe57600080fd5b60405160c0810181811067ffffffffffffffff8211171561182f57634e487b7160e01b600052604160045260246000fd5b60405261183b83611545565b8152602083015160208201526040830151604082015261185d60608401611545565b60608201526080830151608082015260a083015160a0820152809150509291505056fea26469706673582212209e1d369bdc40cd3d044084b37f948d60dcf6f635fd17ae16ebd43e6e7470aeeb64736f6c634300080c0033`,
  BytecodeLen: 7213,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:53:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:59:89:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:97:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:67:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:74:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:80:81:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:81:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:86:100:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Francis": Francis,
  "Weddy": Weddy
  };
export const _APIs = {
  };
